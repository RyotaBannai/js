const log = console.log;
// Generator
function* gen(){
    yield* [...'abc']
}

(()=>{
    // for (let item of [...gen()]){
    for (let item of gen()){
        log(item)
    }
    // [...gen()].forEach(item => log(item));

    log(
    [...gen()].reduce((acc, cur) => acc.concat(cur), [])
    );

    // WeakMap
    // get by key.
    let myObj = {};
    log(
    new WeakMap([
        [{}, 'a'],
        [myObj, 'b'],
        [{}, 'c']
    ]).get(myObj)
    ); // "b"

})()