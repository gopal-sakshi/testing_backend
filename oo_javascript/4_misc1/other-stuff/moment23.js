var moment = require('moment');
var _ = require('lodash');
const UTCOFFSET = 330;

const currentDate = moment(new Date()).utcOffset(UTCOFFSET).toString();  
const today = 'Tue';
console.log('currDate, today ===> ', currentDate, today);

let input23 = {
    workingDays: [
        "mon",
        "tue"
    ],
    workingHours: {
        "endMin": 0,
        "endSec": 0,
        "endHour": 20,
        "endTime": "20:00",
        "startMin": 16,
        "startSec": 0,
        "timezone": {
            "abbr": "IST",
            "name": "Asia/Kolkata (+05:30)",
            "group": "Asia",
            "nameValue": "Asia/Kolkata",
            "timeValue": "+05:30",
            "utcOffset": 330
        },
        "startHour": 10,
        "startTime": "08:00"
    }
}
function validateTimings() {
    var agentAvailable;
    if (input23.workingDays.indexOf(today.toLowerCase()) >= 0) {
        var startHrs = _.get(input23, "workingHours.startHour");
        var startMins = _.get(input23, "workingHours.startMin");
        var startSecs =_.get(input23, "workingHours.startSec") || 0;
        var endHrs = _.get(input23,"workingHours.endHour");
        var endMins = _.get(input23,"workingHours.endMin");
        var endSecs =_.get(input23,"workingHours.endSec") || 0;
        var startUtcTime = moment().utcOffset(UTCOFFSET).startOf('day').add(startHrs, 'h').add(startMins, 'm').add(startSecs, 's');
        console.log('startHrs, startMins, startSecs ===> ', startHrs, startMins, startSecs);
        var endUtcTime = moment().utcOffset(UTCOFFSET).startOf('day').add(endHrs, 'h').add(endMins, 'm').add(endSecs, 's');
        agentAvailable = moment().utcOffset(UTCOFFSET).isBetween(startUtcTime, endUtcTime);
        return agentAvailable;
    }
}
var resp22 = validateTimings();
console.log('resp22 ======> ', resp22);