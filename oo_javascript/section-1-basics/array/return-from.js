var result = [
    {num:1, bool:true, string:'gopal'}, 
    {num:2, bool:false, string:'sakshi'}, 
    {num:3, bool:true, string:'priya'}, 
    {num:4, bool:false, string:'sahasra'}
];

function doStuff(result, title, outerKey) {
    const object = {
        title: title,
        outerKey: outerKey
    }
    if(Array.isArray(result) && result.length>0) {
        result.forEach((obj) => {
            console.log('firsttuuu')
            object.title = 'ss',
            object.outerKey = 'out key'
        });
    }
    return object;
};

var blah23 = doStuff(result, 'some title', 'some outerKey');
console.log(blah23)