import React from "react";
import "./groceryList.css"

function GroceryList({grocery,getGrocery}){
    
    const handleDelete = (id)=>{
        fetch(`http://localhost:3001/grocery/${id}`,{
            method : "DELETE",
            headers : {"Content-type" : "Application/json"}
    })
    getGrocery();
    }

    return(
        <div>
            {grocery.map((item)=>{
                (
                    <div className="listContainer">
                        <h3>{item.title}</h3>
                        <button className="groceryBtn"
                            onClick={()=>{
                            handleDelete(item.id)  
                            }}
                        >DELETE
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default GroceryList;