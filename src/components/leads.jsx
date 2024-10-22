import React, { useCallback, useEffect, useState } from 'react'
import { LeadTable } from './leadsTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MessageSquareText } from 'lucide-react';
import { Button, Drawer } from '@mui/material';
import LeadDetails from './leadsDetails';
import { AllLeads } from './tabs/allleads';
import { BoardLeads } from './tabs/boardLeads';
import { getLeads } from '@/services/leadsApi';







export const Leads = (props) => {


const [activeTab, setActiveTab] = useState("All Leads");
const [isOpen, setIsOpen] = useState(false);

const [leads, setlead] = useState([]);
const [search,setsearch]=useState(null);
const [tab,setTab]=useState(false);

let loggedinuser = sessionStorage.getItem("user");
let user = JSON.parse(loggedinuser);

const toggleDrawer = useCallback((lead) => {
  
      setlead(lead);
      setIsOpen(false?true:false);
    
    }
,[])

const getleads=async ()=>{

let res=await getLeads(user?.token,user?.level,user?.id);
setlead(res)
}

useEffect(()=>{
getleads()
setlead(leads); 
//sessionStorage.setItem('leads',JSON.stringify(leads))

setsearch(null)
console.log('loggg3')

},[])

useEffect(()=>{
  // getleads()
  setlead(leads); 
  setsearch(null)
  console.log('loggg1')
},[tab])

useEffect(() => {
  console.log('loggg2')
  if (search) {
    const filteredData = leads.filter(item => 
      item.name?.toLowerCase()?.includes(search.toLowerCase()) ||
      item.number?.includes(search)
    );
    setlead(filteredData);
  } else {
    setlead(leads); 
  }
}, [search]);



  return (
    <div className=" lg:ml-5 mb-6  px-3  h-screen ">
      <Tabs defaultValue="all" className=" overflow-hidden mt-8 lg:mt-0">
        <TabsList className="lg:w-1/3 w-[100%]">
          <TabsTrigger onClick={()=>setTab(tab ? false:true)} value="all" className="w-1/3 ">
            All Leads
          </TabsTrigger>
          <TabsTrigger onClick={()=>setTab(tab ? false:true)} value="table" className="w-1/3">
            Table View
          </TabsTrigger>
          <TabsTrigger onClick={()=>setTab(tab ? false:true)} value="board" className="w-1/3">
            Board View
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="overflow-x-auto">
        <div className="h-10 flex justify-start items-center ">
       <input onChange={(e)=>{setsearch(e.target.value)}} type="text" placeholder="search..." className="border-[1px] border-gray-200 outline-none  px-2 w-1/2 py-1"/>
       </div>
          <AllLeads toggleDrawer={toggleDrawer} leads={leads} />
        </TabsContent>
        <TabsContent value="table" className="overflow-x-auto ">
        <div className="h-10 flex justify-start items-center ">
       <input onChange={(e)=>{setsearch(e.target.value)}} type="text" placeholder="search..." className=" border-[1px] border-gray-200 outline-none w-1/2 px-2 py-1"/>
       </div>
          <LeadTable leads={leads} />
        </TabsContent>
        <TabsContent value="board" className="overflow-auto  ">
        <div className="h-10 flex justify-start items-center ">
       <input onChange={(e)=>{setsearch(e.target.value)}} type="text" placeholder="search..." className=" border-[1px] border-gray-200 outline-none w-1/2 px-2 py-1"/>
       </div>
          <BoardLeads toggleDrawer={toggleDrawer} leads={leads} />
        </TabsContent>
      </Tabs>

      {/* <div className="mt-4  overflow-auto pr-8 ">
        <div
          className={` gap-5 flex w-screen  ${
            activeTab === "All Leads" ? "animate-fadeIn" : "hidden"
          }`}
        >
          <div className="flex justify-start items-start flex-col ">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Prospect 20
            </span>
            <div className="flex flex-col overflow-y-auto max-h-full">
              <button onClick={toggleDrawer(true)}>
                <Card />
              </button>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Qualified 20
            </span>
            <div className="flex flex-col"></div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Opportunity 20
            </span>
            <div className="flex flex-col"></div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Nurture 20
            </span>
            <div className="flex flex-col"></div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Re-prospect 20
            </span>
            <div className="flex flex-col"></div>
          </div>
        </div>

        <div
          className={`w-screen ${
            activeTab === "Table" ? "animate-fadeIn" : "hidden"
          }`}
        >
          <LeadTable />
        </div>

        <div
          className={` gap-5 flex w-screen  ${
            activeTab === "Board" ? "animate-fadeIn" : "hidden"
          }`}
        >
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Prospect 20
            </span>
            <div className="flex flex-col">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Qualified 20
            </span>
            <div className="flex flex-col">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Opportunity 20
            </span>
            <div className="flex flex-col">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Nurture 20
            </span>
            <div className="flex flex-col">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
          </div>
          <div className="flex justify-start items-start flex-col">
            <span className="px-7 py-1 mb-2 rounded-md bg-green-100 text-green-800 text-xs font-medium">
              Re-prospect 20
            </span>
            <div className="flex flex-col">
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
              <BoardCard />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
  }
