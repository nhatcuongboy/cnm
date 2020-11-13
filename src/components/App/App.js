import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DatePicker, Slider, Spin } from 'antd';
import * as AppActions from '../../redux/App/AppActions';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.AppReducer.result);
  const loading = useSelector(state => state.AppReducer.isTesting);

  const callAPI = () => {
    dispatch(AppActions.testRequest());
  };

  return (
    <div className="App-component">
        <DatePicker/>
        <Slider defaultValue={30} />
        <div style={{marginTop: 20}}>
        <Button type="primary" onClick={callAPI}>
          Call API
        </Button>
        {loading && <div><Spin /></div>}
        {result && <p>Result: {JSON.stringify(result)}</p>}
        </div>
    </div>
  );
}

export default memo(App);
