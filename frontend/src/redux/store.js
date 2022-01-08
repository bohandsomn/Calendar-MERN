import { createStore } from "redux"
import rootReducer from "./todoList/reducer.js"

const store = createStore( rootReducer )

export default store