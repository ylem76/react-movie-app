import React from "react";
import axios from "axios";
import Movie from "./Movie";
// 임포트할 때 경로 잘 써주기 ㅠㅠ ./

class App extends React.Component {

    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // json을 가져올 때 쿼리스트링을 이용해 평가가 높은 순으로 정렬

        // 복잡한 json 데이터를 접근할 때 간결하게 (es6문법)
        // 실제 변수명은 가장 마지막 key 이름이 됨.

        this.setState({
            movies,
            isLoading: false
        });
        // {movies : movies} => {[state의 movies] : [api에서 가져오는 movies]}
        // es6 축약으로 {movies} 로 작성 가능
        // 데이터를 다 받아오면 로딩도 완료



    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return <div> {isLoading ? "Loading..." : movies.map(movie =>
          <Movie key={movie.key} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
        )} </div>

        // isLoading이 fase가 되면 movies map 개별 아이템마다 movie컴포넌트 리턴
        // prop으로 id year title summary poster 사용
        // key prop으로 id 사용
    }
}

export default App;