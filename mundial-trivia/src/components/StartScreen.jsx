import { useState } from "react";

function StartScreen({
  categories,
  difficulties,
  questionsPerGame,
  totalInBank,
  onStart,
}) {
  // Categoría seleccionada (por defecto "Todas").
  const [category, setCategory] = useState("all");

  return (
    <div className="card start-screen">
      <div className="start-icon" aria-hidden="true">
        ⚽
      </div>
      <h1 className="title">Trivia del Mundial 2026</h1>
      <p className="host-flags" aria-hidden="true">
        🇺🇸 🇲🇽 🇨🇦
      </p>
      <p className="subtitle">
        {totalInBank} preguntas sobre la Copa del Mundo. Elige una categoría y
        un nivel para jugar {questionsPerGame} preguntas contrarreloj.
      </p>

      {/* Paso 1: categoría */}
      <h2 className="section-label">1. Elige una categoría</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`category-chip${category === cat.key ? " category-chip-active" : ""}`}
            onClick={() => setCategory(cat.key)}
            aria-pressed={category === cat.key}
          >
            <span aria-hidden="true">{cat.emoji}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* Paso 2: dificultad (inicia la partida) */}
      <h2 className="section-label">2. Elige la dificultad</h2>
      <div className="difficulty-list">
        {difficulties.map((diff) => (
          <button
            key={diff.key}
            className="difficulty-btn"
            onClick={() => onStart(diff.key, category)}
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
