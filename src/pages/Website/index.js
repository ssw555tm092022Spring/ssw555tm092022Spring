import React from 'react';
import ReactDOM from 'react-dom';
import '../Home/index.scss';
import NavBar from "../Home/NavBar";

class Website extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="full-page">
                <NavBar />
            </div>
        )
    }
}

export default Website