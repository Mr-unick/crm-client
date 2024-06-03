import React from "react";
import { LeadCard } from "./leadCard";

import { ScrollArea } from "@/components/ui/scroll-area";
import { BoardCard } from "./boardCard";

export const BoardLeads = (props) => {
  return (
    <div className="w-screen flex flex-row gap-4 overflow-x-auto">
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-600 text-white text-primary text-sm my-4 rounded-sm">
            Prospect
          </span>
        </div>
        <ScrollArea className="h-[34rem] " type="none">
          {[1, 2, 3, 4, 5, 6].map((lead, index) => {
            return <BoardCard />;
          })}
        </ScrollArea>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-600 text-white text-primary text-sm my-4 rounded-sm">
            Prospect
          </span>
        </div>
        <ScrollArea className="h-[34rem] -z-10" type="none">
          {[1, 2, 3, 4, 5, 6].map((lead, index) => {
            return <BoardCard />;
          })}
        </ScrollArea>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-600 text-white text-primary text-sm my-4 rounded-sm">
            Prospect
          </span>
        </div>
        <ScrollArea className="h-[34rem] -z-10" type="none">
          {[1, 2, 3, 4, 5, 6].map((lead, index) => {
            return <BoardCard />;
          })}
        </ScrollArea>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-600 text-white text-primary text-sm my-4 rounded-sm">
            Prospect
          </span>
        </div>
        <ScrollArea className="h-[34rem] -z-10" type="none">
          {[1, 2, 3, 4, 5, 6].map((lead, index) => {
            return <BoardCard />;
          })}
        </ScrollArea>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-600 text-white text-primary text-sm my-4 rounded-sm">
            Prospect
          </span>
        </div>
        <ScrollArea className="h-[34rem] -z-10" type="none">
          {[1, 2, 3, 4, 5, 6].map((lead, index) => {
            return <BoardCard />;
          })}
        </ScrollArea>
      </div>
    </div>
  );
};
