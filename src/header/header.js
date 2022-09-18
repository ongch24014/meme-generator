import React from "react";
import "./header.css";
import troll from "../images/troll-face.png"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;
    }

    render() {
        return (
            <header className="header">
                <img src={troll} className="header--image"/>
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </header>
        )
    }
}
