import React, { Component } from 'react'
import {ToDoInputPanel} from './ToDoInputPanel'
import {ToDoListPanel} from './ToDoListPanel'

export class ToDoContainer extends Component {
    constructor(){
        super();
        this.state= {
            todolist:[]
        }
    }

    addToList = (event,name)=>{
        event.preventDefault();
        this.setState((previous)=>{
            let newlist = [{id: previous.todolist.length+1 ,listname: name}];
            return{
                todolist: [...previous.todolist , ...newlist]
            }
        })
    }
  render() {
    return (
      <div>
        <ToDoInputPanel addlistfn={this.addToList}/>
        <ToDoListPanel list={this.state.todolist}/>
      </div>
    )
  }
}

export default ToDoContainer
