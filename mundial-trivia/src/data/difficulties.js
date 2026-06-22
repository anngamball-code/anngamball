// Configuración de los niveles de dificultad.
// - key: identificador interno (coincide con el campo "difficulty" de las preguntas).
// - time: segundos disponibles por pregunta en ese nivel.
// "mixed" combina preguntas de todos los niveles.

export const difficulties = [
  {
    key: "easy",
    label: "Fácil",
    emoji: "🟢",
    time: 30,
    description: "Preguntas sencillas y tiempo de sobra.",
  },
  {
    key: "medium",
    label: "Medio",
    emoji: "🟡",
    time: 20,
    description: "Un reto equilibrado para la mayoría.",
  },
  {
    key: "hard",
    label: "Difícil",
    emoji: "🟠",
    time: 15,
    description: "Para mentes bien preparadas.",
  },
  {
    key: "expert",
    label: "Experto",
    emoji: "🔴",
    time: 10,
    description: "Solo para verdaderos sabios. ¡Rápido!",
  },
  {
    key: "mixed",
    label: "Mixto",
    emoji: "🎲",
    time: 18,
    description: "Preguntas aleatorias de todos los niveles.",
  },
];

// Búsqueda rápida por clave.
export function getDifficulty(key) {
  return difficulties.find((d) => d.key === key) ?? difficulties[0];
}

export default difficulties;
