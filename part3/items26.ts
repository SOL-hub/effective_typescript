// 타입추론에 문맥이 어떻게 사용되는지 이해하기

// ts는 타입을 추론할 때 단순히 값만 고려하지 않는다. 값이 존재하는 곳에 문맥까지 살핀다.
// 근데 문맥을 고려해 타입을 추론하면 가끔 이상한 결과가 나온다. 
// 이럴 때 타입 추론에 문맥이 어떠헥 사용되는지 이해하면 제대로 대처할 수 있을지도?

function setLanguage(language: string) {
  
}

setLanguage('js') //ok

let language = 'js'
setLanguage(language) //ok
