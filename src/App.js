import React from "react";
import axios from "axios";
import Movie from "./Movie";
// 임포트할 때 경로 잘 써주기 ㅠㅠ ./

import "./App.css"

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

        console.log(movies);

        this.setState({
            movies,
            isLoading: false
        });
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return <section className="container">
          {isLoading 
          ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          : <div className="movies">
              {movies.map(movie =>(
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres} />
              ))}
            </div>
          }
        </section>
        // 이렇게 긴 걸 3항 연산자로 처리하니까 괄호 미친듯이 헷갈린다...
    }
}

export default App;