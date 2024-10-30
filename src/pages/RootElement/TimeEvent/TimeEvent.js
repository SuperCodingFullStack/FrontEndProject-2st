import React from 'react';
import styled from 'styled-components';
import Event1 from './Event1';
import { useDispatch, useSelector } from 'react-redux';
import { dragActions } from '../../../store/slice/dragSlice';

const EventBanner = styled.article`
  padding: 16px 16px 12px 8px;
  background-color: #f6f6f6;
  overflow: hidden;
`;

const TimeEvent = () => {
  const dragVariable = useSelector((state) => state.drag.isDraggable);

  return (
    <EventBanner
      style={{
        cursor: dragVariable ? 'grabbing' : 'normal',
      }}
    >
      <Event1 />
    </EventBanner>
  );
};

export default TimeEvent;
