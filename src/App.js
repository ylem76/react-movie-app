function Food({ fav }) {
    // console.log(propsArgs);
    // props를 함수의 첫번째 인자로 가져옴
    // {fav : 'kimchi'}
    // 콘솔을 찍어보면 오브젝트로 가져오는 것을 확인할 수 있다.

    // propsArgs.fav = {fav}
    // ES6로 오브젝트의 fav만 꺼내서 사용할 수 있는데, 인자 부분도 위와 같이 수정해주고.
    // 실제 사용시에는 아래와 같이 쓸 수 있다.
    return <h3>I love { fav }</h3>
}

function App() {
  return (
    <div className="App">
        wow
        <Food fav="kimchi" />
        <Food fav="햄버거" />
        <Food fav="치킨" />
        <Food fav="먹을거" />
    </div>
    // Food component에 prop'fav'에 값'kimchi'를 줌.
    // prop value에는 불리언, 오브젝트, 어레이 모두 가능
  );
}

export default App;
