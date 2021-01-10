import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(2)
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  bottomBar: {
    textAlign: 'right',
    borderTop: `1px solid ${theme.palette.common.black}`,
    margin: theme.spacing(2),
    paddingTop: theme.spacing(1)
  }
}));

const MovieList = ({ movies }) => {
  const classes = useStyles();
  const history = useHistory();

  if (!movies.length) {
    return (
      <Typography variant="h5" className={classes.title}>
        Please select movies you want to buy.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        You selected {movies.length} movies.
      </Typography>
      <List className={classes.list}>
        {movies.map(movie => (
          <ListItem key={movie.imdbID}>
            <ListItemAvatar>
              <Avatar alt={movie.Title} src={movie.Poster} />
            </ListItemAvatar>
            <ListItemText primary={movie.Title} secondary={movie.Year} />
          </ListItem>
        ))}
      </List>
      <div className={classes.bottomBar}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/')}
        >
          Back
        </Button>
      </div>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
