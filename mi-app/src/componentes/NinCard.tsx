import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardNintendo } from '../data/CardsNintendo';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface NinCardProps {
  data: CardNintendo;
}

const NinCard: React.FC<NinCardProps> = ({ data }) => {
  const shareUrl = window.location.href;

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        background: '#84a98c', 
        margin: 2, 
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={data.avatarImage} sx={{ bgcolor: 'transparent' }} aria-label="logo" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>
            {data.title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" sx={{ color: 'white' }}>
            {data.subheader}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        alt={data.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontFamily: 'Jolly Lodger, cursive', color: 'white' }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <FacebookShareButton url={shareUrl} title={data.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={data.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl} title={data.title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default NinCard;
