import React, { Component } from 'react';
import Helmet from 'react-helmet'

class Beacon extends Component {
    render = () => {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Beacon</title>
                </Helmet>
                Beacon    
            </div>
        );
    }
}

export default Beacon;