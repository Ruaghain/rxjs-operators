import Rx from 'rxjs';

const ticker = Rx.Observable.interval(2000);
const timer = Rx.Observable.timer(2000, 500);

//In the below code A and B will get their own sequence of 0, 1, 2...etc. Every time you subscribe it starts a new interval from 0
ticker.subscribe(a => console.log("ticker A: ", a));
setTimeout(() => ticker.subscribe(b => console.log("ticker B: ", b)), 1000);

//It runs once, then it exits if there's no secondary argument.
timer.subscribe(a => console.log("Timer: ", a));