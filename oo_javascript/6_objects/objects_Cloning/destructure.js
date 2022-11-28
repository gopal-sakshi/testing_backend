var params = {
    storeType: 'BIZ_STORE',
    range: '30_DAYS',
    offset: 10,
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
const {reportType, offset = 0, limit = 3000, someObject} = {...params};
console.log(reportType);
console.log(offset);
console.log(limit);
console.log(someObject);

// APPROACH II --------> destructure whole object (basically shallow copy)
var copyObject = { ...params };
console.log(copyObject);