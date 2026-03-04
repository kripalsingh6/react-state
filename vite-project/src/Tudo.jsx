
import { useState } from "react";

export default function Tudo(){

    let [Tudos, setTudo]= useState(["sample task"]);
    let[NewTudo, setNewTudo]=useState("");

    let newList=()=>{
        setTudo([...Tudos, NewTudo]);
    }
    let UpdateList=(event)=>{
        setNewTudo(event.target.value)
    }


    return(
        <div>
            <input placeholder="Add a Task" value={NewTudo} onChange={UpdateList} ></input><br></br>
            <button onClick={newList}>Submit</button>

            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
              {
                    Tudos.map((tudo, index) => (
                        <li key={index}>{tudo}</li>
                    ))
                }
            </ul>

        </div>
    )
}