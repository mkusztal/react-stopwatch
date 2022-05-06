import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import Button from '../Button/Button';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);

  let milliseconds = String(time).slice(-3);
  let seconds = String(Math.floor(time / 1000)).padStart(2, '0');
  let minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  let hours = String(Math.floor(minutes / 60)).padStart(2, '0');

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1);
    } else if (!isActive) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div>
      <h2 className={styles.stopwatch}>
        {hours}:{minutes}:{seconds}.{milliseconds}
      </h2>
      <div className={styles.buttons_container}>
        <Button onClick={() => setActive(true)}>Start</Button>
        <Button onClick={() => setActive(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;
