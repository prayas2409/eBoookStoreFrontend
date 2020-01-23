import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './pagination.css';

export default class CustomPaginationActionsTable extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(o) {
    this.props.function(o);
  }

  render() {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.perPage.books.length / this.props.perPage.todosPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <IconButton color="primary" component="span">
          <KeyboardArrowLeftIcon />
        </IconButton>
        {pageNumbers.map(o => (
          <Button color="black"
            onClick={() => this.handleClick(o)}>{o}</Button>
        ))}
        <IconButton color="primary" component="span" style={{ border: '2px' }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    )
  }
}
