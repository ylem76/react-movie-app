import React from "react";
import axios from "axios";

class App extends React.Component {

  state = {
    isLoading:true,
    movies:[]
  };

  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // 통신을 기다리기 위해 async와 await 이용
  }
  componentDidMount() {

    // 데이터를 가져오는 방법
    // fetch 보다 axios 선호
    // axios : fetch 위에 있는 작은 레이어
    // 데이터를 가져오기 위한 함수를 따로 분리
    this.getMovies();

    

  }


  render() {
    const { isLoading } = this.state;
    return <div>
      { isLoading ? "Loading..." : "We are ready!"}
      </div>
  }
}

export default App;


