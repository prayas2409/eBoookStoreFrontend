import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function GridView() {
    const classes = useStyles();

    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    {data.map(o => (
                        <Button color="black">{o}</Button>
                    ))}
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1} style={{ display: 'flex', justifyContent: 'center'}}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
