// Banco de preguntas — Trivia del Mundial 2026 (EE.UU., México y Canadá).
// Contenido educativo con datos públicos e históricos. No usa marcas, logos
// ni nombres oficiales protegidos.
//
// Cada pregunta tiene: id, category, difficulty, question, options[], correctIndex.
// - "category": "Historia" | "Selecciones" | "Jugadores" | "Reglas" | "Mundial 2026".
// - "difficulty": "easy" | "medium" | "hard" | "expert".
// - "correctIndex": posición (0-based) de la respuesta correcta en "options".

export const questions = [
  // ============================ HISTORIA ============================
  {
    id: 1,
    category: "Historia",
    difficulty: "easy",
    question: "¿En qué año se disputó el primer Mundial?",
    options: ["1920", "1930", "1942", "1950"],
    correctIndex: 1,
  },
  {
    id: 2,
    category: "Historia",
    difficulty: "easy",
    question: "¿Cada cuántos años se celebra la Copa del Mundo masculina?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    correctIndex: 2,
  },
  {
    id: 3,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué país ganó la primera Copa del Mundo en 1930?",
    options: ["Brasil", "Uruguay", "Italia", "Argentina"],
    correctIndex: 1,
  },
  {
    id: 4,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué país ha ganado más Copas del Mundo masculinas?",
    options: ["Alemania", "Italia", "Brasil", "Argentina"],
    correctIndex: 2,
  },
  {
    id: 5,
    category: "Historia",
    difficulty: "medium",
    question: "¿En qué país se celebró el Mundial de 2022?",
    options: ["Rusia", "Catar", "Brasil", "Sudáfrica"],
    correctIndex: 1,
  },
  {
    id: 6,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué selección ganó el Mundial de 2018?",
    options: ["Croacia", "Alemania", "Francia", "Bélgica"],
    correctIndex: 2,
  },
  {
    id: 7,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué selección ganó el Mundial de 2014?",
    options: ["Argentina", "Alemania", "Países Bajos", "Brasil"],
    correctIndex: 1,
  },
  {
    id: 8,
    category: "Historia",
    difficulty: "medium",
    question: "¿En qué país se celebró el Mundial de 2018?",
    options: ["Brasil", "Rusia", "Catar", "Alemania"],
    correctIndex: 1,
  },
  {
    id: 9,
    category: "Historia",
    difficulty: "hard",
    question:
      "¿En qué edición se utilizó el VAR por primera vez en un Mundial?",
    options: ["2010", "2014", "2018", "2022"],
    correctIndex: 2,
  },
  {
    id: 10,
    category: "Historia",
    difficulty: "hard",
    question: "¿Qué país ganó el Mundial de 1998?",
    options: ["Brasil", "Francia", "Italia", "Alemania"],
    correctIndex: 1,
  },
  {
    id: 11,
    category: "Historia",
    difficulty: "hard",
    question: "¿En qué año ganó Inglaterra su único título mundial?",
    options: ["1962", "1966", "1970", "1974"],
    correctIndex: 1,
  },
  {
    id: 12,
    category: "Historia",
    difficulty: "hard",
    question: "¿En qué país ocurrió el famoso 'Maracanazo' de 1950?",
    options: ["Uruguay", "Brasil", "Argentina", "Chile"],
    correctIndex: 1,
  },
  {
    id: 13,
    category: "Historia",
    difficulty: "hard",
    question: "¿Cuántas veces ha sido campeona del mundo Italia?",
    options: ["2", "3", "4", "5"],
    correctIndex: 2,
  },
  {
    id: 14,
    category: "Historia",
    difficulty: "expert",
    question: "¿En qué ciudad se disputó la final del primer Mundial (1930)?",
    options: ["Buenos Aires", "Montevideo", "Río de Janeiro", "Santiago"],
    correctIndex: 1,
  },
  {
    id: 15,
    category: "Historia",
    difficulty: "expert",
    question: "¿Qué selección ganó el primer Mundial femenino, en 1991?",
    options: ["Noruega", "Alemania", "Estados Unidos", "Suecia"],
    correctIndex: 2,
  },

  // ========================== SELECCIONES ==========================
  {
    id: 16,
    category: "Selecciones",
    difficulty: "easy",
    question: "¿De qué continente es la selección de Brasil?",
    options: ["Europa", "Sudamérica", "África", "Asia"],
    correctIndex: 1,
  },
  {
    id: 17,
    category: "Selecciones",
    difficulty: "easy",
    question: "¿De qué país es la selección apodada 'La Albiceleste'?",
    options: ["Uruguay", "Chile", "Argentina", "Colombia"],
    correctIndex: 2,
  },
  {
    id: 18,
    category: "Selecciones",
    difficulty: "easy",
    question: "¿De qué país es la selección apodada 'El Tri'?",
    options: ["España", "México", "Perú", "Ecuador"],
    correctIndex: 1,
  },
  {
    id: 19,
    category: "Selecciones",
    difficulty: "medium",
    question: "¿Cuántas veces había ganado Argentina el Mundial hasta 2022?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },
  {
    id: 20,
    category: "Selecciones",
    difficulty: "medium",
    question: "¿De qué color es la camiseta tradicional de Países Bajos?",
    options: ["Roja", "Naranja", "Azul", "Verde"],
    correctIndex: 1,
  },
  {
    id: 21,
    category: "Selecciones",
    difficulty: "medium",
    question: "¿De qué país es la selección llamada 'Los Tres Leones'?",
    options: ["Alemania", "Inglaterra", "Bélgica", "Portugal"],
    correctIndex: 1,
  },
  {
    id: 22,
    category: "Selecciones",
    difficulty: "medium",
    question: "¿Qué selección europea ganó su primer Mundial en 2010?",
    options: ["Italia", "Alemania", "España", "Francia"],
    correctIndex: 2,
  },
  {
    id: 23,
    category: "Selecciones",
    difficulty: "hard",
    question:
      "¿Qué selección africana fue la primera en llegar a cuartos de final (1990)?",
    options: ["Nigeria", "Senegal", "Camerún", "Ghana"],
    correctIndex: 2,
  },
  {
    id: 24,
    category: "Selecciones",
    difficulty: "hard",
    question: "¿Qué selección perdió la final del Mundial de 2014?",
    options: ["Brasil", "Países Bajos", "Argentina", "Italia"],
    correctIndex: 2,
  },
  {
    id: 25,
    category: "Selecciones",
    difficulty: "expert",
    question: "¿Qué selecciones sudamericanas han sido campeonas del mundo?",
    options: [
      "Solo Brasil y Argentina",
      "Brasil, Argentina y Uruguay",
      "Solo Brasil y Uruguay",
      "Brasil, Argentina y Chile",
    ],
    correctIndex: 1,
  },
  {
    id: 26,
    category: "Selecciones",
    difficulty: "expert",
    question:
      "¿Qué país anfitrión del 2026 albergará la mayor cantidad de partidos?",
    options: ["México", "Canadá", "Estados Unidos", "Se reparten igual"],
    correctIndex: 2,
  },

  // =========================== JUGADORES ===========================
  {
    id: 27,
    category: "Jugadores",
    difficulty: "medium",
    question: "¿Qué jugador brasileño es conocido como 'O Rei' (El Rey)?",
    options: ["Ronaldinho", "Pelé", "Romário", "Zico"],
    correctIndex: 1,
  },
  {
    id: 28,
    category: "Jugadores",
    difficulty: "medium",
    question: "¿De qué país es el jugador Lionel Messi?",
    options: ["Brasil", "Argentina", "Uruguay", "España"],
    correctIndex: 1,
  },
  {
    id: 29,
    category: "Jugadores",
    difficulty: "medium",
    question: "¿De qué país es el jugador Cristiano Ronaldo?",
    options: ["Brasil", "España", "Portugal", "Francia"],
    correctIndex: 2,
  },
  {
    id: 30,
    category: "Jugadores",
    difficulty: "hard",
    question: "¿Quién es el máximo goleador en la historia de los Mundiales?",
    options: ["Ronaldo Nazário", "Miroslav Klose", "Pelé", "Gerd Müller"],
    correctIndex: 1,
  },
  {
    id: 31,
    category: "Jugadores",
    difficulty: "hard",
    question: "¿Quién ganó el Balón de Oro al mejor jugador del Mundial 2022?",
    options: [
      "Kylian Mbappé",
      "Lionel Messi",
      "Luka Modrić",
      "Antoine Griezmann",
    ],
    correctIndex: 1,
  },
  {
    id: 32,
    category: "Jugadores",
    difficulty: "hard",
    question: "¿Quién marcó el gol de 'La Mano de Dios' en 1986?",
    options: [
      "Diego Maradona",
      "Jorge Valdano",
      "Mario Kempes",
      "Daniel Passarella",
    ],
    correctIndex: 0,
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
    category: "Jugadores",
    difficulty: "expert",
    question:
      "¿Cuántos goles marcó Just Fontaine en el Mundial de 1958 (récord)?",
    options: ["9", "11", "13", "15"],
    correctIndex: 2,
  },
  {
    id: 35,
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
    id: 36,
    category: "Jugadores",
    difficulty: "expert",
    question:
      "¿Qué jugador ganó la Bota de Oro (máximo goleador) del Mundial 2018?",
    options: [
      "Harry Kane",
      "Kylian Mbappé",
      "Romelu Lukaku",
      "Antoine Griezmann",
    ],
    correctIndex: 0,
  },
  {
    id: 37,
    category: "Jugadores",
    difficulty: "expert",
    question:
      "¿Quién posee el récord de más partidos disputados en Copas del Mundo?",
    options: [
      "Lothar Matthäus",
      "Lionel Messi",
      "Diego Maradona",
      "Paolo Maldini",
    ],
    correctIndex: 1,
  },

  // ============================= REGLAS =============================
  {
    id: 38,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Con cuántos jugadores juega cada equipo en el campo?",
    options: ["9", "10", "11", "12"],
    correctIndex: 2,
  },
  {
    id: 39,
    category: "Reglas",
    difficulty: "easy",
    question: "¿De qué color es la tarjeta que indica expulsión?",
    options: ["Amarilla", "Roja", "Verde", "Azul"],
    correctIndex: 1,
  },
  {
    id: 40,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Cuántos minutos dura cada tiempo reglamentario?",
    options: ["30", "40", "45", "50"],
    correctIndex: 2,
  },
  {
    id: 41,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Cuántos tiempos tiene un partido en su duración reglamentaria?",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
  },
  {
    id: 42,
    category: "Reglas",
    difficulty: "easy",
    question:
      "¿Qué jugador puede tocar el balón con las manos dentro de su área?",
    options: ["El capitán", "El delantero", "El portero", "El defensa"],
    correctIndex: 2,
  },
  {
    id: 43,
    category: "Reglas",
    difficulty: "medium",
    question:
      "¿Cómo se llama la infracción de adelantarse a la última línea rival?",
    options: ["Falta", "Fuera de juego", "Penal", "Mano"],
    correctIndex: 1,
  },
  {
    id: 44,
    category: "Reglas",
    difficulty: "medium",
    question:
      "¿Cuántas sustituciones se permiten por equipo en un Mundial actual?",
    options: ["3", "4", "5", "6"],
    correctIndex: 2,
  },
  {
    id: 45,
    category: "Reglas",
    difficulty: "medium",
    question: "¿Qué significa recibir una tarjeta amarilla?",
    options: ["Expulsión", "Amonestación", "Gol anulado", "Penal"],
    correctIndex: 1,
  },
  {
    id: 46,
    category: "Reglas",
    difficulty: "hard",
    question: "¿Cuántos minutos dura cada tiempo de la prórroga?",
    options: ["10", "15", "20", "30"],
    correctIndex: 1,
  },
  {
    id: 47,
    category: "Reglas",
    difficulty: "hard",
    question:
      "En eliminatorias, si hay empate tras la prórroga, ¿cómo se define el ganador?",
    options: [
      "Se repite el partido",
      "Tanda de penales",
      "Gana el local",
      "Por sorteo",
    ],
    correctIndex: 1,
  },

  // ========================== MUNDIAL 2026 ==========================
  {
    id: 48,
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
    id: 49,
    category: "Mundial 2026",
    difficulty: "medium",
    question: "¿Cuántas selecciones participarán en el Mundial 2026?",
    options: ["32", "40", "48", "64"],
    correctIndex: 2,
  },
  {
    id: 50,
    category: "Mundial 2026",
    difficulty: "medium",
    question: "¿Cuántas ciudades de México serán sede en el Mundial 2026?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },
  {
    id: 51,
    category: "Mundial 2026",
    difficulty: "medium",
    question: "¿Por cuántos países está organizado el Mundial 2026?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },
  {
    id: 52,
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
    id: 53,
    category: "Mundial 2026",
    difficulty: "hard",
    question: "¿Cuántas veces fue sede México de un Mundial antes de 2026?",
    options: ["Ninguna", "1 vez", "2 veces", "3 veces"],
    correctIndex: 2,
  },
  {
    id: 54,
    category: "Mundial 2026",
    difficulty: "hard",
    question: "¿Qué dos ciudades de Canadá serán sede en 2026?",
    options: [
      "Toronto y Vancouver",
      "Montreal y Ottawa",
      "Toronto y Calgary",
      "Vancouver y Edmonton",
    ],
    correctIndex: 0,
  },
  {
    id: 55,
    category: "Mundial 2026",
    difficulty: "expert",
    question: "¿Cuántos estadios sede tendrá el Mundial 2026?",
    options: ["12", "14", "16", "20"],
    correctIndex: 2,
  },
  {
    id: 56,
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
    id: 57,
    category: "Mundial 2026",
    difficulty: "expert",
    question:
      "¿Cuántos partidos en total está previsto que tenga el Mundial 2026?",
    options: ["64", "80", "104", "128"],
    correctIndex: 2,
  },
  {
    id: 58,
    category: "Mundial 2026",
    difficulty: "expert",
    question: "¿Cuántas ciudades de Estados Unidos serán sede en 2026?",
    options: ["8", "9", "11", "14"],
    correctIndex: 2,
  },

  // ====================== EXTRAS (variedad) =========================
  {
    id: 59,
    category: "Historia",
    difficulty: "expert",
    question: "¿Qué país fue sede del Mundial de 1986?",
    options: ["Colombia", "México", "España", "Argentina"],
    correctIndex: 1,
  },
  {
    id: 60,
    category: "Selecciones",
    difficulty: "hard",
    question: "¿Qué selección ganó el Mundial de 2010?",
    options: ["Países Bajos", "España", "Alemania", "Uruguay"],
    correctIndex: 1,
  },
  {
    id: 61,
    category: "Jugadores",
    difficulty: "hard",
    question: "¿Quién ganó el Balón de Oro del Mundial 2014?",
    options: [
      "Thomas Müller",
      "James Rodríguez",
      "Lionel Messi",
      "Arjen Robben",
    ],
    correctIndex: 2,
  },
  {
    id: 62,
    category: "Reglas",
    difficulty: "easy",
    question: "¿Cómo se llama anotar dentro de la portería rival?",
    options: ["Saque", "Gol", "Córner", "Falta"],
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

// Devuelve las preguntas para una partida según dificultad y categoría.
// - difficultyKey: "easy" | "medium" | "hard" | "expert" | "mixed".
// - category: clave de categoría exacta o "all" para todas.
// Si el filtro combinado deja muy pocas preguntas, hace fallback al filtro de
// categoría para que la partida nunca quede vacía. Resultado mezclado y limitado.
export function getQuizQuestions(difficultyKey, category = "all", limit = 10) {
  const byCategory =
    !category || category === "all"
      ? questions
      : questions.filter((q) => q.category === category);

  let pool =
    difficultyKey === "mixed"
      ? byCategory
      : byCategory.filter((q) => q.difficulty === difficultyKey);

  // Fallback: si la combinación categoría + dificultad es muy escasa,
  // usamos todas las preguntas de la categoría.
  if (pool.length < 4) {
    pool = byCategory;
  }

  return shuffle(pool).slice(0, limit);
}

export default questions;
