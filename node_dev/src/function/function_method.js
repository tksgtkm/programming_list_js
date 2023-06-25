
/* 関数宣言 */
function increment(n) {
    return n + 1;
}

/* 関数式 */
const result = increment(1);
console.log(result); // 2

/* 引数がない関数 */
function getOne() {
    return 1;
}

/* 戻り値はundefined */
function foo() {}
const result2 = foo();
console.log(result2);

/* 関数式で宣言する */
const increment2 = function(n) {
    return n + 1;
}
console.log(increment2(1)); // 2

/* 再帰関数 */
// これは階乗を求める関数
// function式の関数名は関数の処理内部からのみ参照される。
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
console.log(factorial(3)); // 6

/* アロー関数 */
const increment3 = (n) => {
    return n + 1;
}
console.log(increment3(1)) // 2

/* 従来の関数宣言とアロー関数での長さの比較 */
const map1 = [1, 2, 3].map(function(n) {
    return n + 1
});
console.log(map1); // [2, 3, 4]

const map2 = [1, 2, 3].map((n) => n + 1);
console.log(map2); // [2, 3, 4]

/* コンストラクタ */
function Cat(name) {
    this.name = name;
}
const cat = new Cat("みけ");
console.log(cat); // Cat { name: 'みけ' }
// コンストラクタで使う関数を普通に呼び出してもundefinedになる
const cat2 = Cat("みけ");
console.log(cat2); // undefined
// アロー関数はコンストラクタにならない

/* thisについて */
function showThis() {
    console.log(this);
}

// 関数はオブジェクトのメソッドとしても呼び出せる
// showThis関数をメソッド呼び出しした場合、
// thisはメソッドがひもづくオブジェクトになる
const foo2 = {name: "Foo"};
// 関数をオブジェクトのメンバーにする
foo2.showThis = showThis;
// メソッドとして呼び出す
foo2.showThis(); // { name: 'Foo', showThis: [Function: showThis] }

// 逆にメソッドとして書いた関数式は変数に代入してから呼び出すと
// thisはオブジェクトを指さなくなる
const o = {
    getThis: function() {
        return this;
    },
};

console.log(o.getThis() === o); // true

const getThis = o.getThis;
console.log(getThis() === o); // false

// アロー関数の場合は関数の定義場所でthisが静的に決まる
// 呼び出し方に左右されない
const showThis2 = () => {
    console.log(this);
};

// 関数として呼び出す
showThis2(); // {}

const foo3 = {name: "Foo"};
foo3.showThis = showThis2;
// メソッドとして呼び出す
foo3.showThis(); // {}

// アロー関数がメソッド内で作られた場合、
// アロー関数のthisはメソッドが属するオブジェクトを指す
const foo4 = {
    // getThis関数を返すメソッド
    getGetThis: function() {
        // アロー関数
        const getThis = () => {
            return this;
        };
        return getThis;
    },
};
// 取り出す
const getThis2 = foo4.getGetThis();
console.log(getThis2() === foo4); // true

/* arguments変数の有無 */

// argumentsを出力する関数
function foo5() {
    console.log(arguments);
}
foo5(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

// 引数が重複した関数宣言
// この場合は最後の引数の値が採用される
function foo6(a, a, a) {
    console.log(a);
}
foo6(1, 2, 3); // 3
// アロー関数だと引数の重複はエラーになる

