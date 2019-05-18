import { TodoActions } from "../actions"

const initialState = {
    listToDo: [],
    listCompleted: []
}


export default function toDoListReducer(state = initialState, action) {

    switch (action.type) {
        case TodoActions.TODO_ADD_LIST:
            let newlisttobeadded = { "id": state.listToDo.length + 1, "listName": action.payload.listName }
            let newState = {
                ...state,
                listToDo: [...state.listToDo, newlisttobeadded]
            }
            return newState;
        case TodoActions.TODO_LIST_COMPLETED:
            let sttate = {
                ...state,
                listToDo: state.listToDo.filter((list) => list.id != action.payload.id),
                listCompleted: [...state.listCompleted, action.payload]
            }
            return sttate;
        default:
            return state;
    }

}

// export default toDoListReducer;