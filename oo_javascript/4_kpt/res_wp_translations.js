var _ = require('lodash');

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

let blah = _.chain(results).groupBy('translatedLanguage').map((ss, item) => {
    return { value:item, translations:ss }
}).value();
// console.log(blah);

for (let lang of blah) {
    // console.log(lang);
    translatedObj[lang.value] = {
        name: lang.value,
        translatedQrs: _.map(lang.translations, (item, index) => {
            // console.log(item);
            _.set(qrsToTranslate[index].integrations.acl, 'id', item.translatedText);
            _.set(qrsToTranslate[index].integrations.acl, 'title', item.translatedText);
            return structuredClone(qrsToTranslate[index])
        })
    }
}
console.log(JSON.stringify(translatedObj));