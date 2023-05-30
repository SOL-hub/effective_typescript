//일관성 있는 별칭 사용하기

// 어떤 값에 새 이름을 할당하는 예제(밑예)
// const borough = {name: 'brook', location: [400, -43]}
// const loc = borough.location

// loc[0] = 0
// borough.location
// borough.location 배열에 loc라는 별칭을 만듬, 별칭의 값을 변경하면 원래 속성값에서도 변경

// 여기서, 별칭을 남발해서 사용하면 제어 흐름을 분석하기 어렵다.

interface Coordinate {
  x: number
  y: number
}

interface BoundingBox {
  x: [number, number]
  y: [number, number]
}

interface Polygon {
  exterior: Coordinate[]
  holes: Coordinate[][]
  bbox?: BoundingBox
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  polygon.bbox
  const box = polygon.bbox
  box
  if(polygon.bbox) {
    polygon.bbox
    box
  }

}

export default {}


//sum
// 별칭은 타입스크립트가 타입을 좁히는 것을 방해한다.
// 따라서 변수에 별칭을 사용할 때 일관되게 사용해야한다.