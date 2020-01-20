import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from './card'
import { getMethod } from './httpService.js';
import { getFiltered} from './httpService.js';


const useStyles = createMuiTheme({
    root: {
        flexGrow: 1,
    }
});

class GridView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }
    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        getMethod().then((res) => {
            this.setState({ books: res.data.data });
            console.log("books", this.state.books);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {

        return (
            <MuiThemeProvider theme={useStyles}>
                <div className={useStyles.root} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {/* <Grid container spacing={1}>
                    <Grid container item xs={5} spacing={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <FormRow />
                    </Grid>
                </Grid> */}
                    {this.state.books.map(o => (
                        <Card data={o} />
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}


export default GridView;