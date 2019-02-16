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

import puro_desamor from '../assets/puro_desamor.jpg';
import nnvav from '../assets/nnvav.jpg';
import covers from '../assets/covers.jpg';
import obsesion from '../assets/obsesion.jpg';
import mun from '../assets/mun.jpg';

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
    { album: 'Puro Desamor', song: 'Zeuz', link: 'https://youtu.be/WPTmUuPoR34' },
    { album: 'Puro Desamor', song: 'Ya No Más!', link: 'https://youtu.be/sg6LYQzfoK0' },
    { album: 'Puro Desamor', song: 'Veneno', link: 'https://youtu.be/QW_w9tQGj70' },
    { album: 'MUN Compilado', song: 'Careless Whisper', link: 'https://youtu.be/gABt-73p_mI' },
    { album: 'Puro Desamor', song: 'Ay Mínimo Escribe Un Adios!', link: 'https://youtu.be/oo8wfHthTTk' },
    { album: 'Puro Desamor', song: 'Te Enterraré El Tacón', link: 'https://youtu.be/-3V66nWHacs' },
    { album: 'NNVAV', song: 'Hombre De Hojalata', link: 'https://youtu.be/ogBxmxz8NqE' },
    { album: 'NNVAV', song: 'Ciencia Ficción', link: 'https://youtu.be/TO8147K6Kxw' },
    { album: 'NNVAV', song: '+D10', link: 'https://youtu.be/nQO4ac1YS4g' },
    { album: 'Zemmoa Covers', song: 'No Pensar En Ti', link: 'https://youtu.be/7RaP5qfxBvI' },
    { album: 'Zemmoa Covers', song: 'Ni Tú Ni Nadie', link: 'https://youtu.be/KdPU_PYbfdM' },
    { album: 'Zemmoa Covers', song: 'Qué Hice para Merecer Esto?', link: 'https://youtu.be/fTyQJyUOTJ0' },
    { album: 'Zemmoa Covers', song: 'Obsesión', link: 'https://youtu.be/j-ZGwzhD9Go' },
  ];
  let indents = [];
  data.forEach((element, index) => {
    let avatar = '';
    switch (data[index].album) {
      case 'Puro Desamor':
        avatar = puro_desamor;
        break;
      case 'NNVAV':
        avatar = nnvav;
        break;
      case 'Zemmoa Covers':
        avatar = covers;
        break;
      default:
        avatar = mun;
    }
    console.log(index, element)
    indents.push(
      <Card className={classes.card} key={index}>
        <CardHeader title={data[index].song} subheader={data[index].album} action={<IconButton></IconButton>}
          avatar={<Avatar aria-label="zemmoa" className={classes.avatar} alt="zemmoa" src={avatar}></Avatar>}>
        </CardHeader>
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
