import React, { useState, useRef } from 'react';
import {Line} from 'react-chartjs-2';
import styles from './App.module.scss';
import ToggleExpand from './components/ToggleExpand/ToggleExpand';
function App() {
  const [labels] = useState(['January', 'February', 'March','April', 'May']);
  const [datasets] = useState([
    {
      label: 'Rainfall',
      fill: false, 
      lineTension: 0.5,
      // backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]);
  const graphDiv = useRef(null);
  const toggleGraph = () => {
    var  full_screen_element = document.fullscreenElement;
    if(full_screen_element!=null){
      document.exitFullscreen();
    }else{
      graphDiv.current.requestFullscreen();
    }
  }
  return (
    <>
      <div className={styles.parent2} ref={graphDiv}>
      <div className={styles.chartParentDiv}>
        <Line
          data={{"labels":labels, "datasets":datasets}}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <ToggleExpand onClick={toggleGraph}/>
      </div>
      </div>
    </>
  );
}

export default App;
