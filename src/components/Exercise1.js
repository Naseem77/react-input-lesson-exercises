import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    handleName = (e) => {
        let nameVal = e.target.value
        this.setState({ name: nameVal })

    }

    print = () => {
        if (this.state.name.length > 0 && this.state.age > 0) {
            console.log("Come in " + this.state.name + ", you're " + this.state.age)
        } else {
            alert("please insert in the missing fields")
        }
    }

    handleAge = (e) => {
        let ageVal = e.target.value
        this.setState({ age: ageVal })
    }

    render() {
        return (
            <div>
                <input id="name-input" type="text" value={this.state.name} onChange={this.handleName} />
                <input id="age-input" type="text" value={this.state.age} onChange={this.handleAge} />
                <button onClick={this.print}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;