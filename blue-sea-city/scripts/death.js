var timeSinceDeath = 0;
var quoteShown = false;
var quoteText;
var deathLootText;
var quoteList = [
                    "\"For every penguin, there's a bird that can't fly.\" - Slivy Toves",
                    "\"The door on the left is always a bad choice.\" - Charles Spinklebottom",
                    "\"This game was hard to make.\" - Pod Rondleton",
                    "\"Uh, UH... you put me on the spot, I don't know.\" - Nitsua Rewel",
                    "\"The best wisdom is often to look inside one's soul.\" - Fink Lokmon",
                    "\"The toes of the many fit the shoes of the few.\" - Yytsy Fanklebop",
                    "\"Hmmmm. Yes.\" - Soap Yunling",
                    "\"This candy hurts my teeth.\" - Elocin Okimuy",
                    "\"Always tumble dry, on low heat.\" - Barto McFlecher",
                    "\"Always wait 30 minutes after eating before going for a swim.\" - Elan Musky",
                    "\"Never tie your shoe while waiting for the bus.\" - Warran Buffing",
                    "\"Bluh-luh, gurgle, blah-bluh......\" - Blue Sea City",
                    "\"Wshhhhhhhhh.\" - Blue Sea City",
                    "\"There was this really great quote I had, but I forgot.\" - Samsam Wendleton",
                    "\"Am I really an elephant if I like sitting in water?\" - Long Spotneck",
                    "\"Don't forget your lunch.\" - Mom",
                    "\"Roses are gifted best from the heart of a mare.\" - Horse",
                    "\"Watch out for the cups.\" - A Yak",
                    "\"Save the birds.\" - Polly Sparrow",
                    "\"My brethren!\" - The Last Orange Cat",
                    "\"Can't get more wet than drowning.\" - A Wise Philosopher",
                    "\"The end is never the end is never the end is never the end is never the end is never the end is never the end\""
                ];

function createDeath(game){
    timeSinceDeath = 0;
    quoteShown = false;
    quoteList = [
                        "\"For every penguin, there's a bird that can't fly.\" - Slivy Toves",
                        "\"The door on the left is always a bad choice.\" - Charles Spinklebottom",
                        "\"This game was hard to make.\" - Pod Rondleton",
                        "\"Uh, UH... you put me on the spot, I don't know.\" - Nitsua Rewel",
                        "\"The best wisdom is often to look inside one's soul.\" - Fink Lokmon",
                        "\"The toes of the many fit the shoes of the few.\" - Yytsy Fanklebop",
                        "\"Hmmmm. Yes.\" - Soap Yunling",
                        "\"This candy hurts my teeth.\" - Elocin Okimuy",
                        "\"Always tumble dry, on low heat.\" - Barto McFlecher",
                        "\"Always wait 30 minutes after eating before going for a swim.\" - Elan Musky",
                        "\"Never tie your shoe while waiting for the bus.\" - Warran Buffing",
                        "\"Bluh-luh, gurgle, blah-bluh......\" - Blue Sea City",
                        "\"Wshhhhhhhhh.\" - Blue Sea City",
                        "\"There was this really great quote I had, but I forgot.\" - Samsam Wendleton",
                        "\"Am I really an elephant if I like sitting in water?\" - Long Spotneck",
                        "\"Don't forget your lunch.\" - Mom",
                        "\"Roses are gifted best from the heart of a mare.\" - Horse",
                        "\"Watch out for the cups.\" - A Yak",
                        "\"Save the birds.\" - Polly Sparrow",
                        "\"My brethren!\" - The Last Orange Cat",
                        "\"Can't get more wet than drowning.\" - A Wise Philosopher",
                        "\"The end is never the end is never the end is never the end is never the end is never the end is never the end\""
                    ];
}

function updateDeath(game){
    //waveDeathTimer
    timeSinceDeath += timerMan.physicsElapsed;
    if(timeSinceDeath > 1){
        if(!quoteShown){
            quoteText.fixedToCamera = true;
            quoteText.scale.setTo(0.18,0.18);
            quoteText.alpha = 0.1;
            deathLootText.fixedToCamera = true;
            deathLootText.scale.setTo(0.2,0.2);
            game.add.tween(deathLootText).to({alpha: 0.9},1200,"Linear",true);
            game.add.tween(quoteText).to( { alpha: 0.9 }, 2000, "Linear", true);
            quoteShown = true;
        }
        //game.camera.follow(null);
        //console.log("updated death");
    }
    if(inventoryView){
        if(quoteText.scale.x != 0){
            quoteText.scale.x = 0;
            //gameOverText.scale.x = 0;
            //timerText.alpha = 0;
            timerText.scale.x = 0;
            inventoryBackground.alpha = 0.8;
            restartImage.scale.x = 0;
            deathLootText.scale.x = 0;
        }
    }
    else{
        if(quoteText.scale.x == 0){
            quoteText.scale.x = 0.18;
            //gameOverText.scale.x = 0.2;
            //timerText.alpha = 1.0;
            timerText.scale.x = 0.4;
            inventoryBackground.alpha = 0;
            restartImage.scale.x = 1;
            deathLootText.scale.x = 0.2;
        }
    }
    /*
    console.log(waveDeathTimer);
    console.log(waveDeathTimer.seconds);
    */
}

function doSomeDeathStuff(){
    quoteText = game.add.text(endX*(0.04),endY*(0.4),
        quoteList[game.rnd.integerInRange(0,quoteList.length-1)], textStyle);
    quoteText.alpha = 0;
    // gameOverText = game.add.text(endX*(0.1),endY*(0.9),
    // "Press Restart", textStyle);
    //gameOverText.alpha = 0;
    deathLootText = game.add.text(endX*(0.7),endY*(0.9),
    "Loot Collected: " + lootCollected + "/" + totalLoot,textStyle);
    deathLootText.alpha = 0;
    restartImage = game.add.sprite(endX*(0.04),endY*(0.88),'Rrestart');
    restartImage.fixedToCamera = true;
    restartImage.alpha = 0.0;
    //inventoryBackground.alpha = 0;
    //lootCountText.alpha = 0;
    game.add.tween(lootCountText).to({alpha: 0},2000,"Linear",true);
    game.add.tween(inventoryBackground).to({alpha: 0},2000,"Linear",true);
    game.add.tween(timerText).to({alpha: 0.5},2000,"Linear",true);
}