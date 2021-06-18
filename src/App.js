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
    <Route path="/movie/:id" component={Detail}/>
    
  </HashRouter>

  // :id 다이나믹 라우터~

}

export default App;