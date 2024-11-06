import React, { useRef } from "react";
import styled from "styled-components";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dragActions } from "../../../store/slice/dragSlice";

const Part = styled.div`
  padding-top: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
  }
`;

const ProductPart = ({ data }) => {
  const sliderRef = useRef(null);

  const dispatch = useDispatch();

  const dragVar = useSelector((state) => state.drag.isDraggable);
  const sorted = useSelector((state) => state.filter.activeFilter);

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    dispatch(dragActions.setDraggable());
  };

  const handleMouseMove = (e) => {
    if (!dragVar || !sliderRef.current) return;
    e.preventDefault();
    const { clientWidth, scrollWidth } = sliderRef.current;
    let newScrollLeft = sliderRef.current.scrollLeft + 5;
    if (newScrollLeft + clientWidth >= scrollWidth) {
      newScrollLeft = sliderRef.current.scrollLeft - 5;
    }
    sliderRef.current.scrollLeft = newScrollLeft;
  };

  const handleMouseUp = () => {
    dispatch(dragActions.setNoneDraggable());
  };

  return (
    <Part
      draggable="true"
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: dragVar ? "grabbing" : "grab" }}
      ref={sliderRef}
    >
      <ul>
        {data
          .sort((a, b) => {
            if (sorted === 0) return b.price - a.price;
            if (sorted === 1) return a.title.localeCompare(b.title);
          })
          .map((datas) => (
            <ProductComponent datas={datas} key={datas.id} />
          ))}
      </ul>
    </Part>
  );
};

export default ProductPart;
