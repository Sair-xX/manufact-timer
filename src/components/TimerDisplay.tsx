interface Props { time: number; mode: string; }

export function TimerDisplay({ time, mode }: Props) {
  const minute = String(Math.floor(time / 60)).padStart(2, '0');
  const second = String(time % 60).padStart(2, '0');
  return (
    <>
      <p className="mode-label">{mode === 'work' ? '作業中' : '休憩中'}</p>
      <p className={`timer ${mode}`}>{`${minute}:${second}`}</p>
    </>
  );
}