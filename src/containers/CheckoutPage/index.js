import React from 'react';
import { useGlobal } from 'reactn';
import MovieList from '../../components/MovieList';

const CheckoutPage = () => {
  const [savedMovies] = useGlobal('movies');
  return (
    <>
      <MovieList movies={savedMovies ? savedMovies : []} />
    </>
  );
};

export default CheckoutPage;
