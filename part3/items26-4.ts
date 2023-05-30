//콜백 사용 시 주의점
// 콜백을 다른 함수로 전달할 때 타입스크립트는 콜백의 매개변수 타입을 추론하기 위해 문맥을 사용한다.

function callWithRandomNumbers(fn: (n1:number, n2: number) => void){
  fn(Math.random(), Math.random())
}

const cb = (a: number, b: number) => {
  a
  b
  console.log(a+b)
}

callWithRandomNumbers(cb)
// callWithRandomNumbers((a, b) => {
//   a
//   b
//   console.log(a + b)
// })

export default{}

//sum
// - 타입추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴보자
// - 변수를 뽑아서 별도로 선언했을 때 오류가 발생? 타입 선언을 추가해야한다.
// - 변수가 정말로 상수라면 상수 단언(as const)을 사용해야한다.
