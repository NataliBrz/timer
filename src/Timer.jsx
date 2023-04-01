import React from "react";
import icon from './timer.png'

class Timer extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0
       }

  }
  
  start = () => 
  {
    let scope = this;
    let timerID = setInterval(function()
    {
      scope.setState(
        {
          seconds: scope.state.seconds + 1
        }
      )
    },1000);
    this.setState({timerID: timerID});
  }
  
  stop = () =>
  {
    clearInterval(this.state.timerID);
  }
  
  render() {
  return (
    <div className="App">
        <img src={icon} alt="timer"/>
        <p>TimerInfo: {this.state.minutes}:{this.state.seconds}</p>
        <div>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.start}>Start</button>
        </div>
    </div>
  );
}
}

export default Timer;
