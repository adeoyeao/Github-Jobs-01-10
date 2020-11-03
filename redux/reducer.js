import { combineReducers } from "redux"
import themeReducer from "./theme/themereducer"
import postsReducer from "./posts/postsreducer"
import jobsReducer from "./jobs/jobsreducer"

const rootReducer = combineReducers({
      theme: themeReducer,
      posts: postsReducer,
      jobs: jobsReducer,
})

export default rootReducer