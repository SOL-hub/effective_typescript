//🍗아이템 9 타입 단언보다는 타입 선언을 사용하기

// - 타입스크립트에서 변수에 값을 할당하고 타입을 부여하는 방법은 2가지

interface Person {name: string};

const alice: Person = {name: 'Alice'}; // 타입 Person
//👉 Person은 변수에 타입선언을 붙여 그 값이 선언된 타입임을 명시

const bob = { name: 'Bob' } as Person; // 타입 Person
//👉 as Person 은 타입 단언을 수행한다. 그러면 타입스크립트가 추론한 타입이 있어도 Person타입으로 간주함

//타입 단언보다 타입 선언
//const alice: Person = {}; //블록 범위 변수 'alice'을(를) 다시 선언할 수 없습니다.ts(2451)
const bob2 = {}  as Person; //오류 없음

// 타입 선언은 할당 되는 값이 해당 인터페이스를 만족하는지 검사한다. 위 코드는 그러지 못하기 때문에 ts오류를 표시,
// 타입 단언은 강제로 타입을 지정했으니 타입 체커에게 오류를 무시하라고 하는 것, 타입선언과 단언의 차이는 속성을 추가할 때도 마찬가지다.

const alice2: Person = {
    name: 'Alice',
    //occupation: 'TypeScript developer' //개체 리터럴은 알려진 속성만 지정할 수 있으며 'Person' 형식에 'occupation'이(가) 없습니다
};

//오류없음
const bob3 = {
    name: 'Bob',
    occupation:'JavaScript developer'
} as Person; 

//타입 선언문에서는 잉여 속성 체크가 동작했지만 단언문에서는 적용X
//타입 단언이 꼭 필요한 경우가 인면 안전성 체크도 되는 타입 선언을 하는 것이 좋다.

// 화살표 함수의 타입 선언은 추론된 타입이 모호할 때가 있다. 
// 예를 들어, 다음코드에서 Person 인터페이스를 사용하고 싶다고 가정해보자.
const people = ['alice', 'bob', 'jan'].map(name => ({name}));
//Person[]을 원했지만 결과는 {name: string;}[]...

// 타입단언을 사용하면 위 에제 처럼 런타임에 문제가 발생하게 된다.
const people2 = ['alice', 'bob', 'jan'].map(name => ({} as Person)); //오류 없음

//단언문을 쓰지 않고 다음과 같이 화살표 함수 안에서 타입과 함께 변수를 선언하는 것이 가장 직관적이다.
const people3= ['alice', 'bob', 'jan'].map(name =>{
    const person: Person = {name};
    return person
}); //타입은 Person[]

//-> 코드 간결, 화살표 함수의 반환 타입을 선언
const people4 = ['alice', 'bob', 'jan'].map((name): Person => ({name})); //타입은 Person[]


//이 코드는 바로 앞의 번잡한 버전과 동일한 체크를 수행
//위 코드 중 소괄호는 (name): Person은 name의 타입이 없고 반환 타입Person 이라고 명시한다. 
//바트 (name: Person)은 name의 타입이 person임을 명시하고 반환 타입은 없기 때문에 오류가 발생

// 원하는 타입 직접 명시, ts가 할당문의 유효성을 검사하게 해보자
const people5: Person[] = ['alice', 'bob', 'jan'].map(
    (name):Person => ({name})
);

//타입 단언이 꼭 필요한 경우를 살펴보자.
document.querySelector('#myButton')?.addEventListener('click', e =>{
    e.currentTarget //타입은 EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button //타입은 HTMLButtonElement
})

// ts는 DOM에 접근할 수 없기에 #myButton이 버튼 엘리먼트인지 알지 못함
// 이벤트의 currentTarget이 같은 버튼이어야하는 것도 알지못함
//우린 ts가 알지 못하는 정보를 가지고 있기 때문에 타입 단언문을 사용하는 것이 타당하다.

//자주 쓰이는 특별한 문법!을 사용해서 null이 아님은 단언하는 경우도 있다.
const elNull = document.getElementById('foo'); //타입은 HTMLElement | null
const el = document.getElementById('foo')!; //타입은 HTMLElement

// 변수의 접두사로 쓰인 !는 boolean의 부정문, 접미사로 쓰인!는 그 값이 null이 아니라는 단언문으로 해석
// 우리는 !를 일반적인 단언문처럼 생각해야한다. 
// 단언문은 컴파일 과정 중에 제거되므로 타입 체커는 알지 못하지만 그 값이 null이 아니라고 확인 할 때 사용해야한다.
// 그렇지 안으면 null인 경우를 체크하는 조건문을 사용해야한다.

// 타입 단언문으로 임의의 타입 간에 변환할 수 있다.HTMLElement는 HTMLElement | null 의 서브타입이기 때문에 이러한 타입 단언은 동작한다.
// 바트 Person 과 HTMLElement는 서로의 서브타입이 아니기 때문에 변환이 불가능

// sum

// - 타입단언( as type )보다 타입선언( : Type)을 사용해야한다.
// - 화살표함수의 반환 타입을 명시하는 방법을 터득해야한다.
// - ts보다 타입 정보를 더 알고 있는 상황에서는 타입 단언문과 null 아님 단언문을 사용하면 된다.