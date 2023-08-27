const { useParams } = require('react-router-dom');

export const Rewieis = () => {
  const { movieId } = useParams();
  return <div>Rewieis: {movieId}</div>;
};
