import React from "react";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>Federico</span>
        </h3>

        <button className="btn">Logout</button>
      </div>
    </aside>
  );
};
