var params = {
    storeType: 'BIZ_STORE',
    range: '30_DAYS',    
    limit: 2000,
    appStoreType: 'FARM_STORE',
    appName: 'INPUTS',
    appStoreDomain: 'https://inputs.kalgudi.com',
    someObject: {
        name: 'Kalgudi',
        employees: 50,
        location: ['hyd', 'karnataka']
    }
}

// APPROACH I ---------> destructure & take only some individual properties
const {reportType, offset = 10, limit = 3000, appName:storeName ,someObject} = {...params};
console.log(reportType);                // undefined, coz there is no reportType property in params
console.log(offset);                    // 10, evenThough offset property is not there, we provided a default value
console.log(limit);
console.log(storeName);                 // 'INPUTS', evenThough storeName is property is not there... we assign 'appName of params' to storeName
console.log(someObject);

// APPROACH II --------> destructure whole object (basically shallow copy)
var copyObject = { ...params };
console.log(copyObject);