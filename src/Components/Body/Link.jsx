import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

import "./link.css";

export default function Link() {
  const { link, setLink } = useContext(MainContext);

  function handleClick() {
    setLink("https://meet.google.com/xyq-zzsd-wmb");
  }

  return (
    <div>
      <button className="link_btn" onClick={handleClick}>
        {" "}
        Generate Link
      </button>
      <span className="link">{link}</span>
    </div>
  );
}
