var SS = {
    version: '0.0.12',
    applicationAccessKey: '562c56392d786cbae3497c84d3534511',
    scoreboardAvailable: true,
    scoreboardStatic: "dat/database.json",
    // scoreboardUrl: "http://boomerang-sports.completecontrol.eu/",
    scoreboardUrl: "https://demo.completecontrol.eu/boomerang/service/",
    currentAccessToken: null,
    countryCode: "GB",
    selectedTeam: {id:0},
    currentSelectedTeam: '',
    currentSelectedGame: '',
    isStadium: false,
    teams: [ {
        name: "Looney Tunes",
        medalPosition: -1,
        scoreTotal: 0
    }, {
        name: "New Loony Tunes",
        medalPosition: -1,
        scoreTotal: 0
    }, {
        name: "The Tom and Jerry Show",
        medalPosition: -1,
        scoreTotal: 0
    }, {
        name: "Be Cool Scooby-Doo",
        medalPosition: -1,
        scoreTotal: 0
    }, {
        name: "Bunnicula",
        medalPosition: -1,
        scoreTotal: 0
    }, {
        name: "The Happos Family",
        medalPosition: -1,
        scoreTotal: 0
    },
    {
        name: "Dorothy and the Wizard of Oz",
        medalPosition: -1,
        scoreTotal: 0
    },
    {
        name: "Wacky Races",
        medalPosition: -1,
        scoreTotal: 0
    }
    ],
    games: [{
        name: "Beach Pogo"
    }, {
        name: "Rubber Ring Race"
    },{
        name: "Basket Zorb"
    }, {
        name: "Rocket Racket"
    }, {
        name: "Sky Jump"
    }, {
        name: "Star Striker"
    }, {
        name: "Super Goalie"
    }
    ],
    leaderboard: null,
    lastScoreUpdate: 0,
    setLanguageRegion: function (regionCode) {
        if (!regionCode) { SS.countryCode = 'en-gb'; }
        switch (regionCode.toLowerCase()) {
            case 'ar-sa':
            case 'da-dk':
            case 'es-es':
            case 'es-mx':
            case 'fr-fr':
            case 'hu-hu':
            case 'it-it':
            case 'nl-nl':
            case 'no-no':
            case 'pl-pl':
            case 'pt-br':
            case 'pt-pt':
            case 'ro-ro':
            case 'ru-ru':
            case 'sv-se':
            case 'tr-tr':
                SS.countryCode = regionCode.toLowerCase();
                break;
            default:
                SS.countryCode = 'en-gb';
                break;
        }
        console.log('set code', regionCode)
        SS.regionCode = regionCode;
    },
    setCurrentTeam: function(index) {
        SS.selectedTeam.id = index;
        SS.currentSelectedTeam =  (SS.teams[index] ? SS.teams[index].name : '');
    },
    setCurrentGame: function(index) {
        SS.currentSelectedGame =  (SS.games[index] ? SS.games[index].name : '');
    },
    updateTeamScores: function() {
        var minutesCacheValid = 15;
        // Compare last update time plus 15 min to time now.
        if (new Date(new Date(SS.lastScoreUpdate).getTime() + minutesCacheValid * 60000).getTime() > Date.now()) {
            return;
        }

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
                var jsonResponse = JSON.parse(xmlhttp.responseText);
                jsonResponse.results.sort(function(a, b) {
                    return b.score_total - a.score_total;
                });

                var nextMedal = 0;
                SS.leaderboard = jsonResponse.results;

            } else if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                console.log("Failed to update scoreboard. Status: " + xmlhttp.status);
            }
        };
        if (true === SS.scoreboardAvailable) {
            console.log('live');
            xmlhttp.open("GET", SS.scoreboardUrl + "?action=scoreboard&version=" + SS.version, true);
        } else {
            xmlhttp.open("GET", Game.loader.assetURL + SS.scoreboardStatic, true);
        }
        xmlhttp.send();
        SS.lastScoreUpdate = Date.now();
    },
    getAccessToken: function() {
        if (SS.currentAccessToken != null && new Date(SS.currentAccessToken.expires * 1000).getTime() > Date.now()) {
            return;
        }

        if (true === SS.scoreboardAvailable) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
                    var jsonResponse = JSON.parse(xmlhttp.responseText);
                    SS.currentAccessToken = {
                        token: jsonResponse.results.access_token,
                        expires: jsonResponse.results.expires
                    }
                } else if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    console.log("Failed to update access token. Status: " + xmlhttp.status);
                }
            };
            xmlhttp.open("POST", SS.scoreboardUrl + "?action=token&data_accesskey=" + SS.applicationAccessKey, true);
            xmlhttp.send();
        }
    },
    checkAccessToken: function() {
        // Not needed.
    },
    sendScore: function(score) {
        if (SS.currentAccessToken == null) {
            return;
        }

        if (true === SS.scoreboardAvailable) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
                    var jsonResponse = JSON.parse(xmlhttp.responseText);
                } else if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    console.log("Failed to update scoreboard. Status: " + xmlhttp.status);
                }
            };

            var params = {
                action: "score",
                data_accesskey: SS.applicationAccessKey,
                data_accesstoken: SS.currentAccessToken.token,
                data_team: SS.currentSelectedTeam,
                data_game: SS.currentSelectedGame,
                data_score: score,
                data_country: SS.countryCode
            };

            xmlhttp.open("POST", SS.scoreboardUrl, true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(SS.toQueryString(params));
        }
    },
    toQueryString: function(params) {
        var parts = [];
        for (var i in params) {
            if (params.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
            }
        }
        return parts.join("&");
    }
};
