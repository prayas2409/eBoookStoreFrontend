import React, { Component } from "react"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { getMethod } from '../../service/httpService.js';


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

    search() {
        let path = {
            path: `sortBooks/?minPrice=${this.state.min}&maxPrice=${this.state.max}`
            // field: { "field": this.state.value }
        }
        getMethod(path).then((res) => {
            console.log("res", res);
            this.props.function(res.data.data)
        })
            .catch((err) => {
                console.log(err);
            })
    }

    handleOnClickFilter = () => {
        if (this.state.min !== "" && this.state.max !== "") {
            // To do when filter clicked take props from home and set the new dashboard array
            this.search()
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
                        <Typography edge="start" variant="h6">
                            Books <Typography variant="caption" style={{ color: 'grey' }} gutterBottom>({this.props.data} items)</Typography>
                        </Typography>
                        < div style={{ display: "flex", marginLeft: "auto" }} >
                            {!this.state.clickedFilter ?
                                < Button onMouseEnter={() => this.handleOnHoverFilter()} variant="outlined" color="default" >
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