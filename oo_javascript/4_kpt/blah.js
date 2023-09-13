var _ = require("lodash");

var resp = [
    {
        "id": "ea8e3a13-b31e-4381-9ba0-4abad359f250",
        "name": "Dispose",
        "instanceName": null,
        "schema": {
            "model": [
                {
                    "key": "name",
                    "name": "Input Text",
                    "type": "select",
                    "value": "text",
                    "hideExpression": false,
                    "defaultValueKey": null,
                    "templateOptions": {
                        "type": "selectOne",
                        "label": "Category",
                        "answer": {},
                        "options": [
                            {
                                "label": "General I",
                                "value": "General I"
                            },
                            {
                                "label": "General 2",
                                "value": "General 2"
                            }
                        ],
                        "required": true,
                        "memoryParam": "name",
                        "placeholder": "Category",
                        "isVisibleOnClient": true
                    },
                    "storageObjectKey": "id",
                    "expressionProperties": {
                        "templateOptions.disabled": "false"
                    }
                },
                {
                    "key": "field__2",
                    "name": "field",
                    "type": "input",
                    "value": "input",
                    "hideExpression": false,
                    "templateOptions": {
                        "type": "text",
                        "label": "Comments",
                        "required": false,
                        "placeholder": "Comments",
                        "isVisibleOnClient": true
                    },
                    "expressionProperties": {
                        "templateOptions.disabled": "false"
                    }
                },
                {
                    "key": "field__3",
                    "name": "field",
                    "type": "input",
                    "value": "input",
                    "hideExpression": true,
                    "templateOptions": {
                        "type": "text",
                        "label": "DisposedBy",
                        "required": false,
                        "placeholder": "Disposed By",
                        "isVisibleOnClient": false
                    },
                    "expressionProperties": {
                        "templateOptions.disabled": "false"
                    }
                },
                {
                    "key": "field__4",
                    "name": "field",
                    "type": "input",
                    "value": "input",
                    "hideExpression": true,
                    "templateOptions": {
                        "type": "text",
                        "label": "ConversationId",
                        "required": false,
                        "placeholder": "ConversationId",
                        "isVisibleOnClient": false
                    },
                    "expressionProperties": {
                        "templateOptions.disabled": "false"
                    }
                }
            ],
            "triggers": {
                "enableChangeNotifications": false
            }
        },
        "createdAt": "2023-07-05T07:02:08.634Z",
        "updatedAt": "2023-07-20T10:59:46.652Z",
        "botId": "0dbd9fde-d085-496d-807f-4884839a3a61",
        "scriptVariables": {
            "preRequest": [
                {
                    "name": "serviceRequest",
                    "value": {
                        "method": "post",
                        "url": "",
                        "data": {},
                        "headers": {},
                        "params": {}
                    }
                },
                {
                    "name": "memory",
                    "value": {
                        "new_promt_question": ""
                    }
                },
                {
                    "name": "dataValues",
                    "value": {
                        "name": "",
                        "field__2": "",
                        "field__3": "",
                        "field__4": ""
                    }
                }
            ]
        },
        "dfUrl": "http://10.0.53.216:6213/df/ea8e3a13-b31e-4381-9ba0-4abad359f250?botid=0dbd9fde-d085-496d-807f-4884839a3a61"
    },
    {
        "id": "098aa8c2-e679-4934-b64f-c76596c00f27",
        "name": "User",
        "instanceName": null,
        "schema": {
            "model": [
                {
                    "key": "email",
                    "name": "Email",
                    "type": "input",
                    "value": "email",
                    "templateOptions": {
                        "type": "email",
                        "label": "Email",
                        "required": true,
                        "placeholder": "Enter email",
                        "isVisibleOnClient": true
                    },
                    "isFieldKeyEditable": false
                },
                {
                    "key": "name",
                    "name": "name",
                    "type": "input",
                    "value": "text",
                    "templateOptions": {
                        "type": "text",
                        "label": "name",
                        "placeholder": "name",
                        "isVisibleOnClient": true
                    },
                    "isFieldKeyEditable": false
                },
                {
                    "key": "tel",
                    "name": "Phone number",
                    "type": "input",
                    "value": "tel",
                    "templateOptions": {
                        "type": "tel",
                        "label": "Phone number",
                        "placeholder": "Phone number",
                        "isVisibleOnClient": true
                    }
                }
            ]
        },
        "createdAt": "2023-07-05T07:02:08.415Z",
        "updatedAt": "2023-07-05T07:02:08.415Z",
        "botId": "0dbd9fde-d085-496d-807f-4884839a3a61",
        "scriptVariables": {
            "preRequest": [
                {
                    "name": "serviceRequest",
                    "value": {
                        "method": "post",
                        "url": "",
                        "data": {},
                        "headers": {},
                        "params": {}
                    }
                },
                {
                    "name": "memory",
                    "value": {
                        "new_promt_question": ""
                    }
                },
                {
                    "name": "dataValues",
                    "value": {
                        "name": "",
                        "tel": ""
                    }
                }
            ]
        },
        "dfUrl": "http://10.0.53.216:6213/df/098aa8c2-e679-4934-b64f-c76596c00f27?botid=0dbd9fde-d085-496d-807f-4884839a3a61"
    }
]

var storageObject = _.find(resp, element => element.name == 'Dispose');
var model = _.find(storageObject.schema.model, model =>  model.key == 'name' );
var categoriesList = _.map(model.templateOptions.options, 'label');
// this.categories.setValue(this.categoriesList);
console.log(categoriesList);