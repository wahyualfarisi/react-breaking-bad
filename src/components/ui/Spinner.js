import React from 'react'
import Spinnerss from './../../img/spinner.gif';

const Spinner = () => {
    return (
        <img src={Spinnerss} style={{
            width: '200px', 
            margin: 'auto',
            display: 'block'
        }} alt='Loading' />
    )
}

export default Spinner
