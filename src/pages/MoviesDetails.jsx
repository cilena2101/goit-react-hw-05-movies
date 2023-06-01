import { getMovieById } from 'services/api';
import { useParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300/';
// const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const MoviesDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (evt) {
        console.log(evt);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <div>
        <Link to={'/'}> Go back </Link>
      </div>
      <div>
        {movie && (
          <img
            src={`${BASE_POSTER_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        )}

        <h2>{movie.title}</h2>
        <div>Rating: {Math.round(movie.vote_average)}</div>
        <h2>Overview</h2>
        <div>{movie.overview}</div>
        <h2>Genres</h2>
        <div>
          {movie.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;