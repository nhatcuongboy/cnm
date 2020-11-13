import React, { useReducer } from 'react';
import { Button } from 'antd';
import './Counter.scss';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="counter-comp">
            <p>Count: {state.count}</p>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
            <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
        </div>
    );
}

export default Counter;