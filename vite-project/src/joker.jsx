import { useState, useEffect } from "react";

export default function Joker(){

     let [joke , setJoke] = useState({});

    let getNewjoke= async ()=>{
        let URL = "https://official-joke-api.appspot.com/jokes/random";
        let response = await fetch(URL);
        let jsonResponse= await response.json();
        console.log(jsonResponse); 

        setJoke({
            setup: jsonResponse.setup , 
            punchline : jsonResponse.punchline,
        })
    }
    useEffect(()=>{
        async function getjoke(){
              let URL = "https://official-joke-api.appspot.com/jokes/random";
        let response = await fetch(URL);
        let jsonResponse= await response.json();
        console.log(jsonResponse); 

        setJoke({
            setup: jsonResponse.setup , 
            punchline : jsonResponse.punchline,
        })
        }
        getjoke();

    }, []);
    
    return(
        <div>
            <h3>!jokes</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewjoke}>Get joke</button>
        </div>
    )
}