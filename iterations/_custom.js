const log = console.log;
// function makeIterator(array) {
//     let nextIndex = 0
//     return {
//         next: () =>
//             nextIndex < array.length ? {
//                 value: array[nextIndex++],
//                 done: false
//             } : {
//                 done: true
//         }
//     };
// }

function* gen(array){
    yield* array
}

(() => {
    // let it = makeIterator(['yo', 'ya']);
    // let it = gen(['yo', 'ya']);
    let it = function* () {yield* ['yo', 'ya']}();
    // do{
    //     var cur = it.next();
    //     log(cur.value)
    // }while(!cur.done)

    // while(!(cur = it.next()).done){
    //while({value, done} = it.next(), !done){ // generator returns done variable as well..
    // while({value} = it.next(), value){
    //     log(value)
    // }
    do{
        var next = it.next();
        log(next.value || '')
    }while(!next.done)
})()