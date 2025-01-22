import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaPlay,
  FaPause,
  FaSyncAlt,
} from "react-icons/fa";

import beep from "../assets/beep-104060.mp3";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 25 * 60,
      timerLabel: "Session",
      isRunning: false,
      intervalId: null,
    };
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
  }
  sessionIncrement() {
    if (!this.state.isRunning && this.state.sessionLength < 60) {
      this.setState((prevState) => ({
        sessionLength: prevState.sessionLength + 1,
        timeLeft: (prevState.sessionLength + 1) * 60,
      }));
    }
  }
  sessionDecrement() {
    if (!this.state.isRunning && this.state.sessionLength > 1) {
      this.setState((prevState) => ({
        sessionLength: prevState.sessionLength - 1,
        timeLeft: (prevState.sessionLength - 1) * 60,
      }));
    }
  }
  breakIncrement() {
    if (!this.state.isRunning && this.state.breakLength < 60) {
      this.setState((prevState) => ({
        breakLength: prevState.breakLength + 1,
      }));
    }
  }
  breakDecrement() {
    if (!this.state.isRunning && this.state.breakLength > 1) {
      this.setState((prevState) => ({
        breakLength: prevState.breakLength - 1,
      }));
    }
  }
  startStop() {
    if (this.state.isRunning) {
      clearInterval(this.state.intervalId);
      this.setState({ isRunning: false });
    } else {
      this.setState({
        isRunning: true,
        intervalId: setInterval(() => {
          if (this.state.timeLeft === 0) {
            this.setState((state) => ({
              timerLabel: state.timerLabel === "Session" ? "Break" : "Session",
              timeLeft:
                (state.timerLabel === "Session"
                  ? state.breakLength
                  : state.sessionLength) * 60,
            }));

            document.getElementById("beep").play();
            document.getElementById("time-left").style.color = "red";
            document.getElementById("time-left").style.color = "red";
          } else {
            this.setState((state) => ({
              timeLeft: state.timeLeft - 1,
            }));
          }
        }, 1000),
      });
    }
  }
  reset() {
    clearInterval(this.state.intervalId);
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 25 * 60,
      timerLabel: "Session",
      isRunning: false,
      intervalId: null,
    });
    document.getElementById("time-left").style.color = "white";
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }

  render() {
    const minutes = Math.floor(this.state.timeLeft / 60);
    const seconds = this.state.timeLeft % 60;
    return (
      <div
        className="container d-flex flex-column gap-1  text-light rounded"
        style={{ width: "400px", padding: "10px" }}
      >
        <p
          className="text-center"
          style={{ color: "blue", marginLeft: "auto" }}
        >
          Niplan{" "}
          <img
            src={this.props.logo}
            alt="logo"
            className="align-self-center text-center"
            style={{ maxHeight: "15px", marginTop: "-10px", marginLeft: "2px" }}
          />
        </p>
        <h1 className="text-center">25 + 5 Clock</h1>

        <div className="ctrl d-flex gap-1">
          <div className="break container-fluid">
            <p id="break-label" className="tag">
              Break Length
            </p>
            <button
              className="btn btn-dark"
              id="break-decrement"
              onClick={this.breakDecrement}
            >
              <FaArrowDown size={30} />
            </button>
            <span id="break-length">{this.state.breakLength}</span>
            <button
              className="btn btn-dark"
              id="break-increment"
              onClick={this.breakIncrement}
            >
              <FaArrowUp size={30} />
            </button>
          </div>
          <div className="session container-fluid">
            <p id="session-label" className="tag">
              Session Length
            </p>
            <button
              className="btn btn-dark"
              id="session-decrement"
              onClick={this.sessionDecrement}
            >
              <FaArrowDown size={30} />
            </button>
            <span id="session-length">{this.state.sessionLength}</span>
            <button
              className="btn btn-dark"
              id="session-increment"
              onClick={this.sessionIncrement}
            >
              <FaArrowUp size={30} />
            </button>
          </div>
        </div>
        <div
          className="clock container-fluid mt-2"
          style={{
            textAlign: "center",
            height: "200px",
            padding: "10px",
            borderRadius: "10px",
            border: "15px solid #343a40",
          }}
        >
          <h3 id="timer-label">{this.state.timerLabel}</h3>
          <span id="time-left">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
          <audio id="beep" src={beep} />
        </div>
        <div className="buttons container-fluid d-flex gap-1 mt-2 justify-content-center">
          <button
            className="btn btn-dark"
            id="start_stop"
            onClick={this.startStop}
          >
            <FaPlay />
            <FaPause />
          </button>
          <button className="btn btn-dark" id="reset" onClick={this.reset}>
            <FaSyncAlt />
          </button>
        </div>
      </div>
    );
  }
}
export default Clock;
