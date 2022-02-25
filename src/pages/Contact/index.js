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
                        Email Address
                    </h1>

                    <div>
                        You can send us a mail at xyz@stevens.edu
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact