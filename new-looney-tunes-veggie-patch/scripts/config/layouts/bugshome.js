export default {
    music: "SO-intro-alt",
    gravity: 1.0,
    bounds: {
        left: 0,
        right: 1368,
        bottom: 0,
        top: 772
    },
    cameraPosition: [0, 0, 100],
    cameraScale: [1/ 1.611, 1/ 1.611, 1],
    groundEndY: 150,//210,
    actors: [
        {
            cls: "Background-BugsHome-1",
            position: [0, 0, 0] 
        },
        {
            cls: "BugsBunnyIntro",
            position: [895, 299.5, 2],
            flipX: true
        },
        {
            cls: "Squeaks",
            position: [417, 190, 2]
        },
        {
            cls: "WaterCan",
            position: [1157, 186, 2]
        },
        {
            cls: "OB-Pot-Orange",
            position: [637, 210, 2],
            isDraggable: false,
            data: {
                plantType: "CA",
                plantStep: 1
            }
        },
        {
            cls: "WaterCan",
            position: [293, 224, 2],
            HSV: [0.5, 0.1, -0.2],
            flipX: true
        }
    ]
}
