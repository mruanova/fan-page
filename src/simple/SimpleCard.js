import React from 'react';
import PropTypes, { element } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';

import covers from '../assets/covers.jpg';
import obsesion from '../assets/obsesion.jpg';

const styles = {
  card: {
    display: 'inline-block',
    marginLeft: 12,
    marginTop: 12,
    width: 286,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const data = [
    { album: 'Zemmoa Covers', song: 'Obsesión', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Qué Hice para Merecer Esto?', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Ni Tú Ni Nadie', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'No Pensar En Ti', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: '+D10', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Ciencia Ficción', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Hombre De Hojalata', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Te Enterraré El Tacón', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Ay Mínimo Escribe Un Adios!', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Careless Whisper', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Veneno', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Ya No Más!', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'ZEUZ', link: 'https://www.youtube.com/watch?v=j-ZGwzhD9Go' },
  ];
  let indents = [];
  data.forEach((element, index) => {
    console.log(index, element)
    indents.push(
      <Card className={classes.card} key={index}>
        <CardHeader title={data[index].song} subheader={data[index].album} action={<IconButton></IconButton>}
          avatar={<Avatar aria-label="zemmoa" className={classes.avatar} alt="zemmoa" src={covers}>Z</Avatar>}
        />
        <CardMedia className={classes.media} image={obsesion} title={data[index].song} />
        <CardActions>
          <Button size="small" onClick={function () { window.open(data[index].link, '_blank') }}>Youtube</Button>
        </CardActions>
      </Card>
    );
  });
  return indents;
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
