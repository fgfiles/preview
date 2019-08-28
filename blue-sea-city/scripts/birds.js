var birdList = [];
var birdCoordList = [];
var birdFlyList = [];
var birdSpriteList = ["birds","birds1","birds2"];
var birdCollisionGroup;
var birdSpeedX = 40;
var birdSpeedY = -60;
var birdMaxHeight = 800;
var bpoy = 28;
var birdFlyCount = 0;
var totalBirds = 0;

function createBirds(game){
    birdList = [];
    birdCoordList = [];
    birdFlyList = [];
    birdSpriteList = ["birds","birds1","birds2"];
    birdCollisionGroup;
    birdSpeedX = 40;
    birdSpeedY = -60;
    birdMaxHeight = 800;
    bpoy = 28;
    birdFlyCount = 0;
    totalBirds = 0;
    //[X coord (based on player), Y coord (based on player),
    //  initial orientation, custom fly direction?, speedX multiplier, custom fly direction]
    birdCoordList = [
            [483,910,-1,false,1],
            [670,897,-1,false,1],
            [650,897,1,false,1],
            [780,833,1,true,-1,1],
            [816,833,1,false,2/3],
            [925,785,1,true,-1,1],
            [1375,572,1,false,1],
            [1443,555,-1,true,-1,1],
            [1513,568,-1,false,1],
            [1540,567,1,false,1],
            [1665,829,1,true,1/2,-1],
            [979,689,-1,false,1],
            [1054,667,-1,false,2/3],
            [1250,689,1,true,-1/2,1],
            [1795,805,-1,false,1/4],
            [1895,773,-1,false,1/3],
            [2013,769,1,true,-1/3,1],
            [1940,758,1,false,1/5],
            [2185,673,-1,false,1],
            [2221,650,1,true,1,-1],
            [2401,611,-1,false,1],
            [2356,664,1,false,1],
            [2439,1026,1,true,2/3,-1],
            [2610,1026,-1,false,1/3],
            [2807,513,1,true,-1,1],
            [2920,500,-1,false,1],
            [3071,479,1,true,-1/2,1],
            [3143,401,-1,false,1],
            [3204,545,-1,true,1,-1],
            [3282,545,1,false,1/2],
            [3378,545,1,false,1],
            [3516,625,-1,true,-1/5,1],
            [3630,625,-1,true,2/3,-1],
            [3604,545,1,false,1],
            [3737,545,-1,false,1],
            [3518,945,1,true,-1/5,1],
            [3963,625,1,true,1/2,-1],
            [4122,545,1,false,1],
            [4162,545,-1,false,1],
            [4315,689,1,true,-2/3,1],
            [4375,430,-1,false,1],
            [4475,577,-1,true,-1/3,1],
            [4345,513,1,false,1],
            [4595,577,1,false,1],
            [4712,577,-1,true,-1,1],
            [4755,513,1,false,1],
            [4990,561,-1,true,-1,1],
            [4792,470,-1,true,-1/3,1],
            [4967,471,1,true,-1,1],
            [5000,525,-1,false,1],
            [5033,561,-1,false,1],
            [5123,561,1,false,1],
            [5203,641,-1,false,2/3],
            [5828,417,1,true,-1,1],
            [5250,600,1,true,-1,1],
            [5332,1026,-1,true,1/2,-1],
            [5378,978,1,true,1/3,-1],
            [5419,978,-1,true,-1/3,1],
            [5611,865,1,true,-1,1],
            [5650,753,1,true,-1/2,1],
            [5756,529,1,true,-1,1],
            [5852,273,-1,false,1,1]
        ];
    
    totalBirds = birdCoordList.length;
    
    for(var i = 0; i < birdCoordList.length; i++){
        var randoNumbo = game.rnd.integerInRange(0,2);
        birdList.push(game.add.sprite(birdCoordList[i][0],birdCoordList[i][1]+bpoy,birdSpriteList[randoNumbo]));
    }
    
    //birdList.push(game.add.sprite(670,897 + bpoy,'birds'));
    //birdList.push(game.add.sprite(650,897 + bpoy,'birds'));
    //birdList.push(game.add)
    
    
    for(var i = 0; i < birdList.length; i++){
        birdList[i].animations.add('idle',[0,1,2,3,4,5],5,true);
        birdList[i].animations.add('fly',[6,7,8,9,10,11],5,true);
        birdList[i].animations.play('idle');
        game.physics.p2.enable(birdList[i],false);
        birdList[i].body.clearShapes();
        birdList[i].body.addRectangle(60,50,0,0).sensor = true;
        //birdList[i].body.debug = true;
        birdList[i].body.static = true;
    }
    for(var i = 0; i < birdCoordList.length; i++){
        birdList[i].scale.setTo(birdCoordList[i][2],1);
        //birdList[i].destroy();
    }
    
    birdCollisionGroup = game.physics.p2.createCollisionGroup();
}

function setUpBirdColliders(){
    for(var i = 0; i < birdList.length; i++){
        birdList[i].body.setCollisionGroup(birdCollisionGroup);
        birdList[i].body.collides([birdCollisionGroup, playerCollisionGroup]);
    }
}

function updateBirds(game){
    /*
    for(var i = 0; i < birdList.length; i++){
        makeBirdAlive(birdList[i]);
    }
    */
    for(var i = 0; i < birdFlyList.length; i++){
        //makeBirdAlive(birdFlyList[i]);
        if(birdFlyList[i].position.distance(playerSprite) > 300){
            //birdList.splice(birdList.indexOf(birdFlyList[i]),1);
            birdFlyList[i].destroy();
            birdFlyList.splice(i,1);
        }
        /*
        if(birdFlyList[i].body.y < birdMaxHeight){
            birdList.splice(birdList.indexOf(birdFlyList[i]),1);
            birdFlyList[i].destroy();
            birdFlyList.splice(i,1);
        }
        */
    }
}

function makeBirdAlive(bird){
    if(bird.inCamera){
        if(!bird.alive){
            bird.revive();
        }
    }
    else{
        if(bird.alive){
            bird.kill();
        }
    }
}

function makeBirdFly(index){
    birdFlyCount++;
    birdList[index].animations.play('fly');
    playSound('birdFlap');
    if(!birdCoordList[index][3]){
        if(playerSprite.body.x < birdList[index].body.x){
            birdList[index].body.velocity.x = birdSpeedX * birdCoordList[index][4];
            birdList[index].scale.setTo(-1,1);
        }
        else{
            birdList[index].body.velocity.x = -birdSpeedX * birdCoordList[index][4];
            birdList[index].scale.setTo(1,1);
        }
    }
    else{
        birdList[index].body.velocity.x = birdSpeedX * birdCoordList[index][4];
        birdList[index].scale.setTo(birdCoordList[index][5],1);
    }
    birdList[index].body.velocity.y = birdSpeedY;
    birdFlyList.push(birdList[index]);
    birdList.splice(index,1);
    birdCoordList.splice(index,1);
}