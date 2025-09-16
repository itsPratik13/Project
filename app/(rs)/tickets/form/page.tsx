import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import BackButton from "@/components/BackButton";

import React from 'react'

export default async function TicketFormPage({searchParams,}:{searchParams:Promise<{[key:string]:string|undefined}>}){
  try {
    const {customerid,ticketid}=await searchParams

    if(!customerid && !ticketid){
        return(
            <>
            <h2 className="text-2xl mb">Customer ID or Ticket ID required  to load the ticket forms</h2>
            <BackButton title="Go Back" variant="default"/>
            </>
        )

    }
    //new ticket form
    if(customerid){
        const customer=await getCustomer(parseInt(customerid));
        if(!customer){
            return(
                <>
                <h2 className="text-2xl mb">Customer ID  #{customerid} not found</h2>
                <BackButton title="Go Back" variant="default"/>
                </>
            )
        }
        if(!customer.active){
            return(
                <>
                <h2 className="text-2xl mb">Customer ID  #{customerid} is not active</h2>
                <BackButton title="Go Back" variant="default"/>
                </>
            )
        }
        //return ticket form
        console.log(customer);
        
    }
    if(ticketid){
        const ticket=await getTicket(parseInt(ticketid));
        
        if(!ticket){
            return(
                <>
                <h2 className="text-2xl mb">Ticket ID  #{customerid} not found</h2>
                <BackButton title="Go Back" variant="default"/>
                </>
            )
             
        }
        const customer=await getCustomer(ticket.customerId);
        console.log(ticket);
        console.log(customer);
        
        

    }
    
  } catch (e) {
    if(e instanceof Error){
        throw e;
    }
    
  }
  
  
}
