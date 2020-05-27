### forEach() 
- `map()` や `reduce()` と異なり、返値は常に `undefined` であり、チェーンできない。チェーンの最後に副作用を生じさせるのが典型的な使用法。
### `strict mode` = aka `Sloppy mode`
- 3 ways: strict mode for...
    - scripts
    - functions
    - modules: モジュールとして使うとき（`export` する時）はデフォルトでstrict mode（ECMAScript 2015から）
### How Much Use Is There for Arrow Functions?
- Use function in the global scope and for `Object.prototype` properties.
```javascript
'use strict';

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

//

function MyObj(){
    this.utter = 'Hi!';
}
MyObj.prototype = {
    greet: () => {
        console.log(this.user) // this is an error referring global or window.
    }
}
```
- Use class for object constructors. (and not use for `Generators`)
```javascript
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```
- Use `=>` everywhere else.
```javascript
let callback;
callback = callback || function() {}; // ok
callback = callback || () => {}; // SyntaxError: invalid arrow-function arguments
callback = callback || (() => {});    // ok
```
### 
- Duplicate property names: When using the same name for your properties, `the second property` will overwrite the first.
- But, in ECMAScript 5 strict mode code, duplicate property names were considered a `SyntaxError`.
- A `getter` defers the cost of calculating the value until the value is needed. **If it is never needed, you never pay the cost.**
- An additional optimization technique to **lazify** or delay the calculation of a property value and cache it for later access are **smart (or "memoized") getters**. The value is calculated the first time the getter is called, and is then cached so subsequent accesses return the cached value without recalculating it. This is useful in the following situations. **value will never be changed or shouldn't be re-calculated.** : The benefit of using **Lazy Values** is that they don't have to be computed during the initialization of your app.
- JSON permits only property definition using `"property": value` syntax.  The property name must be double-quoted, and the definition cannot be a shorthand

### Nullish Coalescing 
- However, due to `||` being a boolean logical operator, the left hand-side operand was coerced to a boolean for the evaluation and any **falsy value** (`0, '', NaN, null, undefined`) was not returned. This behavior may cause unexpected consequences if you consider `0`, `''`, or `NaN` as valid values.
- The **nullish coalescing operator** avoids this pitfall by only returning the second operand when the first one evaluates to either `null` or `undefined` (but no other falsy values):
```javascript
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError
(null || undefined) ?? "foo"; // returns "foo"
```
- optional chaining operator (`?.`) 

### async
- https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

### this の参照を扱う: Bind の弊害
- `bind() の付いたリスナーを削除できない`
- 別の良い方法として、`handleEvent`プロパティを使う。参照 `./eventListener/_this.js@Bind2`
- もう一つの方法は、 `EventListener` に`アクセスする必要のあるフィールドを含むオブジェクトのメソッドを呼び出す関数`を渡すこと
    - 呼び出す関数 = 無名関数でok function(e){return this.myMethod(e); }
    - アクセスする必要のあるフィールドを含むオブジェクト = つまり class, functionなんかで、this で参照したいデータを包含するオブジェクト
    - メソッド = this.data みたいなのを返すメソッドでなんでもok
    - 参照 `./eventListener/_this.js@Bind3` ポイントはメソッド呼び出しの部分ではthis は解決できないので、いったん別の変数に退避する必要があること。
- [参照](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)
### [イベントリスナ確認方法](https://ja.stackoverflow.com/questions/2443/%E8%A8%AD%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%A9%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
### メモリに関する問題
- 1 では 新しい匿名関数がループごとに作られる
- 2 では、前に宣言された同じ関数がイベントハンドラとして使われているため、単に参照するだけなのでメモリの消費が抑えられる。
- さらに2では匿名関数なのでremoveEventListner()を実行することが不可能なのに対し、2では消去可能である。
```javascript
var i;
var els = document.getElementsByTagName('*');

// ケース 1
for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", function(e){/*関数の処理*/}, false);
}

// ケース 2
function processEvent(e){
  /*関数の処理*/
}

for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", processEvent, false);
}
```