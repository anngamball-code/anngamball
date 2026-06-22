function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-wrapper">
      <div className="progress-info">
        <span>
          Pregunta {current} de {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
