interface CockpitControls {
  leftSideStick: number;
  rightSideStick: number;
}

// function getStickSetting(controls: CockpitControls) {
//   return controls.leftSideStick;
// }

function getStickSetting1(controls: CockpitControls) {
  const {leftSideStick, rightSideStick} = controls;
  if(leftSideStick === 0) {
    return rightSideStick;
  }
} //이 코드의 문제는?
// => 왼쪽 스틱의 로직과 동일하게 오른쪽 스틱이 중립일 때 왼쪽 스틱 값을 사용해야한다. 
//그러므로 오른쪽 스틱에 대한 체크를 코드에 추가해야한다.

function getStickSetting2(controls: CockpitControls){
  const {leftSideStick, rightSideStick} = controls;
  if(leftSideStick === 0){
    return rightSideStick;
  } else if (rightSideStick === 0 ) {
    return leftSideStick;
  }
  //?
}

// 둘 다 중립이 아닌 경우를 고려해보면 두 스틱이 비슷한 값이라면 스틱의 각도를 평균해서 계산할 수 있다.

function getStickSetting3(controls : CockpitControls) {
  const {leftSideStick, rightSideStick} = controls;
  if(leftSideStick === 0) {
    return rightSideStick;
  } else if(rightSideStick === 0) {
    return leftSideStick
  }
  if(Math.abs(leftSideStick - rightSideStick) <5) {
    return (leftSideStick + rightSideStick) / 2;
  }
  //?
}

//sum
// - 유효한 상태와 무효한 상태를 둘 다 표현하는 타입은 혼란을 초래하기 쉽고 오류를 유발하게 된다.
// - 유효한 상태만 표현하는 타입을 지향해야한다.