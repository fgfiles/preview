var fcl = [];
var ccl = [];
var flowerOffset = 24;
function createMisc(game){
    
    fcl = [];
    ccl = [];
    flowerOffset = 24;

    fcl = [
        [1621,1025,0,1,1],
        [769,1025,2,3,1],
        [1856,803,4,5,1],
        [1810,803,2,3,-1],
        [2531,1025,0,1,-1],
        
        [3374,1026,4,5,1],
        [3412,1026,2,3,-1],
        [3605,1026,2,3,1],
        [3676,1026,0,1,-1],
        [3739,1026,4,5,-1],
        [4192,785,2,3,1],
        [4410,689,4,5,-1],
        [4484,577,0,1,1],
        [4541,577,0,1,-1],
        [4684,577,4,5,-1],
        [4558,865,2,3,-1],
        [4810,753,0,1,1],
        [4780,561,4,5,-1],
        [4935,561,2,3,-1],
        [5049,561,0,1,1],
        [5094,561,2,3,-1],
        [4803,1025,4,5,1],
        [5256,1025,2,3,1],
        [5304,1025,4,5,-1],
        [5418,1025,0,1,1],
        [5469,1025,2,3,-1],
        [5650,1025,4,5,-1],
        [5792,1025,0,1,-1],
        [5742,721,2,3,1],
        [5620,769,4,5,1],
        [5672,865,2,3,-1],
        [6017,561,0,1,1],
        [5915,385,2,3,-1],
        [5845,273,4,5,-1],
        [5985,257,0,1,1],
        [5950,257,2,3,-1]
    ];
    
    var flowerPointer;
    for(var i = 0; i < fcl.length; i++){
        fcl[i][1] += flowerOffset;
        flowerPointer = game.add.sprite(fcl[i][0],fcl[i][1],'flowers');
        flowerPointer.scale.setTo(fcl[i][4],1);
        flowerPointer.animations.add('main',[fcl[i][2],fcl[i][3]],2,true);
        flowerPointer.animations.play('main');
    }
    ccl = [
        [583,1010,1,1],
    
        [1009,794,0,1],
        [1069,1026,1,1],
        [1463,953,2,1],
        [1145,757,2,1],
        [1455,790,1,1],
        [1181,659,0,1],
    
        [1830,1022,0,1],
        [1722,941,2,1],
        [1942,890,1,1],
        [2333,629,0,1],
        [2342,995,2,-1],
        [2321,737,1,-1],
    
        [2972,957,0,-1],
        [3247,859,1,1],
        [2998,874,1,-1],
        [3900,606,2,-1],
        [3860,857,0,-1],
        [4200,1024,1,1],
        [3847,1021,2,-1],
        [4177,872,2,1],
        [4403,884,1,1],
        [4952,543,0,1],
    
        [6022,277,2,-1]
    ];
    
    var catPointer;
    for(var i = 0; i < ccl.length; i++){
        catPointer = game.add.sprite(ccl[i][0],ccl[i][1],'cats');
        catPointer.scale.setTo(1,1);
        if(ccl[i][2] == 0){
            catPointer.animations.add('main',[0,1,2,3,4,5,6,7,8],3,true);
        }
        else if(ccl[i][2] == 1){
            catPointer.animations.add('main',[9,10,11,12,13,14,15,16,17],3,true);
        }
        else{
            catPointer.animations.add('main',[18,19,20,21,22,23,24,25,26],3,true);
        }
        catPointer.scale.x = ccl[i][3];
        catPointer.animations.play('main');
    }
    var waterfallPointer = game.add.sprite(5985,704.5,'waterfall');
    waterfallPointer.animations.add('main',[0,1,2,3,4,5],15,true);
    waterfallPointer.animations.play('main');
    game.add.sprite(5822,705,'flood_lights');
}