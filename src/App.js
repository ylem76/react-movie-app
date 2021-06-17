import React from "react";

// 리액트의 클래스 컴포넌트는 render 말고 더 많은 게 있다.
// 각각의 컴포넌트들은 라이프사이클 메소드를 가지고 있는데,
// 기본적으로 리액트가 컴포넌트를 생성하고 없애는 방법.

// 컴포넌트가 생성될 때 render 전에 호출되는 몇가지 function들이 있고
// 컴포넌트가 render된 후에 호출되는 function들이 있다.
// 컴포넌트가 update될 때 호출되는 또다른 function들.

// 주로 사용하는 것들을 소개하자면
// mounting, updating, unmounting

// mounting : 페이지를 열 때 등등
// constructor() -> render() -> componentDidMount()
// 컴포넌트가 마운트 될 때 constructor를 호출

// updating : 버튼을 눌렀을 때 등등
// render() -> componentDidUpdated()

// unmounting : 페이지 이동을 할 때 등등
// cpomponentWillUnmount()

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  state = {
    count:0
  };

  add = () => { 
    this.setState(current => ({ count:current.count + 1 }));
  }
  minus = () => {
    this.setState(current => ({ count:current.count - 1 }));
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate() {
    console.log('did updated');
  }

  componentWillUnmount() {
    console.log('bye');
  }


  render() {
    console.log('render')
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

export default App;


