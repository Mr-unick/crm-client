import { MessageSquareText } from "lucide-react";

export const BoardCard = ({lead}) => {
  return (
  
      <div className="rounded-sm border border-gray-300 p-1 px-3 my-2 w-64 -z-10">
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="text-md font-semibold">{lead.name}</h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex justify-start items-center gap-1">
            <MessageSquareText size={15} />{lead.comments.length}
          </div>
        </div>
      </div>
    
  );
};
