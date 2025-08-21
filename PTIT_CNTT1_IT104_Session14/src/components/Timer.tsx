import React, { Component } from "react";
import "./Timer.css";
type StateType = {
  time: number;
  status: boolean;
};
export default class Timer extends Component<object, StateType> {
  private timerId: ReturnType<typeof setInterval> | null = null;
  constructor(props: object) {
    super(props);
    this.state = {
      time: 0,
      status: false,
    };
  }

  render() {
    // const handleStatus = () =>{
    //     this.setState((prev) =>({
    //         ...prev,
    //         status: !prev.status
    //     }))
    // }
  
  const handleRun = () => {
    // Chỉ chạy nếu chưa có timer
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.setState((prev) => ({
          ...prev,
          time: prev.time + 1,
          status: true,
        }));
      }, 1000);
    }
  };

  const handlePause = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null; // Quan trọng!
    }
    this.setState({ status: false });
  };

  const handleReset = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.setState({
      time: 0,
      status: false,
    });
  };
    return (
      <div>
        <div className="timer-container">
          <div className="timer-header">
            <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
          </div>
          <div className="mode-selector">
            <button className="mode-btn active" data-mode="stopwatch">
              Bấm Giờ
            </button>
          </div>
          <div className="time-display" id="timeDisplay">
            {this.state.time}
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill" />
          </div>
          <div className="controls">
            {this.state.status ? (
              <button
                onClick={handlePause}
                className="control-btn pause-btn"
                id="pauseBtn">
                Tạm Dừng
              </button>
            ) : (
              <button
                onClick={handleRun}
                className="control-btn start-btn"
                id="startBtn">
                Bắt Đầu
              </button>
            )}

            <button
              onClick={handleReset}
              className="control-btn reset-btn"
              id="resetBtn">
              Đặt Lại
            </button>
          </div>
          <div className="status-message" id="statusMessage" />
        </div>
      </div>
    );
  }
}
