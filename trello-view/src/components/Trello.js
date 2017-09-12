import React, { Component } from 'react';
import '../styles/Trello.css'
import BoardContainer from '../components/BoardContainer'
class Trello extends Component {
    constructor(props){
        super(props);
    }
    handleClick = () =>{

    }
    render() {
        return (
            <div className="page">
                <div className="header">
                    <h3>Trello Demo</h3>
                </div>
                <BoardContainer />
            </div>
            
        );
    }
}

export default Trello;