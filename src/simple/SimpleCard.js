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
import obsesion from '../assets/covers.jpg';
import mun from '../assets/mun.jpg';
import quehice from '../assets/quehice.jpg';
import nituninadie from '../assets/nituninadie.jpg';
import nopensar from '../assets/nopensar.jpg';
import d10 from '../assets/d10.jpg';
import ciencia from '../assets/ciencia.jpg';
import hojalata from '../assets/hojalata.jpg';
import tacon from '../assets/tacon.jpg';
import ayminimo from '../assets/ayminimo.jpg';
import careless from '../assets/careless.jpg';
import veneno from '../assets/veneno.jpg';
import yanomas from '../assets/yanomas.jpg';
import zeuz from '../assets/zeuz.jpg';
import wallpaper from '../assets/wallpaper.jpg';

const styles = {
  card: {
    display: 'inline-block',
    marginLeft: 12,
    marginTop: 12,
    width: 290,
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
    backgroundPosition: 'initial',
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
    { album: 'Zemmoa Covers', song: 'Obsesión', link: 'https://youtu.be/j-ZGwzhD9Go' },
    { album: 'Zemmoa Covers', song: 'Qué Hice Para Merecer Esto?', link: 'https://youtu.be/fTyQJyUOTJ0' },
    { album: 'Zemmoa Covers', song: 'Ni Tú Ni Nadie', link: 'https://youtu.be/KdPU_PYbfdM' },
    { album: 'Zemmoa Covers', song: 'No Pensar En Ti', link: 'https://youtu.be/7RaP5qfxBvI' },
    { album: 'NNVAV', song: '+D10', link: 'https://youtu.be/nQO4ac1YS4g' },
    { album: 'NNVAV', song: 'Ciencia Ficción', link: 'https://youtu.be/TO8147K6Kxw' },
    { album: 'NNVAV', song: 'Hombre De Hojalata', link: 'https://youtu.be/ogBxmxz8NqE' },
    { album: 'Puro Desamor', song: 'Te Enterraré El Tacón', link: 'https://youtu.be/-3V66nWHacs' },
    { album: 'Puro Desamor', song: 'Ay Mínimo Escribe Un Adios!', link: 'https://youtu.be/oo8wfHthTTk' },
    { album: 'MUN Compilado', song: 'Careless Whisper', link: 'https://youtu.be/gABt-73p_mI' },
    { album: 'Puro Desamor', song: 'Veneno', link: 'https://youtu.be/QW_w9tQGj70' },
    { album: 'Puro Desamor', song: 'Ya No Más!', link: 'https://youtu.be/sg6LYQzfoK0' },
    { album: 'Puro Desamor', song: 'Zeuz', link: 'https://youtu.be/WPTmUuPoR34' },
  ];
  let indents = [];
  data.forEach((element, index) => {
    let song = '';
    switch (data[index].song) {
      case 'Obsesión': song = obsesion; break;
      case 'Qué Hice Para Merecer Esto?': song = quehice; break;
      case 'Ni Tú Ni Nadie': song = nituninadie; break;
      case 'No Pensar En Ti': song = nopensar; break;
      case '+D10': song = d10; break;
      case 'Ciencia Ficción': song = ciencia; break;
      case 'Hombre De Hojalata': song = hojalata; break;
      case 'Te Enterraré El Tacón': song = tacon; break;
      case 'Ay Mínimo Escribe Un Adios!': song = ayminimo; break;
      case 'Careless Whisper': song = careless; break;
      case 'Veneno': song = veneno; break;
      case 'Ya No Más!': song = yanomas; break;
      case 'Zeuz': song = zeuz; break;
      default: song = wallpaper;
    }
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
        <CardMedia className={classes.media} image={song} title={data[index].song} />
        <CardActions>
          <Button size="small" onClick={function () { window.open(data[index].link, '_blank') }}>Video</Button>
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
