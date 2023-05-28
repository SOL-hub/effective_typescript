// 한꺼번에 객체 생성하기
// 변수의 값은 변경될 수 있지만, 타입스크립트의 '타입'은 일반적으로 변경되지 않는다.

// 이런 특성 덕분에 일부 자바스크립트 패턴을 타입스크립트로 모델링하는게 쉬워짐
// 객체를 생성할 때 속성을 하나씩 추가하기 보단 여러 속성을 포함하여 한꺼번에 생성해야 타입 추론에 유리함

// const pt = {}

// pt.x = 3; // {} 형식에 x속성 없음
// pt.y = 4; // {} 형식에 y속성 없음

// 첫 번째 줄의 pt 타입은 {} 값을 기준으로 추론되기 때문에 오류, 오류 삐삐 -> 존재하지 않는 속성을 추가 할 수 없다.

interface Point { 
  x: number 
  y: number
}

// const pt = {
//   x: 3,
//   y: 4,
// }; //정상

//객체를 반드시 제각각 나눠서 만들어야한다면 타입 단언문 (as)를 사용해 타입 체커를 통과하게 할 수 있다.

// const pt = {} as Point;
//   pt.x = 3;
//   pt.y = 4;

// const pt: Point = {
//   x:3,
//   y:4
// }

const pt = { x:3, y:4 } 
const id = { name: 'Pyhagoras'}
const namedPoint = { ...pt, ...id}
namedPoint.name //ok, type is string
// sum
// - 속성을 제각각 추가하지 말고 한꺼번에 객체로 만들어야한다. 
// - 객체에 조건부로 속성을 추가하는 방법을 익히도록한다.

export default {}