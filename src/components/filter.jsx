import React, { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


const FilterComponent = ({ data, onFilteredData }) => {
  const [filterCriteria, setFilterCriteria] = useState({});
  const [tableData, setTableData] = useState(data);

  const options = ["status", "priority", "stage", "source"];

  const handleFilterChange = (criteria, value) => {
    setFilterCriteria({
      ...filterCriteria,
      [criteria]: value,
    });
  };

  const removeFilterCriteria = (criteria) => {
    const updatedCriteria = { ...filterCriteria };
    delete updatedCriteria[criteria];
    setFilterCriteria(updatedCriteria);
  };

  useEffect(() => {
    const filteredData =
      Object.keys(filterCriteria).length > 0
        ? data.filter((item) =>
            Object.entries(filterCriteria).every(([key, value]) =>
              item[key].toLowerCase().includes(value.toLowerCase())
            )
          )
        : data;

    setTableData(filteredData);
    onFilteredData(filteredData);
  }, [filterCriteria, data]);

  return (
    <div className=" flex justify-center items-center ml-5 flex-col">
      <div className=" rounded-md  ">
        <div className="flex items-start flex-row w-full gap-5">
          {options.map((option) => (
            <Popover>
              <PopoverTrigger>
                <button className="border-[1px] px-4 py-1 text-gray-500 text-sm text-primary rounded-sm my-2 flex gap-2 justify-center items-center">
                  {`Filter by ${option}`}
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div key={option} className="w-full">
                  <Command className="border">
                    <CommandInput placeholder={`Filter by ${option}`} />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      {[...new Set(data.map((item) => item[option]))].map(
                        (value) => (
                          <CommandItem key={value} className="border-y-[1px]">
                            <button
                              className="w-full text-start"
                              onClick={() => handleFilterChange(option, value)}
                            >
                              {value}
                            </button>
                          </CommandItem>
                        )
                      )}
                    </CommandList>
                  </Command>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
      <div className="text-primary flex justify-start w-full  ">
        {Object.entries(filterCriteria).map(([criteria, value], index) => (
          <span
            key={index}
            className="border text-white bg-blue-100 py-1 px-2 rounded-md inline-flex items-center mr-2 mb-2"
          >
            {criteria}: {value}
            <button
              onClick={() => removeFilterCriteria(criteria)}
              className="ml-2 text-gray-500 hover:text-gray-700 "
            >
              <X size={15} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
