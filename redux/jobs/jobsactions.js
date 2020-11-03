import { FETCH_JOBS_REQUEST, FETCH_JOBS_FAILURE, FETCH_JOBS_SUCCESS } from "./jobstypes"

const jobsRequest = () => ({ type: FETCH_JOBS_REQUEST })
const jobsFailure = (message) => ({ type: FETCH_JOBS_FAILURE, message: message })
const jobsSuccess = (jobs) => ({ type: FETCH_JOBS_SUCCESS, jobs: jobs })

export { jobsRequest, jobsFailure, jobsSuccess }