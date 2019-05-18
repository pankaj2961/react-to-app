import React, { Component } from 'react'
import { connect } from "react-redux"
import { ToDoInputPanel } from '../components'
import { ToDoListPanel } from '../components'

import { addTodoListAction, completedListAction } from "../actions"

class ToDoContainer extends Component {
    render() {
        return (
            <div>
                <ToDoInputPanel addlistfn={this.props.addtolistFn} />
                <ToDoListPanel listTodo={this.props.listToDo} listCompletedFn={this.props.listCompletedFn}
                    listComplete={this.props.listCompleted} />
            </div>
        )
    }
}

const mapstateToProp = (state) => {
    return {
        listToDo: state.todolists.listToDo,
        listCompleted: state.todolists.listCompleted
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        addtolistFn: (list) => {
            dispatch(addTodoListAction(list))
        },
        listCompletedFn: (list) => {
            dispatch(completedListAction(list))
        }
    }
}

export default connect(mapstateToProp, mapDispatchToProp)(ToDoContainer)
