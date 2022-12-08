// ## item3. 코드 생성과 타입이 관계 없음을 이해하기

// 타입스크립트 컴파일은  

// 1. `최신 타입스크립트, 자바스크립트를 브라우저에서 동작할 수 있도록 구버전의 자바스크립트로 트랜스 파일(transpile)한다.`
// 2. `코드의 타입 오류를 체크한다.`

// 이 두 가지 역할을 함.

// ### 1. 타입 오류가 있는 코드도 컴파일이 가능하다.

// - 컴파일은 타입 체크와 독립적으로 동작하기 때문에 타입 오류가 있는 코드도 컴파일이 가능하다.
    
//     → tsconfig.json에 noEmitOnError를 설정한다.
    
//     - tsconfig.json(만약 오류가 있을 때 컴파일하지 않으려면)
    
//     ```jsx
//     noEmitOnError 를 설정 or 빌드 도구에 동일하게 적용
//     ```
    

// - 타입스크립트 오류는  자바, c언어의 경고(wraning)과 비슷하다. 문제가 될 만한 부분을 알려주나 빌드를 멈추진 않는다.

// <aside>
// 💡 컴파일 and 타입체크

// </aside>

// 코드 생성만이 ‘컴파일’이라고 할 수 있는 것. 

// 작성한 타입스크립트가 유효한 자바스크립트라면 타입스크립트 컴파일러는 컴파일을 해낸다.

// 그러므로 코드에 오류가 있을 때 ‘타입체크에 문제가 있다’고 말하는 것이 더 정확한 표현이다.

// ### 2. 런타임에는 타입 체크가 불가능하다.

// - 컴파일 과정에서는 모든 인터페이스와 타입, 타입 구문들이 제거된다.

// ```jsx
// interface Square {
//     width: number;
// }
// interface Rectangle extends Square {
//     height: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//     if (shape instanceof Rectangle) {
//         return shape.width * shape.height;
//     } else {
//         return shape.width * shape.width;
//     }
// }
// ```

// - 그렇다면 런타입 타입 정보를 유지하는 방법은 뭘까?
//     1. height 속성의 존재를 체크
        
//         ```jsx
//         function calculateArea(shape: Shape) {
//             if ('height' in shape) {
//                 return shape.width * shape.height;
//             } else {
//                 return shape.width * shape.width;
//             }
//         }
//         ```
        
//     2. 명시적으로 런타임에 접근 가능한 타입 정보를 명시적으로 저장
        
//         ```jsx
//         interface Square {
//             kind: 'square';
//             width: number;
//         }
//         interface Rectangle {
//             kind: 'rectangle';
//             width: number;
//             height: number;
//         }
//         type Shape = Square | Rectangle;
        
//         function calculateArea(shape: Shape) {
//             if (shape.kind === 'rectangle') {
//                 return shape.width * shape.height;
//             } else {
//                 return shape.width * shape.width;
//             }
//         }
//         ```
        
//     3. 타입을 클래스로 생성한다.
        
//         ```jsx
//         	class Square {
//             constructor(public width: number) {}
//         }
//         class Rectangle extends Square {
//             constructor(public width: number, public height: number) {
//                 super(width);
//             }
//         }
//         type Shape = Square | Rectangle;
        
//         function calculateArea(shape: Shape) {
//             if (shape instanceof Rectangle) {
//                 return shape.width * shape.height;
//             } else {
//                 return shape.width * shape.width;
//             }
//         }
//         ```
        

// ### 3. 타입 연산은 런파임에 영향을 주지 않는다.

// ### 4. 런타임 타입은 선언된 타입과 다를 수 있다.

// ### 5. 타입스크립트 타입으로는 함수를 오버로드할 수 없다.

// ### 6. 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.

// - 타입과 타입 연산자는 자바스크립트 변환 시점에 제거되기 때문에, 런타임의 성능에 아무런 영향을 주지 않는다.
// - 타입스크립트의 정적 타입은 실제로 비용이 들어가지 않는다.
// - ‘런타임’ 오버헤드가 없는 대신, 타입스크립트 컴파일러는 ‘빌드타임’ 오버헤드가 있다.
// - 타입스트립트 팀은 컴파일러 성능을 매우 중요하게 생각해서 컴파일은 상당히 빠른 편이며 특히 증분 빌드 시 더욱 체감된다. 오버헤드가 커지면 빌드 도구에서 트랜스파일만을 설정하여 타입 체크를 건너 뛸 수 있다.

// sum : 

// - 코드 생성은 타입 시스템과 무관
// - 타입스크립트 타입은 런타임 동작이나 성능에 영향을 주지않는다.
// - 타입 오류가 존재하더라도 코드 생성(컴파일)은 가능하다.
// - 타입스크립트 타입은 런타임에 사용할 수 없다.
//     - 런타임에 타입을 지정하려면 타입 정보 유지를 위한 별도의 방법이 필요.
//     - 일반적으로 태그된 유니온, 속성 체크 방법을 사용.
//     - 타입스크립트 타입과 런타임 값 둘 다 제공하는 방법이 있다.