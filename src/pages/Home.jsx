import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies('')
      .then(movies => {
        setMovies(movies);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка отримання популярних фільмів:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
