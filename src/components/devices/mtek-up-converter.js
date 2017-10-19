import React, { Component } from 'react';
import Helmet from 'react-helmet'

class MTekUpConverter extends Component {
    componentDidMount = () => {
        document.title = "MTek Up Converter";
    }

    render = () => {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>MTek Up Converter</title>
                </Helmet>
                MTek Up Converter
            </div>
        );
    }
}

export default MTekUpConverter;