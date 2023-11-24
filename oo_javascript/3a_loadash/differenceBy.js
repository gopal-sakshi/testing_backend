var _ = require('lodash');


var pendingParam = {
    "id":"452457b5-846f-11ee-b6b4-27aa77feff6f",
    "key":"",
    "info":{},
    "name":"subCategory",
    "isList":false,
    "prompts":["Please enter subCategory"],
    "dataType":"@platform.number",
    "isLinked":true,
    "languages":[],
    "testValue":"",
    "conditions":{"jsl":{"and":[]},"rules":[],"condition":"and"},
    "dataTypeId":"",
    "displayKey":"name",
    "hideDelete":false,
    "isOptional":false,
    "quickReplies":[],
    "repliesStyle":"general",
    "variableName":"subCategory",
    "variableType":"",
    "qrFromService":false,
    "storageObject":{"id":"71d93190-d351-49a5-b27c-43b252ecb5b4","fieldKey":"subCategory"},
    "storeInMemory":true,
    "isShowReference":false,
    "qrServiceAction":{},
    "showConditionsUI":true,
    "quickRepliesStyle":{"bold":false,"label":"none","border":1,"height":34,"italic":false,"margin":6,"enabled":false,"fontSize":15,"chipWidth":"variable","textAlign":"center","textColor":"#000000ff","underline":false,"hoverColor":"#4e2a79","borderColor":"#4e2a79","borderRadius":"16","hoverTextColor":"#ffffff","backgroundColor":"#ffffffff","noOFQuickRepliesToShow":5},
    "confirmationPrompt":["Please enter the value"],
    "promptsTranslations":{},
    "showIntegrationQRStyles":false,
    "confirmationPromptTranslations":{}
}

var entityInfo = [];

var pending = _.differenceBy([pendingParam], entityInfo, 'dataType');

console.log(pending);
console.log(_.isEmpty(pending));