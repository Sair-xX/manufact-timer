// import {useTimer} from '../hooks/useTimer.ts';
//プロップスでhookのロジックを受け取る時はインポート不要


interface Props  {time:number};
//interface Props の後ろに=入らない

export function TimerDisplay({time}:Props){
  const minute = Math.floor(time/60);
  const second =time%60;

  return(
    <>
      <p>{`${minute}:${second}`}</p>
    </>
  );
}