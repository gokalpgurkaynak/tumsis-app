import React, { Component } from 'react';
import Helmet from 'react-helmet'

class ACU extends Component {
    componentDidMount = () => {
        document.title = "ACU";
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>SSPA</title>
                </Helmet>
                ACU    
            </div>
        );
    }
}

export default ACU;