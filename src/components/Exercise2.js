import React, { Component } from 'react';

class Exercise2 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            fruit: ""
        }
    }

    handleName = (e) => {
        let nameVal = e.target.value
        this.setState({ name: nameVal })

    }

    handleFruit = (e) => {
        let fruitVal = e.target.value
        this.setState({ fruit: fruitVal }, () => {
            if (this.state.name.length > 0) {
                console.log(this.state.name + " selected " + this.state.fruit)
            }
        })
    }

    render() {
        return (
            <div>
                <input id="name-input" type="text" value={this.state.name} onChange={this.handleName} />
                <select id="select-input" value={this.state.fruit} onChange={this.handleFruit}>
                    <option value="select">Select a fruit</option>
                    <option value="grapes">Grapes</option>
                    <option value="lemon">Lemon</option>
                    <option value="orange">Orange</option>
                    <option value="apple">Apple</option>
                </select>
            </div>
        );
    }
}

export default Exercise2;