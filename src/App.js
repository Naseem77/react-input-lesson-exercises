import React, { Component } from 'react';
import './App.css';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercise 1</h4>
          <Exercise1 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercise 2</h4>
          <Exercise2 />
        </div>
      </div>
    )
  }
}

export default App;



// import React, { Component } from "react"
// import './App.css';


// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       name: "",
//       hasUnderstood: false
//     }
//   }

//   handleInput = (e) => {
//     let inputValue = e.target.value
//     this.setState({ name: inputValue })
//   }
//   printName = () => {
//     console.log(this.state.name)
//   }

//   updateCheckbox = (event) => {
//     this.setState({
//       hasUnderstood: event.target.checked
//     }, () => { console.log(this.state.hasUnderstood) })
//   }

//   render() {

//     return (

//       <div>
//         Name: <input type="text" value={this.state.name} onChange={this.handleInput} />
//         <button onClick={this.printName}>Print</button>
//         <input type="checkbox" checked={this.state.hasUnderstood} onChange={this.updateCheckbox} />
//       </div>
//     )
//   }
// }

//export default App;
