import { Link } from "react-router-dom";
import "./Navigation.css"
function Navigation() {
  return <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>

    // <a href="/">Home</a>
    // a 태그를 직접 쓰면 http통신이 일어나게 되어 다시 로딩해야한다.
    // spa에서 그런 걸 원하는 것이 아니므로, a태그 대신
    // react-router-dom의 Link를 이용한다.

    // Link를 사용하면, 해당 컴포넌트는 라우터 안에 위치해야 한다.
    // 라우터 밖에서는 사용할 수 없음.
}

export default Navigation;