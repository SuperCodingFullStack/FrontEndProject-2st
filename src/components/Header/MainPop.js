import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPop.css';
import { popBoolActions } from '../../store/slice/popBoolSlice';

const MainPop = () => {
  const popBool = useSelector((state) => state.popBools.popBool);

  const dispatch = useDispatch();

  const popOff = (e) => {
    dispatch(popBoolActions.popOff());
  };

  return (
    <section
      className={`${
        !popBool ? 'hidden' : ''
      } fixed pop top-0 p-5 max-w-lg mx-auto min-w-80 left-0 right-0`}
    >
      <button onClick={popOff}>닫기</button>
    </section>
  );
};

export default MainPop;
