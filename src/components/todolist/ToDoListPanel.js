import React, { Component } from 'react'
import todomodulestyle from './todoStyles.module.css'

import { ListContext } from '../../contexts'


export class ToDoListPanel extends Component {

    static contextType = ListContext;

    onDragStartFn(event, list) {
        event.dataTransfer.setData('list', list.listName);
    }

    onDropFn(event, listType) {
        let listName = event.dataTransfer.getData('list');
        let list = this.context.listTodo.find((lst)=>lst.listName == listName)
        this.props.listCompletedFn(list);
    }

    onDragOverFn(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <ListContext.Consumer>

                    {this.context => ( */}
                        <div>
                            <div className = {todomodulestyle.dragablecontainer}>
                                <h3>Lists to do</h3>
                                <ul className={todomodulestyle.uistyl}>
                                    {/* {listsTodo} */}
                                    {this.context && this.context.listTodo && this.context.listTodo.map((list) => {
                                        return <li draggable
                                            onDragStart={(e) => this.onDragStartFn(e, list)}
                                            className={todomodulestyle.listyle}
                                            key={list.id}> {list.listName}
                                            <button className={todomodulestyle.todolistbtn}
                                                onClick={() => this.props.listCompletedFn(list)}>complete
                                            </button>
                                        </li>
                                    })
                                    }
                                </ul>
                            </div>

                            <div className = {todomodulestyle.dragablecontainer}
                                onDragOver={(e) => this.onDragOverFn(e)}
                                onDrop={(e) => this.onDropFn(e, "complete")}>
                                <h3>Lists Completed</h3>
                                <ul className={todomodulestyle.uistyl}
                                >
                                    {/* {listsCompleted} */}

                                    {
                                        this.context && this.context.listCompleted && this.context.listCompleted.map((list) => {
                                            return (
                                                <li className={todomodulestyle.listyle} key={list.id}

                                                > {list.listName}

                                                </li>)
                                        })
                                    }
                                </ul>
                            </div>
                         </div> 
                     {/* )}
                </ListContext.Consumer> */}
            </div>
        )
    }
}

