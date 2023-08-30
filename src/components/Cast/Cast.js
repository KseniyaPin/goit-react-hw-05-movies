import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Cast/Cast.module.css'

const Cast = () => {
  const [state, setState] = useState([]);
  const { movieId } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

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
      .then(json => setState(json.cast))
      .catch(errorMessage => console.log('Error message: ', errorMessage));
  }, [url, fetch]);

  return (
    <ul className={css.CastList}>
      {state.map(movie => (
        <li key={movie.id} className={css.CastItem}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.profile_path}`}
              alt={movie.name}
              className={css.CastImg}
            />
          </div>

          <p>{movie.name}</p>
          <p>Character: {movie.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
