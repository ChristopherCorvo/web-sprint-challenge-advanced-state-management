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

    console.log(smurfItem)

    // -------- helper functions -------------
    const handleChanges = (e) => {
       setSmurfItem(e.target.value) 
    } 

    const onSubmit = (e) => {
        e.preventDefault()

        console.log('Testing Form Submit')
    }

    // const test = (props) => {
    //     useEffect (()=> {
    //         props.pushNewSmurf()
    //     }, [])
        
    // }

    const test = () => {
        axios
            .post('http://localhost:3333/smurfs', smurfItem) 
            .then((res) =>{
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit = {onSubmit} >
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
                    name = 'Age'
                    value = {smurfItem.age}
                    onChange = {handleChanges}
                />

                <label>Height</label>
                <input
                    type = 'text'
                    name = 'Name'
                    value = {smurfItem.height}
                    onChange = {handleChanges}
                />

                <button onClick={() => {
                   test()
                    // dispatch({ type: ADD_SMURF, payload: smurfItem })
                    // setSmurfItem(initialState)
                }}> Submit </button>

            </form>
        </div>
    )
}

export default SmurfForm;