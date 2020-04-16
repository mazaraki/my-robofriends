import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => 
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );
        return (!robots.length) 
        ? <h1>Loading...</h1>
        :(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={ filteredRobots } />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
 };

 export default App;