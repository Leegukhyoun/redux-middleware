import React from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decreaseAsync, increaseAsync } from '../modules/counter';


const CounterContainer = () => {
    const number = useSelector(state=>state.counter);       //상태에 접근하게 해주는 useSelector
    const dispatch = useDispatch();
    const onIncrease = () => {
        dispatch(increaseAsync());
    }
    const onDecrease = () => {
        dispatch(decreaseAsync());
    }
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

export default CounterContainer;