import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Card from '../cardComponent/Card';

const useStyles = createMuiTheme({
    root: {
        flexGrow: 1,
    }
});

class GridView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <MuiThemeProvider theme={useStyles}>
                <div className={useStyles.root} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {this.props.data.map(o => (
                        <Card data={o} />
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}


export default GridView;