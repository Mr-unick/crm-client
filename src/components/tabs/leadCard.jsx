import { MessageSquareText } from "lucide-react";

export const LeadCard = ({lead}) => {
  //
  return (
    <>
      <div className="rounded-md border border-gray-200 p-4 my-2 w-64 ">
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="text-lg font-semibold">{lead.name}</h3>
          <span className="text-sm font-medium text-gray-500 ml-9">
            {lead.phone}
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-500">{lead.date}</div>
          <div className="flex items-center ml-4">
            <span className="px-5 py-1 rounded-sm bg-red-500 text-white text-xs font-medium">
              {lead.priority}
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex justify-start items-center gap-1">
          <MessageSquareText size={15} />5
        </div>
      </div>
    </>
  );
};
