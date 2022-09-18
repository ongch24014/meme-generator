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
            url: ''
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
                <img src={this.state.url} className="meme-image"/>
            </div>
        )
    }

    generateMeme(event, text) {
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        

        // setState
        this.setState({url: memesArray[randomNumber].url}, () => {
            console.log(this.state.url);
        })
    }
}
