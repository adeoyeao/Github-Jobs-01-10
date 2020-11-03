import { applyMiddleware, createStore } from "redux"
import rootReducer from "./reducer"

const thunkMiddleware = require("redux-thunk").default
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store