import React, { useRef } from "react";
import styled from "styled-components";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dragActions } from "../../../store/slice/dragSlice";

const Part = styled.div`
  padding-top: 20px;
  overflow-x: hidden;
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
  const productX = useSelector((state) => state.drag.productPositionX);
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
    dispatch(
      dragActions.setProductPosit({
        x: e.clientX - sliderRef.current.offsetWidth / 2,
      })
    );
  };

  const handleMouseUp = () => {
    dispatch(dragActions.setNoneDraggable());
  };

  const handleMouseLeave = () => {
    dispatch(dragActions.setNoneDraggable());
    dispatch(dragActions.setProductPosit({ x: 0 }));
  };

  return (
    <Part
      draggable="true"
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: dragVar ? "grabbing" : "grab" }}
      ref={sliderRef}
    >
      <ul style={{ transform: `translateX(-${productX}px)` }}>
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
