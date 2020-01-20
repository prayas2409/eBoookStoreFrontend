import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from './card'

const useStyles = createMuiTheme({
    root: {
        flexGrow: 1,
    }
});

class GridView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [<Card />]
        }
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
                    {this.state.data.map(o => (
                        o
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}


export default GridView;