import React from "react";
import "./meme.css";

export default class Meme extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;
    }

    render() {
        return (
            <form className="meme-form">
                <div className="input-list">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom text"></input>
                </div>
                <button>Generate a new meme</button>
            </form>
        )
    }
}
