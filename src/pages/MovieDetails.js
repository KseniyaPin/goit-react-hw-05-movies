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
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}> Go back </Link>
      <ul>
        <li>
          <Link to="categories">Категории</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
