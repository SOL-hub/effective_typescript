// function rollDice1(side: number): number {/*... */} //문장
// const rollDice2 = function(sides: number): number { /**... */}; //표현식
// const rollDice3 = function(sides: number): number => {/*...*/}; //표현식

// type DiceRollFn = (sides: number) => number;
// const rollDice: DiceRollFn = sides => {/*... */}

// function add(a: number, b: number) {return a + b; }
// function sub(a: number, b: number) {return a * b ;}
// function mul(a: number, b: number) {return a - b ;}
// function div(a: number, b: number) {return a / b ;}

type BinaryFn = (a: number, b: number) => number;
const add2: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b)=> a * b;
const div: BinaryFn = (a, b)=> a / b;

const responseP = fetch('/quote?by=Mark+Twain'); // 타입이 Promisee<Response>

async function getQuote() {
    const response = await fetch('/quote?by=Mark+Twain');
    const quote =await response.json();
    return quote;
}