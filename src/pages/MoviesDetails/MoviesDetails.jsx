import { getMovieById } from 'services/api';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState, useRef } from 'react';

import css from './MoviesDetails.module.css';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300/';

const MoviesDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState('');
  const backLinkLocationRef = useRef(location.state?.from ?? 'movies');
  const { movieId } = useParams();

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
        <Link to={backLinkLocationRef.current} className={css.goBack}> &#8592;Go back </Link>

      <div className={css.movieContainer}>
        {movie && (
          <img
            src={`${BASE_POSTER_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        )}

      <div>
        <h1>{movie.title}</h1>
        <div>User Score: {Math.round(movie.vote_average) *10}%</div>
        <h2>Overview</h2>
        <div>{movie.overview}</div>
        <h3>Genres</h3>     
          {movie.genres?.map((genre) => (
            <span key={genre.id} className={css.genres}>{genre.name}</span>
          ))}

      </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews">
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