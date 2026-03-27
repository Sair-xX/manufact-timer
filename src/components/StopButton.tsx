interface Props { isRunning: boolean; start: () => void; stop: () => void; }

export function StopButton({ isRunning, start, stop }: Props) {
  return (
    <button className="btn btn-stop" onClick={isRunning ? () => stop() : () => start()}>
      {isRunning ? '一時停止' : '再開'}
    </button>
  );
}