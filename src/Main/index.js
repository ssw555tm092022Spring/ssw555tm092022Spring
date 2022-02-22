import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {themeColor: "black"}
    }
    render() {
        return (
            <div className="main-page" style={{background: this.state.themeColor}}>
                home page
            </div>
        )
    }
}

export default Main