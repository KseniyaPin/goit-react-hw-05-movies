import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../Home/Home.module.css';

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTMwMzRiNTI4MTY1YzE4MjQwMTM2YzBmMzM4MjRjMCIsInN1YiI6IjY0ZTgzZWYzOTBlYTRiMDExZTc4ZTgwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.juvbZHO-iDNDBDlHJ9qABEJJAP9FTBctGdor2APc3oc',
  },
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(json => setMovies(json.results))
      .catch(errorMessage => console.log('Error message: ', errorMessage));
  }, []);

  return (
    <div>
      <h1 className={css.HomeTitle}>Trending today</h1>
      <ul>
        {movies
          ? movies.map(movie => {
              return (
                <li key={movie.id} className={css.HomeList}>
                  <Link to={`movies/${movie.id}`} state={{ from: location }}>
                    <div>
                      {/* <div>
                        <img
                          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                          alt="poster"
                        />
                      </div> */}

                      <p>{movie.title}</p>
                    </div>
                  </Link>
                </li>
              );
            })
          : []}
      </ul>
    </div>
  );
};

export default Home;
