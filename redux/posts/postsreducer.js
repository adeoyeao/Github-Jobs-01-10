import { numPosts } from "./postsactions"
import { NUM_POSTS } from "./poststypes"

const initialState = {
      items: 12 
}

const postsReducer = (state = initialState, action) => {
      switch(action.type) {
            case NUM_POSTS: return {
                  ...state,
                  items: state.items + 12
            }
            default: return state
      }
} 

export default postsReducer