import { useState, useRef, useEffect } from 'react';
import { WORK_TIME, BREAK_TIME } from '../constans.ts';
import { Mode } from '../types.ts';

export function useTimer() {
  // stateとロジックはあとで書く
  const [time, setTime] = useState<number>(WORK_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>('work');

  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  const switchMode = () => {
    mode === 'work' ? setMode('break') : setMode('work');
    mode === 'work' ? setTime(BREAK_TIME) : setTime(WORK_TIME);
  };

  // const switchMode = () => {
  //   const next = mode === "work" ? "break" : "work";
  //   setMode(next);
  //   setTime(next === "work" ? WORK_TIME : BREAK_TIME);
  // };

  return {
    time,
    isRunning,
    mode,
    start,
    stop,
    switchMode,
  };
}
