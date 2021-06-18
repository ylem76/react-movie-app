import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"

function App() {
  return <HashRouter>
    <Navigation />

    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={Detail}/>
    
  </HashRouter>

  // HashRouter 대신 browserRouter를 사용할 수도 있음
  // 브라우저 라우터를 사용하면 #해시 표시 없이 평범한 주소처럼 사용할 수 있으나,
  // 깃헙 페이지 관련 문제로 해시 라우터 사용중이라고 설명.

}

export default App;