import React from 'react'
import todomodulestyle from './todoStyles.module.css'

export const ToDoListPanel = (props) => {
    const listsTodo = props && props.listTodo && props.listTodo.map((list) => {
        return <li className={todomodulestyle.listyle} key={list.id} > {list.listName}
            <button className={todomodulestyle.todolistbtn} onClick={() => props.listCompletedFn(list)}>complete</button> </li>
    })

    const listsCompleted = props && props.listComplete && props.listComplete.map((list) => { return <li className={todomodulestyle.listyle} key={list.id} > {list.listName} </li> })
    return (

        <div>
            <div>
                <h3>Lists to do</h3>
                <ul className={todomodulestyle.uistyl}>
                    {listsTodo}
                </ul>
            </div>

            <div>
                <h3>Lists Completed</h3>
                <ul className={todomodulestyle.uistyl}>
                    {listsCompleted}
                </ul>
            </div>
        </div>
    )
}

