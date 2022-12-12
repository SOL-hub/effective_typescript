// 🍗아이템 7 타입의 값들의 집합이라고 생각하기

// 런타임에 모든 변수는 js세상의 값으로부터 정해지는 각자의 고유한 값을 가진다.
// 변수에는 이처럼 다양한 종류의 값을 할당할 수 있다.
// - 42, null, undefined, Canada, [ animal: 'Whale', weight_lbs: 40_000 }, /regex/, new HTMLButtonElement, x, y => x + y

// 그러나 코드 실행 전 , ts가 오류를 체크하는 순간에는 타입을 가지고 있다. 
// 이것을 ‘할당 가능한 값들의 집합’이 타입이라고 생각하면 된다. 이 집합은 범위라고 부른다.

//const x: never = 12; //👉'number' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)

//작은 집합은 한 가지 값만 포함하는 타입이다. 이들은 타입스크립트에서 유닛타입이라고도 불리는 리터럴(literal) 타입
type A = 'A'
type B = 'B'
type Tweleve = 12;

// 두 개, 세 개로 묶으려면 유니온타입을 사용
type AB = 'A'|'B';
type AB12 = 'A' | 'B' | 12; //세 개 이상의 타입을 묶을 때도 동일하게  | 로 이어주자. 유니온 타입은 값 집합들의 합집합을 일컫는다.

// 다양한 타입 스크립트 오륭서 '할당 가능한 '이라는 문구를 볼 수 있는데이 문구는 집합의 관점에서 '~의 원소(값과 타입의 관계)' 또는 '~의 부분 집합(두 타입의 관계)'를 의미한다.

// const a: AB = 'A';
// const c: AB = 'C';

type Int =  1| 2| 3| 4 | 5

interface Identified {
    id: string;
}
//앞의 인터페이스가 타입 범위 내의 값들에 대한 설명이라고 생각해보자. 어떤 객체가 string 으로 할당 가능한 id속성을 가지고 있다면 그 객체는 Identified이다.
//-> 구조적 타이핑 규칙들은 어떠한 값이 다른 속성도 가질 수 있음을 의미한다. 또한 함수 호출의 매개변수에서도 다른 속성을 가질 수 있다. 
//-> 특정 상황에서만 추가 속성을 허용하지 않은 잉여 속성 체크만 생각하다보면 간과하기 쉽다.

interface Person {
    name: string;
}
interface Lifespan {
    birth: Date;
    death?: Date;
}
type PersonSpan = Person & Lifespan;

//& 연산자는 두 타입의 인터섹션(교집합)을 계산함
//둘 다 공통으로 가지는 속성이 없어 PersonSpan 타입을 공집합(naver 타입)으로 예상하기 쉽다. 
//바트, 타입 연산자는 인터페이스의 속성이 아닌 값의 집합(타입의 범위)에 적용되고 추가적인 속성을 가지는 값도 여전히 그 타입에 속한다.
//그래서 Person과 Lifespan을 둘 다 가지는 값은 인터섹션 타입에 속한다.

const ps: PersonSpan2 = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date,
} //정상

type PersonSpan2 = Person & Lifespan;

//당연히 앞의 세 가지보다 더 많은 속성을 가지는 값도 PersonSpan타입에 속한다. 인터섹션 타입의 값은 각 타 내의 속성을 모두 포함하는 것이 일반적인 규칙

//규칙이 속서에 대한 인터섹션에 관해선느 맞지만 두 인터페이스의 유니온에서는 그렇지 않다.
type K = keyof (Person | Lifespan); //타입이 never

//앞에 유니온 타입에 속하는 값은 어떠한 키도 없어서 유니온에 대한 keyof 는 공집합(never)여야한다.

// keyof (A&B) = (keyof A) | (keyof B)
// keyof (A|B) = (keyof A) & (keyof B)

//더 일반적인 방식
interface Person {
    name: string;
}

// interface PersonSpan extends Person {
//     birth:Date;
//     death?:Date;
// }
// 타입이 집합이라는 관점에서 extends의 의미는 '~에 할당 가능한', '~의 부분 집합'이라는 의미로 받아들일 수 있다.
// PersonSpan 타입의 모든 값은 문자열 name속성을 가져야한다. 그리고 속성을 가져야 제대로 부분집합이 된다.

interface Vector1D { x:number;}
interface Vector2D extends Vector1D { y: number;}
interface Vector3D extends Vector2D { z: number;}

// Vector3D는 Vector2D의 서브타입이고 Vector2D는  Vector1D의 서브타입이다.
// (클래스관점에선느 '서브클래스'가 된다.) 보통 이런 관계는 상속 관계로 그림
 

// sum

// - 타입을 값의 집합으로 생각하면 이해가 편함(타입의 범위). 이 집합은 유한(boolean 또는 리터럴 타입)하거나 무한(number 또는 string)한다.
// - 타입스크립트 타입은 엄격한 상속 관계가 아니라 겹쳐지는 집합(벤 다이어그램)으로 표현된다. 두 타입은 서로 서브타입이 아니면서도 겹쳐질 수 있다.
// - 한 객체의 추가적인 속성이 타입 선언에 언급되지 않더라도 그 타입에 속할 수 있음