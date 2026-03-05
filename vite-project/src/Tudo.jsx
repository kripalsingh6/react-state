
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Tudo(){

    let [Tudos, setTudo]= useState([{task:"sample-task",id:uuidv4() }]);
    let[NewTudo, setNewTudo]=useState("");

    let newList=()=>{
        setTudo([...Tudos, {task:NewTudo,id:uuidv4()}]);
        setNewTudo("");
    }
    let UpdateList=(event)=>{
        setNewTudo(event.target.value)
    }

    let deleteTudo= (id)=>{
        setTudo((prevtudo)=>Tudos.filter((prevtudo)=> prevtudo.id!=id))
    }
    let toUpperCase= ()=>{
          setTudo(prevtudo =>
        prevtudo.map(tudo => ({
            ...tudo,
            task: tudo.task.toUpperCase()
        }))
    );
    }


    return(
        <div>
            <input placeholder="Add a Task" value={NewTudo} onChange={UpdateList} ></input><br></br>
            <button onClick={newList}>Submit</button>

            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
              {
                    Tudos.map((tudo) => (
                        <li key={tudo.id}>
                            <span>
                                {tudo.task}&nbsp;&nbsp;&nbsp;
                                <button onClick={()=>deleteTudo(tudo.id)}>delete</button>
                                </span>
                         </li>
                    ))
                }
            </ul>
            <button onClick={toUpperCase}>toUpperCase</button>

        </div>
    )
}