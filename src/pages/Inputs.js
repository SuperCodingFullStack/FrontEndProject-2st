import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { productActions } from "../store/slice/productSlice";
import { useSelector } from "react-redux";

const Input = styled.div`
  margin-top: 10px;
  input {
    padding: 5px 10px;
    width: 250px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #fff;
    color: white;
    outline: none;
  }
`;

const Inputs = ({ type, name, states }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.products[states]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(productActions[name](e.target.value));
  };

  return (
    <Input>
      <input type={type} onChange={handleChange} value={value} />
    </Input>
  );
};

export default Inputs;
