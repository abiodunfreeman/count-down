import { useEffect, useState } from "react";
import "./timer.css";
export default function Timer(props) {
  const { event } = props;

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });
  function updateTime() {
    const date = new Date(event.date);
    const today = new Date(); // gets curent time
    let diff = +date - +today; //difference between chosen day and current time

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff = diff - days * (1000 * 60 * 60 * 24); // subtracts the days already accounted for

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff = diff - hours * (1000 * 60 * 60); //subtracts the hours already accounted for

    const mins = Math.floor(diff / (1000 * 60));
    diff = diff - mins * (1000 * 60); //subtracts mins accounted for

    const secs = Math.floor(diff / 1000);

    setTime({
      days,
      hours,
      mins,
      secs
    });
  }
  setInterval(updateTime, 1000); //Updates time state every second
  return (
    <div id="timer-container">
      <h3>{event.name}</h3>
      <div className="card">
        <div className="card-time">
          <h1>{time.days}</h1>
        </div>
        <p>Days</p>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{time.hours}</h1>
        </div>
        <p>Hours</p>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{time.mins}</h1>
        </div>
        <p>Minuets</p>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{time.secs}</h1>
        </div>
        <p>Seconds</p>
      </div>
    </div>
  );
}
