import { TodoActions } from "./"

export function addTodoListAction(list) {
    return {
        type: TodoActions.TODO_ADD_LIST,
        payload: list
    }

}

export function completedListAction(list) {
    return {
        type: TodoActions.TODO_LIST_COMPLETED,
        payload: list
    }

}