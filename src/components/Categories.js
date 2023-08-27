const { useParams } = require('react-router-dom');

export const Categories = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // http запрос
  // }, [])
  return <div>Name categories: {movieId}</div>;
};
