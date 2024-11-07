import React from "react";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";

const Buttones = styled.div`
  display: flex;
  gap: 10px;
`;

const DetailHeader = () => {
  return (
    <header
      className="flex items-center justify-between px-5 py-3 bg-neutral-100"
      style={{ maxWidth: "600px" }}
    >
      <button className="back">
        <IoChevronBack fontSize="20" />
      </button>
      <Buttones>
        <button>
          <GoHome fontSize="25" />
        </button>
        <button>
          <IoSearchSharp fontSize="25" />
        </button>
      </Buttones>
    </header>
  );
};

export default DetailHeader;
