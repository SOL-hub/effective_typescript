// - 타입스크립트는 자바스크립트의 상위 집합이다.
// - 타이스크립트는 타입이 정의된 자바스크립트의 상위집합이다.

//     → 둘의 정확한 의미를 알아보자면?

//     - 자바스크립트 프로그램에 문법 오류가 없다면 유효한 타입스크립트 프로그램
//     - 자바스크립트 프로그램에 어떠한 이슈가 존재한다? 오류가 아니라도 타입 체커한테 지적당할 수 있음
//       🙋‍♂️즉, 타입스크립트 에러라고 지정을 당해도 컴파일이 될 수 있다는 의미
// - 자바스크립트 파일 → js or jsx
// - 타입스크립트 파일 → ts or tsx
    
//     → 그렇다고 완전히 다른 언어라는 것이 아님!

//test.js를 test.ts로 바꾼다해도 달라질것이 없다는 것 왜? 타입스크립트는 자바스크립트의 상위 집합이기 때문에 js안의 코드는 이미 타입스크립트라고 할 수 있기 때문. 이런 특성은 js 코드를 ts로 migration에 엄청난 이점이 되어짐.

//모든 자바스크립트 프로그램이 타입스크립트라는 명제는 참이지만, 그 반대는 성립불가하다.

//유효한 타입스크립트 프로그램

function say(who: string) {
	console.log('Hello~', who);
}

//바트, 자바스크립트를 구동하는 노드같은 프로그램으로 앞의 코드를 실행하면 오류를 출력한다.

let city = 'new york city';
console.log(city.toUppercase());

// 오류 내용 : TypeError: city.toUppercase is not a function

// 타입스크립트의 특징은 런타임에 오류를 발생시킬 코드를 **미리 찾아준다는 것**입니다.

// 아지만 타입스크립트의 타입체커가 모든 오류를 싸그리 다 찾아내지는 않는다합니다.

// 타입스크립트는 이런 문제 중 몇가지를 찾아낸다.


const states = [
	{name: 'A', capital: 'Montgomery'},
	{name: 'B', capital: 'Juneau'},
	{name: 'C', capital: 'Phoenix'}, 


];

for (const state of states) {
	console.log(state.capitol)};

// 실행결과는
// undifined
// undifined
// undifined


for( const state of states) {
		console.log(state.capitol);
}

//오류1  : ‘capital’ 속성이 …형식에 없습니다.  ‘capitol’를 사용하시겠습니까?

//타입스크립트는 타입구문 없이도 오류를 찾아낼 수 있지만 타입 구문을 추가하면 더 많은 오류를 찾아낼 수 있습니다.

//자, 이번엔 capital과 capitol을 맞바꾸어보겠다.

const states2 = [
	{name: 'A', capital: 'Montgomery'},
	{name: 'B', capital: 'Juneau'},
	{name: 'C', capital: 'Phoenix'}, 

];

for( const state of states2) {
    console.log(state.capitol);
}

// 오류 내용 : ‘capital’ 속성이 … 형식에 없습니다. ‘capital’을 사용하시겠습니까?

// 그런데 이거 뭔가 이상합니다? 

// 타입스크립트가 해결책이라고 제시한 건 잘못되었죠.

// 다른 한쪽은 capital, 다른 한쪽은 capitol로 다르게 타이핑했지만

// 어느쪽이 오타인가 판단을 하지 못합니다.

// 따라서 명시적으로 states를 선언하는 것이 좋다.

// interface State3 {
// 	name: string;
// 	capital: string;
// }

// const states: State3[] = [
// 	{name: 'A', capitol: 'Montgomery'},
// 	{name: 'B', capitol: 'Montgomery2'},
// 	{name: 'C', capitol: 'Montgomery3'},
// ];

// export default{}

// 오류 내용 : 개체 리터럴은 알려진 속성만 지정할 수 있지만 ‘State’ 형식에 ‘capitol’이 없습니다. ‘capital’을 쓰려고 했습니까?

// → 오? 이제 오류가 어디에서 발생했는지 찾을 수 있고, 제시된 해결책도 올바르다.

// sum : 

// - 자바스크립트는 타입스크립트의 상위집합이다? ( x ) → 그 반댈세
// - 모든 자바스크립트 프로그램은 이미 타입스크립트 프로그램이다 ( o )
// - 타입스크립트는 자바스크립트 런타임 동작을 모델링하는 타입 시스템을 가지고 있기 때문에 런타입 오류를 발생시키는 코드를 찾아내려해서 모든 오류를 찾아낸다. ( x )
    
//     → 타입 체커를 통과하면서도 런타입 오류를 발생시키는 코드들이 존재한다.
    
// - 타입스크립트 타입시스템은 전반적으로 자바스크립트 동작을 모델링하지만 잘못된 매개변수 개수로 함수를 호출하는 경우처럼, 자바스크립트에서는 허용되나 타입스크립트에서 문제가 될 경우도 있다. ( o )