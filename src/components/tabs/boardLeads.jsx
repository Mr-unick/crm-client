import React, { createContext, useState } from "react";
import { LeadCard } from "./leadCard";
import DeatilsDrawer from "../Drawer";
import { notifySuccess } from "../toasts/toast";
import { toast } from "react-toastify";
import { leadsData } from "@/const";
import { BoardCard } from "./boardCard";
import { LeadContext } from "@/comtextapi/leadcontext";
import SortComponent from "../sort";
import FilterComponent from "../filter";
import { ScrollArea } from "@/components/ui/scroll-area"


export const BoardLeads = ({ leads }) => {


  const filterByBranchCode = (data, stage) =>
    data.filter((lead) => lead.stage === stage);

  const [open, setopen] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(null);
  const [currentLeads, setCurrentLeads] = useState([]);
  const [sortedData, setSortedData] = useState(leads);
  const [filteredData, setFilteredData] = useState(null);

  const handleDrawer = (lead, index, leads) => {
    setCurrentLeadIndex(index);
    setCurrentLeads(leads);
    setopen(true);
    setNextLimit(index === leads.length - 1);
    setPrevLimit(index === 0);
  };

  const handleNext = () => {
    if (currentLeadIndex < currentLeads.length - 1) {
      const newIndex = currentLeadIndex + 1;
      setCurrentLeadIndex(newIndex);
      setNextLimit(newIndex === currentLeads.length - 1);
      setPrevLimit(false);
    } else {
      toast(
        <div style={{ display: "flex", alignItems: "center", color: "black" }}>
          You have reached the last lead.
        </div>
      );
    }
  };

  const handlePrev = () => {
    if (currentLeadIndex > 0) {
      const newIndex = currentLeadIndex - 1;
      setCurrentLeadIndex(newIndex);
      setPrevLimit(newIndex === 0);
      setNextLimit(false);
    } else {
      <div style={{ display: "flex", alignItems: "center", color: "Black" }}>
        You have reached the last lead.
      </div>;
    }
  };

  const handleSortedData = (data) => {
    setSortedData(data);
  };
  const handleFilteredData = (data) => {
    setFilteredData(data);
  };

  const DataType = filteredData !== null ? filteredData : sortedData;

  const Prospect = filterByBranchCode(DataType, "prospect");
  const Qualified = filterByBranchCode(DataType, "qualified");
  const Opportunity = filterByBranchCode(DataType, "opportunity");
  const Nurture = filterByBranchCode(DataType, "nurture");
  const ReProspect = filterByBranchCode(DataType, "re-prospect");
  const Customer = filterByBranchCode(DataType, "customer");
  const lost = filterByBranchCode(DataType, "lost");

  console.log(ReProspect);
  return (
    <LeadContext.Provider
      value={{ handleNext, handlePrev, lead: currentLeads[currentLeadIndex] }}
    >
      <div className="lg:flex justify-start hidden">
        <SortComponent data={leads} onSortedData={handleSortedData} />
        <FilterComponent
          data={sortedData}
          onFilteredData={handleFilteredData}
        />
      </div>
      <div className="w-screen flex flex-row gap-4 overflow-x-auto ">
        <div className="py-2  grid grid-cols-1 w-1/5">
          <div className="pb-2">
            <span className="px-3 p-1 bg-green-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Prospect {Prospect.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          {/* <div className="flex flex-col overflow-y-auto bg-red-200"> */}
            <ScrollArea className="grid grid-cols-1 h-[32rem] ">
            {Prospect.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, Prospect)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
            </ScrollArea>
          {/* </div> */}
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-blue-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Opportunity {Opportunity.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {Opportunity.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, Opportunity)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-orange-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Qualified {Qualified.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {Qualified.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, Qualified)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-purple-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Nurture {Nurture.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {Nurture.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, Nurture)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-yellow-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              ReProspect {ReProspect.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {ReProspect.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, ReProspect)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-yellow-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Customer {Customer.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {Customer.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, ReProspect)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-yellow-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Lost {lost.length}
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {lost.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, ReProspect)}
                >
                  <BoardCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </LeadContext.Provider>
  );
};
