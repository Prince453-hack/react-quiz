import { useEffect } from "react";

export default function Timer({ dispatch, secRemaining }) {
  const mins = Math.floor(secRemaining / 60);
  const sec = secRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
