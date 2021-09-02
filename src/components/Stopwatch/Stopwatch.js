import React, {useState} from 'react';
import './Stopwatch.css'

const Stopwatch = () => {
    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})
    const [isLaunched, setIsLaunched] = useState(false)
    const [interval, setInterv] = useState()

    const start_stop = () => {
        if (!isLaunched) {
            setInterv(setInterval(stopwatchLogic, 1000))
            setIsLaunched(!isLaunched)
        } else {
            clearInterval(interval)
            setTime({hours: 0, minutes: 0, seconds: 0})
            setIsLaunched(!isLaunched)
        }
    }

    const wait = () => {
        clearInterval(interval)
        setIsLaunched(false)
    }

    let hours = time.hours, minutes = time.minutes, seconds = time.seconds

    const reset = () => {
        if (isLaunched || (time.hours > 0 || time.minutes > 0 || time.seconds > 0)) {
            setIsLaunched(true)
            hours = 0
            minutes = 0
            seconds = 0
            clearInterval(interval)
            setTime({hours: 0, minutes: 0, seconds: 0})
            setInterv(setInterval(stopwatchLogic, 1000))
        }
    }

    const stopwatchLogic = () => {
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
        if (minutes === 60) {
            minutes = 0
            hours++;
        }
        setTime({hours, minutes, seconds})
    }

    return (
        <div className={'stopwatch'}>
            <div className={'stopwatch__time-block'}>
                <span className={'stopwatch__hours'}>{time.hours < 10 ? `0${time.hours}` : time.hours}:</span>
                <span className={'stopwatch__minutes'}>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}:</span>
                <span className={'stopwatch__seconds'}>{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
            </div>
            <div className={'stopwatch__button-block'}>
                <button className={'stopwatch__btn'} onClick={start_stop}>Start/Stop</button>
            </div>
            <div className={'stopwatch__button-block'}>
                <button className={'stopwatch__btn'} onDoubleClick={wait}>Wait</button>
            </div>
            <div className={'stopwatch__button-block'}>
                <button className={'stopwatch__btn'} onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;