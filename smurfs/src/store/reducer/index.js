// ------ import action types ----------
import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
} from '../actions/index'
// ------- set initial state -------------

const initialState = {
    isLoading: false,
    smurfsData: [],
    error: ''
}

// -------- Reducer Function ---------------

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading:true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurfsData: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }       
        default: 
        return state;

    }
}