import { useTimer } from './hooks/useTimer.ts';
import { TimerDisplay } from './components/TimerDisplay.tsx';
import { StopButton } from './components/StopButton.tsx';
import { SwitchButton } from './components/SwitchButton.tsx';
import { StartButton } from './components/StartButton.tsx';

export default function App() {
  const { time, isRunning, start, stop, mode, switchMode } = useTimer();
  return (
    <>
      <TimerDisplay time={time} />
      <StopButton isRunning={isRunning} start={start} stop={stop} />
      <SwitchButton mode={mode} switchMode={switchMode} />
      <StartButton isRunning={isRunning} start={start} />
    </>
  );
}
