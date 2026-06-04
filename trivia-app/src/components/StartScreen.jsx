function StartScreen({ difficulties, questionsPerGame, totalInBank, onStart }) {
  return (
    <div className="card start-screen">
      <div className="start-icon" aria-hidden="true">
        🧠
      </div>
      <h1 className="title">Trivia Challenge</h1>
      <p className="subtitle">
        {totalInBank} preguntas de cultura general. Elige un nivel y responde{" "}
        {questionsPerGame} preguntas antes de que se acabe el tiempo.
      </p>

      <ul className="rules">
        <li>Cada pregunta tiene un temporizador. ¡No te duermas!</li>
        <li>No puedes cambiar tu respuesta una vez seleccionada.</li>
        <li>Si se acaba el tiempo, la pregunta cuenta como fallada.</li>
      </ul>

      <h2 className="section-label">Elige la dificultad</h2>
      <div className="difficulty-list">
        {difficulties.map((diff) => (
          <button
            key={diff.key}
            className="difficulty-btn"
            onClick={() => onStart(diff.key)}
          >
            <span className="difficulty-emoji" aria-hidden="true">
              {diff.emoji}
            </span>
            <span className="difficulty-text">
              <span className="difficulty-name">{diff.label}</span>
              <span className="difficulty-desc">{diff.description}</span>
            </span>
            <span className="difficulty-time">{diff.time}s</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StartScreen;
