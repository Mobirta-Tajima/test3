const name = "田島";
const age = 34;

const message = `私の名前は${name}です。年齢は${age}さいです`;
console.log(message);

function func1(str) {
  return str;
}
console.log(func1("てすと"));

const func2 = (str) => {
  return str;
};
console.log(func2("てすとてすと"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

const sayhello = (name = "ゲスト") =>
  console.log(`こんにちは${name}さん。ちゃす。`);
sayhello("tajima");
