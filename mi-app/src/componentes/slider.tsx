import * as React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';

const images = [
  'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/BVPSWA6JGRE3FBZJRQM74YVGGE.jpg',
  'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000016597/4dc8ab1f09ced6fb2953b2caedd978c1f23df33b62305bcf3140308962073d57',
  'https://www.4gamehz.com/wp-content/uploads/2023/09/Screenshot-2023-09-11-at-15-40-43-dying-light-2-2613765.jpg-immagine-WEBP-3840-%C3%97-2160-pixel-Riscalata-42.png',
];

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style, display: 'block', color: 'black', right: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      style={{ ...style, display: 'block', color: 'black', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 2, mx: 'auto', width: '100%', p: 2 }}>
      <Grid item xs={12}>
        <Box sx={{ width: '100%' }}>
          <Slider {...settings}>
            {images.map((url, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  backgroundColor: 'white',
                  textAlign: 'center',
                  mx: 1,
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s',
                }}
              >
                <Box
                  component="img"
                  src={url}
                  alt={`Slide ${index}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s',
                  }}
                />
                <Typography variant="h6" sx={{ mt: 1 }}>
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageSlider;
