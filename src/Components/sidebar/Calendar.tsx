import { Link } from "react-router-dom";

export default function Calendar() {
  return (
    <div>
      <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 `}>
        <Link
          to="/"
          className={`block text-slate-200 hover:text-white truncate transition duration-150 `}
        >
          <div className="flex items-center">
            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
              <path
                className={`fill-current text-slate-600 `}
                d="M1 3h22v20H1z"
              />
              <path
                className={`fill-current text-slate-400 `}
                d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
              />
            </svg>
            <span className="text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              Calendar
            </span>
          </div>
        </Link>
      </li>
    </div>
  );
}
