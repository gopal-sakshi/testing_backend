function Team(options) {
    this.options = options;
}

Team.prototype.getTeam = function (teamId) {
    return this.options.User.find({ teamId: teamId })
}

function create(options) {
    return new Team(options);
}