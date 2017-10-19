import React, { Component } from 'react';
import Helmet from 'react-helmet'

class Modem extends Component {
    componentDidMount = () => {
        document.title = "Beacon";
    }

    render = () => {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Modem</title>
                </Helmet>

                Modem Device     
            </div>
        );
    }
}

export default Modem;