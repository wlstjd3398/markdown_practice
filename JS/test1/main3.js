// HTML 요소(Element) 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index.boxEl);
});


const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl.textContent = 'heropy?!';
console.log(boxEl.textContent); // heropy?!


const a = 'Hello~';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse: 배열을 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a); // Hello~
console.log(b); // ~olleH
