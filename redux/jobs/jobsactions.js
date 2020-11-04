import { FETCH_JOBS_REQUEST, FETCH_JOBS_FAILURE, FETCH_JOBS_SUCCESS, LOADING_TRUE, LOADING_FALSE } from "./jobstypes"

const jobsRequest = () => ({ type: FETCH_JOBS_REQUEST })
const jobsFailure = (message) => ({ type: FETCH_JOBS_FAILURE, message: message })
const jobsSuccess = (jobs) => ({ type: FETCH_JOBS_SUCCESS, jobs: jobs })
const loadingTrue = () => ({ type: LOADING_TRUE })
const loadingFalse = () => ({ type: LOADING_FALSE })

export { jobsRequest, jobsFailure, jobsSuccess, loadingTrue, loadingFalse }