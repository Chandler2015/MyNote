import React from 'react'
import {
    Link
  } from "react-router-dom";

const Add = () => {
    return (
        <Link to = "/note/new/" className = "floating-button">
             <img   style={{ color: 'yellow',backgroundColor: '#f68657' , fill:'#f68657' }} src={require('../assets/add.svg').default} alt='leftarrow' />
        </Link>
    )
}

export default Add
