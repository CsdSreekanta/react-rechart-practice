import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import Counseling from './components/Counseling/Counseling';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({ 
   to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  
  })
  
  return (
    <div className="App">
      
      <animated.div style={props} className="text-3xl font-bold text-pink-500">We are ready to reduce your distress!!!</animated.div>
     <MyLineChart></MyLineChart>
     <Counseling></Counseling>
    </div>
  );
}

export default App;
