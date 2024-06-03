import { MessageSquareText } from "lucide-react";

export const BoardCard = () => {
  return (
    <>
      <div className="rounded-md border border-gray-200 p-1 px-3 my-2 w-64">
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="text-md font-semibold">John Doe</h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex justify-start items-center gap-1">
            <MessageSquareText size={15} />5
          </div>
        </div>
      </div>
    </>
  );
};
