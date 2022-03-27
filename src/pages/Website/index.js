import React from 'react';
import '../Home/index.scss';
import './index.scss'
import Carousel from '../Common/Carousel'
import Live2d from "../Common/Live2d";

const IMAGES = [
    [require('../../statics/Gamepics/1.jpg'), 1],
    [require('../../statics/Gamepics/2.jpg'), 2],
    [require('../../statics/Gamepics/3.jpg'), 3],
    [require('../../statics/Gamepics/4.jpg'), 4],
    [require('../../statics/Gamepics/5.jpg'), 5],
    [require('../../statics/Gamepics/6.jpg'), 6],
    [require('../../statics/Gamepics/7.jpg'), 7],
    [require('../../statics/Gamepics/8.jpg'), 8],
    [require('../../statics/Gamepics/9.jpg'), 9],
    [require('../../statics/Gamepics/10.jpg'), 10],
    [require('../../statics/Gamepics/11.jpg'), 11],
    [require('../../statics/Gamepics/12.jpg'), 12],
    [require('../../statics/Gamepics/13.jpg'), 13],
    [require('../../statics/Gamepics/14.jpg'), 14],
    [require('../../statics/Gamepics/15.jpg'), 15],
    [require('../../statics/Gamepics/16.jpg'), 16],
]

const audio1 = new Audio("/cheers/cheers1.mp3")
const audio2 = new Audio("/cheers/cheers2.mp3")

class Website extends React.Component {
    constructor(props) {
        super(props);

        let cards_per_row = 4 // card per row and column, only even numbers
        let picsNeeded = cards_per_row * cards_per_row / 2 // how many pictures needed to render

        // calculate random pics
        let wantedPics = []
        let numArr = Array.from(new Array(IMAGES.length), (x, i)=> i);
        for (let i = 0; i < picsNeeded; i++) {
            let randomIndex = Math.floor(Math.random() * numArr.length)
            wantedPics.push(IMAGES[numArr[randomIndex]])
            numArr.splice(randomIndex, 1)
        }
        let cardsInfo = []
        wantedPics.forEach(item => {
            cardsInfo.push({
                id: item[1],
                pic: item[0],
                found: false,
                rotated: false
            })
            cardsInfo.push({
                id: item[1],
                pic: item[0],
                found: false,
                rotated: false
            })
        })
        // shuffle pictures
        for (let i = 1; i < cardsInfo.length; i++) {
            const random = Math.floor(Math.random() * (i + 1));
            [cardsInfo[i], cardsInfo[random]] = [cardsInfo[random], cardsInfo[i]];
        }

        this.state = {
            cardsInfo,
            cards_per_row,
            dataReady: false,
            selection1: -1, // first selected pic
            selection2: -1, // second selected pic
            audio_url: '', // cheers audio url
        }
        setTimeout(() => {
            this.flipAll()
        }, 2000)
    }

    flipAll() {
        // flip all pics
        const cardsInfo = [...this.state.cardsInfo]
        this.setState({
            cardsInfo: cardsInfo.map(item => {
                item.rotated = true
                return item
            }),
            dataReady: true
        })
    }

    playCheerVoice() {
        this.setState({
            audio_url: this.state.audio_url === 1 ? 2 : 1
        })
        if (this.state.audio_url === 1) {
            audio1.play()
            setTimeout(() => {
                audio1.pause()
                audio1.load()
            }, 2500)
        } else {
            audio2.play()
            setTimeout(() => {
                audio2.pause()
                audio2.load()
            }, 2500)
        }
    }

    flip(boardIndex) {
        // handle picture click
        if (!this.state.dataReady) {// forbidden click before game started
            return
        }
        const cardsInfo = [...this.state.cardsInfo]


        if (this.state.selection1 > -1) { // second guess
            this.setState({
                cardsInfo: cardsInfo.map((item, index) => boardIndex === index ? {...item, rotated: !item.rotated} : item),
                dataReady: false
            })
            if (this.state.cardsInfo[boardIndex].id === this.state.selection1) { // card matches
                this.playCheerVoice();
                setTimeout(() => {
                    this.setState({
                        cardsInfo: cardsInfo.map((item, index) => (boardIndex === index) || (item.id === this.state.selection1) ? {...item, found: true} : item),
                        selection1: -1,
                        selection2: -1,
                        dataReady: true
                    })
                }, 1000)

            } else { // card doesn't match

                setTimeout(() => {
                    this.flipAll()
                    this.setState({
                        selection1: -1,
                        selection2: -1,
                        dataReady: true
                    })
                }, 1000)

            }

        } else { // first guess

            this.setState({
                cardsInfo: cardsInfo.map((item, index) => boardIndex === index ? {...item, rotated: !item.rotated} : item),
                selection1: this.state.cardsInfo[boardIndex].id
            })
        }
        // flip cards


    }



    render() {
        return (
            <div className="full-page">
                <audio id="audio" src={this.state.audio_url}/>
                <div className="game-container">
                    {
                        this.state.cardsInfo.map((item, index)  => {
                            if (item.found) {
                                return <div className="game-block" key={index} style={{width: `${100 / this.state.cards_per_row}%`, height: `${100 / this.state.cards_per_row}%`}}/>
                            } else {
                                return (
                                    <div className="game-block" key={index} style={{width: `${100 / this.state.cards_per_row}%` , height: `${100 / this.state.cards_per_row}%`}}>
                                        {/*front of block*/}
                                        <img className={`flip-item flip-item-front ${item.rotated ? 'rotated' : ''}`} onClick={() => this.flip(index)} src={item.pic} alt=""/>
                                        {/*back of block*/}
                                        <div className={`flip-item flip-item-back ${item.rotated ? 'rotated' : ''}`} onClick={() => this.flip(index)}/>
                                    </div>
                                )
                            }

                        })
                    }

                </div>
                <Carousel/>
                <Live2d/>
            </div>
        )
    }
}

export default Website