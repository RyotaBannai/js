/*
* Function composition enabling piping
* */
let log = console.log;
const double = x => 2 * x
const triple = x => 3 * x
const quadruple = x => 4 * x


// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

(()=>{
    const mutiply6 = pipe(double, triple)
    log(mutiply6(6))

})()