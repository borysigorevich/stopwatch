import React, {useContext, useEffect, useRef, useState} from 'react'
import {Button, Container, TimeBox} from "./Styles";
import {Context} from "../../context/context";
import {fromEvent, interval} from "rxjs";
import {incrementHours, incrementMinutes, incrementSeconds, reset, stop} from "../../reducer/actions";

const interval$ = interval(100)

const Stopwatch = () => {
    const {stopwatch: {HH, MM, SS}, dispatch} = useContext(Context)
    //refs
    //buttons refs
    const start_stop_btn = useRef()
    const wait_btn = useRef()
    const reset_btn = useRef()
    //subscription refs
    const intervalSub$ = useRef()
    //isLaunch ref
    const isLaunched = useRef(false)
    //isWait ref
    const isWait = useRef(false)

    useEffect(() => {

        //start/stop button
        const start_stop_subscription$ = fromEvent(start_stop_btn.current, 'click').subscribe(() => {

            if (!isLaunched.current) {
                intervalSub$.current = interval$.subscribe(() => {
                    isLaunched.current = true
                    dispatch(incrementSeconds())
                })
            } else if (isLaunched.current) {
                intervalSub$.current.unsubscribe()
                isLaunched.current = false
                dispatch(stop())
            }
        })

        //reset button
        const reset_subscription$ = fromEvent(reset_btn.current, 'click').subscribe(() => {
            if(isLaunched.current){
                dispatch(reset())
            } else if(isWait.current){
                dispatch(reset())
                isWait.current = false
                isLaunched.current = true
            }
        })

        //launch after re-render
        if (isLaunched.current) {
            intervalSub$.current.unsubscribe()

            intervalSub$.current = interval$.subscribe(() => {
                if (MM > 59) dispatch(incrementHours())
                else if (SS > 59) dispatch(incrementMinutes())
                else dispatch(incrementSeconds())
            })
        }

        return () => {
            start_stop_subscription$.unsubscribe()
        }

    }, [HH, MM, SS, isLaunched.current])

    const handleDoubleClick = () => {
        if (isLaunched.current) {
            isWait.current = true
            isLaunched.current = false
            intervalSub$.current.unsubscribe()
        }
    }

    return (
        <div>
            <Container>
                <TimeBox>
                    <i className={'hh'}>HH: {HH < 10 ? '0' + HH : HH}</i>
                    <i className={'mm'}>MM: {MM < 10 ? '0' + MM : MM}</i>
                    <i className={'ss'}>SS: {SS < 10 ? '0' + SS : SS}</i>
                </TimeBox>
                <Button ref={start_stop_btn}>Start/Stop</Button>
                <Button onDoubleClick={handleDoubleClick} ref={wait_btn}>Wait</Button>
                <Button ref={reset_btn}>Reset</Button>
            </Container>
        </div>
    );
};

export default Stopwatch