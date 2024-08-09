var Team = require('./team');

describe('Team', function () {
    it('#getTeam', function* () {
        var users = [{ id: 1, id: 2 }];

        var fakeUser = {
            find: function () {
                return Promise.resolve(users);
            }
        };

        var team = Team.create({
            User: fakeUser
        });

        var team = yield team.getTeam();

        expect(team).to.eql(users);
    });
});