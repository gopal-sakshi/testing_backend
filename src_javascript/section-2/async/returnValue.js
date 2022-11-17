import {of} from 'rxjs/operators'
async function addNum(a,b) {
    console.log('did stuff for a while');
    return of('gopal').toPromise();
}
async function doStuff() {
    const result = await addNum(2,3).then().catch();
    console.log('response = ',result);
}

doStuff();