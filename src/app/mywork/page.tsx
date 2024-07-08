import Motion from "@/components/Motion/Motion";
import React from "react";

const myWork = () => {
  return (
    <div className="max-w-[1100px] w-full flex flex-col gap-4 sm:grid sm:grid-rows-4 sm:grid-cols-3">
      {/* First Section */}
      <div className=" flex flex-col gap-3 sm:row-span-2 sm:col-span-3 sm:grid sm:grid-cols-2 sm:grid-rows-2">
        <Motion className="bg-blue-400 rounded-lg h-[40vh] sm:col-span-1 sm:row-span-1">
          1.1
        </Motion>
        <Motion className="bg-blue-400 rounded-lg sm:col-span-1 min-h-[40vh] sm:row-span-2">
          1.2
        </Motion>
        <Motion className="bg-blue-400 rounded-lg h-[40vh] sm:col-span-1 sm:row-span-1">
          1.3
        </Motion>
      </div>
      {/* Second Section */}
      <Motion className="bg-blue-400 rounded-lg h-[25vh] sm:h-[40vh] sm:row-span-1 sm:col-span-3">
        02
      </Motion>

      {/* Third Section */}
      <div className="flex flex-col gap-4 sm:row-span-1 sm:col-span-3 sm:grid sm:grid-cols-2">
        <Motion className="bg-blue-500 h-[40vh] sm:col-span-1 rounded-lg">
          2.1
        </Motion>
        <Motion className="bg-blue-500 h-[40vh] sm:col-span-1 rounded-lg">
          2.2
        </Motion>
      </div>
    </div>
  );
};

export default myWork;
