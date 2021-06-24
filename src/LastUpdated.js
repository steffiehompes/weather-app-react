import React from "react";
import "./LastUpdated.css";

export default function LastUpdated() {
  let DateData = {
    day: "Friday",
    month: "May",
    date: 28,
    hour: 16,
    minutes: 55,
  };
  return (
    <div className="Last-updated mt-1">
      Last updated: {DateData.day}, {DateData.month} {DateData.date} at{" "}
      {DateData.hour}:{DateData.minutes}
    </div>
  );
}
