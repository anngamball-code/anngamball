import { useState } from "react";
import { questions, getQuizQuestions } from "./data/questions";
import { difficulties, getDifficulty } from "./data/difficulties";
import StartScreen from "./components/StartScreen";
import ProgressBar from "./components/ProgressBar";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Results from "./components/Results";
import "./App.css";

// Estados posibles del juego.
const GAME_STATE = {
  START: "start",
  PLAYING: "playing",
  FINISHED: "finished",
};

// Número de preguntas por partida.
const QUESTIONS_PER_GAME = 10;

function App() {
  const [gameState, setGameState] = useState(GAME_STATE.START);
  const [difficulty, setDifficulty] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentIndex];
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  // Inicia una partida con la dificultad elegida.
  const startGame = (difficultyKey) => {
    const diff = getDifficulty(difficultyKey);
    const selected = getQuizQuestions(difficultyKey, QUESTIONS_PER_GAME);

    setDifficulty(diff);
    setQuizQuestions(selected);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsAnswered(false);
    setScore(0);
    setGameState(GAME_STATE.PLAYING);
  };

  // Vuelve a la pantalla de selección de nivel.
  const backToStart = () => {
    setGameState(GAME_STATE.START);
  };

  const handleSelect = (index) => {
    if (isAnswered) return; // Evita cambiar la respuesta.

    setSelectedIndex(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  // Se agotó el tiempo: la pregunta se marca como respondida sin selección.
  const handleTimeUp = () => {
    if (isAnswered) return;
    setSelectedIndex(null);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setGameState(GAME_STATE.FINISHED);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedIndex(null);
    setIsAnswered(false);
  };

  return (
    <div className="app">
      <main className="container">
        {gameState === GAME_STATE.START && (
          <StartScreen
            difficulties={difficulties}
            questionsPerGame={QUESTIONS_PER_GAME}
            totalInBank={questions.length}
            onStart={startGame}
          />
        )}

        {gameState === GAME_STATE.PLAYING && currentQuestion && (
          <>
            <ProgressBar
              current={currentIndex + 1}
              total={quizQuestions.length}
            />
            <Timer
              key={currentQuestion.id}
              duration={difficulty.time}
              isRunning={!isAnswered}
              onTimeUp={handleTimeUp}
            />
            <Question
              question={currentQuestion}
              selectedIndex={selectedIndex}
              isAnswered={isAnswered}
              onSelect={handleSelect}
              onNext={handleNext}
              isLast={isLastQuestion}
            />
          </>
        )}

        {gameState === GAME_STATE.FINISHED && (
          <Results
            score={score}
            total={quizQuestions.length}
            difficulty={difficulty}
            onRestart={backToStart}
          />
        )}
      </main>

      <footer className="footer">
        Trivia del Mundial 2026 · Hecho con React + Vite
      </footer>
    </div>
  );
}

export default App;
