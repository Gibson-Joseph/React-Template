import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SidebarLinkGroup({ children, activecondition }: any) {
  const [open, setOpen] = useState(activecondition);
  console.log("children -->", children);

  // const dispatch = useDispatch();
  const visible = useSelector((state: any) => state.sidebar.visible);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-slate-900"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
