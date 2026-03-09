import { useState } from "react";
import "./lottery.css";
import { generateTicket, sum } from "./helper";
import Ticket from "./ticket.jsx";

export default function Lottery(){

    let n = 3;
    let WinningSum = 15;

    let [ticket, setTicket] = useState(generateTicket(n));

    let isWinning = sum(ticket) === WinningSum;

    let buyTicket = () => {
        setTicket(generateTicket(n));
    }

    return(
        <div>
            <h2>Lottery Game</h2>

            <Ticket ticket={ticket}/>

            <button onClick={buyTicket}>Buy Ticket</button>

            <h4>{isWinning && "Congratulations you won!"}</h4>
        </div>
    );
}