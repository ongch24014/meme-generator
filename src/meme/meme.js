import React from "react";
import "./meme.css";
import memeData from "../memeData";

export default class Meme extends React.Component {
    constructor(props) {
        super(props);
        this.generateMeme = this.generateMeme.bind(this);
        // this.function = this.function.bind(this);
        // this.state;
        this.clickMe = (e, p1, p2, p3) => (event) => {
            console.log(p1)
            console.log(p2)
        }

        this.state = {
            meme: {
                topText: '',
                bottomText: '',
                randomImage: ''
            },
            allMemeImages: memeData
        }

        // const [memeImage, setMemeImage] = React.useState("");
        // setMemeImage("anything");
        // setMemeImage((prev) => {
        //     return prev + '123';
        // });
    }

    render() {
        return (
            <div className="meme-form">
                <div className="input-list">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom text"></input>
                </div>
                <button onClick={this.generateMeme.bind(this, 'whatupsss')}>Generate a new meme</button>
                <img src={this.state.meme.randomImage} className="meme-image"/>
            </div>
        )
    }

    generateMeme(event, text) {
        const memesArray = this.state.allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
    
        this.setState({
            meme: {randomImage: memesArray[randomNumber].url}
        });

        // this.setState({url: memesArray[randomNumber].url}, () => {
        //     console.log(this.state);
        // })
    }
}
