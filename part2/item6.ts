//2장 : 타입스크립트의 타입 시스템

// 목표

// 1. 타입스크립트의 타입시스템이란 무엇인가
// 2. 사용방법은?
// 3. 무엇을 결정해야하는가
// 4. 가급적 사용하지말아야할 기능은 무엇인가

// 🍗아이템6 편집기를 사용하여 타입 시스템 탐색하기

//- ts를 설치하면
//   1. 타입스크립트 컴파일러(tsc)
//   2. 단독으로 실행할  있는 타입스크립트 서버(tsserver)
//
//   이 두가지를 실행할 수 있다.

// - 보통 ts 컴파일러를 실행하는 것이 주된 목적이지만 타입스크립트 서버 또한 ‘언어 서비스’를 제공한다는 점에서 중요하다.
// - 이 언어서비스에는 코드 자동완성, 명세 검사, 검색, 리팩터링이 포함된다.
// - 보통 편집기를 통해 언어 서비스를 사용하는데 타입스크립트 서버에서 언서 서비스를 제공하도록 설정하는게 좋다.
// - 편집기는 ts가 언제 타입 추론을 수행할 수 있을지에 대한 개념을 잡아준다.

let num = 12; //👉 num 변수의 타입을 number라고 직접 지정하지는 않았지만, ts는 12이라는 값의 타입을 알아낸다.

function add(a: number, b: number) {
  return a + b; //👉함수의 타입 또한 추론가능
}

//조건문의 분기에서 값의 타입이 어떻게 변하는지 살펴보는 것은 타입 시스템을 연마하는 매우 좋은 방법
function logMessage(message: string | null) {
  if (message) {
    message;
  }
} //조건문 외부에서 message의 타입은 string | null이지만 내부에서는 string이다.

function restOfPath(path: string) {
  return path.split("/").slice(1).join("/");
}
//편집기상의 오류를 살펴보는 것도 타입 시스템의 성향을 파악하는데 좋은 방법

function getElement(elOrId: string | HTMLElement | null): HTMElemnt {
  if (typeof elOrId === "object") {
    return elOrId;
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    return el;
  }
}

const response = fetch('http://example.com'); //👉 ts언어 서비스는 편집기상에 'Go to Definition' 기능을 제공

declare function fetch(
    input: RequestInfo, init?: RequestInit
) : Promise<Response>;
//fetch가 Promise를 반환, 두 개의 매개변수를 받는다.

// sum
// - 편집기에서 ts 언어서비스를 적극 활용하라
// - 편집기를 사용하며 어떻게 타입 시스템이 동작하는지, 어떻게 타입을 추론하는지 개념을 잡을 수 있다.
// - 타입스크립트가 동작을 어떻게 모델링하는지 알기 위해 타입 선언 파일을 찾아보는 방법을 터득해야한다.

//아이템7 타입이 값들의 집합이라고 생각하기