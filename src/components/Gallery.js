const { useParams } = require('react-router-dom');

export const Gallery = () => {
  const { movieId } = useParams();
  return <div>Image Gallery: {movieId}</div>;
};
