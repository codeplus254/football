import React, { Component } from 'react';
import { isNullOrWhitespace } from '@football/validator';
import io from 'socket.io-client';

// Make Connection
const socket = io(`http://localhost:8081`)

export class Greeting extends Component {
    state = {
        name: ''
    }
    

    onTyping = () => {

    }
    onSubmit = () => {
        const {name} = this.state;
        if (isNullOrWhitespace(name)) {
            alert('Please, type your name first.');
            return;
        }
        socket.emit('chat', name)
         // Listen for events
        socket.on('chat', (data)=>{console.log(data.Incidents);this.setState({message: `LiveUpdates ${data}` })});
    }
    

    render() {
        const {name, message, error} = this.state;
        return (
          <>
            <div style={{padding: '10px'}}>
                {message && <div style={{fontSize: '50px'}}>{message}</div>}
                <input value={name} onChange={(event) => this.setState({name: event.target.value})} placeholder="Type your name"/>
                <button onClick={this.onSubmit}>SHOW DATA</button>
                {error && <pre>{JSON.stringify(error)}</pre>}
            </div>
          </>
        );
    }
}