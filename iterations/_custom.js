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
    while({value} = it.next(), value){
        log(value)
    }

    const a = [[1], [2], [3]];
    const b = [...a];
    log(b)

    b.shift().shift();
    log(a) // 階層が深いものはJSON文字列に置き換えてからやる
    log(b)

    // void 0 == undefined
    // return; undefinedであることを明示
    /*
    const obj = {
      hi: function(){}
    }
    */
    const obj = {
        hi() {}
    }
    /*
    注意：以下はアロー関数内のthisが指すものが変わってしまうので等価ではない
    const obj = {
      hi: () => {}
    }
    */
    // 代入簡略化
    const hi = "hi"
    const obj2 = { hi } // => obj = { hi: "hi" }
    // 初期化
    const array = ["a", "b", "c"]
    array.length = 0 // => array = []
    // 数値へ型変換
    console.log(+"1") // => 1
    console.log(+"a") // => NaN
    // ディープコピー
    const deepCopy = JSON.parse(JSON.stringify(obj))
    // booleanへの型変換
    function hasHi() {
        return !!obj2.hi // => true
    }
    // オプショナルチェイニング演算子. 下記は同じ意味
    // obj2 && obj2.hi
    // obj2?.hi
})()