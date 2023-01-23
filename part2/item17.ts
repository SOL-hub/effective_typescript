//변경 관련된 오류 방지를 위해 readonly 사용하기
function arraySum(arr: number[]) {
    let sum = 0,
    num
    while ((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}

function printTriangles(n: number) {
    const nums = [];
    for(let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums))
    }
}

//실행 시 문제 발생
// printTriangles(5) arraySum을 변경하지 않는다고 간주해서 문제 발생

// 1회차 : i = 0
// nums = [0]
// sum 0

// nums = [] 

// 2회차 :  
// i = 1
// nums = [1]
// sum = 1
// nums = []

// 3회차 : 
// i = 2 . . . 같은 형식

// function arraySum(arr: readonly number[]) {
//     let sum = 0,
//     num
//     while ((num = arr.pop()) !== undefined) {
//         sum += num;
//     }
//     return sum;
// }

// function printTriangles(n: number) {
//     const nums = [];
//     for(let i = 0; i < n; i++) {
//         nums.push(i);
//         console.log(arraySum(nums))
//     }
// }

