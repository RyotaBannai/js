let log = console.log;
var i = 'called me?';

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