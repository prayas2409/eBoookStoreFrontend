import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';


export default class CustomPaginationActionsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
  displayButton = () => {
    let result = this.state.data.map(o => {
      return o
    })
    this.setState({ data: result });
  }

  render() {
    return (
      <div>
        {/* <Fab color="white" aria-label="add" style={{ height: '20px', width: '40px' }}>
          <KeyboardArrowLeftIcon />
        </Fab>
        {this.state.data.map(o => (
          <Button color="black">{o}</Button>
        ))}
        <Fab color="white" aria-label="add" style={{ height: '20px', width: '40px' }}>
          <KeyboardArrowRightIcon />
        </Fab> */}

        <IconButton color="primary" component="span">
          <KeyboardArrowLeftIcon />
        </IconButton>
        {this.state.data.map(o => (
          <Button color="black">{o}</Button>
        ))}
        <IconButton color="primary" component="span" style={{ border: '2px' }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    )
  }
}
