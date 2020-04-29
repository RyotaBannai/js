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


function main(){
    const arr1 = [1,2,3,4]
    const dict1 = {1: 'a', 2: 'b'}
    var elems = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];
    //log(reducer(arr1, 10))
    log(mapper2(elems))
}
main()