//객체 사용 시 주의점
// 문맥에서 값을 분리하는 문제는 문자열 리터럴이나 튜플을 포함하는 큰 객체에서 상수를 뽑아낼 때도 발생한다.

type Language = 'JS' | 'TS' | 'PY';

interface Gover{
  language: Language
  organization : string
}

function complain(language: Gover) {
  // 
}

complain({language : 'TS', organization: 'Mic'});

const ts = {
// const ts : Gover= {
  language : 'TS',
  organization: 'Mic'
} as const

complain(ts)

export default {}

//sum
// - 타입추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴보자
// - 변수를 뽑아서 별도로 선언했을 때 오류가 발생? 타입 선언을 추가해야한다.
// - 변수가 정말로 상수라면 상수 단언(as const)을 사용해야한다.
