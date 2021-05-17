const uuid = require('uuid');

let cards=new Map();
let lists=new Map();

function addCard({title}){

    let card = {
        id:cards.size+1,
        title,
        lists:[]
    }

    cards.set(card.id,card)
    return card;
}

function getCards(){
    return [...cards.values()]
}

function addList({description,card_ID,completed}){

    let list ={
        card_ID,
        id:lists.size+1,
        description,
        completed
    }

    let card=cards.get(card_ID);
    card.lists=[...card.lists,list]
    lists.set(list.id,list);
    return list;

}

function handleList(id,{completed}){

     let list=lists.get(Number(id))
     list.completed=completed
     return list;
}

module.exports={addCard,getCards,addList,handleList}