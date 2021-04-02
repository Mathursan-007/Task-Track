import React from 'react';

const ToDoList = (props)=>{

   function handleClick(event){
       event.preventDefault();
       props.handleClickList(props.card_ID,props.list.id);
   }


   return(
       <div onClick={handleClick} className={"to-do-list"}>
         <h3>{props.list.description}</h3>

       </div>
   )

}
export default ToDoList;