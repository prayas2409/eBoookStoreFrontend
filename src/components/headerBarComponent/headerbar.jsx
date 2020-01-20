import React from 'react';
import '../../App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import Icon from "@material-ui/core/Icon";


const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#9F3037"
  },
  icon: {
    marginLeft: 80
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    marginLeft: 8,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1.0),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 1.0),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '45%',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkgrey'
  },
  inputRoot: {
    color: 'grey',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function ToolBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow} >
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Icon
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={classes.icon}
          >
            <MenuBookTwoToneIcon />
          </Icon>
          <Typography className={classes.title} variant="h6" noWrap>
            eBookstore
                    </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
  // class headerbar extends Component {

  //   render(){
  //     return (
  //       <div>
  //           <AppBar position="static"  style={{ backgroundColor: '#b30047' }}>
  //             <Toolbar variant="dense">
  //             <IconButton edge="start"  color="inherit" aria-label="menu">
  //             <img src={bookicon} style={{blockSize: '30px'}} />
  //               </IconButton>
  //             <Typography variant="h6" color="inherit">
  //               e_Book_Store
  //             </Typography>
  //             {/* <SearchBar/> */}
  //             </Toolbar>
  //           </AppBar>
  //       </div>
  //       );
  //     }

}
