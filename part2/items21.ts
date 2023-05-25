// 타입 넓히기

// 런타임에 모든 변수는 유일한 값을 가진다.
// 바트, 타입스크립트가 작성된 코드를 체크하는 정적 분석 시점에 변수는 '가능한' 값들의 집합인 타입을 가진다.

// 지정된 단일 값을 갖고 할당 가능한 값들의 집합을 유추해야 한다는 뜻 이런 과정을 타입스크립트에서는 넓히기라고 부른다. 

// 이 넓히기의 과정을 이해하면 오류의 원인을 파악하고 타입 구문을 더 효과적으로 사용할 수 있다. 
interface Vector3 {
  x: number
  y: number
  z: number
}

function getComponent(vector: Vector3, axis: 'x' | 'z' | 'z') {
  return vector[axis]
}

// let x = 'x'
// let vec = {x : 10, y: 20, z:30}

// getComponent(vec, x)
// const mixed = ['x', 1]

const v: {x : 1| 3 | 5 } = {
  x : 1 
} //Type is { x : 1 | 3 | 5 }



export default {}





// 넓히기 과정을 제어할 수 있는 방법 첫 번째 -> const, let 대신 const로 변수를 선언하면 더 좁은 타입이 된다.

// 1. 명시적 타입 구문을 제공하는 것
// 2. 타입 체커에 추가적인 문맥을 제공하는 것
// 3. const 단언문을 사용하는 것

// sum 
// - 타입스크립트가 넓히기를 통해 상수의 타입을 추론하는 법을 이해해야한다.
// - 동작에 영향을 줄 수 있는 방법인 const, 타입 구문, 문맥, as const에 익숙해져야한다.
