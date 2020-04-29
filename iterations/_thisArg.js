function Counter(){
    this.sum = 0;
    this.count = 0;
}
Counter.prototype = {
    // ここでadd にarrowで宣言すると、this の参照が Counter出なくて、globalを参照してしまうからうまくいかない.
    // 普通のfunctionは non-strict modeで宣言するとの参照先のthis はglobal。でprototypeを使うときは都合が良い。
    add: function(array){
        array.forEach(entry => {
            this.sum += entry;
            ++this.count;
        });
    }
};

const obj = new Counter();
obj.add([2,3,4]);
console.log(obj.count, obj.count);

const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

function flatten(arr) {
    const result = []

    arr.forEach((i) => {
        if (Array.isArray(i)) {
            result.push(...flatten(i))
        } else {
            result.push(i)
        }
    })

    return result
}
console.log(flatten(problem))