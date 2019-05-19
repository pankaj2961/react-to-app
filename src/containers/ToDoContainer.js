import React, { Component } from 'react'
import { connect } from "react-redux"
import { ToDoInputPanel } from '../components'
import { ToDoListPanel } from '../components'

import { addTodoListAction, completedListAction } from "../actions"
import { ListContext } from '../contexts'

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: {
                listTodo: this.props.listToDo,
                listCompleted: this.props.listCompleted
            }
        }
    }
    componentWillReceiveProps = (newProps) => {
        this.setState({ lists: { listTodo: newProps.listToDo, listCompleted: newProps.listCompleted } });
    }

    render() {
        return (
            <div>
                <ToDoInputPanel addlistfn={this.props.addtolistFn} />

                <ListContext.Provider value={this.state.lists}>
                    <ToDoListPanel listCompletedFn={this.props.listCompletedFn} />
                </ListContext.Provider>
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
