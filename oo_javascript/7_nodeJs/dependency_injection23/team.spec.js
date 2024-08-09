// team.spec.js
var Team = require('./team');
var User = require('./user');

describe('Team', function () {
    it('#getTeam', function* () {
        var users = [{ id: 1, id: 2 }];

        this.sandbox.stub(User, 'find', function () {
            return Promise.resolve(users);
        });

        var team = yield team.getTeam();

        expect(team).to.eql(users);
    });
});