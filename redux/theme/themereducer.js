import { DARK_MODE, LIGHT_MODE } from "./themetypes"

const initialState = {
      mode: "light"
}

const themeReducer = (state = initialState, action) => {
      switch(action.type) {
            case DARK_MODE: return {
                  ...state,
                  mode: "dark"
            }
            case LIGHT_MODE: return {
                  ...state,
                  mode: "light"
            }
            default: return state
      }
}

export default themeReducer