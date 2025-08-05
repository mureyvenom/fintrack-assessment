import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
    },
    {
      title: "Reports",
      path: "/dashboard/reports",
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="flex-1">
      <div className="py-7 md:px-12 md:pr-0 px-5 flex flex-col">
        {links.map((x) => (
          <button
            onClick={() => router.push(x.path)}
            key={x.title}
            className={`w-full text-foreground-text py-2 px-4 text-left font-medium text-[15px] duration-200 transition-all hover:bg-primary-light rounded-2xl ${
              x.path === pathName ? "bg-primary-light" : "bg-background-color"
            }`}
          >
            {x.title}
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
