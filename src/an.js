import React, { Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Box=styled.div`
padding-top: 200px;
width:300px; 
margin:0 auto;
text-align: center;
}
`

class App extends Component {

  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.tells = React.createRef();      
    this.answerFetch = this.answerFetch.bind(this);
  }
  
  answerFetch() {

    const Answer = ["YES","NO"]

    function randomValue() {
	return Answer[Math.floor(Math.random() * Answer.length)]
    }
      
    this.tells.current.value = randomValue()
        
  }

  render() {
    return (
      <Box>
        {/* Referencing the ref from this.inputField */}
        <input type="text" ref={this.inputField} />
        <p></p>
        <Button onClick={this.answerFetch}>
          ASK ME
        </Button>
            <Button ref={this.tells}>...</Button>	    
      </Box>
    );
  }
  
}

export default App;

