import { useState, useEffect, useRef } from "react";

// Temporizador de cuenta regresiva.
// - duration: segundos totales.
// - isRunning: si es false, el reloj se pausa (p. ej. al responder).
// - onTimeUp: se llama una vez cuando el tiempo llega a 0.
// Para reiniciarlo en cada pregunta, monta el componente con una "key" distinta.
function Timer({ duration, isRunning, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Guardamos onTimeUp en una ref para no reiniciar el efecto si cambia.
  const onTimeUpRef = useRef(onTimeUp);
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      onTimeUpRef.current();
      return;
    }

    const id = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [timeLeft, isRunning]);

  const percentage = Math.max(0, (timeLeft / duration) * 100);
  const isLow = timeLeft <= 5;

  return (
    <div className="timer">
      <div className="timer-header">
        <span className="timer-label">⏱️ Tiempo restante</span>
        <span className={`timer-count${isLow ? " timer-count-low" : ""}`}>
          {timeLeft}s
        </span>
      </div>
      <div
        className="timer-track"
        role="progressbar"
        aria-valuenow={timeLeft}
        aria-valuemin={0}
        aria-valuemax={duration}
      >
        <div
          className={`timer-fill${isLow ? " timer-fill-low" : ""}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default Timer;
