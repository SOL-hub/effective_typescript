
// function renderPage(state: State) {
//   const {currentPage} = state;
//   const requestState = state.requests[currentPage];
//   switch (requestState.state) {
//     case 'pending':
//       return `Loading ${currentPage}...`;
//     case 'error':
//       return `Error ${currentPage}: ${requestState.error}`;
//     case 'ok':
//       return `<h1>${currentPage}</h1>\n${requestState.pageText}`
//   }
// }

// async function changePage(state: State, newPage: string ) {
//   state.requests[newPage] = {state: 'pending'};
//   state.currentPage = newPage;
//   try {
//     const response = await fetch(getUrlForPage(newPage));
//     if(!response.ok) {
//       throw new Error(`Unable ${newPage}: ${response.statusText}`);
//     }
//     const pageText = await response.text();
//     state.requests[newPage] = {state: 'ok', pageText};
//   } catch (e) {
//     state.requests[newPage] = {state: 'error', error: '' + e}
//   }
  
// }

//sum
// - 유효한 상태와 무효한 상태를 둘 다 표현하는 타입은 혼란을 초래하기 쉽고 오류를 유발하게 된다.
// - 유효한 상태만 표현하는 타입을 지향해야한다.