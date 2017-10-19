import React, { Component } from 'react';
import Map from 'grommet/components/Map';

import { 
    Grid,
    Paper,
    Typography
} from 'material-ui';
import { withStyles } from 'material-ui/styles';
  
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit * 3,
    textTransform: 'none'
  },
  typography: {
    textAlign: 'center',
    'align-items': 'center'
  },
  boxClass: {
    textAlign: 'center',
    'align-items': 'center'
  }
});

  
class Grommet extends Component {
    render = () => {
        const classes = this.props.classes;
        return (
            <Grid container spacing={12}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Typography type="headline" component="h1" className={classes.typography}>
                    Grommet
                </Typography>
                <Map data={{
                        "categories": [
                            {
                            "id": "category-1",
                            "items": [
                                {"id": "Modem", "label": "Modem"},
                                {"id": "SSPA", "label": "SSPA"},
                                {"id": "Beacon-1", "label": "Beacon 1"}
                            ]
                            },
                            {
                            "id": "category-2",
                            "items": [
                                {"id": "Beacon-2", "label": "Beacon 2"},
                                {"id": "ACU", "label": "ACU"}
                            ]
                            },
                            {
                            "id": "category-3",
                            "items": [
                                {"id": "MTek-Down-Converter", "label": "MTek Down Converter"},
                                {"id": "MTek-Up-Converter", "label": "MTek Up Converter"}
                            ]
                            }
                        ],
                        "links": [
                            {"parentId": "Modem", "childId": "SSPA"},
                            {"parentId": "SSPA", "childId": "Beacon-2"},
                            {"parentId": "Beacon-1", "childId": "MTek-Down-Converter"},
                            {"parentId": "ACU", "childId": "SSPA"},
                            {"parentId": "MTek-Up-Converter", "childId": "SSPA"}
                        ]
                        }} />
                </Paper>
                </Grid>
            </Grid>
        
        )
    }
}

Grommet = withStyles(styles)(Grommet);

export default Grommet
