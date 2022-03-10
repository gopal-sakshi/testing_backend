var params = {
    storeType: 'BIZ_STORE',
    range: '30_DAYS',
    offset: 10,
    limit: 2000,
    appStoreType: 'FARM_STORE',
    appName: 'INPUTS',
    appStoreDomain: 'https://inputs.kalgudi.com'
}

const {reportType, offset = 0, limit = 3000} = {...params};
console.log(reportType);
console.log(offset);
console.log(limit);

let canWeRedeclareLetVariables = ``;
console.log(canWeRedeclareLetVariables);
canWeRedeclareLetVariables = `it seems we can`;
console.log(canWeRedeclareLetVariables);