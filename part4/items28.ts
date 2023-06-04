// 유효한 상태만 표현하는 타입을 지향하기

interface State {
  pageText : string;
  isLoading : boolean;
  error?: string;
}

// function renderPage(state : State) {
//   if(state.error) {
//     return `Error! ${currentPage} : ${state.error}`;
//   } else if(state.isLoading) {
//     return `Loading ${currentPage}...`;
//   }
//   return `<h1>${currentPage}</h1>\n$${state.pageText}`
// }

// async function changePage(state: State, newPage: string) {
//   state.isLoading = true;
//   try {
//     const response = await fetch(getUrlForPage(newPage));
//     if(!response.ok) {
//       throw new Error( `Unable to load ${newPage}: ${response.statusText}`);
//     }
//     const text = await response.text();
//     state.isLoading = false;
//     state.pageText = text;
//   } catch (e) {
//     state.error = '' + e;
//   }
// }

// changePage의 문제점
// - 오류가 발생했을 때 state.isLoading을 false로 설정하는 로직이 빠져있다.
// - state.error를 초기화하지 않았기 때문에, 페이지 전환 중에 로딩 메시지 대신 과거의 오류 메시지를 보여주게 된다.
// - 페이지 로딩 중 유저가 페이지를 바꾸면 어떤 일이 생길 때 예상하기 어렵다.

// 두 가지 속성이 동시에 정보 부족, 
// 두 가지 속성이 충돌할 수 있다.

// state타입은 isLoading이 true이면서 동시에 error 값이 설정되는 무효한 상태를 허용한다.
// 무효한 상태가 존재하면 render() 와 changePage() 둘 다 제대로 구현할 수 없게 된다.

interface RequestPending {
  state: 'pending';
}

interface RequestError {
  state: 'error';
  error: string;
}

interface RequestSuccess {
  state: 'ok';
  pageText: string;
}

type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
  currentPage: string;
  requests: {[page: string]: RequestState}
}

//상태를 나타내는 타입의 코드 길이가 길어지긴 했지만 무효한 상태를 허용하지 않도록 개선됐다.