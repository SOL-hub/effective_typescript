// 매핑된 타입을 사용하여 값을 동기화 하기
interface ScatterProps {
  //the data
  xs : number[]
  ys : number[]

  //Display
  xRange: [number, number]
  yRange: [number, number]
  color: string

  // Events
  onClick: (x:number, y:number, index:number) => void
}

function shouldUpdate(oldProps: ScatterProps, newProps:ScatterProps) { 
  let k: keyof ScatterProps 
  for(k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if(k !== 'onClick') return true
    }
  }
  return false 

  //props비교해서 바뀐게 onClick 아니면 true라고해서  위 얘들이 바뀌었을 때만 업데이트를 진행하고 
  //onClick은 매번 새로 만들어지는 함수니까 무시
}

//두번째 최적화 접근
// 실패에 열린 접근법 사용

function shouldUpdate2(oldProps: ScatterProps, newProps: ScatterProps) {
  return ( //밑과 같이 하나씩 비교하고 onClick에 대해서는 비교X
    oldProps.xs !== newProps.xs ||
    oldProps.ys !== newProps.ys ||
    oldProps.xRange !== newProps.xRange ||
    oldProps.yRange !== newProps.yRange ||
    oldProps.color !== newProps.color
    // (no check for onClick)

  )
}
export default {}