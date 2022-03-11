// 재사용 가능
// 변수 선언
let a = 2;
let b = 5;

console.log(a + b); // 7
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4

// 값(데이터)의 재할당 가능
let aa = 12;
console.log(aa); // 12

aa = 999;
console.log(aa); // 999

// 함수 선언
function helloFunc(){
  // 실행 코드
  console.log(1234);   
}

// 함수 호출
helloFunc(); // 1234

// 반환도 가능
function returnFunc(){
  return 123;
}

let aaa = returnFunc();

console.log(aaa); // 123

// 함수 선언! 함수 안에서 사용하는게 매개변수
function sum(a, b){ // a와 b는 매개변수(Parameters)
  return a + b;
}

// 재사용! 함수 밖에서도 사용 가능한게 인수
let e = sum(1, 2); // 1과 2는 인수(Arguments)
let f = sum(7, 12);
let g = sum(2, 4);

console.log(e, f, g); // 3, 19 ,6

// 기명(이름이 있는) 함수
// 함수 선언!
function hello(){
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현!
let world = function(){
  console.log('World~');
}

// 함수 호출!
hello(); // Hello~
world(); // World~


// 객체 데이터
const heropy = {
  name: 'heropy',
  age: 85,
  // 메소드(Method)
  getName: function (){
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName); // heropy
// 혹은
console.log(heropy.getName()); // heropy

