const { useParams } = require('react-router-dom');

export const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // http запрос
  // }, [])
  return <div>Cast: {movieId}</div>;
};
