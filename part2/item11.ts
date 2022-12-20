// interface Room {
//     numDoors: number;
//     ceilingHeightFt: number;
// }

// // const r: Room = {
// //     numDoors: 1,
// //     ceilingHeightFt: 10,
// //     // elephant: 'present', 👉 개체 리터럴은 알려진 속성에만 지정할 수 있으며 'Room 형식에 'elephant'이 없습니다.
// // }

// const obj = {
//     numDoors: 1,
//     ceilingHeightFt: 10,
//     elephant: 'present',

// };

// const r: Room = obj; //정상

// // obj 타입은 
// // numDoors:number;
// // ceilingHeightFt: number;
// // elephant: string

// // 으로 추론된다. obj타입은 Room 타입의 부분 집합을 포함으로 Room에 할당 가능, 타입체커 통과.

// // 런타임에 예외코드를 던지는 코드에 오류를 표시한 것뿐 아닌 의도와 다른 작성 코드까지 찾으려하는 욕심쟁이 ts
// // interface Options {
// //     title: string;
// //     darkMode?: boolean
// // }
// // function createWindow(options: Options){
// //     if(options.darkMode) {
// //         setDarkMode();
// //     }
// //     //...
// // }
// // createWindow({
// //     title: 'Spider Solitaire',
// //     darkmode: true
// // })

// // const o1: Options = document; //정상
// // const o2: Options = new HTMLAnchorElement; //정상

// // const o: Options = {darkmode: true, title: 'Ski Free'};

// // const intermediate = {darkmode: true, title: 'Ski Free'};
// // const o: Options = intermediate;

// // const o3 ={ darkmode: true, title: 'Ski Free'} as Options; //정상

// // interface Options {
// //     darkMode?: boolean;
// //     [otherOptions: string]: unknown;
// // }

// // const o: Options = {
// //     darkmode: true //정상
// // };

// interface LineChartOptions {
//     logscale?: boolean;
//     invertedYAis?:boolean;
//     areaChart?: boolean;
// }

// // const opts: { logscale: true};
// // const o: LineChartOptions = opts;
//  // ~'{ logScale: boolean }' 유형에
//  // 'LineChartOptions' 유형과 공통적인 속성이 없다.


//  interface Room {
// 	numDoors: number
// 	ceilingHeightFt: number
// }

// function setDarkMode()  {}
// interface Options {
//     title: string
//     darkMode?:boolean
// }

// function createWindow(options: Options) {
//     if(options.darkMode) {
//         setDarkMode()
//     }
//     //...
// }

// createWindow({
//     title: 'Spider Solitaire',
//     darkmode: true,
// })

