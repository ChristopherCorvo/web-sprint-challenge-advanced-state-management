// ------- import react -----------
import react, { useState } from 'react'

const initialSmurfItem = {
    name: '',
    age: '',
    height: '',
    id: ''
}

const SmurfForm = () => {
    const {SmurfItem, setSmurfItem} = useState(initialSmurfItem)

    // -------- helper functions -------------

    return (
        <div>
            <form onSubmit={}>
                <label>Name:</label>
                <input
                    type = 'text'
                    name = 'Name'
                    value = {}
                    onChange = {handleChanges}
                />

                <label>Age:</label>
                <input
                    type = 'text'
                    name = 'Age'
                    value = {}
                    onChange = {handleChanges}
                />

                <label>Height</label>
                <input
                    type = 'text'
                    name = 'Name'
                    value = {}
                    onChange = {handleChanges}
                />

                <button onClick = {}> Submit </button>

            </form>
        </div>
    )
}

export default SmurfForm;