/**
 * const, letの変数宣言
 */
//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能
//  var val1 = "var変数を上書き";
//  console.log(val1);

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "さだ",
//   age: 36,
// };
// val4.name = "sada";
// val4.address = "Chiba";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "さだ";
// const age = 36;
// 「私の名前はさだです。年齢は36歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + 36 + "歳です。('+'による文字列結合）";
// console.log(message1);

//　テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。(テンプレート文字列による文字列結合)`;
// console.log(message2);
