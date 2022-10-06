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
            allMemeImages: {}
        }

        

        // const [memeImage, setMemeImage] = React.useState("");
        // setMemeImage("anything");
        // setMemeImage((prev) => {
        //     return prev + '123';
        // });
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            this.setState({
                allMemeImages: data
            });
        })
    }

    render() {
        return (
            <div className="meme-form">
                <div className="input-list">
                    <input type="text" placeholder="Top text" name="topText" onChange={this.updateText.bind(this)}></input>
                    <input type="text" placeholder="Bottom text" name="bottomText" onChange={this.updateText.bind(this)}></input>
                </div>
                <button onClick={this.generateMeme.bind(this, 'whatupsss')}>Generate a new meme</button>
                <div className="meme">
                    <img src={this.state.meme.randomImage} className="meme-image" />
                    {this.state.meme.topText !== '' && <h2 className="meme-text top">{this.state.meme.topText}</h2>}
                    {this.state.meme.bottomText !== '' && <h2 className="meme-text bottom">{this.state.meme.bottomText}</h2>}
                </div>
            </div>
        )
    }

    generateMeme(event, text) {
        const memesArray = this.state.allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
    
        this.setState({
            meme: {
                ...this.state.meme,
                randomImage: memesArray[randomNumber].url
            }
        });
        console.log(this.state)

        // this.setState({url: memesArray[randomNumber].url}, () => {
        //     console.log(this.state);
        // })
    }

    updateText(event) {
        const {name, value} = event.target;
        this.setState({
            meme: {
                ...this.state.meme,
                [name]: value
            }
        });

        console.log(this.state)
    }
}
