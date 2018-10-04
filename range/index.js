import Rx from 'rxjs';

Rx.Observable.range(1, 9).subscribe(e => console.log(`Range emitted ${e}`));
