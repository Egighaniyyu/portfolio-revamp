import React from "react";

const Navbar = () => {
  return (
    <>
      {/* header */}
      <div className="hidden xl:flex container w-full py-4 mb-8 justify-between items-center">
        <div className="header-logo">EGIGHANIYYU</div>
        <div className="flex items-center gap-4 self-end">
          <span className="relative flex h-4 w-4">
            {/* wave */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#09B0F1] opacity-75 animate-ping"></span>
            {/* dot */}
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#09B0F1]"></span>
          </span>

          <div className="flex flex-col ">
            <span className="text-base font-medium text-[#212121]">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
      {/* end header */}
    </>
  );
};

export default Navbar;
