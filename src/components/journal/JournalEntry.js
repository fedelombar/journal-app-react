import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/474x/d1/03/30/d103309f2036ed36a5f0cda942640bad--bully-breed-bully-pitbull.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-tile">Another new day</p>
        <p className="journal__entry-content">
          Proident enim labore reprehenderit non ad id veniam esse culpa.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
