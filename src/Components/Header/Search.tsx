import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transistion";

function Search({ modalOpen, setModalOpen }: any) {
  const modalContent: React.MutableRefObject<any> = useRef(null);
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
  });
  return (
    <>
      {/* <h4>Search</h4> */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
    </>
  );
}
export default Search;
