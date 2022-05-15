let empty = {}; // プロパティを持たないオブジェクトを生成
console.log(empty);

let point = {x: 0, y: 0}; // 数値プロパティを2つ持つオブジェクト
console.log(point);

let p2 = {x: point.x, y: point.y};
console.log(p2);
console.log(p2.x);

let book = {
  "main title": "Javascript",
  "sub-title": "The Defintive Guide",
  for: "all audience",
  bind: {
    firstname: "David",
    surname: "Flanagan",
  }
};
console.log(book);
console.log(book.bind);

let o1 = Object.create({x: 1, y: 2});
const result = o1.x + o1.y;
console.log(result);
