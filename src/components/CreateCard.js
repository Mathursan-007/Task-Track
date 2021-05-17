import React from 'react';

class CreateCard extends React.Component {


    state={
        input:''
    }

    handleInput=(event)=>{
        event.persist();//.....
        this.setState({
            input:event.target.value //.....
        })
    }

    handleNewCard=(event)=>{
        event.preventDefault();
        this.props.createNewCard(this.state.input);
        this.setState({input:''})
    }

    render() {
        return(
            <form onSubmit={this.handleNewCard} className={"new-card-form"}>
                <h4>Create Card</h4>
                <input onChange={this.handleInput} type={"text"} value={this.state.input} className={"new-card-input"}/>
                <input type={"submit"} value={"Create"} className={"new-card-input"}/>
            </form>
        )
    }

}

export default CreateCard;
