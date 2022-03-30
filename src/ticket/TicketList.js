import React from 'react'
import { TicketDertail } from './TicketDertail'

export const TicketList = (props) => {
  return (
    <div>

        {
            props.tickets.map((ticket)=>{
                return(<TicketDertail ticket = {ticket} deleteTicket = {props.deleteTicket}/>

                )
            })
        }
    </div>
  )
}
