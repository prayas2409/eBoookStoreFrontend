import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from './card'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function GridView() {
    const classes = useStyles();

    let data = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]


    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    {data.map(o => (
                        o
                    ))}
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={5} spacing={5} style={{ display: 'flex', justifyContent: 'center' }}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
