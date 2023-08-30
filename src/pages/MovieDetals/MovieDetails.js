import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import css from '../MovieDetals/MovieDetals.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const [state, setState] = useState({});

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;

  // http запрос
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
      .then(json => setState(json))
      .catch(errorMessage => console.log('Error message: ', errorMessage));
  }, [url]);

  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.GoBack}>
        {' '}
        Go back{' '}
      </Link>

      <div className={css.WrappMovie}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${state.poster_path}`}
          alt="Movies poster"
          className={css.Poster}
        />
        <div className={css.InfoMovie}>
          <h2>
            {state.title} ({new Date(state.release_date).getFullYear()})
          </h2>
          <p>
            User score:
            {state.vote_average ? state.vote_average.toFixed(1) * 10 : ''}%
          </p>
          <h3>Overview</h3>
          <p>{state.overview}</p>
          <h3>Genres</h3>
          <p>
            {state.genres && state.genres.map(movie => movie.name).join(' ')}
          </p>
        </div>
      </div>

      <div>
        <p className={css.Additional}>Additional information</p>
        <ul className={css.AdditionalList}>
          <li className={css.AdditionalItem}>
            <Link
              to={`/movies/${movieId}/cast`}
              state={backLinkLocationRef.current}
            >
              Cast
            </Link>
          </li>
          <li className={css.AdditionalItem}>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={backLinkLocationRef.current}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
