// JavaScriptは引数の個数チェックをしない

function increment(n) {
    return n + 1;
}
console.log(increment(1, 2)); // 2

// 引数を少なく渡すと・・・
function foo(a, b) {
    console.log(b)
}
foo(1); // undefined

// 引数の型チェックがない
// 文字列を渡すところにnullを渡しても関数は実行される
function countCharacters(str) {
    console.log("実行しました。");
    return str.length;
}
// countCharacters(null); // 実行しましたと表示されたあと、エラーが表示される

// 引数の有無をチェックする
function increment2(n) {
    if (n === undefined) {
        throw new error("引数を指定してください");
    }
    return n + 1;
}

increment2(1); // 2
// increment2(); // エラーが表示される

