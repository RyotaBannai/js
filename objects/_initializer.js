let log = console.log;

const expr = 'all';
const obj = {
    values: ['a', 'b', 'c'],
    getLatest() {
        if (this.values.length === 0) {
            return undefined;
        }
        return this.values[this.values.length - 1];
    },
    push(value) {
        this.values.push(value)
    },
    [expr]() {
        return this.values;
    },
};

(()=>{
        let a = 'foo',
            b = 42,
            c = {myProp: 12};
        let o = {a, b, c};
        let o2 = {
            property(parameters) {}
        }
        let prop = 'foo';
        let o3 = {
            [prop]: 'hey',
            ['b' + 'ar']: 'there'
        }
        log((o.a === {a}.a)) // true
        //
        log(obj.all())
        log(obj.push('Ohhhh'))
        log(obj.all())
        //
        Object.defineProperty(o, 'getA', {
            get: function() { return this.a }
        });
        log(o.getA)

    }
)()