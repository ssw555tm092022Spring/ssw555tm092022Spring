import './Carousel.scss'
import React from 'react';
import {Carousel} from "antd";

class CarouselComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encouraging_words: [
                "This is what you’re going through, not who you are.",
                "You are doing awesome!",
                "This is tough, but you’re tougher.",
                "Don’t stress. You got this!",
                "Good luck today! I know you are going to do great.",
                "You’re making a big change, and I’m so proud of you!",
                "Sending some good vibes and happy thoughts your way.",
                "In the middle of difficulty lies opportunity.",
                "I’m so sorry you’re going through this, but this too shall pass.",
                "You are always on my mind and in my heart.",
                "The next chapter of your life is going to be so amazing.",

            ]
        }
    }

    render() {
        return (
            <Carousel className="carousel" autoplay dots={false}>
                {
                    this.state.encouraging_words.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </Carousel>
        )
    }
}

export default CarouselComponent