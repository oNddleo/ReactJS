import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const data = require("../data.json");
class BoardContainer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="board-container">
                <ShowAllBoard {...data}/>
            </div>
        );
    }
}
class AddCard extends Component{
    constructor(props){
        super(props);
        this.state = {titleCard: ""};
    }
    
    handleChange = (e) => {
        this.setState({titleCard: e.target.value});
    }
    addCard = () => {
        
    }
    deleteCard = () => {
        
    }
    render(){
        return(
                <form name={this.props.temp}>
                    <div className="addCard">
                        <textarea className="txtArea" onChange={this.handleChange} value={this.state.titleCard}></textarea>
                        <div className="add-control">
                            <input className="btnAdd" type="button" onClick={this.addCard} value="Thêm"/>
                            <a className="btnDelete glyphicon glyphicon-remove" onClick={this.deleteCard}></a>
                        </div>
                    </div>
                </form>
        );
    }
}
class AddList extends Component{
    constructor(){
        super();
        this.state = {titleList: ""};
        this.state = {data};
    }
    handleChange = (e) => {
        this.setState({titleList: e.target.value});
    }
    addList = () => {
        //data.push(this.state.titleList);
    }
    deleteList = () => {
        
    }
    render(){
        return(
            <form>
                <div className="addList">
                    <input className="inputText" placeholder="Thêm danh sách..." maxlength="512" type="text" onChange={this.handleChange} value={this.state.titleList}/>
                    <div className="add-control">
                        <input className="btnAdd" type="submit" value="Lưu" onClick={this.addList}/>
                        <a className="btnDelete glyphicon glyphicon-remove" onClick={this.deleteList}></a>
                    </div>
                </div>
            </form>
        );
    }
}
const List = (props) => {
        return(
            <div>
                {props.showInput ? <AddList/> : 
                <button className="btnAddNewList" onClick={props.func}>Thêm danh sách...</button>
                }
            </div>
        );
}
class ShowAllBoard extends Component {
    constructor(props){
        super(props);
        this.state = {show: -1};
    }
    show = (e) => {
        
    }
    btnOnClick = (e) => {
        this.setState(
            {show: e.target.value}
        );
    }
    render(){
        const show = this.state.show;
        const arr = [];
        return(
            <div>
                {this.props.boards.map((element, index) => (
                    <div className="board-children"> 
                        <div>
                            <span key={element.id} className="titleChildrenBoard">{element.title}</span>
                            {element.cards.map((i) => (<span key={i.id} className="detail-list">{i.title}</span>))}
                        </div>
                        <ButtonAddNewCard onClick={this.btnOnClick} value={index}/>
                    </div>        
                ))}
                {arr}
            </div> 
        );
    }
}
const ButtonAddNewCard = (props) => {
    return(
        <button className="btnAddNewCard" onClick={props.onClick} value={props.value}>Thêm thẻ...</button> 
    );
}
const Form = (props) => {
    return(
        <form>
            <div className="addList">
                <input className="inputText" placeholder="Thêm danh sách..." maxlength="512" type="text" onChange={this.handleChange} value={this.state.titleList}/>
                <div className="add-control">
                    <input className="btnAdd" type="submit" value="Lưu" onClick={this.addList}/>
                    <a className="btnDelete glyphicon glyphicon-remove" onClick={this.deleteList}></a>
                </div>
            </div>
        </form>
    );
}
export default BoardContainer;