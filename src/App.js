import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>    
    
  </HashRouter>

  // 라우트에는 두 가지 prop이 필요함
  // 하나는 렌더링(주소)이 다른 하나는 뭘 할 지(컴포넌트).
  // http://localhost:3000/react-movie-app/#/about

  // <Route path="/about" component={About}/>
  // 이렇게 설정하면 두 가지가 둘 다 한꺼번에 겹쳐 나옴 왜 그런가 하면
  // 리액트는 일단 주소를 모두 가져와 조건에 해당하는 걸 모두 렌더링 함.
  // exact={true} 옵션을 추가해서 해당하는 페이지에서만 렌더링 되게 
  




}

export default App;