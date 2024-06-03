import { MessageSquareText } from "lucide-react";

export const LeadCard = () => {
  //
  return (
    <>
      <div className="rounded-md border border-gray-200 p-4 my-2 w-64 ">
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="text-lg font-semibold">John Doe</h3>
          <span className="text-sm font-medium text-gray-500 ml-9">
            +1 234 567 890
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-500"> May 30, 2024</div>
          <div className="flex items-center ml-4">
            <span className="px-5 py-1 rounded-md bg-red-300 text-black text-xs font-medium">
              High
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
