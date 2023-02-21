import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./Components/Clock";
import ContactForm from "./Components/Form";
import Modal from "./Components/Modal";
import logo from "./image/Logo.svg";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [modalActive, setModalActive] = useState(false);

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("May 31,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div className="App">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />

          <a href="https://egorovagency.by/#main" className="link">
            Visit our website
          </a>
          <ContactForm setActive={setModalActive} />
          <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </>
  );
}

export default App;
