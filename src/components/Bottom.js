import React, { useState } from "react";
import cateMocks from "./cateMocks";

const LeftMenu = ({ idx }) => {
  const [leftIdx, setLeftIdx] = useState(0);

  return (
    <div className="w-28 flex flex-col">
      {cateMocks
        .filter((item, i) => i === idx)
        .map((cate) => (
          <>
            {cate.cates.map((cates, ii) => (
              <button
                className={`text-sm text-left py-3 pl-5 ${
                  leftIdx !== ii ? "opacity-65" : "font-medium bg-white"
                }`}
                onClick={() => {
                  setLeftIdx(ii);
                }}
              >
                {cates.catesMenu}
              </button>
            ))}
          </>
        ))}
    </div>
  );
};

export default LeftMenu;
