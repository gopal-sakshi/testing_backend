// no dependency injection
var User = require('./user');

// return list of users belonging to team '23'      let users23 = getTeam(23); 
function getTeam(teamId) {
    return User.find({ teamId: teamId });
}

module.exports.getTeam = getTeam;