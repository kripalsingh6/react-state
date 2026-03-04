import { useState } from "react";

export default function Ludo(){
    let [color, setColor]= useState({blue:0, yellow:0, red:0, green:0});

    let bluecolor=()=>{
        setColor((prevcolor)=>{
            console.log(prevcolor);
           return {...prevcolor, blue:prevcolor.blue+1}
        });
    }
    let yellowcolor=()=>{
        setColor({...color, yellow:color.yellow+1});
    }
    let greencolor=()=>{
        setColor({...color, green:color.green+1});
    }
    let redcolor=()=>{
        setColor({...color, red:color.red+1});
    }
    return(
        <div className="board">
            <p >Blue={color.blue}</p>
            <button onClick={bluecolor} style={{backgroundColor:"blue"}}>+1</button>
            <p >yellow={color.yellow}</p>
             <button onClick={yellowcolor} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            <p>green={color.green}</p>
             <button onClick={greencolor} style={{backgroundColor:"green"}}>+1</button>
            <p>red={color.red}</p>
             <button onClick={redcolor} style={{backgroundColor:"red"}}>+1</button>
        </div>
    )
}