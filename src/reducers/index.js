

import { combineReducers } from "redux"
import toDoListReducer from "./toDoListReducer";


export default combineReducers({
    todolists: toDoListReducer
})