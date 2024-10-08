import React from "react";
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import ErrorBoundry from "../components/ErrorBoundry";
import { render } from "@testing-library/react";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        } 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?  
        <h1>loading</h1> :
            <div className="tc">
                <h1 className="f1 "style={{fontFamily: "Arial", color: "white"}}>ROBOFRIENDS</h1>
                <SearchBox searchChange ={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div> 
    }
}


export default App;