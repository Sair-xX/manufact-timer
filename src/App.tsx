import { useTimer } from './hooks/useTimer';
import { TimerDisplay } from './components/TimerDisplay';
import { StopButton } from './components/StopButton';
import { SwitchButton } from './components/SwitchButton';
import { StartButton } from './components/StartButton';

export default function App() {
  const { time, isRunning, start, stop, mode, switchMode, hasStarted } = useTimer();

  if (!hasStarted) {
    return (
      <div className="container">
        <TimerDisplay time={time} mode={mode} />
        <div className="divider" />
        <StartButton hasStarted={hasStarted} start={start} />
      </div>
    );
  }

  if (time === 0) {
    return (
      <div className="container">
        <TimerDisplay time={time} mode={mode} />
        <div className="divider" />
        <SwitchButton mode={mode} switchMode={switchMode} />
      </div>
    );
  }

  return (
    <div className="container">
      <TimerDisplay time={time} mode={mode} />
      <div className="divider" />
      <StopButton isRunning={isRunning} start={start} stop={stop} />
    </div>
  );
}