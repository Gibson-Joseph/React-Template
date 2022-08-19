export const handleOpen = () => {
  return (dispatch: any) => {
    dispatch({
      type: "SHOW",
    });
  };
};

export const handleClose = () => {
  return (dispatch: any) => {
    dispatch({
      type: "HIDE",
    });
  };
};
