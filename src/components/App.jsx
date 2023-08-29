import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MoviesDetails from '../pages/MovieDetails';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Layout from '../components/Layout';

// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
