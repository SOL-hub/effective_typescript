// 🍗아이템8 타입 공간과 값 공간의 심벌 구분하기

// - ts의 심벌은 타입 공간이나 값 공간 중의 한 곳에 존재한다.
// - 심벌은 이럼이 같아도 속하는 공간에 따라 다른 것을 나타낼 수 있기 때문에 혼란스러울 수 있다.
interface Cylinder {
    radius: number;
    height: number;
}

const Cylinder = (radius: number, height: number) => ({radius, height});

// interface Cyliner에서 Cylinder는 타입으로 쓰인다.
// const Cyliner에서 Cylinder와 이름은 같지만 값으로 쓰이고 서로 아무 관련도 없다. 상황에 따라 Cylinder는 타입으로 값으로 쓰일 수 있음 이 점이 오류를 야기함
function calculateVolume(shape: unknown) {
    if(shape instanceof Cylinder) {
        //shape.radius //'{}' 형식에 'radius' 속성이 없습니다.ts(2339)
    }
}

//위코드 오류는 아마 instanceof를 이용해 shape가 Cylinder타입인지 체크하려했는데 instanceof는 js의 런타임 연산자고 값에 대해 연산한다. 따라서 instanceof Cylinder는 타입이 아니라
// 함수로 참조한다.

// 한 심벌이 타입인가 값인가는 언뜻 봐서 구분 짓기 어렵, 문맥 잘 살펴야함

type T1 = 'string literal';
type T2 = 123;
const v1 = 'string literal';
const v2 = 123;

//일반적으로 type, interface 다음 나오는 심벌은 타입,
//const 또는 let 선언에 쓰이는 것은 값

//일부 함수에서는 타입과 값이 반복적으로 번갈아 가며 나올 수 있다. 

// sum

// - 타입스크립트 코드를 읽을 때 타입인지 값인지 구분하는 방법을 터득해야한다. ( 타입스크립트 프레이 그라운드를 활용해 개념을 잡는 것이 좋습니다. )
// - 모든 값은 타입을 가지지만 타입은 값을 가지지 않습니다. type과 interface같은 키워드는 타입 공간에만 존재한다.
// - class나 enum 같은 키워드는 타입과 값 두가지로 사용될 수 있다.
// - typeof , this 그리고 많은 다른 연산자들과 키워드들은 타입 공간과 값 공간에서 다른 목적으로 사용될 수 있다.