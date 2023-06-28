
// 関数を変数に代入して使う
// JavaScriptでは関数も一つの値とみなせる
const add = function(x, y) {
    return x + y;
};

console.log(add(3, 4)); // 7

console.log(add); // [Function: add]

// JavaScriptのオブジェクト
const obj = {
    name: 'takumi',
    age: 31
};
console.log(obj.age);

// オブジェクトのプロパティには値が入れられるということは
// 関数も入れることができる
const obj2 = {
    add: function(x, y) {
        return x + y;
    }
};
console.log(obj2.add(10, 5));

// thisを用いたメソッドの実装
const obj3 = {
    base: 10,
    add: function(x) {
        return this.base + x;
    }
};

console.log(obj3.add(5));

obj3.base = 20;
console.log(obj3.add(5));

/* 即時関数 */
// 作られてすぐ呼び出される関数
// IIFE(Immediatery Invoked Function Expression)

const arr = [1, 2, 3, 4, 5];

const average = (() => {
    const sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
})();

console.log(average);

/* 高階関数 */
// 関数を引数に受け取る関数 高階関数に引数として渡した関数はコールバック関数と言う

// filterメソッド
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((x) => x%2 === 0);
console.log(evens);

// 関数を戻り値とする関数

/* 関数とクラス */ 
function normalFunc() {
    console.log("normal function");
}
class cl {
    constructor() {
        console.log("class");
    }
}

normalFunc();
const obj4 = new cl();

console.log(typeof normalFunc);
console.log(typeof cl); // クラスも関数オブジェクトとして扱う

