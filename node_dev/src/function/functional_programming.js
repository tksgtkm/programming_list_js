
// 命令型プログラミングと関数型プログラミング

/* 配列の和を求める関数 */

// 命令型
const sum = (arr) => {
    let result = 0;
    for (let i=0; i<arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sum([1, 2, 3]));

// 関数型
const sum2 = ([x, ...rest]) => (x === undefined ? 0 : x + sum(rest));

console.log(sum2([1, 2, 3]));

/* 配列を逆順にする関数 */

// 命令型
const reverse = (arr) => {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverse([1, 2, 3, 4, 5]));

// 関数型
const reverse2 = ([x, ...rest]) => x === undefined ? [] : [...reverse(rest), x];

console.log(reverse2([1, 2, 3, 4, 5]))

/* 配列内の最大値を返す関数 */

// 命令型
const max = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}

console.log(max([1, 2, 9, 4, 8, 6]));

// 関数型
const max2 = ([x, ...rest]) => rest.length === 0 ? x : (x > max(rest) ? x : max(rest));

console.log(max2([1, 2, 9, 4, 8, 6]));

/* map関数 */

// 命令型
const map = (f, arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(f(arr[i]));
    }
    return result;
}

console.log(map((x) => x ** 2, [1, 2, 3, 4]));

// 関数型
const map2 = (f, [x, ...rest]) => x === undefined ? [] : [f(x), ...map(f, rest)];
console.log(map2((x) => x ** 2, [1, 2, 3, 4]));

/* reduce関数で置き換え */

// sum関数
const sum3 = arr => arr.reduce((acc, current) => current + acc, 0);
console.log(sum3([5, 10, 3]));

// reverse関数
const reverse3 = arr => arr.reduce((acc, current) => [current, ...acc], []);
console.log(reverse3([1, 2, 3, 4, 5]))

// max関数
const max3 = arr => arr.reduce((acc, current) => current > acc ? current : acc);
console.log(max3([1, 2, 9, 4, 8, 6]));

// map関数
const map3 = (f, arr) => arr.reduce((acc, current) => [...acc, f(current)], []);
console.log(map3((x) => x ** 2, [1, 2, 3, 4]));
