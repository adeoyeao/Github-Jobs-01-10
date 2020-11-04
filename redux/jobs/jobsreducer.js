import { jobsRequest, jobsFailure, jobsSuccess, loadingTrue, loadingFalse } from "./jobsactions"
import { FETCH_JOBS_REQUEST, FETCH_JOBS_FAILURE, FETCH_JOBS_SUCCESS, LOADING_TRUE, LOADING_FALSE } from "./jobstypes"

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
            case LOADING_FALSE: return {
                  ...state,
                  loading: false
            }
            case LOADING_TRUE: return {
                  ...state,
                  loading: true
            }
            default: return state
      }
}

export default jobsReducer
