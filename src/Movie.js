import React from "react";
import propTypes from "prop-types";

// movie 컴포넌트 제작
// movie 컴포넌트에서는 state 사용할 필요가 없음
// 따라서 class 컴포넌트가 아닌 함수 컴포넌트로 만들기

function Movie({id, year, title, summary, poster}) {
  return <div>
    <h4>{title}</h4>
  </div>
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
}

export default Movie;