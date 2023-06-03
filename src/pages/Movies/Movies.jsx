import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const currentQuery = searchParams.get('movieId');
    if (!currentQuery || !searchClicked) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieDetails(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieByQuery();
  }, [searchParams, searchClicked]);

  const handleSearch = () => {
    setSearchParams({ movieId: searchParams.get('movieId') });
    setSearchClicked(true);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={searchParams.get('movieId') || ''}
        onChange={evt => setSearchParams({ movieId: evt.target.value })}
      />

      <button onClick={handleSearch}>Search</button>

      {movies.length > 0 && <MovieList movies={movies} />}

    </>
  );
};

export default Movies;























// import { useState, useEffect } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';
// import { getMovieDetails } from 'services/api';
// import MovieList from 'components/MovieList';
// // import Form from 'components/Form/Form';

// // import { Button } from 'components/Button/Button';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const currentQuery = searchParams.get('movieId');
//     if (!currentQuery) return;

//     const fetchMovieByQuery = async () => {
//       try {
//         const movieByQuery = await getMovieDetails(currentQuery);
//         setMovies(movieByQuery);
//       } catch (evt) {
//         console.log(evt);
//       }
//     };
//     fetchMovieByQuery();
//   }, [searchParams]);

//   const visibleMovies = movies.filter(movie => movie.includes(searchParams.get('movieId')));


//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Name movie"
//         autoFocus
//         value={searchParams.get('movieId') || ''}
//         onChange={evt => setSearchParams({ movieId: evt.target.value })}
//       />
//   <button onClick={() => setSearchParams({ movieId: searchParams.get('movieId') })}>
//   Search
// </button>

//       {/* <Form setSearchParams={setSearchParams} /> */}
//       {/* {movies.length > 0 && <MovieList movies={movies} />} */}

//       {visibleMovies.length > 0 && <MovieList movies={visibleMovies} />}
//     </>
//   );
// };

// export default Movies;




// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getMovieDetails } from 'services/api';
// import MovieList from 'components/MovieList';

// const Movies = ({ history }) => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const currentQuery = searchParams.get('movieId');
//     if (!currentQuery) return;

//     const fetchMovieByQuery = async () => {
//       try {
//         const movieByQuery = await getMovieDetails(currentQuery);
//         setMovies(movieByQuery);
//       } catch (evt) {
//         console.log(evt);
//       }
//     };
//     fetchMovieByQuery();
//   }, [searchParams]);

//   const visibleMovies = movies.filter(movie => movie.name.includes(searchParams.get('movieId')));

//   const handleSearch = () => {
//     const movieId = searchParams.get('movieId');
//     history.push(`/?movieId=${movieId}`);
//     setSearchParams({ movieId });
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Name movie"
//         autoFocus
//         value={searchParams.get('movieId') || ''}
//         onChange={evt => setSearchParams({ movieId: evt.target.value })}
//       />

//       <button onClick={handleSearch}>Search</button>

//       {visibleMovies.length > 0 && <MovieList movies={visibleMovies} />}
//     </>
//   );
// };

// export default Movies;

