import { Menu, X } from "lucide-react";
import { useState } from "react";
import BluuZoneLogoNoBG from "../assets/BluuZoneLogoNoBG.png";

const BluNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl font-breathdemo justify-center items-center text-center">
              BluuZone
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BluNavbar;
