import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FootNavi.css";

import { HiDocumentDuplicate } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { TbCashRegister } from "react-icons/tb";

import { useDispatch } from "react-redux";
import { footMenuActions } from "../../store/slice/footMenuSlice";

const FootNavi = () => {
  const [active, setActive] = useState({
    boolean: false,
    idx: 0,
  });

  const dispatch = useDispatch();

  return (
    <ul
      className="fixed bottom-0 left-0 right-0 bg-white flex justify-center items-center gap-10 footNavi z-50"
      style={{ maxWidth: "600px", margin: "0 auto", padding: "10px 0" }}
    >
      <li>
        <Link
          to="/menu"
          className={`flex flex-col-reverse items-center gap-1 ${
            active.boolean && active.idx === 0 ? "active" : ""
          }`}
          onClick={() => {
            setActive({ boolean: true, idx: 0 });
            dispatch(footMenuActions.footOn());
          }}
        >
          <span style={{ fontSize: "12px", opacity: ".55" }}>카테고리</span>
          <HiDocumentDuplicate fontSize="20px" style={{ opacity: ".55" }} />
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="flex flex-col-reverse items-center gap-1"
          onClick={() => {
            setActive({ boolean: true, idx: 1 });
            dispatch(footMenuActions.footOff());
          }}
        >
          <span style={{ fontSize: "12px", opacity: ".55" }}>무신사 홈</span>
          <IoMdHome fontSize="20px" style={{ opacity: ".55" }} />
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="flex flex-col-reverse items-center gap-1"
          onClick={() => {
            setActive({ boolean: true, idx: 2 });
          }}
        >
          <span style={{ fontSize: "12px", opacity: ".55" }}>마이페이지</span>
          <IoPeopleSharp fontSize="20px" style={{ opacity: ".55" }} />
        </Link>
      </li>
      <li>
        <Link
          to="/product-register"
          className="flex flex-col-reverse items-center gap-1"
          onClick={() => {
            setActive({ boolean: true, idx: 3 });
          }}
        >
          <span style={{ fontSize: "12px", opacity: ".55" }}>상품 등록</span>
          <TbCashRegister fontSize="20px" style={{ opacity: ".55" }} />
        </Link>
      </li>
    </ul>
  );
};

export default FootNavi;
