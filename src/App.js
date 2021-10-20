import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function App() {
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
    <Box
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

export default App;
