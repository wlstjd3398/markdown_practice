// String(문자 데이터)
// 따옴표를 사용
let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`; // ``을 사용하는건 보간법(보관해서 생성)

console.log(myName); // HEROPY
console.log(email); // thesecon@gmail.com
console.log(hello); // Hello HEROPY?!

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냄
let number = 123;
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57

// Boolean(불린 데이터)
// true, fasle 두 가지 값밖에 없는 논리 데이터
let checked = true;
let isShow = false;

console.log(checked); // true
console.log(isShow); // false

// Undefined
// 값이 할당되지 않은 상태를 나타냄
let undef;
let ojb = { abc: 123 };

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// Null
// 어떤 값이 의도적으로 비어있음을 나타냄
let empty = null;

console.log(empty); // null

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장 {}
let user = {
  // Key: Value;
  name: 'Heropy',
  age: 85,
  isValid: true
};

console.log(user.name); // Heropy
console.log(user.age); // age
console.log(isValid); // isValid

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장함 []
let fruits = [ 'Apple' ,'Banana', 'Cherry'];

console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'

