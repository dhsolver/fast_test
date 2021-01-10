import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
  content: {
    cursor: 'pointer'
  },
  media: {
    height: 250,
    backgroundSize: 'cover'
  }
}));

const Tile = ({ id, title, year, poster, handleMovie }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleTileClick = () => {
    setChecked(!checked);
    handleMovie(id, !checked);
  };

  const handleCheck = event => {
    setChecked(event.target.checked);
    handleMovie(id, event.target.checked);
  };

  return (
    <Grid item xs={12} sm={4} onClick={handleTileClick}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <Checkbox
              checked={checked}
              onChange={handleCheck}
              color="primary"
            />
          }
          title={`${title} (${year})`}
        />
        <CardMedia
          className={classes.media}
          image={poster}
          title="Paella dish"
        />
      </Card>
    </Grid>
  );
};

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired
};

export default Tile;
