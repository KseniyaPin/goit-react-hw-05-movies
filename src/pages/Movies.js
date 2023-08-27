import { useState, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // типа наши фильмы с бэкэнда
  const [movies, setMovies] = useState([
    'Movies-1',
    'Movies-2',
    'Movies-3',
    'Movies-4',
    'Movies-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Читаем строку, в зависимости от какого-то параметра
  const movieId = searchParams.get('movieId') ?? '';

  // useEffect(() => {
  // 	http запрос, чтобы получить список фильмов
  // })

  // Записываем параметр
  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };
  // фильтр фильма

  // const filteredMovies = movies.filter(movie => movie.includes(movieId));

  const filteredMovies = useMemo(
    () => movies.filter(movie => movie.includes(movieId)),
    [movies, movieId]
  );

  console.log(location);

  return (
    <div>
      <h1>Films</h1>
      <div>
        <input type="text" value={movieId} onChange={updateQueryString} />
        <button onClick={() => setSearchParams({ c: 'hello' })}>
          Change sp
        </button>
        <ul>
          {filteredMovies.map(movie => {
            return (
              <li key={movie}>
                <Link to={`${movie}`} state={{ from: location }}>
                  {movie}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
