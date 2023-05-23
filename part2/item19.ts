// 추론 가능한 타입을 사용해 장화한 코드 방지하기
// ts에 많은 타입 구문은 사실 불필요, 코드의 모든 변수에 타입을 선언하는 건 비생산적야!
// 타입스크립트는 입력 받아 연산하는 함수가 어떤 타입을 반환하는지 정확히 알고 있어서 반환 타입을 작성하지 않아도 되는 경우가 있음

const person: {
  name : string
  born: {
    where: string
    when: string
  }
  died: {
    where: string
    when: string
  }
} = {
  name: 'Sojourner Truth',
  born: {
    where: 'battle',
    when:'c.1888',
  },
  died: {
    where:'swarrte',
    when:'1010',
  }
}

//객체에 타입이 이렇게 있는데 얘네를 생략해도 타입스크립트들은 어떤 타입인지 다 잘 알고 있음 뭘 써~
//배열의 경우도 마찬가지이다.

function square(nums: number[]) {
  return nums.map(x => x * x)
}

const squares = square([1,2,3,4]) // Typs is number[]

interface Product {
  id: number
  name: string
  price: number
}

function logProduct(product: Product) {
  const id: number = product.id  //:number 불필요
  const name: string = product.name //:string 불필요
  const price: number = product.price // :number 불필요
  console.log(id, name, price)
}


function logProduct2({id, name, price }: Product) {
  console.log(id, name, price)
}


export default{}

