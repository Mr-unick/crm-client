import React, { useState, useEffect } from "react";
import sortBy from "sort-by";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  ArrowUp,
  ArrowDown,
  X,
  ArrowUpDown,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const SortComponent = ({ data, onSortedData }) => {
  const [sortArray, setSortArray] = useState([]);
  const [sortDirection, setSortDirection] = useState("desc");
  const [tableData, setTableData] = useState(data);

  const options = [
    "id",
    "name",
    "date",
    "status",
    "priority",
    "stage",
    "source",
  ];

  const handleSortChange = (criteria) => {
    const newSortArray = sortArray.includes(criteria)
      ? sortArray.filter((item) => item !== criteria)
      : [...sortArray, criteria];
    setSortArray(newSortArray);
  };

  const removeSortCriteria = (index) => {
    const updatedSortArray = [...sortArray];
    updatedSortArray.splice(index, 1);
    setSortArray(updatedSortArray);
  };

  useEffect(() => {
    const sortedData =
      sortArray.length > 0
        ? [...data].sort(
            sortBy(
              ...sortArray.map((criteria) =>
                sortDirection === "desc" ? `-${criteria}` : criteria
              )
            )
          )
        : data;
    setTableData(sortedData);
    onSortedData(sortedData);
  }, [sortArray, sortDirection, data]);

  return (
    <div className=" flex justify-center items-center">
      <Popover>
        <PopoverTrigger>
          {" "}
          <button className="border-[1px] px-4 py-1 text-gray-500 text-sm text-primary rounded-sm my-2 flex gap-2 justify-center items-center">
            Sort <ArrowUpDown size={13} />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          {" "}
          <div className=" ">
            <div className="text-primary">
              {sortArray.map((criteria, index) => (
                <span
                  key={index}
                  className="border text-gray-800 py-1 px-2 rounded-md inline-flex items-center mr-2 mb-2"
                >
                  {criteria}
                  <button
                    onClick={() => removeSortCriteria(index)}
                    className="ml-2 text-gray-500 hover:text-gray-700 "
                  >
                    <X size={15} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-start flex-col">
              <Command className="border">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>

                  {options.map((option) => (
                    <CommandItem key={option} className="border-y-[1px]">
                      <button
                        className="w-full text-start"
                        onClick={() => handleSortChange(option)}
                      >
                        {option}
                      </button>
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SortComponent;
