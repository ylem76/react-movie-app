import React from "react";
class App extends React.Component {

  state = {
    count:0
  };

  add = () => {
    // this.state.count = 1;
    // 이렇게 직접 작성해도 반영이 안 됨.
    // 여기서 변경하는 state 값을 다시 render()를 실행해서 화면에 뿌리는 과정이 필요함.

    // this.setState({count: this.state.count + 1});
    // setState를 이용하면 값이 변하는 것을 감지,
    // render 함수도 (변화가 있는 부분만)새로고침 해준다.


    this.setState(current => ({ count:current.count + 1 }));
    // this.state를 직접 가져와서 변경하는 건 좋은 방식이 아님.
    // 리액트에서는 함수를 이용해 current값을 변경할 수 있음.
    // 외부의 상태에 의존하지 않는 가장 좋은 방법..(?)

    // setState를 호출할 때마다 리액트는 새로운 state값과 함께 render 함수를 호출한다!!
  }
  minus = () => {
    this.setState(current => ({ count:current.count - 1 }));
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

export default App;


