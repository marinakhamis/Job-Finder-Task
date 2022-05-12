import { FETCH_JOBS } from "./types";

export const fetchJobs = () => dispatch => {
    // console.log("Fetching")
    fetch('https://6251492bdfa31c1fbd6bcc26.mockapi.io/jobs')
        .then(res => res.json())
        .then(jobs =>
            dispatch({
                type: FETCH_JOBS,
                payload: jobs
            })
        )

}