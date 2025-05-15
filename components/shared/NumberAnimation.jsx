"use client";
import { useState, useEffect } from "react";
// import "@/style/custom.css";

const NumberAnimation = ({ value, className, duration, incrementPlus }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) =>
        prevCount < value ? prevCount + incrementPlus : prevCount
      );
    }, duration);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [value, duration, incrementPlus]);

  return <div className={("font-bold ", className)}>{count}+</div>;
};

export default NumberAnimation;
