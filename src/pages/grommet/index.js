import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles';
  
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    'align-items': 'center'
  },
  button: {
    margin: theme.spacing.unit * 3,
    textTransform: 'none'
  }
});

  
class Grommet extends Component {
    render = () => {
        const classes = this.props.classes;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Typography type="headline" component="h1">
                    Grommet
                </Typography>
                    
                </Paper>
                </Grid>
            </Grid>
        
        )
    }
}

Grommet = withStyles(styles)(Grommet);

export default Grommet
