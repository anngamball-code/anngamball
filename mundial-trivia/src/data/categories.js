// Categorías temáticas de la trivia. La "key" (salvo "all") debe coincidir
// exactamente con el campo "category" de las preguntas en questions.js.

export const categories = [
  { key: "all", label: "Todas", emoji: "🌍" },
  { key: "Historia", label: "Historia", emoji: "📜" },
  { key: "Selecciones", label: "Selecciones", emoji: "👕" },
  { key: "Jugadores", label: "Jugadores", emoji: "⭐" },
  { key: "Reglas", label: "Reglas", emoji: "📏" },
  { key: "Mundial 2026", label: "Mundial 2026", emoji: "🏆" },
];

// Búsqueda rápida por clave.
export function getCategory(key) {
  return categories.find((c) => c.key === key) ?? categories[0];
}

export default categories;
