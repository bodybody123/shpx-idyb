import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Card, CardContent, CardMedia } from '@mui/material';

const category = [
  'All',
  'Lamp',
  'Chair',
  'Sofa'
];

const products = [
  {
    name: 'Chaise Molle',
    price: '$18.00',
    img: '5a1ccb9523e3c9 1.png'
  },
  {
    name: 'Chaise Molle',
    price: '$18.00',
    img: 'kisspng-eames-lounge-chair-table-charles-and-ray-eames-chair-5ad2f90b0af8f8 1.png'
  },
  {
    name: 'Chaise Molle',
    price: '$18.00',
    img: 'kisspng-table-lamp-floor-tripod-wood-lamp-5ac0f4e25b63a0 1.png'
  },
  {
    name: 'Chaise Molle',
    price: '$18.00',
    img: '—Pngtree—3d improvement section sofa furniture_5901883 1.png'
  },
  {
    name: 'Chaise Molle',
    price: '$18.00',
    img: 'kisspng-table-wardrobe-furniture-living-room-bedroom-tv-cabinet-material-download-5a8126deee57a4 1.png'
  },
  {
    name: 'Chaise Molle',
    price: '$18.00',
    img: 'kisspng-couch-sofa-bed-furniture-designer-hd-personality-of-the-sofa-5aa384d84b8ba6 1.png'
  },
]

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <>
    <AppBar 
      elevation={0} 
      color='transparent'
      position='sticky'>
      <Toolbar sx={{
        px: 3,
        justifyContent: 'space-between',
        minHeight: 104,
        maxHeight: 126
      }}>
        <Typography
          variant='h1'>
          SHPX
          </Typography>
          <IconButton sx={{
            fontSize: 40,
            color: '#4b4b4b'
          }}>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M12 18H3v-2h9v2zm9-5H3v-2h18v2zm0-5h-9V6h9v2z" fill="currentColor"></path></g></svg>
          </IconButton>
      </Toolbar>
    </AppBar>

    {/* Hero Section */}
    <Box sx={{
      position: 'relative',
      mt: 1.5,
      overflow: 'auto'
    }}>
      <BlurSurface sx={{top: '4em', ml: 4, py: 4 }} elevation={0}>
        <Typography 
          variant="h2">
          Modern Interior for your Dream House
        </Typography>
        <Typography
          variant='subtitle1'>
          We custom make design to suits your needs.
        </Typography>
      </BlurSurface>

      <Paper 
      elevation={0}
      sx={{
	      width: '80%',
	      backgroundImage: "url('img/hero.png')",
	      height: 365,
	      float: 'right',
	      backgroundPosition: 'left',
	      backgroundSize: 'cover',
        borderRadius: '0 0 0 60px'
        }} />
    </Box>

    {/* Products section */}
    <Box sx={{my: 6, mx: 4}}>
      <Toolbar sx={{ p: 0, justifyContent:'space-between'}}>
      <Typography variant='h2'>
        Products
      </Typography>
      <Button 
        endIcon={<GridiconsDropdown/>}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        All</Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {category.map((val, i) => {
          return (
            <MenuItem 
              key={i} 
              onClick={handleClose}>
              <Typography variant='body1'>
                {val}
              </Typography>
            </MenuItem>
          )
        })
        }
      </Menu>
      </Toolbar>
      <Grid sx={{ margin: '0 auto', maxWidth: {xs: '100%', md: 1200} }} container spacing={4}>
        {products.map((val, i) =>{
          return (
            <Grid item key={i} md={4}>
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                backgroundColor: 'secondary.main', 
                borderRadius: '0 0 0 50px',
                p: { xs: 4.5, md: 2},
                mb: { xs: 11.25, md: 16.125},
                width: 286,
                minHeight: {
                  xs: 360,
                  md: 420
                },
                maxHeight: {
                  xs: 360,
                  md: 420
                },
              overflow: 'visible'}} 
                elevation={0}>
                <CardContent>
                  <Typography 
                    variant="h5">
                    {val.name}</Typography>
                  <Typography 
                    variant="subtitle2">
                    {val.price}</Typography>
                </CardContent>
                <CardMedia
                  sx={{
                    position: 'relative',
                    bottom: -54
                  }}
                  component='img' 
                  image={`img/products/${val.img}`}
                  alt={val.name}/>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  </>
  );
}

const BlurSurface = styled(Paper)({
  position: 'absolute',
  background: 'rgba(255,255,255,0.78)',
  height: 215,
  width: 234,
  backdropFilter: 'blur(14.2699px)'
})

const Image = props => {
  const { w, h } = props;

  const style = {
    width: w, 
    height:h
  }

  return (
    <div 
      className="imageContainer" 
      style={style}>
      <img {...props} />
    </div>
  )
}


const GridiconsDropdown = props => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M7 10l5 5l5-5z" fill="currentColor"></path></svg>
  )
}


export default App;
