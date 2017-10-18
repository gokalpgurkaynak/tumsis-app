import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';

const styles = theme => ({
    container:{
        display: 'flex',
        flex: '1 1 auto',
        flexWrap: 'wrap'
    },
    button: {
        margin: 'auto'
    },
    breadcrumbLink: {
        color: 'white',
        textDecoration: 'none'
    }
})

class BreadCrumbs extends Component{
    render(){
        let items = this.props.location.pathname.split("/");
        const {classes} = this.props;
        let refStr = "";
        return (
            <div className={classes.container}>
            {
                items.filter(i => i !== "").map( (item, index) => (
                        <Link to={`${refStr += "/"+item}`} className={classes.breadcrumbLink}>
                            <Button  className={classes.button} color='contrast'>
                                {item}
                            </Button>
                            {items.filter(i => i !== "").length > index+1 ? '/' : ''}
                        </Link>
                    )
                )
            }
            </div>
        )
    }
}

export default withStyles(styles)(BreadCrumbs);