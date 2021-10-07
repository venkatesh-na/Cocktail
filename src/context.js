import React, { useContext , useEffect, useState} from "react"
const AppContext = React.createContext()

const AppProvider = ({ children })=>{
    const [name,setName] = useState("")
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [details,setDetails] = useState(false)
    const [message,setMessage] = useState("")
    const fetchData = async ()=>{
        try
        {
            setLoading(true)
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            const data = await response.json()
            const arr_data = data.drinks
            if(arr_data.length > 0)
            {
            setLoading(false)
            setData(data.drinks)
            setMessage("")
            }
        }
        catch(error)
        {
            console.log(error)
            setMessage(error)
        }
    }

    useEffect(()=>{
        fetchData()
        return ()=>{}
    },[name])
    const onDetails = (id)=>{
        console.log(id)
        setDetails((details)=>!details)
        setData(data.filter((item)=>item.idDrink == id))
    }
    const handleBack = ()=>{
        setDetails((details)=>!details)
        fetchData()
    }
    return (
        <AppContext.Provider value = {{loading,setName,data,message,onDetails,details,setDetails,handleBack,message}}>
            {children}
        </AppContext.Provider>       
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,useGlobalContext};