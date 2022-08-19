import { combineReducers } from "redux";

import SidebarReducer from "./SidebarReducer";

const RootReducer = combineReducers({
  sidebar: SidebarReducer,
});

export default RootReducer;
