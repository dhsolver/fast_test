import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../../components/Spinner';
import Content from '../../components/Content';
import request, { makeJsonRequestOptions } from '../../utils/request';
import queryString from 'query-string';

const useStyles = makeStyles(theme => ({
  searchMovie: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
  }
}));

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const location = useLocation();
  const { search } = queryString.parse(location.search);

  useEffect(() => {
    if (search) {
      setLoading(true);

      const requestOptions = makeJsonRequestOptions({
        method: 'GET',
        searchParam: search
      });

      request(requestOptions)
        .then(({ data }) => {
          if (data.Search) {
            setMovies(data.Search);
          }
          setLoading(false);
        })
        .catch(error => {
          console.log(error.message);
          setLoading(false);
        });
    }
  }, [search]);

  if (!search) {
    return (
      <Typography variant="h4" className={classes.searchMovie}>
        Please seach movies!
      </Typography>
    );
  }

  return (
    <>
      <Spinner open={loading} />
      {movies.length > 0 ? (
        <Content tiles={movies} />
      ) : (
        <Typography variant="h4" className={classes.searchMovie}>
          Not found movies!
        </Typography>
      )}
    </>
  );
};

export default LandingPage;
