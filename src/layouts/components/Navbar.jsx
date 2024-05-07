import React from "react";

const Navbar = () => {
  return (
    <>
      {/* header */}
      <div className="hidden xl:flex container w-full py-4 mb-8 justify-between items-center">
        <div className="header-logo">EGIGHANIYYU</div>
        <div className="flex flex-col gap-1 self-end">
          <div className="text-base font-semibold text-[#212121]">
            LAST UPDATE
          </div>
          <div className="text-base font-semibold text-[#212121]">MAY 2024</div>
        </div>
      </div>
      {/* end header */}
    </>
  );
};

export default Navbar;
