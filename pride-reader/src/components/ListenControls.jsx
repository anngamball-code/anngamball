const SPEEDS = [
  { value: 0.6, label: "0.6×" },
  { value: 1, label: "1×" },
  { value: 1.4, label: "1.4×" },
];

// Barra inferior con los controles de reproducción del modo escucha.
function ListenControls({
  isPlaying,
  isPaused,
  rate,
  supported,
  onTogglePlay,
  onStop,
  onSetRate,
}) {
  return (
    <div className="listen-bar">
      {!supported && (
        <span className="listen-warn">
          Tu navegador no soporta síntesis de voz.
        </span>
      )}

      <div className="listen-buttons">
        <button
          className="listen-btn listen-main"
          onClick={onTogglePlay}
          disabled={!supported}
          aria-label={isPlaying && !isPaused ? "Pausar" : "Reproducir"}
        >
          {isPlaying && !isPaused ? "⏸" : "▶"}
        </button>
        <button
          className="listen-btn"
          onClick={onStop}
          disabled={!supported || (!isPlaying && !isPaused)}
          aria-label="Detener"
        >
          ⏹
        </button>
      </div>

      <div className="speed-group" role="group" aria-label="Velocidad">
        {SPEEDS.map((s) => (
          <button
            key={s.value}
            className={`speed-btn${rate === s.value ? " speed-active" : ""}`}
            onClick={() => onSetRate(s.value)}
            disabled={!supported}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListenControls;
