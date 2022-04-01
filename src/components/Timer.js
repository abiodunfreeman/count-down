import { useEffect, useState } from "react";
import "./timer.css";
export default function Timer(props) {
  const { person } = props;

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });
  function updateTime() {
    const birthday = new Date(person.birthday);
    const today = new Date(); // gets curent time
    let diff = +birthday - +today; //difference between chosen day and current time

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
  setInterval(updateTime, 1000);
  return (
    <div id="timer-container">
      <div className="card">
        <div className="card-time">
          <h1>{time.days}</h1>
        </div>
        <h2>Days</h2>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{time.hours}</h1>
        </div>
        <h2>Hours</h2>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{time.mins}</h1>
        </div>
        <h2>Minuets</h2>
      </div>
      <div className="card">
        <div className="card-time">
          <h1>{time.secs}</h1>
        </div>
        <h2>Seconds</h2>
      </div>
    </div>
  );
}
