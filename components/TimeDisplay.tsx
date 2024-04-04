"use client";

import { useEffect, useState } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const now = new Date();

      let currentTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
      setCurrentTime(currentTime);
    }, 60000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentTime]);

  return <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>;
};

export default TimeDisplay;
