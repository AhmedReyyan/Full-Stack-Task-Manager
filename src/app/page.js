import DailyTask from "@/lib/ui/DailyTask";
import Image from "next/image";

export default function Home() {
  return (
   <div 
       className="w-full h-[100%] bg-gray-600 flex flex-col items-center text-white  overflow-hidden"
   >
    <div className="  bg-black w-[90%]  mt-4 rounded-2xl flex justify-between p-4">
      <h1>Your Tasks</h1>
       <button className="bg-gray-300  p-2 rounded-2xl cursor-pointer">Add Task</button>
    </div>
    
    <div className="w-[90%] h-full mt-4  bg-black p-2 rounded-2xl   flex flex-row gap-2 no-scrollbar  justify-start overflow-x-scroll">
         
        <DailyTask />
        <DailyTask />
        <DailyTask />
        <DailyTask />
             
              
        
         
        
       
    </div>
   

    
   </div>
  );
}
