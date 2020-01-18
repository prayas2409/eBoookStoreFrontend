import React, { Component } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default class LowerBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 1,
            max: 10000,
            filter: false,
            clickedFilter: false

        }
        this.handleOnClickFilter = this.handleOnClickFilter.bind(this)
        this.handleOnHoverFilter = this.handleOnHoverFilter.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnClickFilter = () => {
        if (this.state.min != "" && this.state.max != "") {
            // To do when filter clicked take props from home and set the new dashboard array
            this.setState({
                filter: true
            })
        }
    }

    handleOnHoverFilter = (event) => {
        console.log("Hovering")
        this.setState({
            clickedFilter: !this.state.clickedFilter
        })
    }

    render() {
        return (
            <p>
                <div >
                    <Toolbar>
                        <Typography edge="start" variant="h6" >
                            Books
                    </Typography>
                        < div style={{ display: "flex", marginLeft: "auto" }} >
                            {!this.state.clickedFilter ?
                                < Button onMouseEnter={(event) => this.handleOnHoverFilter(event)} variant="outlined" color="primary" >
                                    <div style={{}}>Filter by price </div>
                                </Button>
                                :
                                <form onMouseLeave={() => this.handleOnHoverFilter()}>
                                    <TextField name="min" value={this.state.min} onChange={(event) => this.handleValueChange(event)}></TextField>
                                    <TextField name="max" value={this.state.max} onChange={(event) => this.handleValueChange(event)}></TextField>

                                    <Button onClick={() => this.handleOnClickFilter()}>Filter</Button>
                                </form>
                            }
                        </div>
                    </Toolbar>
                </div>
            </p>
        )
    }

}