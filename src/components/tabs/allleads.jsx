import React, { useState } from 'react'
import { LeadCard } from './leadCard'

import { ScrollArea } from "@/components/ui/scroll-area";
import DeatilsDrawer from '../Drawer';


export const AllLeads = () => {

  const leadsData = [
    {
      name: "John Doe",
      phone: "+1 234 567 890",
      date: "May 30, 2024",
      priority: "High",
      messages: 5,
    },
    {
      name: "Jane Smith",
      phone: "+1 987 654 321",
      date: "June 2, 2024",
      priority: "Medium",
      messages: 2,
    },
    {
      name: "Alice Johnson",
      phone: "+1 555 666 777",
      date: "June 5, 2024",
      priority: "Low",
      messages: 8,
    },
  ];
  const [open, setopen] = useState(false);
  const[lead,setlead]=useState(null);

  const handleDrawer=(data)=>{
    setopen(true);
    setlead(data)
  }

  return (
    <div className="w-screen flex flex-row gap-4 overflow-x-auto ">
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
            Branch 1
          </span>
        </div>
        <DeatilsDrawer open={open} setopen={setopen} lead={lead} />

        {leadsData.map((lead, index) => {
          return (
            <button onClick={()=>handleDrawer(lead)}>
              <LeadCard lead={lead} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
