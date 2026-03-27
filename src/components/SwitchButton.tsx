import type { Mode } from '../types';

interface Props { mode: Mode; switchMode: () => void; }

export function SwitchButton({ mode, switchMode }: Props) {
  return (
    <button className="btn btn-switch" onClick={() => switchMode()}>
      {mode === 'work' ? '休憩へ切り替え' : '作業へ切り替え'}
    </button>
  );
}