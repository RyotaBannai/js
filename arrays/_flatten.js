let log = (any) => console.log(any)
let reducer = (arr, defaultVal=0) => {
    const fn = (accumulator, currentValue) => accumulator + currentValue
    return arr.reduce(fn, defaultVal)
}
let mapper = (any) => {
    return any.map(elem => elem.length)
}
let mapper2 = (any) => {

    // return any.map(({length: lengthFooBar}) => lengthFooBar) // Look at the length <- this is called destructuring parameter.

    return any.map(({length}) => length) // even not need to assign.
}

function flatten(input) {
    const stack = [...input];
    const res = [];
    while(stack.length) {
        // pop value from stack
        // log(stack)
        const next = stack.pop();
        if(Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

function main(){
    const arr1 = [1,2,3,4]
    const dict1 = {1: 'a', 2: 'b'}
    var elems = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];
    // log(reducer(arr1, 10))
    // log(mapper2(elems))
    const arr = [1, 2, [[3, 4], 5, 6]];
    log(flatten(arr));


    // flatmap epic use case
    let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

    let result = a.flatMap( (n) =>
        (n < 0) ? [] :
            (n % 2 == 0) ?
                [n] :
                [n-1, 1]
    );
    log (result);
}
main()