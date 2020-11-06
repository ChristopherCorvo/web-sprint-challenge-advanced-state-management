// ------- import react & useEffect --------
import React, { useEffect } from 'react'

// ---------- Import {connect} from react-redux -------
import { connect } from 'react-redux'

// ----------- import needed Actions ----------------
import { fetchSmurfsData } from '../store/actions/index'


const SmurfVillage = (props) => {
    
    useEffect(() => {
        props.fetchSmurfsData();
        
    }, [])

    return (
        <div>
            <h1>Welcome to Smurf Village </h1>
            {props.smurfsData.map((smurf)=> (
                <div>
                    <h3> Name:{smurf.name}</h3>
                    <h3> Age: {smurf.age}</h3>
                    <h3> Height: {smurf.height}</h3>
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfsData: state.smurfsData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfsData }) (SmurfVillage);