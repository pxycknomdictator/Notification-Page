import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-xl">Notifications</h1>
        <span className="bg-blue text-White font-semibold py-[2px] px-3 rounded-lg">
          4
        </span>
      </div>
      <div>
        <span className="hover:text-blue cursor-pointer animation">Mark all as read</span>
      </div>
    </header>
  );
};

export default Header;
