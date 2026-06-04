const LETTERS = ["A", "B", "C", "D", "E", "F"];

function Question({
  question,
  selectedIndex,
  isAnswered,
  onSelect,
  onNext,
  isLast,
}) {
  // Se agotó el tiempo si está respondida pero no se eligió ninguna opción.
  const timedOut = isAnswered && selectedIndex === null;
  const isCorrect = selectedIndex === question.correctIndex;

  // Determina la clase CSS de cada opción según el estado de la respuesta.
  const getOptionClass = (index) => {
    if (!isAnswered) {
      return "option";
    }
    if (index === question.correctIndex) {
      return "option option-correct";
    }
    if (index === selectedIndex && index !== question.correctIndex) {
      return "option option-wrong";
    }
    return "option option-dimmed";
  };

  return (
    <div className="card question-card">
      <span className="category-badge">{question.category}</span>
      <h2 className="question-text">{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => onSelect(index)}
            disabled={isAnswered}
          >
            <span className="option-letter">{LETTERS[index]}</span>
            <span className="option-label">{option}</span>
            {isAnswered && index === question.correctIndex && (
              <span className="option-mark" aria-hidden="true">
                ✓
              </span>
            )}
            {isAnswered &&
              index === selectedIndex &&
              index !== question.correctIndex && (
                <span className="option-mark" aria-hidden="true">
                  ✕
                </span>
              )}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="feedback">
          {isCorrect ? (
            <p className="feedback-text feedback-correct">¡Correcto! 🎉</p>
          ) : timedOut ? (
            <p className="feedback-text feedback-wrong">
              ⏰ ¡Tiempo agotado! La respuesta correcta era{" "}
              <strong>{question.options[question.correctIndex]}</strong>.
            </p>
          ) : (
            <p className="feedback-text feedback-wrong">
              Incorrecto. La respuesta correcta era{" "}
              <strong>{question.options[question.correctIndex]}</strong>.
            </p>
          )}
          <button className="btn btn-primary" onClick={onNext}>
            {isLast ? "Ver resultados" : "Siguiente pregunta"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Question;
