#!/bin/sh
# Generates a directory, .js, .css

echo "Component Name : "
read COMPONENT

UPPER="$(tr '[:lower:]' '[:upper:]' <<< ${COMPONENT:0:1})${COMPONENT:1}"

mkdir ${COMPONENT}
echo 'import React from "react";
import "./'${COMPONENT}'.css";

export default class '${UPPER}' extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}' > ${COMPONENT}/${COMPONENT}.js
# echo hi > ${COMPONENT}/${COMPONENT}.css
touch ${COMPONENT}/${COMPONENT}.css
