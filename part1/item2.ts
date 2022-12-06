// function add ( a, b ){
// 	return a + b;
// }

// add(10, null);

// export default {}

//tsConfig: {"noImplicitAny":true}

function add ( a: number, b:number ){
	return a + b;
}

export default {}

// sum : 

// - 타입스크립트 컴파일러는 언어의 핵심 요소에 영향을 미치는 설정을 포함하고 있다. ( o )
// - 타입스크립트 설정은 tsconfig.json을 사용하기 보단 커맨드 라인으로 설정하는 것이 좋다. ( x ) → 그 반대
// - js → ts 로 전환할 것이 아니라면 noImplicitAny를 설정하는 것이 좋다.
// - strictNullChecks를 설정하여 ‘undefined는 객체가 아닙니다.’ 같은 런타입 오류를 방지하는 것을 저자는 추천하고 있다. ( o )
// - 타입스크립트에서 엄격한 체크를하고 싶다면 strict설정을 고려해야한다.