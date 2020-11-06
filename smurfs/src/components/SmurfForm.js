// ------- import react -----------
import React, { useState, useEffect } from 'react'

// ------- import action creator ---------
import { pushNewSmurf } from '../store/actions/index'

// ------- import action type --------
import { ADD_SMURF } from '../store/actions/index'

import axios from 'axios'

const initialState = {
    name: '',
    age: '',
    height: '',
}

const SmurfForm = (props) => {
    const [smurfItem, setSmurfItem] = useState(initialState)

    console.log(smurfItem.name)
    console.log(smurfItem.age)
    console.log(smurfItem.height)

    // -------- helper functions -------------
    const handleChanges = (e) => {
       setSmurfItem({
           ...smurfItem,
           [e.target.name]:e.target.value
       }) 
    } 


// ----- This needs to get outsourced to actions and reducer -------
    const pushData = () => {
        console.log(smurfItem)
        pushNewSmurf(smurfItem)
    }

    return (
        <div>
            <form>
                <label>Name:</label>
                <input
                    type = 'text'
                    name = 'name'
                    value = {smurfItem.name}
                    onChange = {handleChanges}
                />

                <label>Age:</label>
                <input
                    type = 'text'
                    name = 'age'
                    value = {smurfItem.age}
                    onChange = {handleChanges}
                />

                <label>Height</label>
                <input
                    type = 'text'
                    name = 'height'
                    value = {smurfItem.height}
                    onChange = {handleChanges}
                />

                <button onClick={() => {
                   pushData()
                    // dispatch({ type: ADD_SMURF, payload: smurfItem })
                    // setSmurfItem(initialState)
                }}> Submit </button>

            </form>
        </div>
    )
}

export default SmurfForm;