import React, { useRef } from "react";
import styled from "styled-components";
import Event1 from "./Event1";
import Event2 from "./Event2";
import { useDispatch, useSelector } from "react-redux";
import { dragActions } from "../../../store/slice/dragSlice";

const EventBanner = styled.article`
  padding: 16px 16px 12px 8px;
  background-color: #f6f6f6;
  overflow: hidden;
  * {
    user-select: none;
    -webkit-user-drag: none;
  }
`;

const TimeEvent = () => {
  const sliderRef = useRef(null);

  const dispatch = useDispatch();

  const dragVar = useSelector((state) => state.drag.isDraggable);
  const px = useSelector((state) => state.drag.positionX);

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
      dragActions.setTransformPosit({
        x: e.clientX - sliderRef.current.offsetWidth / 2,
      })
    );
    console.log(px);
  };

  const handleMouseUp = () => {
    dispatch(dragActions.setNoneDraggable());
  };

  const handleMouseLeave = () => {
    dispatch(dragActions.setNoneDraggable());
    dispatch(dragActions.setTransformPosit({ x: 0 }));
  };

  return (
    <EventBanner
      draggable="true"
      onDragStart={handleDragStart}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: dragVar ? "grabbing" : "auto",
      }}
      ref={sliderRef}
    >
      <Event1 px={px} />
      <Event2 px={px} />
    </EventBanner>
  );
};

export default TimeEvent;
