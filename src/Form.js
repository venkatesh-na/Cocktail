import React from 'react'
import { useGlobalContext } from './context';
const Form = ()=>{
    const {setName} = useGlobalContext()
    return (
        <div className = "form-container">
            <p>Search  Your Favorite Cocktail</p>
            <input onChange = {(e)=>setName(e.target.value)} type = "text"/>
        </div>
    )
}

export default Form;
