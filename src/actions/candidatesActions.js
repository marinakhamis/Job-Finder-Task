import { FETCH_CANDIDATES } from "./types";

export const fetchCandidates = () => dispatch => {
    // console.log("Fetching")
    fetch('https://6251492bdfa31c1fbd6bcc26.mockapi.io/candidates')
        .then(res => res.json())
        .then(candidates =>
            dispatch({
                type: FETCH_CANDIDATES,
                payload: candidates
            })
        )

}