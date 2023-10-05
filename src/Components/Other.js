import React from "react";
import Timer from "./Timer";

function Other() {
  const timezones = ["America/New_York", "UTC", "Asia/Hong_Kong"];

  return (
    <div>
      <h2>Other Time Zones</h2>
      {timezones.map((timezone, index) => (
        <Timer key={index} name={timezone} />
      ))}
    </div>
  );
}

export default Other;