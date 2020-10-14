export default class ErrorConsole {
    constructor({elementId = elementId, alertOnError = alertOnError} = {elementId : null, alertOnError: false}){
        this.register();
        this.errors = [];

        this.alertOnError = alertOnError;

        if(elementId){
            this.consoleElement = document.getElementById(elementId);

            // Assign style to element
            this.consoleElement.style.display = "none";
            this.consoleElement.style.position = "absolute";
            this.consoleElement.style.width = "100%";
            this.consoleElement.style.background = "rgba(0,0,0,0.8)";
            this.consoleElement.style.color = "#FFFFFF";
            this.consoleElement.style.fontFamily = "monospace";
            this.consoleElement.style.maxHeight = "256px";
            this.consoleElement.style.overflowY = "scroll";


            if(!this.consoleElement) console.warn(`ElementID '${elementId}' not found while trying to register Error Console`);
        }
    }

    register(){
        window.onerror = this.handleError.bind(this);
    }

    // Global Error Handling
    handleError(msg, url, line, col, error){
        if(!url && !line && !col) return; // Ignore false positives on iOS Firefox

        // console.error(msg, url, line, col, error);
        this.errors.push({msg: msg, url: url, line: line, col: col, error: error});
        
        if(this.alertOnError) alert(msg + "\n\n" + error);

        this.updateConsoleElement();
    }

    // Handles promises
    handleRejection(event){
        console.log(arguments);
        this.handleError.bind(this)('Unhandled rejection', '', '', '', event.reason);
    }

    hideConsole(){
        this.consoleElement.display = "none";
    }

    showConsole(){
        this.consoleElement.display = "block";
        this.updateConsoleElement();
    }

    updateConsoleElement(){
        if(!this.consoleElement) return;

        this.consoleElement.innerHTML = '';

        if(this.errors.length) this.consoleElement.style.display = "";

        for(let error of this.errors){
            this.consoleElement.innerHTML += `${error.msg} <br/>
                                            &nbsp;&nbsp;&nbsp; in ${error.url} <br/>
                                            &nbsp;&nbsp;&nbsp; at line ${error.line}, column ${error.col} </br>`;
        }
    }
}