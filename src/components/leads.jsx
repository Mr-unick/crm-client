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

let loggedinuser = localStorage.getItem("user");
let user = JSON.parse(loggedinuser);

const toggleDrawer = useCallback((lead) => {
      setlead(lead);
      setIsOpen(false?true:false);
      console.log("ooo");
    }
,[])

const getleads=async ()=>{

let res=await getLeads(user?.token,user.level,user._id);
setlead(res)
}
useEffect(()=>{
getleads()
},[])

  return (
    <div className=" lg:ml-5 mb-6  px-3  h-screen ">
      <Tabs defaultValue="all" className=" overflow-hidden mt-8 lg:mt-0">
        <TabsList className="lg:w-1/3 w-[100%]">
          <TabsTrigger value="all" className="w-1/3 ">
            All Leads
          </TabsTrigger>
          <TabsTrigger value="table" className="w-1/3">
            Table View
          </TabsTrigger>
          <TabsTrigger value="board" className="w-1/3">
            Board View
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="overflow-x-auto">
          <AllLeads toggleDrawer={toggleDrawer} leads={leads} />
        </TabsContent>
        <TabsContent value="table" className="overflow-x-auto ">
          <LeadTable leads={leads} />
        </TabsContent>
        <TabsContent value="board" className="overflow-x-auto">
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
