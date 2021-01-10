import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Tile from '../Tile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  bottomBar: {
    textAlign: 'right',
    borderTop: `1px solid ${theme.palette.common.black}`,
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(1)
  },
  confirmRoot: {
    margin: 0,
    padding: theme.spacing(2)
  },
  modalTitle: {
    padding: theme.spacing(1)
  }
}));

const Content = ({ tiles }) => {
  const [savedMovies, setSavedMovies] = useGlobal('movies'); //eslint-disable-line
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const history = useHistory();
  const classes = useStyles();

  const handleSelectedMovie = (movieId, checked) => {
    if (checked) {
      setSelectedMovies([...selectedMovies, movieId]);
    } else {
      setSelectedMovies(selectedMovies.filter(value => value !== movieId));
    }
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const confirm = () => {
    const checkedMovies = tiles.filter(tile =>
      selectedMovies.includes(tile.imdbID)
    );

    setSavedMovies(checkedMovies);
    history.push('/checkout');
  };

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          {tiles.map(tile => (
            <Tile
              key={tile.imdbID}
              id={tile.imdbID}
              title={tile.Title}
              year={tile.Year}
              poster={tile.Poster}
              handleMovie={handleSelectedMovie}
            />
          ))}
        </Grid>
        {tiles.length > 0 && (
          <div className={classes.bottomBar}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalOpen(true)}
              disabled={selectedMovies.length > 0 ? false : true}
            >
              Confirm
            </Button>
          </div>
        )}
      </Container>
      <Dialog onClose={handleClose} open={modalOpen}>
        <DialogTitle onClose={handleClose} className={classes.modalTitle}>
          Confirm
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">Are you sure to go checkout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirm} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="default">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Content.propTypes = {
  tiles: PropTypes.array.isRequired
};

export default Content;
