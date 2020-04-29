import people from './data.js';

let log = console.log;
(() => {
        for (const {name: n, family: {father: f}} of people) {
            log('Name: ' + n + ', Father: ' + f);
        }

        let key = 'z';
        let {'z': foo} = {x: 'foo', z: 'bar'};
        let {[key]: foo_} = {x: 'foo', z: 'bar'}; // Computed object property names

        log(foo); // "bar"

        const props = [
            { id: 1, name: 'Fizz'},
            { id: 2, name: 'Buzz'},
            { id: 3, name: 'FizzBuzz'}
        ];

        const [,, { id, name }] = props; // 事前にサイズわかっていないと

        log({[id]:name}); // { '3': 'FizzBuzz' }

        let obj = {self: '123'};
        obj.__proto__.prot = '456';
        const {self, prot} = obj;
        log(self, prot) // 123 456
    }
)()