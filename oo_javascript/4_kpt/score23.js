let score_schema = require('./scoreSchema.json');
let mentorData = require('./mentorPayloadScore.json');
var _ = require("lodash")
let scoreResult = 0;
for(let i=0; i<score_schema.length; i++) {
    console.log(Object.keys(score_schema[i])[0])
    // let criteria = Object.keys(score_schema[i])[0];                                     // industryExp
    // let criteriaOption = _.get(mentorData.score, criteria)                              // "3-5"
    // let criteriaScore = Number(_.get(Object.values(score_schema[i])[0], criteriaOption)) || 0        // '2'
    // console.log('option & score ===> ', criteriaOption, criteriaScore)
    // scoreResult = scoreResult + criteriaScore;
}

console.log(scoreResult);