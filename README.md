### 
- `map()` や `reduce()` と異なり、返値は常に `undefined` であり、チェーンできない。チェーンの最後に副作用を生じさせるのが典型的な使用法。
### `strict mode` = aka `Sloppy mode`
- 3 ways: strict mode for...
    - scripts
    - functions
    - modules: モジュールとして使うとき（`export` する時）はデフォルトでstrict mode（ECMAScript 2015から）
### How Much Use Is There for Arrow Functions?
- Use function in the global scope and for `Object.prototype` properties.
- Use class for object constructors. (and not use for `Generators`)
- Use `=>` everywhere else.
###
- Duplicate property names: When using the same name for your properties, the second property will overwrite the first.
- But, in ECMAScript 5 strict mode code, duplicate property names were considered a SyntaxError.
- A getter defers the cost of calculating the value until the value is needed. **If it is never needed, you never pay the cost.**
- An additional optimization technique to **lazify** or delay the calculation of a property value and cache it for later access are **smart (or "memoized") getters**. The value is calculated the first time the getter is called, and is then cached so subsequent accesses return the cached value without recalculating it. This is useful in the following situations. **value will never be changed or shouldn't be re-calculated.** : The benefit of using **Lazy Values** is that they don't have to be computed during the initialization of your app.