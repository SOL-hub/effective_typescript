console.log('Cylinder 1 X 1 ', 'Surface area: ', 6.283185 * 1* +6.283185 * 1*1, 'Volume:', 3.14159 *1*1*1);

비슷한 코드가 반복되어 보기 불편, 값과 상수가 반복되는 바람에 드러나지 않은 오류까지 가지고 있다. 개선해보자.

const surface =(r, h) => 2* Math.PI *

이게 바로 반복하지 말라는 DRY(dont't repeat yourself) 원칙

interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
}

타입 중복은 코드 중복만큼 많은 문제를 발생시킨다.
예를 들어 선택적 필드인 middlename을 Person에 추가한다고 가졍해보자.
그럼 Person과 PersonWithBirthDate는 다른 타입이 된다.

타입에서 중복이 더 흔한 이유 중 하나는 공유된 패턴을 제거하는 메커니즘이 기존 코드에서 하던 것과 비교해 덜 익숙하기 때문.
헬퍼 함수 중복 제거와 동일한 활동이 타입 시스템에서는어던 것에 해당할 지 상상이 잘 안됨.
바트, 타입간에 매핑하는 방법을 익히면 타입 정의에서도 DRY의 장점을 알 수 있다.
반복을 줄이는 가장 간단한 방법은 타입에 이름을 붙이는 것.

function distance(a: {x: number, y: number}, b:{x: number, y: number}){
    return Math.sqrt(Math.pow(a.x- b.x, 2) + Math.pow(a.y - b.y, 2));
}

코드 수정해 타입에 이름 붙임

interface Point2D {
    x: number;
    y: number;
}

function distance(a: Point2D, b: Point2D) {/*... */}