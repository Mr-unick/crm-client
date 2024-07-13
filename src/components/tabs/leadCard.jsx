import { MessageSquareText } from "lucide-react";

export const LeadCard = ({lead}) => {

  const formatMongoDate = (mongoDate) => {
    const date = new Date(mongoDate);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedTime = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm}`;

    return `${formattedDate}, ${formattedTime}`;
  };
  //
  const color =
    (lead.priority === "high" && "bg-red-400") ||
    (lead.priority === "low" && "bg-green-400") ||
    (lead.priority === "medium" && "bg-yellow-400");
  return (
    <>
      <div className="rounded-md border border-gray-300 p-4 my-2 w-72 ">
      
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="text-lg font-semibold">{lead.name}</h3>
          <span className="text-sm font-medium text-gray-500 ml-9">
            {lead.phone}
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-500">
            {formatMongoDate("2024-06-10T15:00:00Z")}
          </div>
          <div className="flex items-center ml-4">
            <span
              className={`px-5 py-1 rounded-sm  text-white text-xs font-medium ${color}`}
            >
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
