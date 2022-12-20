const wyoming: TState = {
    name: 'wyoming',
    capital: 'Cheyenne',
    population: 500_000
}
// 형식은 'TState'형식에 할당할 수 없으며
// 개체 리터럴을 알려진속성만 지정할 수 있으며
// 'TState' 형식에 'population가 없다.
type TDict = { [key: string]: string };
interface IDict {
    [key: string]: string;
}

// 함수 타입도 인터페이스나 타입으로 정의ok
type TFn = ( x: number) => string;
interface IFn {
    (x: number): string;
}

const toStrT: TFn = x => '' + x; //정상
const toStrI: IFn = x => '' + x; //정상