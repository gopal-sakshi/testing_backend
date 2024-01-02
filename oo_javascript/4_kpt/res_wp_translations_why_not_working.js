var _ = require('lodash');

// let res = [
//     { "text": "kaveri", "dest_lg": "te" },
//     { "text": "godavari", "dest_lg": "te" },
//     { "text": "krishna", "dest_lg": "te" },
//     { "text": "kaveri", "dest_lg": "hi" },
//     { "text": "godavari", "dest_lg": "hi" },
//     { "text": "krishna", "dest_lg": "hi" }
// ]
let results = [
    {
        "translatedLanguage": "hi",
        "translatedText": "लड़का",
        "input": "kaveri"
    },
    {
        "translatedLanguage": "hi",
        "translatedText": "गोदावरी",
        "input": "godavari"
    },
    {
        "translatedLanguage": "hi",
        "translatedText": "कृष्णा",
        "input": "krishna"
    },
    {
        "translatedLanguage": "te",
        "translatedText": "వ్యక్తి",
        "input": "kaveri"
    },
    {
        "translatedLanguage": "te",
        "translatedText": "గోదావరి",
        "input": "godavari"
    },
    {
        "translatedLanguage": "te",
        "translatedText": "కృష్ణ",
        "input": "krishna"
    }
]
let qrsToTranslate = [
    {
        "name": "",
        "type": "",
        "integrations": {
            "acl": {
                "id": "kaveri",
                "title": "kaveri",
                "button": "kaveri",
                "isList": true,
                "isEnabled": true,
                "description": "",
                "sectionTitle": "riversList"
            }
        },
        "resultComment": "",
        "isForIntegrations": true
    },
    {
        "name": "",
        "type": "",
        "integrations": {
            "acl": {
                "id": "godavari",
                "title": "godavari",
                "button": "godavari",
                "isList": true,
                "isEnabled": true,
                "description": "",
                "sectionTitle": ""
            }
        },
        "resultComment": "",
        "isForIntegrations": true
    },
    {
        "name": "",
        "type": "",
        "integrations": {
            "acl": {
                "id": "krishna",
                "title": "krishna",
                "button": "godavari",
                "isList": true,
                "isEnabled": true,
                "description": "",
                "sectionTitle": ""
            }
        },
        "resultComment": "",
        "isForIntegrations": true
    }
]
let translatedObj = {};

_.chain(results).groupBy('translatedLanguage').map((ss, item) => {
    translatedObj[item] = {
        name: item,
        translatedQrs: _.map(ss, (elem, index) => {
            _.set(qrsToTranslate[index].integrations.acl, 'id', elem.translatedText);
            _.set(qrsToTranslate[index].integrations.acl, 'title', elem.translatedText);
            return structuredClone(qrsToTranslate[index]);
        })
    }
}).value();
console.log(JSON.stringify(translatedObj));