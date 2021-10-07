import React from "react"
import { useGlobalContext } from "./context";

const Items = ()=>{
    const {loading,data,message,onDetails,details,setDetails,handleBack} = useGlobalContext()
    if(loading)
    {
        return(
            <div className = "loading-container">
                <h1 style = {{color:"grey"}}>Loading...</h1>
            </div>
        )
    }
    else if(data)
    {
        if(details)
        {
            return (
                <section className = "detail-container">
                    <button className = "back" onClick = {handleBack}>Back Home</button>
                    {data.map((item)=>{
                        const {idDrink,strDrink,strDrinkThumb,strCategory,strAlcoholic,strGlass,strInstructions,strIngredient1,strIngredient2,strIngredient3} = item
                        return (
                            <article>
                                <h1>{strDrink}</h1>
                                <div className = "detail-info-container">
                                    <img src = {strDrinkThumb} alt = {strDrink}></img>
                                    <div>
                                        <div>
                                            <h3>Name : </h3>
                                            <p>{strDrink}</p>
                                        </div>
                                        <div>
                                            <h3>Category : </h3>
                                            <p>{strCategory}</p>
                                        </div>
                                         <div>
                                            <h3>Info: </h3>
                                            <p>{strAlcoholic}</p>
                                        </div>
                                         <div>
                                            <h3>Glass : </h3>
                                            <p>{strGlass}</p>
                                        </div>
                                         <div>
                                            <h3>Instructions : </h3>
                                            <p>{strInstructions}</p>
                                        </div>
                                         <div>
                                            <h3>Ingredients : </h3>
                                            <p>{strIngredient1 + strIngredient2 + strIngredient3}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>   
                        )
                    })}
                </section>
            )
        }
        else
        {
            return (
                    <section className = "item-container">
                        {
                            data.map((item)=>{
                                const {strDrinkThumb,idDrink,strDrink,strAlcoholic,strGlass} = item
                                return (
                                    <article key = {idDrink}>
                                        <img src = {strDrinkThumb} alt = {strDrink}></img>
                                        <div>
                                            <h1>{strDrink}</h1>
                                            <h1>{strGlass}</h1>
                                            <p>{strAlcoholic}</p>
                                            <button onClick = {()=>onDetails(idDrink)} className = "details">details</button>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </section>
                )
            }
    }
    else if(message)
    {
        return (
            <h1>{message}</h1>
        )
    }
   
}

export default Items;
