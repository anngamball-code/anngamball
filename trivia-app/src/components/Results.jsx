function Results({ score, total, difficulty, onRestart }) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // Mensaje personalizado según el desempeño.
  const getFeedback = () => {
    if (percentage === 100) {
      return { emoji: "🏆", text: "¡Puntuación perfecta! Eres un genio." };
    }
    if (percentage >= 70) {
      return { emoji: "🎉", text: "¡Muy bien! Tienes grandes conocimientos." };
    }
    if (percentage >= 40) {
      return { emoji: "👍", text: "Buen intento. ¡Puedes mejorar!" };
    }
    return { emoji: "📚", text: "¡A seguir estudiando! Inténtalo de nuevo." };
  };

  const feedback = getFeedback();

  return (
    <div className="card results-screen">
      <div className="results-emoji" aria-hidden="true">
        {feedback.emoji}
      </div>
      <h1 className="title">Resultados</h1>

      {difficulty && (
        <p className="results-level">
          Nivel:{" "}
          <strong>
            {difficulty.emoji} {difficulty.label}
          </strong>
        </p>
      )}

      <div className="score-circle" style={{ "--pct": `${percentage}` }}>
        <div className="score-inner">
          <span className="score-number">
            {score}/{total}
          </span>
          <span className="score-pct">{percentage}%</span>
        </div>
      </div>

      <p className="results-feedback">{feedback.text}</p>

      <button className="btn btn-primary" onClick={onRestart}>
        Elegir otro nivel
      </button>
    </div>
  );
}

export default Results;
