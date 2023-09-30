import React from 'react';
import moment from 'moment-timezone';
import '../styles.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: this.getCurrentTime(props.name),
    };
    this.timerInterval = null;
  }

  getCurrentTime(timezone) {
    return moment.tz(new Date(), timezone).format('HH:mm:ss');
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(() => {
        this.setState({ time: this.getCurrentTime(this.props.name) });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerInterval);
      this.setState({ isRunning: false });
    }
  };

  render() {
    const { isRunning, time } = this.state;

    return (
      <div className="timer">
        <h1>Таймер ({this.props.name})</h1>
        <div className="time-display">
          <p>{time}</p>
        </div>
        <div className="buttons">
          {isRunning ? (
            <button className="stop-button" onClick={this.stopTimer}>
              Стоп
            </button>) 
            : (
            <button className="start-button" onClick={this.startTimer}>
              Пуск
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;
