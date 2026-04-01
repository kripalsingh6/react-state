import { useState , useEffect} from "react";

export default function Counters(){
    let [countx, setCountx]= useState(0);
     let [county, setCounty]= useState(0);


    let handlevent1 = ()=>{
        setCountx(currCount => currCount+1);
    }
    let  handlevent2 = ()=>{
        setCounty(currCount => currCount+1);
    }

    useEffect(function printStatment(){
        console.log("this effect is working");
    },
    [])

  return (
    <div>
        <h3>countx = {countx}</h3>
        <button onClick={handlevent1} style={{width:"100px"}}>+1</button>
         <h3>county = {county}</h3>
        <button onClick={handlevent2} style={{width:"100px"}}>+1</button>
    </div>
  )
}