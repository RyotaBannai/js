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