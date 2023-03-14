import { Observable,tap,filter } from 'rxjs';

const streamEmitter = (val) => {
    console.log('ss');
    val.next(1); val.next(2); val.next(3); 
    val.next(4); val.next(5); val.next(6); 
    val.next(7); val.next(8); val.next(9); 
    val.next(10); val.next(11); val.next(12); 
    val.next(13); val.next(14); val.next(15); 
    val.next(16); val.next(17); val.next(18); 
    val.complete();
}
const obs44 = new Observable(streamEmitter);
// obs44.pipe(
//     tap(x => { console.log('tap response ===>', x); return x }),
//     filter(x => x%2 == 0)
// ).subscribe( res => console.log('subscribe response => ',res));
obs44.pipe(
    tap(x => { console.log('tap response ===>', x); return x }),
    filter(x => x%2 == 0)
)