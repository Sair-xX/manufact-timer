import { useState, useRef, useEffect } from 'react';
import { WORK_TIME, BREAK_TIME } from '../constants';
import type { Mode } from '../types';

export function useTimer() {
  const [time, setTime] = useState<number>(WORK_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<Mode>('work');
  const [hasStarted, setHasStarted] = useState(false);

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

  const start = () => {
    setHasStarted(true);
    setIsRunning(true);
  };
  const stop = () => setIsRunning(false);

  const switchMode = () => {
    mode === 'work' ? setMode('break') : setMode('work');
    mode === 'work' ? setTime(BREAK_TIME) : setTime(WORK_TIME);
    setIsRunning(false);
  };

  return { time, isRunning, mode, hasStarted, start, stop, switchMode };
}