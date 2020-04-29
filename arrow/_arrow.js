let log = (any) => console.log(any)

let shortfn = (_word, any) => ({[_word]: any}) // keyword needs to be wrapped by brackets.

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;

function main(){
    var elems = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];
    for (let string of [...'ab']) {
        log(shortfn(string, elems))
    }
    log(f());
    const foo = {a: 1, b: 2};
    ({a, b} = foo); // destructuring assignment
    log(a) // as value but not object
    /*
    * {a, b} = {a: 1, b: 2} is not valid stand-alone syntax,
    * as the {a, b} on the left-hand side is considered a block and not an object literal.
    * */

    // swapping variables
    const arr = [1,2,3];
    [arr[2], arr[1]] = [arr[1], arr[2]];
    log(arr) // [1,3,2];

}
main()