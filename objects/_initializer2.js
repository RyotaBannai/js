let log = console.log;
(()=>{
    let i = 0;
    let obj = {
        ['foo' + ++i] : i,
        ['foo' + ++i] : i,
        ['foo' + ++i] : i,
    }
    for (let objKey in obj) {
        log({[objKey]:obj[objKey]})
    }


})()