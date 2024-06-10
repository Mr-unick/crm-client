import React, { createContext, useEffect, useState } from "react";
import { LeadCard } from "./leadCard";
import DeatilsDrawer from "../Drawer";
import { notifySuccess } from "../toasts/toast";
import { toast } from "react-toastify";
import { leadsData } from "@/const";
import { LeadContext } from "@/comtextapi/leadcontext";
import SortComponent from "../sort";
import { Button } from "../ui/button";
import FilterComponent from "../filter";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowUpDown } from "lucide-react";




export const AllLeads = () => {


  const filterByBranchCode = (data, branchCode) =>
    data.filter((lead) => lead.branchcode === branchCode);


  const [open, setopen] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(null);
  const [currentLeads, setCurrentLeads] = useState([]);
  const [sortedData, setSortedData] = useState(leadsData);
  const [filteredData, setFilteredData] = useState(leadsData);
  

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
        <div style={{ display: "flex", alignItems: "center", color: "green" }}>
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
     <div style={{ display: "flex", alignItems: "center", color: "green" }}>
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

  useEffect(() => {
    
  }, [sortedData]);


const DataType = filteredData !== null ? filteredData : sortedData;

const branchCode10Leads = filterByBranchCode(DataType, "b1");
const branchCode11Leads = filterByBranchCode(DataType, "b2");
const branchCode12Leads = filterByBranchCode(DataType, "b3");

  return (
    <LeadContext.Provider
      value={{ handleNext, handlePrev, lead: currentLeads[currentLeadIndex] }}
    >
      <div className="lg:flex justify-start hidden">
        <SortComponent data={leadsData} onSortedData={handleSortedData} />
        <FilterComponent
          data={sortedData}
          onFilteredData={handleFilteredData}
        />
      </div>

      <div className="w-screen flex flex-row gap-4 overflow-x-auto  ">
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-gray-700 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Branch 1
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {branchCode10Leads.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, branchCode10Leads)}
                >
                  <LeadCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-gray-700 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Branch 12
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {branchCode11Leads.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, branchCode11Leads)}
                >
                  <LeadCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="py-2">
          <div className="pb-2">
            <span className="px-3 p-1 bg-gray-700 font-semibold text-white text-primary text-sm my-4 rounded-sm">
              Branch 12
            </span>
          </div>
          <DeatilsDrawer
            open={open}
            setopen={setopen}
            lead={currentLeads[currentLeadIndex]}
          />
          <div className="flex flex-col">
            {branchCode12Leads.map((lead, index) => {
              return (
                <button
                  key={lead.id}
                  onClick={() => handleDrawer(lead, index, branchCode12Leads)}
                >
                  <LeadCard lead={lead} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </LeadContext.Provider>
  );
};
