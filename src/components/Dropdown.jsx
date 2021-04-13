import { useState } from "react";

export default function Dropdown({ selected, setSelected, showAll }) {
  const [isActive, setIsActive] = useState(false);
  const types = ["Work", "Daily", "Home", "Study", "Others"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span
          className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
        ></span>
      </div>
      <div
        className="dropdown-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        <>
        {types.map((type, idx) => (
          <div
            key={idx}
            className="item"
            onClick={(e) => {
              setSelected(type);
              setIsActive(!isActive);
            }}
          >
            {type}
          </div>
        ))}
        {showAll && (
          <div
          className="item"
          onClick={(e) => {
            setSelected("All");
            setIsActive(!isActive);
          }}
        >
          All
        </div>
        )}
        </>
      </div>
    </div>
  );
}
