import React from "react";
import ToDoList from './ToDoList';

class ToDoCard extends React.Component{

    state={
        input:''
    }

    handleListInput=(event)=>{
        this.setState({
            input:event.target.value
        })
    }

    handleListSubmit=(event)=>{
        event.preventDefault();
        this.props.addList(this.props.card.id,this.state.input);
        this.setState({
            input:''
        })
    }

    renderLists(){
        return this.props.card.lists.map(list=>{
           // alert(list.id)
            return <ToDoList card_ID={this.props.card.id} key={list.id} list={list} handleClickList={this.props.handleClickList}/>
        })
    }

    render() {
        return(
              <div className={"to-do-card"}>
                  <h4>{this.props.card.title}</h4>
                  <form onSubmit={this.handleListSubmit}>
                      <input type={"text"} onChange={this.handleListInput} value={this.state.input}/>
                  </form>
                  {this.renderLists()}
              </div>
        )
    }

}
//
export default ToDoCard;