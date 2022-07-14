// lesson 113(1) (practice)
"use strict";



//teacher
// Максимально короткое решение :)
const compose = (...rest) => (x) => rest.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...rest) => rest.reduceRight((f, g) => (...args) => g(f(...args)));



