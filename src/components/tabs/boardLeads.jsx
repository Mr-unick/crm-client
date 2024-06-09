import React from "react";
import { LeadCard } from "./leadCard";

import { ScrollArea } from "@/components/ui/scroll-area";
import { BoardCard } from "./boardCard";

export const BoardLeads = (props) => {
  return (
    <div className="w-screen flex flex-row gap-4 overflow-x-auto ">
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-green-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
            Prospect
          </span>
        </div>
        <section className="-z-50">
          <div className="h-[34rem]  " type="none">
            <div className="overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((lead, index) => {
                return <BoardCard />;
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-blue-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
            Qualified
          </span>
        </div>
        <section className="-z-50">
          <div className="h-[34rem]  " type="none">
            <div className="overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((lead, index) => {
                return <BoardCard />;
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-orange-400 font-semibold text-white text-primary text-sm my-4 rounded-sm">
            Opportunity
          </span>
        </div>
        <section className="-z-50">
          <div className="h-[34rem]  " type="none">
            <div className="overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((lead, index) => {
                return <BoardCard />;
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="px-3 p-1 bg-yellow-400  font-semibold text-white text-primary text-sm my-4 rounded-sm">
            Nurture
          </span>
        </div>
        <section className="-z-50">
          <div className="h-[34rem]  " type="none">
            <div className="overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((lead, index) => {
                return <BoardCard />;
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="py-2">
        <div className="pb-2">
          <span className="  px-3 p-1 font-semibold text-primary bg-green-500 text-white   text-sm my-4 rounded-sm">
            Re-Prospect
          </span>
        </div>
        <section className="-z-50">
          <div className="h-[34rem]  " type="none">
            <div className="overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((lead, index) => {
                return <BoardCard />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
