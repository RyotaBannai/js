const data1 = [1,2]
const data2 = [3,4]
const data3 = ['a', 'b']
data1.push(...data2)
data2.unshift(...data3)
console.log(data1)
console.log(data2)

const word = 'JavaScript';
const converted = [...word];
console.log(converted);

const reversed = [...word].reduceRight((p, c) => p + c);    // 配列に変換し右から左へたたみ込む。
console.log(reversed);

const data = ['a', 'b', 'c', 'a', 'b', 'd'];
const dist = [...(new Set(data))];
const sum = (...nums) => nums.reduce((p, c) => p + c);

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat())
const arr2 = [1,2,,4]
console.log(arr2.flat()) // removes empty slots in arrays.
