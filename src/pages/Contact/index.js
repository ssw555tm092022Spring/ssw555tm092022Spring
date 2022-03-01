import React from 'react';
import ReactDOM from 'react-dom';
import '../Home/index.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="full-page">
                <div className="Contact">
                    <h1>
                        Contact Us
                    </h1>

                    <div>
                        If you have any queries, you can mail us at calmify@calmify.com
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact