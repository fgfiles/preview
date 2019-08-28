/*
 * 
 * 
 * Events
 * onLoaded() - file is loaded and parsed
 * onNode(node,phraseIndex,nodePhrases) - we reached a node. 
 * onChoice([nodes]) - we reached a choice and those nodes will display
 * onConversationEnd()
 * 
 * Methods
 * load() - load + parse: what to do with importers? use chatmapper as default
 * parse() - CM as default
 * start() - starts from root
 * finish() - force finish
 * nextNode() - goes to next
 * 
 */





DialogSystemCM = function () {

    var self = this;
    self.project = null;
    self.path = "";
    
    self.currentNode = null;
    self.lastNode = null;
    self.lastNodeType = "P";
    self.currentConversation = null;
    self.currentLocation = null;

    var nodePhrases;
    var nodePhraseIndex = 0;

    var scheduledNode;

    var varTable = new Object();

    //Chatmapper scripts and conditions support
    var Actor = new Object();
    var Item = new Object();
    var Location = new Object();
    var Variable = new Object();
    var Dialog = [];
    var StatusTable = [];
    var RelationshipTable = [];
    var ConversationDialogTable = [];

    self.actors = Actor;
    self.locations = Location;
    self.variables = Variable;


    this.conversantCharacter = null;

    



    this.onLoaded = null;
    this.onNode = null;
    this.onChoice = null;
    this.onConversationEnd = null;


    self.activeLocalizationField = "Dialogue Text";
    self.localized = false;
    
    self.navigationHistory = [];

    this.loadAndPlay = function (url) {
        LoadJSON(url, true);
    }
    this.load = function (url) {
        LoadJSON(url, false);
    }

    function ReadAssets(project) {

        //console.log(project);
        var i = 0;
        var listitem;

        //Actors
        for (i = 0; i < project.Assets.Actors.length; i++) {
            listitem = project.Assets.Actors[i];
            var key = listitem.Fields.Name.replace(/ /g, "_");
            Actor[key] = listitem.Fields;
            Actor[key].ID = listitem.ID;
            Actor[key].currentPicture = 0;
            
            //Parse pictures
            var re = /([^\[||"||\]||;]+)/g
            var pictures = [];
            var capture=null;
            while (capture = re.exec(Actor[key].Pictures)) {
                pictures.push(capture[0]);
            }
            Actor[key].pictures = pictures;
        }

        //Items
        for (i = 0; i < project.Assets.Items.length; i++) {
            listitem = project.Assets.Items[i];
            Item[listitem.Fields.Name.replace(/ /g, "_")] = listitem.Fields;
        }

        //Locations
        for (i = 0; i < project.Assets.Locations.length; i++) {
            listitem = project.Assets.Locations[i];
            var key = listitem.Fields.Name.replace(/ /g, "_");
            Location[key] = listitem.Fields;
            Location[key].ID = listitem.ID;
        }


        //Variables
        for (i = 0; i < project.Assets.UserVariables.length; i++) {
            listitem = project.Assets.UserVariables[i];
            var val = listitem.Fields["Initial Value"];

            //Parse the string to its correct value.
            //Bool?
            if (val.toLowerCase().trim() == "false")
                val = "False";
            else if (val.toLowerCase().trim() == "true")
                val = "True";
            else {
                //Int?
                var intval = parseInt(val);

                if (!isNaN(intval)) {
                    if (val.trim().length != intval.toString().trim().length) //Not bool, not int, just leave it as string
                        val = listitem.Fields["Initial Value"];
                    else
                        val = intval;
                }

            }

            Variable[listitem.Fields.Name] = val;
        }

        //Conversations
        ConversationDialogTable = [];
        for (i = 0; i < project.Assets.Conversations.length; i++) {
            ConversationDialogTable[i] = null;
            
            //Parse Each node
            
            var conversation = project.Assets.Conversations[i];
            for (var j=0; j< conversation.DialogNodes.length; j++) {
            
                //Audio Files
                if (conversation.DialogNodes[j].Fields.hasOwnProperty("Audio Files")) {
                    var re = /[;\[]([^;\[\]]*)/g
                    var audio_files = [];
                    var capture=null;
                    var str = conversation.DialogNodes[j].Fields["Audio Files"];
                    
                    str = str.replace(/\\/g,"/");
                    
                    while (capture = re.exec(str)) {
                        
                        audio_files.push( capture[1]);
                    }
                    conversation.DialogNodes[j].audio_files = audio_files;                
                
                }
                
            }
        }
        
        
        //Localized
        self.localized = !(project.Language==null);
        
        self.defaultLanguage = project.Language;

    }

        function SetConversation(n) {
        //console.log(self.project.Assets.Conversations);
        //console.log(n);
        self.currentConversation = self.project.Assets.Conversations[n];
        //console.log(self.currentConversation);
        self.currentNode = self.currentConversation.DialogNodes[0];


        //Set Location
        self.trySetLocation(self.currentConversation.Fields["Location"]);

        if (ConversationDialogTable[n] == null) {

            //Read conversation status
            Dialog = [];
            var node;
            for (var i = 0; i < self.currentConversation.DialogNodes.length; i++) {
                node = self.currentConversation.DialogNodes[i];
                Dialog[node.ID] = new Object();


                //Fix Condition operators
                node.ConditionsString = node.ConditionsString.replace(/~=/gm, "!=");
                node.ConditionsString = node.ConditionsString.replace(/AND |and /gm, "&& ");
                node.ConditionsString = node.ConditionsString.replace(/OR |or /gm, "|| ");
                node.ConditionsString = node.ConditionsString.replace(/ AND| and/gm, " &&");
                node.ConditionsString = node.ConditionsString.replace(/ OR| or/gm, " ||");
                node.ConditionsString = node.ConditionsString.replace(/=[ ]*['"]*true['"]*/igm, "= \"True\"");
                node.ConditionsString = node.ConditionsString.replace(/=[ ]*['"]*false['"]*/igm, "= \"False\"");
                node.ConditionsString = node.ConditionsString.replace(/(\r\n|\n|\r)/gm, " ");
                node.ConditionsString = node.ConditionsString.replace(/[ "'\[\]\(\)][lL][tT][eE][ "'\[\]\(\)]|[ "'\[\]\(\)][lL][eE][ "'\[\]\(\)]/gm, "<=");
                node.ConditionsString = node.ConditionsString.replace(/[ "'\[\]\(\)][gG][tT][eE][ "'\[\]\(\)]|[ "'\[\]\(\)][gG][eE][ "'\[\]\(\)]/gm, ">=");
                node.ConditionsString = node.ConditionsString.replace(/[ "'\[\]\(\)][lL][tT][ "'\[\]\(\)]/gm, "<");
                node.ConditionsString = node.ConditionsString.replace(/[ "'\[\]\(\)][gG][tT][ "'\[\]\(\)]/gm, ">");

                //Fix Script operators
                node.UserScript = node.UserScript.replace(/(\r\n|\n|\r)/gm, "; ");
                node.UserScript = node.UserScript.replace(/=[ ]*['"]*false['"]*/igm, "= \"False\"");
                node.UserScript = node.UserScript.replace(/=[ ]*['"]*true['"]*/igm, "= \"True\"");


            }
            ConversationDialogTable[n] = Dialog;

        } else {

            Dialog = ConversationDialogTable[n];

        }
    }

    this.CheckConversationAvailable = function(n) {
        
        SetConversation(n);
        return CheckCondition(self.currentConversation.DialogNodes[0]);
        
    }
    
    this.CheckConversationAutoplay = function (n) {
        
        SetConversation(n);
        return self.currentConversation.Fields.Autoplay==="True";
        
    }


    function PlayNextNode() {

        if (self.project == null) {
            console.log("DialogSystem: Project not loaded");
            return;
        }

        if (self.currentConversation == null) {
            SetConversation(0);
        }

        self.PlayNode(self.currentNode);

    }



    this.PlayNode = function (node) {
        console.log("*** PlayNode ID " + node.ID.toString());
        //console.log(node);
        
        //Store last node if it has text
        //if (node.Fields[self.activeLocalizationField] == "" || node.Fields[self.activeLocalizationField] == null) {
           // self.lastNode = self.currentNode;
        //}
        self.currentNode = node;

        //Execute Script
        if (node.UserScript != null && node.UserScript != "")
            ExecuteScript(node.UserScript);

        //Set Displayed=1
        Dialog[node.ID].SimStatus = "WasDisplayed";

        /*if (node.IsRoot==true) {
         //console.log("Root node");
         
         PlayGroupNode(node,true);
         
         return;
         }*/
        /*
         if (node.IsGroup==true) {
         //console.log("Group node");	
         //console.log(node);
         PlayGroupNode(node,false);
         //console.log("Group node finished");				
         return;
         }
         */



        //Set Location
        /*var actor = self.GetActor(node.Fields["Actor"]) || {};
        var aid = actor.Fields["Location"] || null;
        self.trySetLocation(aid);*/ //Actors doesn't set locations, nodes do
        self.trySetLocation(node.Fields["Location"]);


        //****Text node
        //console.log("Text Node");

        //No text, go to the next one
        if (node.Fields[self.activeLocalizationField] == "" || node.Fields[self.activeLocalizationField] == null) {
            self.NodeFinished(node);
            return;
        }

        self.addToNavigationHistory(node,  "P");
        
        //console.log(varTable);
        nodePhrases = node.Fields[self.activeLocalizationField].split('|');
        //console.log(nodePhrases);
        nodePhraseIndex = 0;
        //console.log(node.Fields[self.activeLocalizationField]);
        //lastPhraseTime = Date.now();
        //self.lastNodeType = "P";
        PlayPhrase();


        //self.NodeFinished(node,0);
    }


    this.DialogFinished = function () {
        //console.log("DIALOG FINISHED");		

        nodePhrasePlaying = false;
        scheduledNode = null;

        //if (self.onConversationEnd !== null)
        //    self.onConversationEnd();
        self.Dispatch("onConversationEnd");

    }

    this.NodeFinished = function (node) {

        

        if (node.OutgoingLinks.length == 0) {
            self.DialogFinished();
            return;
        }


        //Jump to another dialog?
        if (node.OutgoingLinks.length == 1 && node.OutgoingLinks[0].DestinationConvoID != self.currentConversation.ID) {

            SetConversation(self.GetConversationIndex(node.OutgoingLinks[0].DestinationConvoID));
            scheduledNode = self.GetNode(node.OutgoingLinks[0].DestinationDialogID);
            return;
        }

        //If there is only 1 available node and it doesn't meet the condition, then skip to the next one so we don't get lost
        if (node.OutgoingLinks.length == 1) {
            var nextnode = self.GetNode(node.OutgoingLinks[0].DestinationDialogID);
            if (!CheckCondition(nextnode)) {
                self.NodeFinished(nextnode);
                return;
            }
        }

        var choices = ReadGroupRecursive(node, null);
        //console.log("ChoiceS:");
        //console.log(choices);
        
        if (choices.length == 1 && !node.IsGroup && choices[0].Fields["Menu Text"].indexOf("[f]")===-1) {
            //if (choices.length==1 && (choices[0].Fields["Menu Text"]=="" || choices[0].Fields["Menu Text"]==null)) {
            //console.log(choices[0]);
            //Just 1 choice, and no menu text -> we go to that node directly.
            scheduledNode = choices[0]; //self.GetNode(node.OutgoingLinks[selectedOutgoingLink].DestinationDialogID);	

        } else if (choices.length==0) {
            
            self.DialogFinished();
            
        }else {

            //Multiple choices
            GenerateAndShowChoices(choices);
            

        }


    }

    self.PlayLastNode = function() {
        
        var n = self.navigationHistory.shift();
        n = self.navigationHistory.shift();
        var ns = n.split('-');
        var nodeid = ns[0];
        var n = self.GetNode(nodeid);
        var nodetype = ns[1];
        console.log("Back to " + nodeid + "("+nodetype)
        if (nodetype=="F") {
            self.NodeFinished(self.GetNode(nodeid));
        }else if (nodetype=="P"){
            self.PlayNode(self.GetNode(nodeid));
        }else if (nodetype=="C"){
            SetConversation(nodeid);
            self.PlayLastNode();
        }
        //console.log("Last Node is " + self.lastNode.ID);// + " (" + self.lastNodeType + ")")
        //self.NodeFinished(self.lastNode);
        /*if (self.lastNodeType == "C") {
            self.NodeFinished(self.lastNode);
        }else{
            self.PlayNode(self.lastNode);
        }*/
        
        
    }


    self.GetNode = function (id) {

        for (var i = 0; i < self.currentConversation.DialogNodes.length; i++) {
            if (self.currentConversation.DialogNodes[i].ID.toString() == id.toString())
                return self.currentConversation.DialogNodes[i];
        }

        return null;

    }

    function GetChildNodes(node) {

        var childs = [];

        for (var i = 0; i < node.OutgoingLinks.length; i++) {
            childs.push(self.GetNode(node.OutgoingLinks[i].DestinationDialogID));
        }

        return childs;
    }

    function OrderNodesByPriority(childs) {

        var priorities = [[], [], [], [], [], []];

        for (var i = 0; i < childs.length; i++) {

            if (childs[i].ConditionPriority > 0)
                priorities[childs[i].ConditionPriority].push(childs[i]);

        }
        return priorities;
    }

    function CheckCondition(node) {

        if (node.ConditionsString == null || node.ConditionsString == "")
            return true;
        //Dialog[3].SimStatus = "WasDisplayed" ;
        //console.log(Dialog);
        //console.log(node);
        //console.log(node.ConditionsString);
        //console.log(eval(node.ConditionsString));
        //console.log(Location);		


        return eval(node.ConditionsString);



    }






    function ParseConditions(nodes) {

        var nodesout = [];

        for (var i = 0; i < nodes.length; i++) {
            if (CheckCondition(nodes[i])) {
                //console.log (nodes[i].ConditionsString + " - TRUE");
                nodesout.push(nodes[i]);
            } else {
                //console.log (nodes[i].ConditionsString + " - FALSE");	
            }

        }
        return nodesout;
    }


    function ExecuteScript(script) {

        //console.log(script);

        eval(script);

    }


    function PlayGroupNode(node, autoselect) {

        var childs = SelectGroupNodeChilds(node);
        //console.log(childs);

        if (autoselect) {
            if (childs.length == 1) {
                scheduledNode = childs[0];
            } else if (childs.length > 1) {
                console.log("DialogSystem: PlayGroupNode: ERROR: Group Node with Autoplay has more than 1 options available");
                return;
            } else {
                console.log("DialogSystem: Error: Group Node with Autoplay " + node.ID.toString() + " has no active childs. Finishing");
            }
        } else {
            if (childs.length > 0) {

                //Launch popup for the user to choose one of them
                var choices = ReadGroupRecursive(node, null);
                //console.log("Choices:");
                //console.log(choices);

                GenerateAndShowChoices(choices);


                //} else if (childs.length==1) {

                //	scheduledNode = childs[0];

            } else {

                console.log("DialogSystem: Error: Group Node " + node.ID.toString() + " has no active childs. Finishing");
            }
        }

    }

    function ReadGroupRecursive(node, list) {
        if (list == null)
            list = [];

        var childs = SelectGroupNodeChilds(node);
        var child;
        for (var i = 0; i < childs.length; i++) {
            child = childs[i];
            if (!child.IsGroup) {
                list.push(child);
            } else {
                ReadGroupRecursive(child, list);
            }
        }
        return list;
    }

    function SelectGroupNodeChilds(node) {

        var childs = GetChildNodes(node);
        var priorities = OrderNodesByPriority(childs);

        for (var i = 0; i < priorities.length; i++) {

            //Select only the ones with condition true
            priorities[i] = ParseConditions(priorities[i]);

            if (priorities[i].length > 0) {
                return priorities[i];
            }
        }
        return  [];
    }


    function LoadCallback(_project, autostart) {
        self.project = _project;

        ReadAssets(_project);

        SetConversation(0);

        self.update(); //Get the update up running

        //if (self.onLoaded !== null)
        //    self.onLoaded();
        
        //console.log("loadcallback");
        self.Dispatch("onLoaded");

        if (autostart)
            PlayNextNode();
    }

    function LoadJSON(url, autostart) {

        var re = /(.+\/)/g;
        var res = re.exec(url);
        self.path = res!=null?res[0]:"";
        
        
        var callbackProgress = null;

        var xhr = new XMLHttpRequest();

        var length = 0;

        xhr.onreadystatechange = function () {

            if (xhr.readyState === xhr.DONE) {

                if (xhr.status === 200 || xhr.status === 0) {

                    if (xhr.responseText) {

                        var project = JSON.parse(xhr.responseText);

                        LoadCallback(project, autostart);

                    } else {

                        console.warn("THREE.JSONLoader: [" + url + "] seems to be unreachable or file there is empty");


                        LoadCallback(false);


                    }

                } else {

                    console.error("THREE.JSONLoader: Couldn't load [" + url + "] [" + xhr.status + "]");

                    LoadCallback(false);


                }

            } else if (xhr.readyState === xhr.LOADING) {

                if (callbackProgress) {

                    if (length === 0) {

                        length = xhr.getResponseHeader("Content-Length");

                    }

                    callbackProgress({total: length, loaded: xhr.responseText.length});

                }

            } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {

                //length = xhr.getResponseHeader("Content-Length");

            }

        };


        if ("withCredentials" in xhr) {

            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open("GET", url, true);
            xhr.withCredentials = false; //this.withCredentials;

          } else if (typeof XDomainRequest != "undefined") {

            // Otherwise, check if XDomainRequest.
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            xhr = new XDomainRequest();
            xhr.open("GET", url);

         }
     

        //xhr.open("GET", url, true);
        //xhr.withCredentials = true; //this.withCredentials;
        xhr.send(null);



    }


    function PlayPhrase() {

        if (nodePhraseIndex < nodePhrases.length) {

            var phrase = nodePhrases[nodePhraseIndex];

            //if (self.onNode !== null)
            //    self.onNode(self.currentNode, nodePhraseIndex, nodePhrases);
            
            var params = {
                node: self.currentNode, 
                nodePhraseIndex: nodePhraseIndex, 
                nodePhrases: nodePhrases};
            //console.log(params);
            self.Dispatch("onNode",params);


        } else {
            //Last phrase

            self.NodeFinished(self.currentNode);
        }



    }

    this.NextPhrase = function () {

        nodePhraseIndex++;
        PlayPhrase();

    }



    this.update = function () {

        requestAnimationFrame(self.update);
        if (scheduledNode != null) {
            var ns = scheduledNode;
            scheduledNode = null;
            self.PlayNode(ns);

        }

    }


    function SetVar(name, value) {

        varTable[name] = value;

    }

    function GetVar(name) {
        return varTable[name];
    }
    
    this.GetUserVariable = function(name) {
        return Variable[name];
    }

    this.GetActor = function (ID) {

        //for (var i=0; i<Actor)
        for (var key in Actor) {
            if (Actor.hasOwnProperty(key)) {
                if (Actor[key].ID.toString() == ID) {
                    return Actor[key];
                }
            }
        }
        
    }
    
    this.GetLocation = function (ID) {

        //for (var i=0; i<Actor)
        for (var key in Location) {
            if (Location.hasOwnProperty(key)) {
                if (parseInt(Location[key].ID) == parseInt(ID)) {
                    return Location[key];
                }
            }
        }
        return null;
    }    



    function GenerateAndShowChoices(choices) {
        self.addToNavigationHistory(self.currentNode, "F");
        //if (self.onChoice !== null)
        //    self.onChoice(choices);
        self.Dispatch("onChoice",choices);

    }





    this.PlayConversation = function (n) {

        SetConversation(n);
        PlayNextNode();
    }

    this.GetConversationNumber = function () {
        return self.project.Assets.Conversations.length;
    }

    this.GetConversationIndex = function (id) {
        for (var i = 0; i < self.project.Assets.Conversations.length; i++) {
            if (self.project.Assets.Conversations[i].ID == id)
                return 	i;
        }
        return -1;
    }

    function GetConversation(id) {

        for (var i = 0; i < self.project.Assets.Conversations.length; i++) {

            if (self.project.Assets.Conversations[i].ID == id)
                return 	self.project.Assets.Conversations[i];
        }
        return null;
    }

    function SetStatus(a, b, status) {

        //Look for Existing Status
        for (var i = 0; i < StatusTable.length; i++) {
            if (StatusTable[i][0] == a && StatusTable[i][1] == b) {
                StatusTable[i][2] = status;
                return;
            }

        }

        //Didn't exist
        var s = [a, b, status];
        StatusTable.push(s);

    }



    function GetStatus(a, b) {

        for (var i = 0; i < StatusTable.length; i++) {
            if (StatusTable[i][0] == a && StatusTable[i][1] == b)
                return StatusTable[i][2];

        }
        return "";
    }


    function SetRelationship(a, b, type, value) {

        //Find existing Relationship
        var r;
        for (var i = 0; i < RelationshipTable.length; i++) {
            r = RelationshipTable[i];
            if (r[0] == a && r[1] == b && r[2] == type) {
                RelationshipTable[i][3] = value;
                return;
            }
        }

        //Didn't exist		
        var r = [a, b, type, value];
        RelationshipTable.push(r);

    }

    function GetRelationship(a, b, type) {
        var r;
        for (var i = 0; i < RelationshipTable.length; i++) {
            r = RelationshipTable[i];
            if (r[0] == a && r[1] == b && r[2] == type) {
                return RelationshipTable[i][3];
            }
        }
        return "";
    }

    function IncRelationship(a, b, type, incrementAmount) {

        SetRelationship(a, b, type, GetRelationship(a, b, type) + incrementAmount);
    }

    function DecRelationship(a, b, type, decrementAmount) {
        SetRelationship(a, b, type, GetRelationship(a, b, type) - decrementAmount);
    }


    this.DumpDebug = function () {
        console.log("Actors");
        console.log(Actor);
        console.log("Locations");
        console.log(Location);
        console.log("Status");
        console.log(StatusTable);
        console.log("Relationships");
        console.log(RelationshipTable);
        console.log("Variables");
        console.log(Variable);

    }
    
    
    
    self.AddEventListener = function(name,f) {
        
        if (self[name]===undefined) {
            console.log("Event not found: " + name);
            return;
        }
        
        var n = name + "_callbacks";
        
        if (self[n] === undefined) {
            self[n] = [];
        }
        
        self[n].push(f);
        
    }
    
    self.Dispatch = function(name,params) {

        var n = name + "_callbacks";

        if (self[n] === undefined) {
            //No listeners
        }else{
            for (var i=0; i<self[n].length; i++) {
                console.log("Dispatching " + name);
                self[n][i](params);
            }
        }
        
    }
    
    
    self.trySetLocation = function(id) {
        
        if (id===undefined || id=== null || id == "-1")
            return;
        
        var l = self.GetLocation(id);
        if (l!==null) {
            console.log("DS: Location set: " + l.Name);
            self.currentLocation = l;
        }
    }
    
    self.addToNavigationHistory = function(node,type) {
        
        self.navigationHistory.unshift(node.ID + "-"+ type);
    }
    
    /*
     document.body.onkeydown = function(event){
     event = event || window.event;
     
     var keycode = event.charCode || event.keyCode;
     if(keycode === 48){
     ds.PlayConversation(0);
     }
     if(keycode === 49){
     ds.PlayConversation(1);
     }
     if(keycode === 50){
     ds.PlayConversation(2);
     }
     if(keycode === 51){
     ds.PlayConversation(3);
     }
     
     if (keycode == 52) {
     ds.DumpDebug();	
     }
     
     }
     */


}

