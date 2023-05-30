// 다른 타입에는 별도의 변수 사용하기

function fetchProduct(id: string) {}
function fetchProductBySerialNumber(id: number) {}

// 변수값은 바뀔 수 있지만 그 타입은 바뀌지 않아야한다,

// let id = "12-34-56"
let id : string | number = "12-34-56"
fetchProduct(id)
id = 123456 // 'number'형식은 'string' 형식에 할당할 수 없다. -> 문자열로 추론을 했는데 숫자를 넣으려하니 에러, 
fetchProductBySerialNumber(id) //-> 여기는 number가 와야하는데, 여전히 string으로 인식되어있으니 오류

//여기서 변수의 값은 바뀔 수 있찌만 그 타입은 바뀌지않는다는 중요한 관점을 알 수 있다. 
//타입을 바꿀 수 있는 한가지 방법은 범위를 좁히는 것
//근데 이 방법은 딱 규칙이야! 이런 건 아님


//차라리 별도의 변수를 도입해 밑 처럼 작성하는 것이 좋다
const id2 = '12-23-44'
// fetchProduct(id)
const serial = 1223444
fetchProductBySerialNumber(id)


// 별도의 변수를 사용하는게 바람직한 이유
// - 서로 관련 없는 두 개의 값을 분리
// - 변수명을 더 구체적으로 지을 수 있다.
// - 타입 추론을 향상시키며, 타입 구문이 불필요해진다.
// - 타입이 더 간결해짐 (string | number 디신 string과 number 사용)
// - let 대신 const 로 변수를 선언하게 된다.

