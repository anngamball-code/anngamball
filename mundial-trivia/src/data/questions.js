// Banco de preguntas — Trivia del Mundial 2026 (EE.UU., México y Canadá).
// Contenido educativo con datos públicos e históricos. No usa marcas, logos
// ni nombres oficiales protegidos.
//
// Cada pregunta tiene: id, category, difficulty, question, options[], correctIndex.
// - "difficulty": "easy" | "medium" | "hard" | "expert".
// - "correctIndex": posición (0-based) de la respuesta correcta en "options".

export const questions = [
  // ---------------- FÁCIL ----------------
  {
    id: 1,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Con cuántos jugadores juega cada equipo en el campo?",
    options: ["9", "10", "11", "12"],
    correctIndex: 2,
  },
  {
    id: 2,
    category: "Mundial 2026",
    difficulty: "easy",
    question: "¿En qué tres países se celebra el Mundial 2026?",
    options: [
      "EE.UU., México y Canadá",
      "EE.UU., Brasil y Canadá",
      "México, Canadá y Argentina",
      "EE.UU., México y España",
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Cada cuántos años se celebra la Copa del Mundo masculina?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    correctIndex: 2,
  },
  {
    id: 4,
    category: "Reglas",
    difficulty: "easy",
    question: "¿De qué color es la tarjeta que indica expulsión?",
    options: ["Amarilla", "Roja", "Verde", "Azul"],
    correctIndex: 1,
  },
  {
    id: 5,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Cuántos minutos dura cada tiempo reglamentario?",
    options: ["30", "40", "45", "50"],
    correctIndex: 2,
  },
  {
    id: 6,
    category: "Reglas",
    difficulty: "easy",
    question:
      "¿Qué jugador es el único que puede tocar el balón con las manos dentro del área?",
    options: ["El capitán", "El delantero", "El portero", "El defensa"],
    correctIndex: 2,
  },
  {
    id: 7,
    category: "Selecciones",
    difficulty: "easy",
    question: "¿De qué continente es la selección de Brasil?",
    options: ["Europa", "Sudamérica", "África", "Asia"],
    correctIndex: 1,
  },
  {
    id: 8,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Cuántos tiempos tiene un partido en su duración reglamentaria?",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
  },
  {
    id: 9,
    category: "Selecciones",
    difficulty: "easy",
    question: "¿De qué país es la selección conocida como 'La Albiceleste'?",
    options: ["Uruguay", "Chile", "Argentina", "Colombia"],
    correctIndex: 2,
  },
  {
    id: 10,
    category: "Mundial 2026",
    difficulty: "easy",
    question: "¿Qué animal aparece en el logo de muchas mascotas de fútbol?",
    options: [
      "Variadas",
      "Siempre un león",
      "Siempre un águila",
      "Siempre un oso",
    ],
    correctIndex: 0,
  },

  // ---------------- MEDIO ----------------
  {
    id: 11,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué país ganó la primera Copa del Mundo en 1930?",
    options: ["Brasil", "Uruguay", "Italia", "Argentina"],
    correctIndex: 1,
  },
  {
    id: 12,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué país ha ganado más Copas del Mundo masculinas?",
    options: ["Alemania", "Italia", "Brasil", "Argentina"],
    correctIndex: 2,
  },
  {
    id: 13,
    category: "Historia",
    difficulty: "medium",
    question: "¿En qué país se celebró el Mundial de 2022?",
    options: ["Rusia", "Catar", "Brasil", "Sudáfrica"],
    correctIndex: 1,
  },
  {
    id: 14,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué selección ganó el Mundial de 2018?",
    options: ["Croacia", "Alemania", "Francia", "Bélgica"],
    correctIndex: 2,
  },
  {
    id: 15,
    category: "Mundial 2026",
    difficulty: "medium",
    question: "¿Cuántas selecciones participarán en el Mundial 2026?",
    options: ["32", "40", "48", "64"],
    correctIndex: 2,
  },
  {
    id: 16,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué selección ganó el Mundial de 2014?",
    options: ["Argentina", "Alemania", "Países Bajos", "Brasil"],
    correctIndex: 1,
  },
  {
    id: 17,
    category: "Historia",
    difficulty: "medium",
    question: "¿Cuántas veces había ganado Argentina el Mundial hasta 2022?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },
  {
    id: 18,
    category: "Historia",
    difficulty: "medium",
    question: "¿En qué año se disputó el primer Mundial?",
    options: ["1920", "1930", "1942", "1950"],
    correctIndex: 1,
  },
  {
    id: 19,
    category: "Selecciones",
    difficulty: "medium",
    question: "¿Qué selección europea ganó el Mundial de 2010?",
    options: ["Italia", "Alemania", "España", "Francia"],
    correctIndex: 2,
  },
  {
    id: 20,
    category: "Mundial 2026",
    difficulty: "medium",
    question: "¿Cuántas ciudades de México serán sede en el Mundial 2026?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },

  // ---------------- DIFÍCIL ----------------
  {
    id: 21,
    category: "Jugadores",
    difficulty: "hard",
    question: "¿Quién es el máximo goleador en la historia de los Mundiales?",
    options: ["Ronaldo Nazário", "Miroslav Klose", "Pelé", "Gerd Müller"],
    correctIndex: 1,
  },
  {
    id: 22,
    category: "Historia",
    difficulty: "hard",
    question:
      "¿En qué edición se utilizó el VAR por primera vez en un Mundial?",
    options: ["2010", "2014", "2018", "2022"],
    correctIndex: 2,
  },
  {
    id: 23,
    category: "Historia",
    difficulty: "hard",
    question: "¿Cuántas veces fue sede México de un Mundial antes de 2026?",
    options: ["Ninguna", "1 vez", "2 veces", "3 veces"],
    correctIndex: 2,
  },
  {
    id: 24,
    category: "Historia",
    difficulty: "hard",
    question: "¿Qué selección perdió la final del Mundial de 2014?",
    options: ["Brasil", "Países Bajos", "Argentina", "Italia"],
    correctIndex: 2,
  },
  {
    id: 25,
    category: "Historia",
    difficulty: "hard",
    question: "¿Qué país ganó el Mundial de 1998?",
    options: ["Brasil", "Francia", "Italia", "Alemania"],
    correctIndex: 1,
  },
  {
    id: 26,
    category: "Selecciones",
    difficulty: "hard",
    question:
      "¿Qué selección africana fue la primera en llegar a cuartos de final (1990)?",
    options: ["Nigeria", "Senegal", "Camerún", "Ghana"],
    correctIndex: 2,
  },
  {
    id: 27,
    category: "Mundial 2026",
    difficulty: "hard",
    question: "¿En qué área metropolitana se jugará la final del Mundial 2026?",
    options: [
      "Los Ángeles",
      "Nueva York / Nueva Jersey",
      "Ciudad de México",
      "Toronto",
    ],
    correctIndex: 1,
  },
  {
    id: 28,
    category: "Historia",
    difficulty: "hard",
    question: "¿En qué año ganó Inglaterra su único título mundial?",
    options: ["1962", "1966", "1970", "1974"],
    correctIndex: 1,
  },
  {
    id: 29,
    category: "Historia",
    difficulty: "hard",
    question: "¿En qué país ocurrió el famoso 'Maracanazo' de 1950?",
    options: ["Uruguay", "Brasil", "Argentina", "Chile"],
    correctIndex: 1,
  },
  {
    id: 30,
    category: "Selecciones",
    difficulty: "hard",
    question:
      "¿Qué país anfitrión del 2026 albergará la mayor cantidad de partidos?",
    options: ["México", "Canadá", "Estados Unidos", "Se reparten igual"],
    correctIndex: 2,
  },

  // ---------------- EXPERTO ----------------
  {
    id: 31,
    category: "Mundial 2026",
    difficulty: "expert",
    question: "¿Cuántos estadios sede tendrá el Mundial 2026?",
    options: ["12", "14", "16", "20"],
    correctIndex: 2,
  },
  {
    id: 32,
    category: "Jugadores",
    difficulty: "expert",
    question:
      "¿Cuántos goles marcó Just Fontaine en el Mundial de 1958 (récord)?",
    options: ["9", "11", "13", "15"],
    correctIndex: 2,
  },
  {
    id: 33,
    category: "Jugadores",
    difficulty: "expert",
    question: "¿Quién fue el máximo goleador del Mundial de 1970?",
    options: ["Pelé", "Gerd Müller", "Eusébio", "Jairzinho"],
    correctIndex: 1,
  },
  {
    id: 34,
    category: "Historia",
    difficulty: "expert",
    question: "¿En qué ciudad se disputó la final del primer Mundial (1930)?",
    options: ["Buenos Aires", "Montevideo", "Río de Janeiro", "Santiago"],
    correctIndex: 1,
  },
  {
    id: 35,
    category: "Mundial 2026",
    difficulty: "expert",
    question: "¿Cuáles son las tres ciudades sede de México en 2026?",
    options: [
      "CDMX, Guadalajara y Monterrey",
      "CDMX, Puebla y Tijuana",
      "Guadalajara, Cancún y León",
      "Monterrey, Toluca y Mérida",
    ],
    correctIndex: 0,
  },
  {
    id: 36,
    category: "Historia",
    difficulty: "expert",
    question: "¿Qué selección ganó el primer Mundial femenino, en 1991?",
    options: ["Noruega", "Alemania", "Estados Unidos", "Suecia"],
    correctIndex: 2,
  },
  {
    id: 37,
    category: "Mundial 2026",
    difficulty: "expert",
    question: "¿Cuántas ciudades canadienses serán sede en 2026?",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
  },
  {
    id: 38,
    category: "Historia",
    difficulty: "expert",
    question:
      "¿Cuántos partidos en total está previsto que tenga el Mundial 2026?",
    options: ["64", "80", "104", "128"],
    correctIndex: 2,
  },
  {
    id: 39,
    category: "Jugadores",
    difficulty: "expert",
    question: "¿Qué portero ganó el premio al mejor arquero del Mundial 2022?",
    options: [
      "Thibaut Courtois",
      "Emiliano Martínez",
      "Hugo Lloris",
      "Yassine Bounou",
    ],
    correctIndex: 1,
  },
  {
    id: 40,
    category: "Historia",
    difficulty: "expert",
    question: "¿Qué dos países sudamericanos han sido campeones del mundo?",
    options: [
      "Brasil y Argentina solamente",
      "Brasil, Argentina y Uruguay",
      "Argentina y Uruguay solamente",
      "Brasil y Uruguay solamente",
    ],
    correctIndex: 1,
  },
];

// Mezcla un array (algoritmo Fisher-Yates) devolviendo una copia nueva.
export function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Devuelve las preguntas para una partida según la dificultad.
// "mixed" combina todos los niveles. El resultado va mezclado y limitado a "limit".
export function getQuizQuestions(difficultyKey, limit = 10) {
  const pool =
    difficultyKey === "mixed"
      ? questions
      : questions.filter((q) => q.difficulty === difficultyKey);

  return shuffle(pool).slice(0, limit);
}

export default questions;
