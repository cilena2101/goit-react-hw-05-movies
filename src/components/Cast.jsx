import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w200/';
const CastMovie = () => {
  const [cast, setCast] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (evt) {
        console.log(evt);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast.map(({ id, profile_path, name, character }) => (
        <div key={id}>
          <img src={`${BASE_POSTER_URL}${profile_path}`} 
          alt={name} />
          <p> {`${name}`}</p>
          <p>Character: {`${character}`}</p>
        </div>
      ))}
    </>
  );
};

export default CastMovie;