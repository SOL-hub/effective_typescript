// interface Room {
//     numDoors: number;
//     ceilingHeightFt: number;
// }

// // const r: Room = {
// //     numDoors: 1,
// //     ceilingHeightFt: 10,
// //     // elephant: 'present', π κ°μ²΄ λ¦¬ν°λ΄μ μλ €μ§ μμ±μλ§ μ§μ ν  μ μμΌλ©° 'Room νμμ 'elephant'μ΄ μμ΅λλ€.
// // }

// const obj = {
//     numDoors: 1,
//     ceilingHeightFt: 10,
//     elephant: 'present',

// };

// const r: Room = obj; //μ μ

// // obj νμμ 
// // numDoors:number;
// // ceilingHeightFt: number;
// // elephant: string

// // μΌλ‘ μΆλ‘ λλ€. objνμμ Room νμμ λΆλΆ μ§ν©μ ν¬ν¨μΌλ‘ Roomμ ν λΉ κ°λ₯, νμμ²΄μ»€ ν΅κ³Ό.

// // λ°νμμ μμΈμ½λλ₯Ό λμ§λ μ½λμ μ€λ₯λ₯Ό νμν κ²λΏ μλ μλμ λ€λ₯Έ μμ± μ½λκΉμ§ μ°ΎμΌλ €νλ μμ¬μμ΄ ts
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

// // const o1: Options = document; //μ μ
// // const o2: Options = new HTMLAnchorElement; //μ μ

// // const o: Options = {darkmode: true, title: 'Ski Free'};

// // const intermediate = {darkmode: true, title: 'Ski Free'};
// // const o: Options = intermediate;

// // const o3 ={ darkmode: true, title: 'Ski Free'} as Options; //μ μ

// // interface Options {
// //     darkMode?: boolean;
// //     [otherOptions: string]: unknown;
// // }

// // const o: Options = {
// //     darkmode: true //μ μ
// // };

// interface LineChartOptions {
//     logscale?: boolean;
//     invertedYAis?:boolean;
//     areaChart?: boolean;
// }

// // const opts: { logscale: true};
// // const o: LineChartOptions = opts;
//  // ~'{ logScale: boolean }' μ νμ
//  // 'LineChartOptions' μ νκ³Ό κ³΅ν΅μ μΈ μμ±μ΄ μλ€.


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

