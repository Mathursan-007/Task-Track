import React from 'react';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from'./ToDoCardContainer'
import axios from 'axios';
//import fetch from 'node-fetch'


class MainContainer extends React.Component{


    state={
        cards:[],
        lists:[]
    }

    createNewCard=(input)=>{

        fetch('http://localhost:3001/cards',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                title:input
            })
        })
            .then(res=>(res.json()))
             .then(newCard=>{
                this.setState({
                    cards:[...this.state.cards,newCard]
                })
            }).catch(e=>{
                console.log(e)
        })


    }


    addList=(cardID,input)=>{
        fetch('http://localhost:3001/cards/lists',{
            method:'POST',
            headers:{

                'Content-type':'application/json',
                Accept:'application/json'
            },
            body:JSON.stringify({
                description:input,
                card_ID:cardID,
                completed:false
            })
        })
            .then(resp=>resp.json())
            .then(newList=>{
                const foundCard ={...this.state.cards.find(card=>card.id==cardID)}
                 foundCard.lists=[...foundCard.lists,newList]

                const newCards = this.state.cards.map(card=>{
                    if(card.id==cardID){
                        return foundCard;
                    }else{
                        return card;
                    }
                })

                this.setState({
                    cards:newCards
                })
            })

    }

    componentDidMount() {

        fetch('http://localhost:3001/cards')
            .then(resp=>resp.json())
            .then(cards=>{
                this.setState({
                    cards:cards
                })
            })

    }

    handleClickList =(cardID,listID)=>{

        const foundCard = {...this.state.cards.find(card=>card.id==cardID)}
        const foundList = foundCard.lists.find(list=>list.id==listID)

        let newState =null;

        if(foundList.completed){
            newState=false;
        }else{
            newState=true;
        }

        fetch(`http://localhost:3001/cards/lists/${listID}`,{
            method:"PATCH",
            headers:{
                'Content-type':'application/json',
                Accept:'application/json'
            },
            body:JSON.stringify({
                completed:newState
            })
        })
            .then(res => res.json())
            .then(newList => {
                const newLists = foundCard.lists.map(list=> {
                    if (list.id == listID) {
                        return newList
                    } else {
                        return list
                    }
                })

                foundCard.lists = newLists

                const newCards = this.state.cards.map(card => {
                    if(card.id == cardID){
                        return foundCard
                    }else {
                        return card
                    }
                })

                this.setState({
                    cards:newCards
                })
            })

    }



    render() {
        return(
            <div className="main-container">
                    <ToDoCardContainer cards={this.state.cards} addList={this.addList} handleClickList={this.handleClickList}/>
                    <CreateCard createNewCard ={this.createNewCard}/>
            </div>
        )
    }


}


export default MainContainer;