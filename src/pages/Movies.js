import { useEffect, useState, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Читаем строку, в зависимости от какого-то параметра
  const movieId = searchParams.get('id') ?? '';

  const url = `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1`;

  // 	http запрос, чтобы получить список фильмов

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
      .then(json => setMovies(json.results))
      .catch(errorMessage => console.log('Error message: ', errorMessage));
  }, [url, fetch]);

  // Записываем

  const updateQueryString = evt => {
    evt.preventDefault();
    if (evt.target.movieIdValue.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ id: evt.target.movieIdValue.value });
    evt.currentTarget.movieIdValue.value = '';
  };

  // фильтр фильма
  const filteredMovies = useMemo(
    () =>
      movies.filter(movie =>
        movie.title.toLowerCase().includes(movieId.toLowerCase())
      ),
    [movies, movieId]
  );

  return (
    <div>
      <form onSubmit={updateQueryString}>
        <input type="text" name="movieIdValue" />
        <button>Search movie</button>
      </form>
      {movies.length ? (
        <ul>
          {filteredMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <p> {movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Sorry we don't have this movie.</h2>
      )}
    </div>
  );
};

export default Movies;
