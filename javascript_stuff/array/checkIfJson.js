function isJson23(object44) {
    try {
        JSON.parse(object44);
    } catch(e) {
        return false;
    }
    return true;
}

var str56 = [
    { name: "ronaldo", club: "Man u"},
    { name: "benzema", club: "RM"},
    { name: "Ramos", club: "PSG"},
    { name: "Pique", club: "Barca"},
    { name: "Joa Felix", club: "Atleti"},
]

var str57 = [
    { "name": "ronaldo", "club": "Man u"},
    { "name": "benzema", "club": "RM"},
    { "name": "Ramos", "club": "PSG"},
    { "name": "Pique", "club": "Barca"},
    { "name": "Joa Felix", "club": "Atleti"},
]

console.log(isJson23(str56));
console.log(isJson23(str57));

/*

JSON string
--------->         '{"name":"John", "age":30, "car":null}'

JSON Object literal
------->            {"name":"John", "age":30, "car":null}


A) inside a JSON string, we have JSON object literal
b) JSON object literal
    surrounded by curly braces {}
    contains key/value pairs... which are separated by a colon.
    Each key/value pair is separated by a comma
C) JSON object literal              NOT EQUAL TO            JSON object
    JSON cannot be an object. JSON is a string format.
    (or) it is called JSON, only if its in string format
    when its converted to javascript variable ----> it becomes a javascript object

A) Create a JavaScript object by parsing a JSON string
    myJSON = '{"name":"John", "age":30, "car":null}'
    myJSObject = JSON.parse(myJSON)


    // https://www.w3schools.com/js/js_json_stringify.asp

    
*/