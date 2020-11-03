import { jobsRequest, jobsFailure, jobsSuccess } from "./jobsactions"
import { FETCH_JOBS_REQUEST, FETCH_JOBS_FAILURE, FETCH_JOBS_SUCCESS } from "./jobstypes"

const initialState = {
      loading: false,
      data: [],
      error: ""
}

const jobsReducer = (state = initialState, action) => {
      switch(action.type) {
            case FETCH_JOBS_REQUEST: return {
                  ...state,
                  loading: true
            }
            case FETCH_JOBS_FAILURE: return {
                  ...state,
                  loading: false,
                  data: [],
                  error: action.message
            }
            case FETCH_JOBS_SUCCESS: return {
                  ...state,
                  loading: false,
                  data: action.jobs,
                  error: ""
            }
            default: return state
      }
}

export default jobsReducer
