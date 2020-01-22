import React, { Component } from 'react';
// import '../../App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { getMethod } from '../../service/httpService.js';


import Icon from "@material-ui/core/Icon";
import "./headerbar.scss";


const useStyles = createMuiTheme({
  // appBar: {
  //   backgroundColor: "#A03037"
  // },
  icon: {
    marginLeft: 80
  },
  grow: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    display: 'none',
    marginLeft: 8,
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 1.0),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 1.0),
    // },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: '45%',
    // },
  },
  searchIcon: {
    // width: theme.spacing(7),
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
    // padding: theme.spacing(1, 1, 1, 7),
    // transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: 200,
    // },
  },
  sectionDesktop: {
    display: 'none',
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
  },
  sectionMobile: {
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
});

export default class ToolBar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.search()
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);

    event.preventDefault();
  }

  search() {
    let path = {
      path: 'searchBook?field=' + this.state.value,
      // field: { "field": this.state.value }
    }
    getMethod(path).then((res) => {
      // console.log("res", res);
      this.props.function(res.data)
    })

      // this.setState({ books: res.data.data });
      // console.log("books", this.state.books);
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.search();
  }

  // useStyles = useStyles();
  render() {
    return (
      <MuiThemeProvider theme={useStyles}>
        <div className={useStyles.grow} >
          <AppBar position="static" style={{ backgroundColor: '#A03037', position: 'fixed', top: '0' }}>
            <Toolbar>
              <Icon
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={useStyles.icon}
              >
                <MenuBookTwoToneIcon />
              </Icon>
              <Typography className={useStyles.title} variant="h6" noWrap>
                eBookstore
                      </Typography>
              <div className={useStyles.search}>
                <div useStyles={useStyles.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  useStyles={{
                    root: useStyles.inputRoot,
                    input: useStyles.inputInput,
                  }}
                  value={this.state.value} onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div className={useStyles.grow} />
            </Toolbar>
          </AppBar>
        </div >
      </MuiThemeProvider>
    );
  }
}
