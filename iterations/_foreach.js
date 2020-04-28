var mylist = [1,2,3,4,5];
var newlist = [];
var push = newlist.push();
mylist.forEach((elem, index, array) => push(elem),this);
console.log(newlist);