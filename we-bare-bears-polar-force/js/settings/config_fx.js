var game = game || {};
game.config = game.config || {};

(function () {
    'use strict';
    game.config.particles = {
        sparks: {
            "alpha": {
                "start": 1,
                "end": 0.85
            },
            "scale": {
                "start": 0.3,
                "end": 0.15,
                "minimumScaleMultiplier": 5
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
