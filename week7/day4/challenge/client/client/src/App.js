import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        message: '',
        postResponse: '',
        inputValue: ''
    };

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:3001/api/hello');
            const message = await response.text();
            this.setState({ message });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/world', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: this.state.inputValue }),
            });
            const data = await response.text();
            this.setState({ postResponse: data, inputValue: '' });
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    render() {
        return (
            <div className="App">
                <h1>{this.state.message}</h1>
                
                <h2>Post to Server:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        placeholder="Hi from client"
                    />
                    <button type="submit">Submit</button>
                </form>
                
                {this.state.postResponse && <p>{this.state.postResponse}</p>}
            </div>
        );
    }
}

export default App;