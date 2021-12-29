var str23 = [
    'http://localhost:9800/product/c/Cheruku%20Ra/cid/3wy3/csub/3wyc?varietyId=10go',
    'http://localhost:9800/p/c/attaluru-organics-mango-pickle-avakaya/36g4_36g8',


    'http://localhost:9800/product/preview/:productName/:productId',
    'http://localhost:9800/product/:categoryId/:productName/:productId',
    'http://localhost:9800/product/c/:productName/cid/:productLevel2Id/csub/:productLevel3Id',
    'http://localhost:9800/product/c/:productName/cid/:productLevel2Id',


    'http://localhost:9800/p/preview/:productName/:productId',
    'http://localhost:9800/p/:categoryId/:productName/:productId',
    'http://localhost:9800/p/c/:productName/cid/:productLevel2Id/csub/:productLevel3Id',
    'http://localhost:9800/p/c/:productName/cid/:productLevel2Id',

    'http://localhost:9800/product/c/Cheruku%20Ra/cid/3wy3/csub/3wyc?varietyId=10go']

var str24 = [
    "gopal",
    "sakshi",
    "12345",
    "blah",
    "blah23"
]
str24.forEach((item, index) => {

    var regex = /blah/;
    if(item.search(regex)!= -1) {
        //console.log("undiiiiiiii")
    } else {
        //console.log("ledu");
    }
});

var str25 = [
    'product/preview/blah23/blah24',
    'product/blah25/blah26/blah27',
    'product/c/blah28/cid/blah29/csub/blah30',
    'product/c/blah31/cid/blah32',
    'p/preview/blah33/blah34',
    'p/blah35/blah36/blah37',
    'p/c/blah38/cid/blah39/csub/blah40',
    'p/c/blah41/cid/blah42',
    'product/[*]'
]

str25.forEach((item, index) => {
    var regex33 = /[*]/
    if(item.search(`product/${regex33}`) != -1)  {
        console.log("pattern matched");
    } else {
        console.log("pattern didnt match");
    }
})

