import "./ticketnum.css"
import TicketNumber from "./ticketNumber";
export default function Ticket({ticket}){
  return <div className="Ticket">
    <p>Ticket</p>
    {
        ticket.map((num,idx)=>(
            <TicketNumber num={num} key={idx}/>
        ))
    }
  </div>
}