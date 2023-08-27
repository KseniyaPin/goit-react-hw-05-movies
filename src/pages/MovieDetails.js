import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  // useEffect(() => {
  // http запрос
  // }, [])

  console.log(location);

  return (
    <>
      <Link to={backLinkLocationRef.current}> Go back </Link>
      <h2>Additional information: {movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="rewieis">Rewieis</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
