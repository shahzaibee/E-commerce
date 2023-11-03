"use client";

import React, { useState } from "react";

const Quantity = () => {

  const [num, setNum] = useState(1);

  return (
    <div className="flex gap-x-2 items-center">
      {/* Minus */}

      <div
        className="border h-6 w-6 rounded-full border-black flex items-center justify-center "
        onClick={() => {
          setNum(num <= 0 ? 1 : num - 1);
        }}
      >
        -
      </div>
      {/* Number */}
      <span className="text-sm">{num}</span>
      {/* Plus*/}
      <div
        className="border h-6 w-6 border-black rounded-full flex items-center justify-center "
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
