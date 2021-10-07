import React from "react"
import Header from "./Header";
import Form from "./Form"
import Items from "./Items"
import About from "./About";
import './App.css';
import { useGlobalContext } from "./context";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = ()=>{
  const {details,message} = useGlobalContext()
  return (
    <div className = "main-container">
      <Router>
       <Switch> 
      <Route path = "/" exact>
          <Header/>
          {details==false ? <Form/> : ""}
          {message ? <h1>No Cocktail Found</h1> : <Items/>}
      </Route>
      <Route path = "/about">
        <Header/>
        <About/>
      </Route>
      </Switch>
      </Router>  
    </div>
  );
}
export default App;
