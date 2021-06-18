import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
// css 임포트


function Movie({id, year, title, summary, poster, genres}) {
  return <div className="movies__movie">
    <img src={poster} alt={title} name={title} />
    <div className="movie__data">
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li key={index} className="genres_genre">{genre}</li>
        ))}
      </ul>

      <p className="movie__summary">{summary}</p>
    </div>
  </div>
}
// JSX에서는 class가 아니라 className으로 사용하기

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;