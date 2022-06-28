import React from 'react';
import "./groceryInput.css"
function GroceryInput({getGrocery}){
    
    const [input, setInput] = React.useState("");

    const handleAdd=()=>{
        const payload = {
            title : input,
            status : false
        }
    fetch('http://localhost:3001/grocery',{
        method : "Post",
        body : JSON.stringify(payload),
        headers : {"Content-type" : "Application/json"}
    });
    setInput("");
    getGrocery();
}
    return(
        <div style={{textAlign :"center"}}>
            <input className='groceryInputContainer'
            type= "text"
            value={input}
                onChange = {(event) =>(setInput(event.target.value))}
            />
            <button
            style={{height : "30px"}}
            onClick = {()=>{
                handleAdd()
            }}>
            Add
            </button>
        </div>
    ) 
}

export default GroceryInput;
