import React from "react";
import GroceryInput from './groceryInput';
import GroceryList from "./groceryList";
import "./grocery.css"

function Grocery(){
    const [grocery ,setGrocery] = React.useState([]);

    const getGrocery = ()=>{
        fetch("http://localhost:3001/grocery")
        .then((response)=>response.json())
        .then((response)=>{
            setGrocery(response)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    React.useEffect(()=>{
            getGrocery();
        },[]);

    return(
        <div>
            <h1 className="centrallyAllign"></h1>
            <GroceryInput getGrocery={getGrocery}/>
            <GroceryList grocery={grocery} getGrocery = {getGrocery}/>
        </div>
    )
}


export default Grocery;