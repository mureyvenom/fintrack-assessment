"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";
import React, { ReactNode, useState } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useCheckMobileScreen();

  return (
    <div className="h-screen w-full flex flex-col overflow-y-hidden bg-white">
      <div>
        <Navbar
          sideBarToggled={expanded}
          toggleSidebar={() => setExpanded(!expanded)}
        />
      </div>
      <div className="flex-1 flex-row flex overflow-y-hidden">
        <div
          className="flex h-full flex-col overflow-y-auto duration-300 overflow-hidden"
          style={{
            maxWidth: expanded
              ? isMobile
                ? window?.innerWidth
                : "368px"
              : "0px",
            minWidth: expanded
              ? isMobile
                ? window?.innerWidth
                : "368px"
              : "0px",
          }}
        >
          <Sidebar />
        </div>
        <div className="flex-1 h-full overflow-y-auto flex flex-col text-foreground-text">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
