import React from "react";
import "./Live2d.scss"

class Live2d extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script")
        script.src = "https://imuncle.github.io/live2d/js/live2d.js"
        script.async = true

        document.body.appendChild(script)
        setTimeout(() => {
            window.loadlive2d("live2d", '/Resources/wanko/wanko.model.json');
        }, 1000)
    }

    render() {
        return (
            <div className="live2d">
                <canvas className="live2d" id="live2d" width="300" height="800"></canvas>
            </div>
        )
    }
}

export default Live2d