import React, {Component} from 'react';
// import NavBar from './NavBar';
// import logo from './logo.svg';
import Body from './Body';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo"/>
                    <NavBar/> */}
                </div>
                <br /><br /><br />
                <Body/>
            </div>
        );
    }
}

export default App;
