const SidebarReducer = (state = { visible: false }, action: any) => {
  console.log("initial state", state.visible);

  switch (action.type) {
    case "SHOW":
      console.log("Show", state.visible);
      return { ...state, visible: true };

    case "HIDE":
      console.log("Hide", state.visible);
      return { ...state, visible: false };

    default:
      return state;
  }
};

export default SidebarReducer;
