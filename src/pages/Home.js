import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink, useSearchParams } from 'react-router-dom';

// const BASE_URL = 'https://api.themoviedb.org/';
// const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTMwMzRiNTI4MTY1YzE4MjQwMTM2YzBmMzM4MjRjMCIsInN1YiI6IjY0ZTgzZWYzOTBlYTRiMDExZTc4ZTgwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.juvbZHO-iDNDBDlHJ9qABEJJAP9FTBctGdor2APc3oc';

// const fetchVideo = require('node-fetch');

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
      <h1>Trending today</h1>
      <ul>
        {movies
          ? movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link
                    to={`movies/${movie.id}`}
                    state={{ from: location }}
                  >
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

//   return (
//     <>
//       <div>Trending today</div>
//       <ul>
//         {movies.map(movie => {
//           return (
//             <li key={movie}>
//               <Link to={`${movie}`} state={{ from: location }}>
//                 {movie}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

export default Home;
