// 🍗아이템10 객체 래퍼 타입 피하기
// 자바스크립트에는 객체 이외에도 기본형 값들에 대한 일곱 가지 타입이 있다.
// String, number, boolean, null, undefinde, symbol, bigint

// - string , number, boolean, null은 자바스크립트 초창기부터 존재
// - symbol 기본형은 ES2015에서 추가, bight는 최종 확정 단계이다.

// - 기본형들은 불변이며 메서드를 가지지 않는다는 점에서 객체와 구분된다.
    
//     (기본형인 string의 경우 메서드를 가지고 있는 것처럼 보인다.)

// 하지만 charAt는 string의 메서드가 아니며 string를 사용할 때 자바스크립트 내부적으로 많은 동작이 일어난다.
// 자바스크립트에는 메서드를 가지는 string ‘기본형’에는 메서드가 없지만, js에는 메서드를 가지는 String ‘객체’ 타입이 정의되어 있다. 
// js는 기본형과 객체 타입을 서로 자유롭게 변환한다.
// string 기본형에 charAt같은 메서드를 사용할 때 , 자바스크립트는 기본형을 String 객체로 래핑(wrap)하고 메서드를 호출하고 마지막에 래핑한 객체를 버린다.
// String.prototype을 몽키-패치한다면 앞서 설명한 내부적인 동작들을 관찰할 수 있다.

// 🙋‍♂️몽키패치란 런타임에 프로그램의 어떤 기능을 수정해서 사용하는 기법을 의미

//예제코드 (권장 X)
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function(pos) {
    //console.log(this.typeof this, pos);
    return originalCharAt.call(this, pos)
};

console.log('primitive'.charAt(3));

//위 코드 출력 내용 [String: 'primitive'] 'object' 3
//메서드 내의 this는 string 기본형이 아닌 String 객체 래퍼이다. String 객체를 직접 생성할 수 있으며 string 기본형처럼 동작
//그러나 string기본형과 String 객체 래퍼가 항상 동일하게 동작하는 것은 아님 String객체는 오직 자기 자신하고만 동일

//보통은 래퍼 객체를 직접 생성할 필요가 없습니다.
//ts는 기본형과 객체 래퍼 타입을 별도로 모델링한다.
// - string과 String
// number와 Number
// symbol과 Boolean
// bigint와 BigInt

// 그런데 string 을 사용할 때는 특히 유의해야한다. string을 String이라고 잘못 쓰면 X



// sum

// - 기본형 값에 메서드를 제공하기 위해 객체 래퍼 타입이 어떻게 쓰이는지 이해해야한다.
// - 직접 사용하거나 인스턴스를 생성하는 것은 피해야한다.
// - 타입스크립트 객체 래퍼 타입은 지양하고 대신 기본형 타입을 사용해야한다.
//     - String → string, Number → number, Boolean 대신 boolean, Symbol → symbol, BigInt대신 bigint을 사용해야한다.