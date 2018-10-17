import Rx from 'rxjs';

const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21];
const fibonacciPromise = new Promise(r => r(fibonacciArray));
// This function will generate fibonacci numbers ad infinitum.
function * fibonacciGenerator () {
  let a = 1, b = 1;
  while (true) {
    let c = a + b;
    yield c;
    a = b;
    b = c;
  }
}

Rx.Observable.from(fibonacciArray).subscribe(e => console.log(`The array result is: ${e}`));

Rx.Observable.from(fibonacciPromise).subscribe(e => console.log(`The promise result is: ${e}`));

//The take will only return the first 20 results of the sequence.
Rx.Observable.from(fibonacciGenerator()).take(20).subscribe(e => console.log(`The generator result is: ${e}`));