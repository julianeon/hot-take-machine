import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import './App.css';

const Box=styled.div`
padding-top: 200px;
width:360px; 
margin:0 auto;
text-align: center;
}
`

const AnsBox=styled.div`
background-color: black;
color: white;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.textInput = React.createRef();
    this.state = {
      value: ''
    }
  }
  

  handleSubmit = e => {
    e.preventDefault();
    const Answer = ["YES","NO"]

    function randomValue() {
	return Answer[Math.floor(Math.random() * Answer.length)]
    }

      this.setState({ value: this.textInput.current.value.concat(" senses ",randomValue())})
  };

  render() {
      return (

  <div className="jumbotron">
	      <Box>
	      	  <img src="magic.gif" alt="magic"/>
        <AnsBox><h3>{this.state.value}</h3></AnsBox>
        <form onSubmit={this.handleSubmit}>

          <input defaultValue="request a hot take." type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </Box>
  </div>
    );
  }
}

export default App;
