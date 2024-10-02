var hash23 = require('./hash_table23');
let data_to_store23 = [
    { "Ronaldo": { "nickname": "CR7", "position": "striker", "others23": { "allClubs23": ["ManU", "Juve", "RMA"] } } },
    { "Benzema": { "nickname": "Benz", "position": "CF", "others23": { "allClubs23": ["Lyon", "RMA"] } } },
    { "Ramos": { "nickname": "SR4", "position": "CB", "others23": { "allClubs23": ["Sevilla", "RMA"] } } }
];

let hashObj = new hash23();
hashObj.set("Ronaldo", data_to_store23[0]["Ronaldo"]);
hashObj.set("Benzema", data_to_store23[1]["Benzema"]);
hashObj.set("Ramos", data_to_store23[2]["Ramos"]);


console.log("get for Ramos ===> ", hashObj.get("Ramos"));
hashObj.print23();