import { concat, from, Observable, of, range, timer } from "rxjs";
import { concatMap, delay, endWith, map, repeat, startWith } from "rxjs/operators";

const lightInstructionsBlockObs: Observable<string> = from([1,2,3,4,5,6]).pipe(
  concatMap(number=>of(number).pipe(
    delay(500)
  )),
  map((num) => `light task no. ${num} ended`),
  
);
const heavyInstructionObs: Observable<string> = timer(3000).pipe(
  map((num) => `heavy task ended`)
);
const lightInstructionLoopObs: Observable<string> = range(1,3).pipe(
  concatMap(number=>of(number).pipe(
    delay(200)
    )),
      map((num) => `light task in loop no. ${num}`)
).pipe(
      repeat(3)
);

concat( lightInstructionsBlockObs, heavyInstructionObs, lightInstructionLoopObs).pipe(
    startWith("program start"),
    endWith("end of program")
).subscribe(result => console.log(result));
