var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.particles = {
        laser_hit: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 0.5,
                "end": 0.001,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#3fbd14",
                "end": "#3fbd14"
            },
            "speed": {
                "start": 1000,
                "end": 0,
                "minimumSpeedMultiplier": 1.02
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 200,
                "max": 340
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 20
            },
            "lifetime": {
                "min": 0.1,
                "max": 0.2
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 50,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        },
        mist: {
            "alpha": {
                "start": 0.09,
                "end": 0
            },
            "scale": {
                "start": 2,
                "end": 1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#a8084f",
                "end": "#851f85"
            },
            "speed": {
                "start": 100,
                "end": 50,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 250,
                "max": 290
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 2,
                "max": 4
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": -1,
            "maxParticles": 100,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -400,
                "y": 0,
                "w": 800,
                "h": 0
            }
        },
        snot: {
            "alpha": {
                "start": 1,
                "end": 1
            },
            "scale": {
                "start": 0.25,
                "end": 0.125,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 250,
                "end": 100,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 1000
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 720,
                "max": 1440
            },
            "lifetime": {
                "min": 3,
                "max": 3
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.008,
            "maxParticles": 100,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        },
        snot_launch: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 0.2,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 50,
                "end": 0,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 1000
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 180,
                "max": 360
            },
            "lifetime": {
                "min": 0.5,
                "max": 0.5
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.003,
            "maxParticles": 100,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        },
        volcano: {
            "alpha": {
                "start": 1,
                "end": 0.22
            },
            "scale": {
                "start": 0.3,
                "end": 0.1,
                "minimumScaleMultiplier": 3
            },
            "color": {
                "start": "#ffff00",
                "end": "#ff0000"
            },
            "speed": {
                "start": 100,
                "end": 20
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "startRotation": {
                "min": 260,
                "max": 280
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 50
            },
            "lifetime": {
                "min": 1.5,
                "max": 5
            },
            "blendMode": "screen",
            "frequency": 0.03,
            "emitterLifetime": -1,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -400,
                "y": 0,
                "w": 800,
                "h": 0
            }
        },
        soulhitspark: {
            "alpha": {
                "start": 0.8,
                "end": 0.51
            },
            "scale": {
                "start": 0.6,
                "end": 0.2,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 500,
                "end": 100,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.4
            },
            "blendMode": "normal",
            "frequency": 0.1,
            "emitterLifetime": 0.21,
            "maxParticles": 1000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "burst",
            "particlesPerWave": 8,
            "particleSpacing": 45,
            "angleStart": 0
        },
        splash: {
            "alpha": {
                "start": 1,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 1,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 400,
                "end": 10,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 1000
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 255,
                "max": 285
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 1.1,
                "max": 1.1
            },
            "blendMode": "normal",
            "frequency": 0.01,
            "emitterLifetime": 0.25,
            "maxParticles": 30,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "rect",
            "spawnRect": {
                "x": -16,
                "y": 0,
                "w": 32,
                "h": 0
            }
        },
        spectralbubble: {
            "alpha": {
                "start": 0.9,
                "end": 0.9
            },
            "scale": {
                "start": 1,
                "end": 0.001,
                "minimumScaleMultiplier": 0.2
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 80,
                "end": 0,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 265,
                "max": 275
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 50,
                "max": 50
            },
            "lifetime": {
                "min": 0.5,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.029,
            "emitterLifetime": 0.03,
            "maxParticles": 1000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 10
            }
        },
        spectralfire: {
            "alpha": {
                "start": 1,
                "end": 0.8
            },
            "scale": {
                "start": 1,
                "end": 0.01,
                "minimumScaleMultiplier": 0.2
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 100,
                "end": 10,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 265,
                "max": 275
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 50,
                "max": 50
            },
            "lifetime": {
                "min": 0.5,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.009,
            "emitterLifetime": 0.01,
            "maxParticles": 1000,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 2
            }
        },
        rocks: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 0.5,
                "end": 0.2,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 200,
                "end": 100,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 1000
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": -120,
                "max": -60
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 45,
                "max": 90
            },
            "lifetime": {
                "min": 1,
                "max": 2
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": 0.01,
            "maxParticles": 5,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 20,
                "h": 0
            }
        },
        dust: {
            "alpha": {
                "start": 1,
                "end": 0.1
            },
            "scale": {
                "start": 0.7,
                "end": 1.2,
                "minimumScaleMultiplier": 0.66
            },
            "color": {
                "start": "#7F8084",
                "end": "#656B79"
            },
            "speed": {
                "start": 50,
                "end": 0,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": -200
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": -180,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 13,
                "max": 200
            },
            "lifetime": {
                "min": 0.2,
                "max": 0.4
            },
            "blendMode": "normal",
            "frequency": 0.09,
            "emitterLifetime": 0.1,
            "maxParticles": 25,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -17.5,
                "y": 0,
                "w": 35,
                "h": 0
            }
        },
        dust_nigthosphere: {
            "alpha": {
                "start": 1,
                "end": 0.1
            },
            "scale": {
                "start": 0.7,
                "end": 1.2,
                "minimumScaleMultiplier": 0.66
            },
            "color": {
                "start": "#661818",
                "end": "#ac1717"
            },
            "speed": {
                "start": 50,
                "end": 0,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": -200
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": -180,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 13,
                "max": 200
            },
            "lifetime": {
                "min": 0.2,
                "max": 0.4
            },
            "blendMode": "normal",
            "frequency": 0.09,
            "emitterLifetime": 0.1,
            "maxParticles": 25,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -17.5,
                "y": 0,
                "w": 35,
                "h": 0
            }
        },
        warpin: {
            "alpha": {
                "start": 1,
                "end": 0.85
            },
            "scale": {
                "start": 0.5,
                "end": 0.2,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#9cff78",
                "end": "#00bd26"
            },
            "speed": {
                "start": -500,
                "end": -500,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.1,
                "max": 0.1
            },
            "blendMode": "normal",
            "frequency": 0.0001,
            "emitterLifetime": 0.1,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 100,
                "minR": 50
            }
        },
        warpout: {
            "alpha": {
                "start": 1,
                "end": 0.85
            },
            "scale": {
                "start": 0.5,
                "end": 0.2,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#9cff78",
                "end": "#00bd26"
            },
            "speed": {
                "start": 250,
                "end": 250,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.1,
                "max": 0.3
            },
            "blendMode": "normal",
            "frequency": 0.0001,
            "emitterLifetime": 0.01,
            "maxParticles": 50,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 50,
                "minR": 0
            }
        },
        hitspark: {
            "alpha": {
                "start": 1,
                "end": 0.7
            },
            "scale": {
                "start": 0.8,
                "end": 0.4,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 400,
                "end": 50,
                "minimumSpeedMultiplier": 0.6
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.1,
                "max": 0.3
            },
            "blendMode": "normal",
            "frequency": 0.009,
            "emitterLifetime": 0.1,
            "maxParticles": 35,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 15,
                "y": 0,
                "r": 5
            }
        },
        playerhitspark: {
            "alpha": {
                "start": 1,
                "end": 0.7
            },
            "scale": {
                "start": 0.8,
                "end": 0.4,
                "minimumScaleMultiplier": 0.05
            },
            "color": {
                "start": "#9cff78",
                "end": "#00bd26"
            },
            "speed": {
                "start": 400,
                "end": 50,
                "minimumSpeedMultiplier": 0.6
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.1,
                "max": 0.3
            },
            "blendMode": "normal",
            "frequency": 0.009,
            "emitterLifetime": 0.1,
            "maxParticles": 35,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 15,
                "y": 0,
                "r": 5
            }
        },
        sparks: {
            "alpha": {
                "start": 1,
                "end": 0.85
            },
            "scale": {
                "start": 0.3,
                "end": 0.15,
                "minimumScaleMultiplier": 2
            },
            "color": {
                "start": "#ffff00",
                "end": "#ffff00"
            },
            "speed": {
                "start": 1500,
                "end": 250,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.02,
                "max": 0.1
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.05,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "circle",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 0
            }
        },
        explosion: {
            "alpha": {
                "start": 0.86,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.5,
                "minimumScaleMultiplier": 2
            },
            "color": {
                "start": "#ff00FF",
                "end": "#f6ff00"
            },
            "speed": {
                "start": 900,
                "end": 300,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 200
            },
            "lifetime": {
                "min": 0.1,
                "max": 0.3
            },
            "blendMode": "normal",
            "ease": [
                {
                    "s": 0,
                    "cp": 0.329,
                    "e": 0.548
                },
                {
                    "s": 0.548,
                    "cp": 0.767,
                    "e": 0.876
                },
                {
                    "s": 0.876,
                    "cp": 0.985,
                    "e": 1
                }],
            "frequency": 0.001,
            "emitterLifetime": 0.1,
            "maxParticles": 100,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        },
        smoke: {
            "alpha": {
                "start": 0.1,
                "end": 0
            },
            "scale": {
                "start": 0.5,
                "end": 3,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#85888d",
                "end": "#100f0c"
            },
            "speed": {
                "start": 0,
                "end": 0,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": -50
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 500,
                "max": 0
            },
            "lifetime": {
                "min": 0.5,
                "max": 1
            },
            "blendMode": "normal",
            "frequency": 0.01,
            "emitterLifetime": 0.75,
            "maxParticles": 100,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        },
        fireflight: {
            "alpha": {
                "start": 0.85,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 1,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffff00"
            },
            "speed": {
                "start": 10,
                "end": 10
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.5,
                "max": 0.6
            },
            "blendMode": "add",
            "frequency": 0.2,
            "emitterLifetime": -1,
            "maxParticles": 1000,
            "pos": {
                "x": -640,
                "y": -512
            },
            "addAtBack": true,
            "spawnType": "rect",
            "spawnRect": {
                "x": 0,
                "y": 0,
                "w": 1280,
                "h": 1024
            }
        },
        rain: {
            "alpha": {
                "start": 0.25,
                "end": 0.25
            },
            "scale": {
                "start": 0.75,
                "end": 1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 800,
                "end": 1000
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "startRotation": {
                "min": 100,
                "max": 105
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.85,
                "max": 1.15
            },
            "blendMode": "normal",
            "frequency": 0.002,
            "emitterLifetime": -1,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -600,
                "y": -400,
                "w": 1600,
                "h": 1
            }
        },
        raindrop: {
            "alpha": {
                "start": 0.75,
                "end": 0
            },
            "scale": {
                "start": 0,
                "end": 1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ffffff",
                "end": "#ffffff"
            },
            "speed": {
                "start": 0,
                "end": 0
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.85,
                "max": 1.15
            },
            "blendMode": "normal",
            "frequency": 0.003,
            "emitterLifetime": -1,
            "maxParticles": 300,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": true,
            "spawnType": "rect",
            "spawnRect": {
                "x": -600,
                "y": 250,
                "w": 1600,
                "h": 300
            }
        }
    };
}());
