// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MoviesDetails from '../pages/MoviesDetails';
import Cast from './Cast';
import Reviews from './Reviews';

// const Home = lazy(() => import('../pages/Home'));
// const MoviesDetails = lazy(() =>
//   import('../pages/MoviesDetails')
// );
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MoviesDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export const App = () => {
//   return (
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='/movies' element={<Movies />} />
//           <Route path='/movies/:movieId' element={<MoviesDetails />}>
//               <Route path='movies/:movieId/cast' element={<Cast />} />
//               <Route path='movies/:movieId/reviews' element={<Reviews />} />
//           </Route>
//         </Route>
//       </Routes>  
//   );
// };



export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>  
      </>
  );
};
