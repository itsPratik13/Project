import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/BackButton";

export default async function CustomerFormPage({
    searchParams,
}:{
    searchParams:Promise<{ [key:string]:string | undefined}>
}){
    try{
        const {customerid}=await searchParams
        //edit customer form
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
            console.log(customer);
            //put customer form component
            
        }
        else{
            //new customer form component
        }
        
    }catch(e){
        if(e instanceof Error){
            throw e;
        }
    }
}