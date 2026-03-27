interface Props { hasStarted: boolean; start: () => void; }

export function StartButton({ hasStarted, start }: Props) {
  if (hasStarted) return null;
  return (
    <button className="btn btn-start" onClick={() => start()}>
      作業開始
    </button>
  );
}