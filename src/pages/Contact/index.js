import React from 'react';
import ReactDOM from 'react-dom';
import '../Home/index.scss';
import NavBar from "../Home/NavBar";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="full-page">
                <NavBar />
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