import { useState } from "react";

export default function LikeButton(){
    let [isLike, setIsLike]=useState(false);
    let [click, setClick]= useState(0);
    let styles={color:"red"};

    let toggleLike=()=>{
        setIsLike(!isLike);
        setClick(click+1);
    }
    return(
        <div>
            <p>Click={click}</p>
            <p onClick={toggleLike} style={styles}>{isLike ? (<i className="fa-solid fa-heart"></i>):
            (<i className="fa-regular fa-heart"></i>)}</p>
        </div>
    )
}