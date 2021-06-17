import React from "react";
// 클래스 컴포넌트를 쓸 때에는 react를 자동으로 임포트 시켜주네.
// react.component에서 가져와서 app으로 확대된다고 이해하면 될까?
class App extends React.Component {

  state = {
    count:0
  };

  add = () => {
    console.log('add');
  }
  minus = () => {
    console.log('minus');
  }

  // class 컴포넌트는 return이 없고 render methods가 있음.
  render() {
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

// {this.add()}는 바로 실행
// 클릭했을 때에만 수행해야하므로 {this.add}로 적기

export default App;


