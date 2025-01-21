import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaPlay,
  FaPause,
  FaSyncAlt,
} from "react-icons/fa";

class Clock extends React.Component {
  render() {
    return (
      <div
        className="container d-flex flex-column gap-1  text-light rounded"
        style={{ width: "300px", padding: "10px" }}
      >
        <h1>25 + 5 Clock</h1>
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
        <div className="ctrl d-flex gap-1">
          <div className="break container-fluid">
            <p id="break-label">Break Length</p>
            <button
              className="btn btn-dark"
              id="break-decrement"
              onClick={this.props.breakDecrement}
            >
              <FaArrowDown />
            </button>
            <span id="break-length">5</span>
            <button
              className="btn btn-dark"
              id="break-increment"
              onClick={this.props.breakIncrement}
            >
              <FaArrowUp />
            </button>
          </div>
          <div className="session container-fluid">
            <p id="session-label">Session Length</p>
            <button
              className="btn btn-dark"
              id="session-decrement"
              onClick={this.props.sessionDecrement}
            >
              <FaArrowDown />
            </button>
            <span id="session-length">25</span>
            <button
              className="btn btn-dark"
              id="session-increment"
              onClick={this.props.sessionIncrement}
            >
              <FaArrowUp />
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
          <h3 id="timer-label">Session</h3>
          <span id="time-left">25:00</span>
        </div>
        <div className="buttons container-fluid d-flex gap-1 mt-2 justify-content-center">
          <button
            className="btn btn-dark"
            id="start_stop"
            onClick={this.props.startStop}
          >
            <FaPlay />
            <FaPause />
          </button>
          <button
            className="btn btn-dark"
            id="reset"
            onClick={this.props.reset}
          >
            <FaSyncAlt />
          </button>
        </div>
      </div>
    );
  }
}
export default Clock;
