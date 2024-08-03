"use client"


import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

export function DatePickerDemo({Setremainder}) {

  const [date, setDate] = useState(new Date())

  const [isCal,setIsCal]=useState(false);

  const handleSelect=(date)=>{
setDate(date);
setIsCal(false)
Setremainder(date)
  }
  

  return (
    <>
     {
        !isCal ?
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          onClick={()=>{setIsCal(true)}}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Set Remainder</span>}
        </Button>
        :
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            handleSelect(selectedDate);
          }}
          initialFocus
          
          
        />
     }
         
      </>
     
  )
}
