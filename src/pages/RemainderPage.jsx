import Sidebar from "@/components/sideBar";
import { BoardCard } from "@/components/tabs/boardCard";
import { getLeadsRemainder } from "@/services/leadsApi";
import { MessageSquareText, PhoneCall, User2 } from "lucide-react";
import { useEffect, useState } from "react";






 const RemainderPage=()=>{

    const [remainders,setRemainders]=useState(null)

    let loggedinuser = sessionStorage.getItem("user");
    let user =JSON.parse(loggedinuser);
    let level =user?.level;

    const GetLeads=async()=>{
    let data = await getLeadsRemainder(user?.token,level,user.id)
    setRemainders(data);
    }

    useEffect(()=>{
     GetLeads()
    },[]);

    function formatDate(date) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
      }
      
      const today = new Date();
      const formattedDate = formatDate(today);


    return <div className=" flex">
    <div className="fixed h-screen">
      <Sidebar />
    </div>
    <div className=" py-2  lg:ml-44 overflow-hidden px-5">
        <h1 className="text-3xl font-semibold text-gray-700">Remainders</h1>
        <h2 className="text-md font-medium text-gray-400 mb-10">{formattedDate}</h2>
      {
        remainders !== null ? 
        <div>

            {
                remainders.map(lead=>{
                    return <div className="rounded-sm border border-gray-300 p-1 px-3 my-2 w-64 -z-10">
        <div className="flex items-start justify-between flex-col gap-2 ">
          <h3 className="text-md font-semibold flex gap-2"> {lead.name}</h3> 
          <h3 className="text-sm font-semibold flex gap-2 "><a className="flex gap-2" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${lead.phone}`}><PhoneCall size={16}/>{lead.phone}</a></h3> 
        </div>

        
      </div>
                })
            }

        </div>
        :
        <div>
            No Remainders
        </div>

      }
    </div>
  </div>
}

export default RemainderPage;