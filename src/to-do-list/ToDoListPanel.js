import React, {Component} from 'react'
import todomodulestyle from './todoStyles.module.css'

export const ToDoListPanel = (props) =>{
    return (

        <div>
        <ul className={todomodulestyle.uistyl}>
        {props.list.map((list)=>{return <li className={todomodulestyle.listyle} key= {list.id}> {list.listname} </li>} )}
        {/* {todolist} */}
        </ul>
        </div>
    )
}

