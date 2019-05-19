import React from 'react'
import todomodulestyle from './todoStyles.module.css'

import { ListContext } from '../../contexts'


export const ToDoListPanel = (prop) => {
    return (

        <div>
            <ListContext.Consumer>

                {props => (
                    <div>
                        <div>
                            <h3>Lists to do</h3>
                            <ul className={todomodulestyle.uistyl}>
                                {/* {listsTodo} */}
                                {props && props.listTodo && props.listTodo.map((list) => {
                                    return <li className={todomodulestyle.listyle} key={list.id} > {list.listName}
                                        <button className={todomodulestyle.todolistbtn} onClick={() => prop.listCompletedFn(list)}>complete</button> </li>
                                })
                                }
                            </ul>
                        </div>

                        <div>
                            <h3>Lists Completed</h3>
                            <ul className={todomodulestyle.uistyl}>
                                {/* {listsCompleted} */}

                                {
                                    props && props.listCompleted && props.listCompleted.map((list) => { return <li className={todomodulestyle.listyle} key={list.id} > {list.listName} </li> })
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </ListContext.Consumer>
        </div>
    )
}

