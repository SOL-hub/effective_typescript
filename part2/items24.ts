//아이템 24 일관성 있는 별칭 사용하기
// 새 이름 할당하는 예제
const borough = {name : 'solsol', location : [2222, 3333]};
const loc = borough.location;

// 위처럼 별칭을 만들어서 사용, 근데 이 별칭의 값을 변경하면 원래 속성값에서도 변경됨

// 별칭을 남발해서 사용하면 제어 흐름을 분석하기 어려움
//타입스크립트에서도 별칭을 신중하게 사용해야한다. 그래야 코드를 잘 이해할 수 있고 오류도 쉽게 찾을 수 있다.

interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[] [];
  bbox?:BoundingBox
}

//요약 
// - 별칭은 타입스크립트가 타입을 좁히는 것을 방해한다.
// - 따라서 변수에 별칭을 사용할 때는 일관되게 사용해야한다.