import React, {useState, useEffect} from "react";
import "./Stopwatch.css";

export default function Stopwatch(){
    const [timerOn, setTimerOn] = useState(false);
    const [timeInSec, setTimeInSec] = useState(0);

    const formatTime = (seconds) =>{
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds%60;
        return `${minutes}:${remainingSeconds <10 ? "0" :""}${remainingSeconds}`;
    }

    const handleStart = () =>{
        setTimerOn(prevtimeOnState => !prevtimeOnState);
    }

    const handleReset = () => {
        setTimerOn(false);
        setTimeInSec(0);
    }

    useEffect(() => {
        let myTimerID;
        if(timerOn){
            myTimerID = setInterval(()=>{
                setTimeInSec(prevtimeInSec => prevtimeInSec + 1);
            },1000);
        }
        return () => clearInterval(myTimerID);
    },[timerOn])

    return(
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(timeInSec)}</p>
            <button onClick={handleStart}>
                {(!timerOn) ? "Start" : "Stop"}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}