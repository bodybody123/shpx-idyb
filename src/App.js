import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function App() {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant='h1'>
          SHPX
          </Typography>
          <IconButton>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M12 18H3v-2h9v2zm9-5H3v-2h18v2zm0-5h-9V6h9v2z" fill="currentColor"></path></g></svg>
          </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default App;
