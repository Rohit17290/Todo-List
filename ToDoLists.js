import React from "react";
 
const ToDoLists = (props) =>{

    return (
    <>
      <div className="todo_style " style={{
        display:"flex"
      }}>
        <i className="fa fa-times" 
        aria-hidden="true" 
        onClick={() => {
        props.onSelect(props.id);
        }}
        />
        <li onClick={() => {
         props.onSelect(props.id);
        }}><h6 style={{flex: 0.1,
            backgroundColor: 'red',
            borderWidth: 1,
            padding:"1px",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,}}>x</h6>
        </li>
        <li>{props.text} </li>
      </div>   
    </>
    );
};

export default ToDoLists;