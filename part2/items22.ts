// 타입 좁히기

// 일반적인 예시 null 체크
const el = document.getElementById('foo') //type is HTMLElement | null
if(el) {
  el //type is HTMLElement
  el.innerHTML = 'Party time'.blink()
}else {
  el //type is null
  alert('No element #foo')
}

//instanceof 사용


//속성 체크
interface A {
  a : number
}

interface B {
  b: number
}

function pickAB(ab: A | B) {
  if('a' in ab) {
    ab// this is A
  } else {
    ab // type is B
  }

  ab //type is A | B
}


// 또 다른 타입을 좁히는 방법은 명시적 '태그'를 붙이기
interface UploadEvent {
  type: 'upload'
  filename : string
  contents : string
}

interface DownloadEvent {
  type: 'download'
  filename: string
}
type AppEvent = UploadEvent | DownloadEvent

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case 'download' : 
    e //type is DownloadEvent
    break

    case 'upload':
      e //type is UploadEvent
      break
  }
}
export default{}

