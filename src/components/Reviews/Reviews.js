import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Reviews/Reviews.module.css'

const Reviews = () => {
  const [state, setState] = useState([]);
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTMwMzRiNTI4MTY1YzE4MjQwMTM2YzBmMzM4MjRjMCIsInN1YiI6IjY0ZTgzZWYzOTBlYTRiMDExZTc4ZTgwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.juvbZHO-iDNDBDlHJ9qABEJJAP9FTBctGdor2APc3oc',
      },
    };

    fetch(url, options)
      .then(response => response.json())
      .then(json => setState(json.results))
      .catch(errorMessage => console.log('Error message: ', errorMessage));
  }, [url]);

  return state.length ? (
    state.map(movie => (
      <div key={movie.id} className={css.ReviewsInfo}>
        <h2 className={css.ReviewsTitle}>Author: {movie.author_details.username}</h2>
        <p className={css.ReviewsText}> {movie.content}</p>
      </div>
    ))
  ) : (
    <p>Sorry, information is missing.</p>
  );
};

export default Reviews;
