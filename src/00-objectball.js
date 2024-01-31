function gameObject() {
    return {
    home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 27,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 30,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 1
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            'Brendan Haywood': {
                number: 33,
                shoe: 20,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
}
}

function numPointsScored(playerName) {
    const obj = gameObject();
    for (let team in obj) {
        
        for (let player in obj[team].players) {
            
            if (player === playerName) return obj[team].players[player].points;
        }
    }
}
function shoeSize(playerName) {
    const obj = gameObject();
    for (let team in obj) {
        
        for (let player in obj[team].players) {
            
            if (player === playerName) return obj[team].players[player].shoe;
        }
    }
}
function teamColors(name) {
    const obj = gameObject();
    for (let team in obj) {
            if (obj[team].teamName === name) return obj[team].colors;
    }
}
function playerNumbers(name) {
    const obj = gameObject();
    for (let team in obj) {
            if (obj[team].teamName === name) {
                const result = [];
                for (let player in obj[team].players) {
                    result.push(obj[team].players[player].number);
                }
                return result;
            }
    }
}

function playerStats(name) {
    const obj = gameObject();
    for (let team in obj) {
        for (let player in obj[team].players) {
            if (player === name) {
                return obj[team].players[name];
            }
        }
    }   
}

function bigShoeRebounds() {
    const obj = gameObject()
    const biggestShoe = {player: '', size: 0, rebounds: 0};
    for (let team in obj) {
        for (let player in obj[team].players) {
            if (obj[team].players[player].shoe > biggestShoe.size) {
                biggestShoe.size = obj[team].players[player].shoe;
                biggestShoe.player = player;
                biggestShoe.rebounds = obj[team].players[player].rebounds;
            }
        }
    }
    console.log(biggestShoe);
    return biggestShoe.rebounds;
}
function mostPointsScored() {
    const obj = gameObject()
    const mostPoints = {player: '', points: 0};
    for (let team in obj) {
        for (let player in obj[team].players) {
            if (obj[team].players[player].points > mostPoints.points) {
                mostPoints.points = obj[team].players[player].points;
                mostPoints.player = player;
            }
        }
    }
    console.log(mostPoints);
    return mostPoints.player;
}

function winningTeam() {
    const obj = gameObject()
    totalPoints = {}
    for (let team in obj) {
        totalPoints[obj[team].teamName] = 0;
        for (let player in obj[team].players) {
            totalPoints[obj[team].teamName] += obj[team].players[player].points;
        }
    }
    console.log(totalPoints);
    let highestScore = 0;
    let bestTeam = ''
    for (let team in totalPoints) {
        if (totalPoints[team] > highestScore) {
            bestTeam = team;
            highestScore = totalPoints[team];
        }
    }
    return bestTeam;
}

function playerWithLongestName() {
    const obj = gameObject();
    const longNames = {};
    for (let team in obj) {
        for (let player in obj[team].players) {
                longNames[player] = player.length
        }
    }
    console.log(longNames);
    let longestLength = 0;
    let longestName = ''; 
    for (let player in longNames) {
        if (longNames[player] > longestLength) {
            longestLength = longNames[player];
            longestName = player;
        }
    }
    return longestName;
}
