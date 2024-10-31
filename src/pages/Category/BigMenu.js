import React from 'react';
import cateMocks from './mocks/cateMocks';

const BigMenu = ({ idx, setIdx }) => {
  return (
    <ul className="flex px-5 py-3 gap-3 cursor-pointer border-solid border-b border-gray-200">
      {cateMocks.map((cate, i) => (
        <li
          onClick={() => {
            setIdx(i);
          }}
        >
          <span
            className={`text-sm ${idx !== i ? 'opacity-65' : 'font-medium'}`}
          >
            {cate.menu}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BigMenu;
