// 튜플 사용 시 주의점
type Language = 'JavaScript' | 'TypeScript' | 'Python'
function setLanguage(language: Language) {

}

type Pan = [number, number]
// function panTo(where : readonly [number, number]) {
function panTo(where : Pan) {  

}

panTo([10, 20]) //ok

// const loc = [10, 20]
// const loc: [number, number] = [10, 20]
// const loc= [10, 20] as const;
const loc: Pan = [10, 20]
panTo(loc)

export default {}

//sum
// - 타입추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴보자
// - 변수를 뽑아서 별도로 선언했을 때 오류가 발생? 타입 선언을 추가해야한다.
// - 변수가 정말로 상수라면 상수 단언(as const)을 사용해야한다.
