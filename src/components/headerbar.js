import React,{Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import bookicon from "../images/bookicon.jpg"
import SearchBar from "./searchbar"

class headerbar extends Component {
  
    render(){
  return (
    
    <div className="header">
      <AppBar position="static"  style={{ backgroundColor: '#b30047' }}>
        <Toolbar variant="dense">
        <IconButton edge="start"  color="inherit" aria-label="menu">
        <img src={bookicon} style={{blockSize: '30px'}} />
          </IconButton>
        <Typography variant="h6" color="inherit">
          e_Book_Store
        </Typography>
        {/* <SearchBar/> */}
        </Toolbar>
      </AppBar>
    </div>
    );
    }
}

export default headerbar;
