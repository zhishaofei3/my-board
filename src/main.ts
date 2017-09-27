import * as x1 from './fileWithoutError';
import * as x2 from './fileWithError';
import * as _ from "lodash";

let result = x1 + x2;

console.log(_.random);
console.log(_.random(0, 100));

console.log('result34', result);
export = result;
