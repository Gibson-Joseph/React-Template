import { useState } from "react";
import UserLogo from "/home/gibson/TemplateRedux/my-app/src/images/user-avatar-32.png";

function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <button className="inline-flex justify-center items-center group">
        <img
          className="w-8 h-8 rounded-full"
          src={UserLogo}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
            Acme Inc.
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default UserMenu;
