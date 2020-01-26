import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import { getMethod } from '../../service/httpService.js';
import Icon from "@material-ui/core/Icon";
import "./headerbar.css";

export default class ToolBar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleGoToHome = this.handleGoToHome.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.search()
  }

  handleGoToHome(event) {
    // this.props.history.push('/')
    window.location.reload(false);

  }

  search() {
    let path = {
      path: 'searchBook?field=' + this.state.value
    }
    getMethod(path).then((res) => {
      this.props.function(res.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: '#A03037', position: 'fixed', top: '0' }}>
          <Toolbar>
            <Icon
              edge="start"
              color="inherit"
              aria-label="open drawer"
              style={{ marginLeft: '12%' }}
              onClick={() => this.handleGoToHome()}
            >
              <MenuBookTwoToneIcon />
            </Icon>
            <Typography onClick={() => this.handleGoToHome()}  style={{ marginLeft: '1%' }} variant="h6" noWrap>
              eBookstore
            </Typography>
          
            <div className="searchBar">
              <SearchIcon style={{ color: 'grey', margin: '1%' }} />
              <InputBase
                placeholder="Search…"
                style={{ width: '100%' }}
                value={this.state.value} onChange={(event) => this.handleChange(event)}
              />
            </div>

          </Toolbar>
        </AppBar>
      </div >
    );
  }
}
