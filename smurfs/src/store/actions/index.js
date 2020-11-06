// ------ import axios -------------------
import axios from 'axios'


// ------ Action Types -------------------
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'


// -------- Action Creator for getting data --------------
export const fetchSmurfsData = () => dispatch => {
    // do async actions here
    dispatch({ type: FETCH_SMURFS_START });

    axios
        .get('http://localhost:3333/smurfs')
           .then((res) => {
                console.log(res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch((error) => {
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.message })
            })

}

// -------- Action Types for Posting -----------
export const ADD_SMURF = 'FETCH_SMURFS_START'
// export const ADD_SMURF_SUCCESS = 'FETCH_SMURFS_SUCCESS'
// export const ADD_SMURF_FAILURE = 'FETCH_SMURFS_FAILURE'


// ------- Action Creator for Posting -----------

export const pushNewSmurf = () => dispatch => {
    dispatch({ type: ADD_SMURF })
    
    axios
        .post('http://localhost:3333/smurfs', {
            name: '',
            age: '',
            height:''
        })
        .then((res) =>{
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}