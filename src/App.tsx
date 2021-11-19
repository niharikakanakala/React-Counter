import React from "react";
import Particles from "react-tsparticles";
import {useSelector,useDispatch} from "react-redux";
import { Button } from 'antd';
import {PlusOutlined , MinusOutlined } from  '@ant-design/icons';
import { initialStateType } from "./redux/reducers/Counter.redux";
import './App.css';
//import 'antd/dist/antd.css'; 

import { increment, decrement } from './redux/actions/Counter.actions';


const App = () => {
  const count = useSelector( (state : initialStateType) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>REACT COUNTER</h1>
    <h1>{count}</h1>
    <Particles
        params={{
          fpsLimit: 6660,
          particles: {
            color: {
              value: "#9fcaee"
            },
            links: {
              enable: true,
              color: "#5a028d",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
    <div className="site-button-ghost-wrapper">
        <Button className="button"
          type="primary" ghost
          icon={<MinusOutlined style={{ fontSize: '50px', color: '#08c' }} />}
          onClick={() => dispatch(decrement())}
          size="large">
          </Button>

        <Button className="button"
          type="primary"ghost
          icon={<PlusOutlined style={{ fontSize: '50px', color: '#08c' }}/>}
          onClick={() => dispatch(increment())}
          size="large">
        </Button>
     </div>
    </div>
  );
}

export default App;
