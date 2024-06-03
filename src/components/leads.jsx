import React, { useState } from 'react'
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







export const Leads = (props) => {
    const [activeTab, setActiveTab] = useState("All Leads");
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);

    };

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div className=" lg:ml-5 mb-6  px-3   ">
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <div className="w-[50rem]">
          <LeadDetails />
        </div>
      </Drawer>

      <Tabs defaultValue="all" className=" overflow-hidden mt-8 lg:mt-0">
        <TabsList className="lg:w-1/3 w-[100%]">
          <TabsTrigger value="all" className="lg:w-1/3 ">
            All Leads
          </TabsTrigger>
          <TabsTrigger value="table" className="lg:w-1/3">
            Table View
          </TabsTrigger>
          <TabsTrigger value="board" className="lg:w-1/3">
            Board View
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="overflow-x-auto ">
          <AllLeads />
        </TabsContent>
        <TabsContent value="table" className="overflow-x-auto ">
          <LeadTable />
        </TabsContent>
        <TabsContent value="board" className="overflow-x-auto ">
          <BoardLeads />
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
