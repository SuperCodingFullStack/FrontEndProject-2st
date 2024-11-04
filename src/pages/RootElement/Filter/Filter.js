import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { filterActions } from "../../../store/slice/filterSlice";

const Filters = styled.div`
  background-color: #f6f6f6;
  padding: 20px 15px;
  > h2 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const FilterList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  li {
    margin-top: 15px;
    button {
      padding: 15px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      width: 100%;
      color: rgba(0, 0, 0, 0.25);
      text-align: left;
    }
    &.active {
      button {
        background-color: #333;
        color: #fff;
      }
    }
  }
`;

const Filter = () => {
  const filterAll = useSelector((state) => state.filter.filterAll);
  const activeFilter = useSelector((state) => state.filter.activeFilter);
  const dispatch = useDispatch();

  return (
    <Filters>
      <h2>옵션 필터</h2>
      <FilterList>
        {filterAll.map((fall, i) => (
          <li key={i} className={`${activeFilter === i ? "active" : ""}`}>
            <button
              onClick={() => {
                dispatch(filterActions.setActiveFilter(i));
              }}
            >
              {fall.target}
            </button>
          </li>
        ))}
      </FilterList>
    </Filters>
  );
};

export default Filter;
