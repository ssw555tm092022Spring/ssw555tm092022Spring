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
            <div className="full-page">
                <div className="About">
                    <h1>
                        Mind Relaxing Game
                    </h1>
                    <p>
                        Gaming can be a relaxing hobby that you can turn to when
                        you’re beginning to feel the stresses of life and responsibilities.
                        While most people play games to be entertained,
                        games are also great for anxiety relief.
                        <br/>
                            Here we are providing the best mind relaxing games that will give
                            relief from any anxiety and restlessness people nowadays are facing.
                            <br/>
                            These games are meant to calm the mind and offers moments of happiness.
                    </p>
                </div>
            </div>
        )
    }
}

export default Main