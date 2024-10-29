import React from 'react';
import { Link } from 'react-router-dom';

import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdHome } from 'react-icons/io';

const FootNavi = () => {
  return (
    <ul
      className="fixed bottom-0 left-0 right-0 bg-white flex justify-center items-center gap-10"
      style={{ maxWidth: '600px', margin: '0 auto', padding: '10px 0' }}
    >
      <li>
        <Link to="/menu" className="flex flex-col-reverse items-center gap-1">
          <span style={{ fontSize: '12px' }}>카테고리</span>
          <FaBarsStaggered fontSize="20px" />
        </Link>
      </li>
      <li>
        <Link to="/" className="flex flex-col-reverse items-center gap-1">
          <span style={{ fontSize: '12px' }}>무신사 홈</span>
          <IoMdHome fontSize="20px" />
        </Link>
      </li>
    </ul>
  );
};

export default FootNavi;
