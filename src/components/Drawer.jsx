import React from "react";
import { Drawer } from "@mui/material";
import { X } from "lucide-react";
import LeadDetails from "./leadsDetails";

const DetailsDrawer = ({ open, setopen ,lead}) => {
    console.log(lead);
  return (
    <>
      <Drawer className="w-[70%]" anchor="right" open={open} onClose={() => setopen(false)}>
       
          <button className="fixed top-2 right-2" onClick={() => setopen(false)}>
            <X/>
          </button>
          <LeadDetails/>
       
      </Drawer>
    </>
  );
};

export default DetailsDrawer;
