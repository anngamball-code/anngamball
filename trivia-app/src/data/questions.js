// Banco de preguntas de trivia.
// Cada pregunta tiene: id, category, difficulty, question, options[], correctIndex.
// - "difficulty" puede ser: "easy" | "medium" | "hard" | "expert".
// - "correctIndex" es la posición (0-based) de la respuesta correcta en "options".

export const questions = [
  // ---------------- FÁCIL ----------------
  {
    id: 1,
    category: "Geografía",
    difficulty: "easy",
    question: "¿De qué color es el cielo despejado durante el día?",
    options: ["Verde", "Azul", "Rojo", "Amarillo"],
    correctIndex: 1,
  },
  {
    id: 2,
    category: "Matemáticas",
    difficulty: "easy",
    question: "¿Cuántos lados tiene un triángulo?",
    options: ["2", "3", "4", "5"],
    correctIndex: 1,
  },
  {
    id: 3,
    category: "Ciencia",
    difficulty: "easy",
    question: '¿Qué planeta es conocido como el "planeta rojo"?',
    options: ["Venus", "Júpiter", "Marte", "Saturno"],
    correctIndex: 2,
  },
  {
    id: 4,
    category: "Naturaleza",
    difficulty: "easy",
    question: "¿Cuál es el animal terrestre más grande del mundo?",
    options: ["Jirafa", "Elefante africano", "Rinoceronte", "Hipopótamo"],
    correctIndex: 1,
  },
  {
    id: 5,
    category: "Geografía",
    difficulty: "easy",
    question: "¿Cuál es el océano más grande de la Tierra?",
    options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    correctIndex: 3,
  },
  {
    id: 6,
    category: "Cultura general",
    difficulty: "easy",
    question: "¿Cuántos días tiene una semana?",
    options: ["5", "6", "7", "8"],
    correctIndex: 2,
  },
  {
    id: 7,
    category: "Naturaleza",
    difficulty: "easy",
    question: "¿Cuántos colores tiene el arcoíris tradicionalmente?",
    options: ["5", "6", "7", "9"],
    correctIndex: 2,
  },
  {
    id: 8,
    category: "Geografía",
    difficulty: "easy",
    question: "¿En qué continente se encuentra Egipto?",
    options: ["Asia", "Europa", "África", "Oceanía"],
    correctIndex: 2,
  },
  {
    id: 9,
    category: "Cultura general",
    difficulty: "easy",
    question: "¿Cuál es el resultado de 5 + 7?",
    options: ["10", "11", "12", "13"],
    correctIndex: 2,
  },
  {
    id: 10,
    category: "Naturaleza",
    difficulty: "easy",
    question: "¿Qué fruta es amarilla y tiene forma alargada y curva?",
    options: ["Manzana", "Plátano", "Pera", "Uva"],
    correctIndex: 1,
  },

  // ---------------- MEDIO ----------------
  {
    id: 11,
    category: "Geografía",
    difficulty: "medium",
    question: "¿Cuál es la capital de Australia?",
    options: ["Sídney", "Melbourne", "Canberra", "Perth"],
    correctIndex: 2,
  },
  {
    id: 12,
    category: "Ciencia",
    difficulty: "medium",
    question: "¿Cuál es el elemento químico más abundante en el universo?",
    options: ["Oxígeno", "Hidrógeno", "Carbono", "Helio"],
    correctIndex: 1,
  },
  {
    id: 13,
    category: "Historia",
    difficulty: "medium",
    question: "¿En qué año llegó el ser humano a la Luna por primera vez?",
    options: ["1965", "1969", "1972", "1959"],
    correctIndex: 1,
  },
  {
    id: 14,
    category: "Arte",
    difficulty: "medium",
    question: '¿Quién pintó "La noche estrellada"?',
    options: [
      "Pablo Picasso",
      "Claude Monet",
      "Vincent van Gogh",
      "Salvador Dalí",
    ],
    correctIndex: 2,
  },
  {
    id: 15,
    category: "Tecnología",
    difficulty: "medium",
    question: '¿Qué significa "HTTP"?',
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Hypertext Terminal Protocol",
      "Home Tool Transfer Protocol",
    ],
    correctIndex: 0,
  },
  {
    id: 16,
    category: "Ciencia",
    difficulty: "medium",
    question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
    options: ["186", "206", "226", "246"],
    correctIndex: 1,
  },
  {
    id: 17,
    category: "Geografía",
    difficulty: "medium",
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    correctIndex: 1,
  },
  {
    id: 18,
    category: "Literatura",
    difficulty: "medium",
    question: '¿Quién escribió "Cien años de soledad"?',
    options: [
      "Mario Vargas Llosa",
      "Julio Cortázar",
      "Gabriel García Márquez",
      "Jorge Luis Borges",
    ],
    correctIndex: 2,
  },
  {
    id: 19,
    category: "Historia",
    difficulty: "medium",
    question: "¿Qué civilización construyó Machu Picchu?",
    options: ["Azteca", "Maya", "Inca", "Olmeca"],
    correctIndex: 2,
  },
  {
    id: 20,
    category: "Ciencia",
    difficulty: "medium",
    question: "¿Qué metal es líquido a temperatura ambiente?",
    options: ["Plomo", "Mercurio", "Aluminio", "Estaño"],
    correctIndex: 1,
  },

  // ---------------- DIFÍCIL ----------------
  {
    id: 21,
    category: "Ciencia",
    difficulty: "hard",
    question: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
    options: ["150.000 km/s", "300.000 km/s", "1.000.000 km/s", "30.000 km/s"],
    correctIndex: 1,
  },
  {
    id: 22,
    category: "Ciencia",
    difficulty: "hard",
    question: "¿Quién formuló la teoría de la relatividad?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Niels Bohr",
    ],
    correctIndex: 1,
  },
  {
    id: 23,
    category: "Anatomía",
    difficulty: "hard",
    question: "¿Cuál es el hueso más largo del cuerpo humano?",
    options: ["Húmero", "Tibia", "Fémur", "Radio"],
    correctIndex: 2,
  },
  {
    id: 24,
    category: "Historia",
    difficulty: "hard",
    question: "¿En qué año cayó el Muro de Berlín?",
    options: ["1985", "1989", "1991", "1993"],
    correctIndex: 1,
  },
  {
    id: 25,
    category: "Literatura",
    difficulty: "hard",
    question: '¿Quién escribió "Don Quijote de la Mancha"?',
    options: [
      "Lope de Vega",
      "Miguel de Cervantes",
      "Francisco de Quevedo",
      "Garcilaso de la Vega",
    ],
    correctIndex: 1,
  },
  {
    id: 26,
    category: "Astronomía",
    difficulty: "hard",
    question: "¿Cuál es la montaña más alta conocida del sistema solar?",
    options: [
      "Everest (Tierra)",
      "Monte Olimpo (Marte)",
      "Maxwell Montes (Venus)",
      "Boösaule Montes (Ío)",
    ],
    correctIndex: 1,
  },
  {
    id: 27,
    category: "Ciencia",
    difficulty: "hard",
    question: "¿Qué científica ganó el Premio Nobel en dos ciencias distintas?",
    options: [
      "Rosalind Franklin",
      "Marie Curie",
      "Ada Lovelace",
      "Lise Meitner",
    ],
    correctIndex: 1,
  },
  {
    id: 28,
    category: "Geografía",
    difficulty: "hard",
    question: "¿Cuál es la capital de Mongolia?",
    options: ["Astaná", "Ulán Bator", "Taskent", "Bishkek"],
    correctIndex: 1,
  },
  {
    id: 29,
    category: "Historia",
    difficulty: "hard",
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    options: ["1912", "1914", "1918", "1939"],
    correctIndex: 1,
  },
  {
    id: 30,
    category: "Química",
    difficulty: "hard",
    question: "¿Cuál es la fórmula química del agua oxigenada (peróxido)?",
    options: ["H₂O", "H₂O₂", "HO₂", "H₃O"],
    correctIndex: 1,
  },

  // ---------------- EXPERTO ----------------
  {
    id: 31,
    category: "Física",
    difficulty: "expert",
    question: "¿Cuál es la partícula portadora de la fuerza electromagnética?",
    options: ["Gluón", "Bosón W", "Fotón", "Gravitón"],
    correctIndex: 2,
  },
  {
    id: 32,
    category: "Matemáticas",
    difficulty: "expert",
    question: "¿Qué matemático demostró los teoremas de incompletitud?",
    options: ["Alan Turing", "Kurt Gödel", "David Hilbert", "Georg Cantor"],
    correctIndex: 1,
  },
  {
    id: 33,
    category: "Química",
    difficulty: "expert",
    question: "¿Qué elemento tiene el número atómico 79?",
    options: ["Plata", "Platino", "Oro", "Mercurio"],
    correctIndex: 2,
  },
  {
    id: 34,
    category: "Historia",
    difficulty: "expert",
    question: '¿En qué año se publicó "El origen de las especies" de Darwin?',
    options: ["1809", "1859", "1872", "1901"],
    correctIndex: 1,
  },
  {
    id: 35,
    category: "Física",
    difficulty: "expert",
    question: "¿Cuál es la unidad de medida de la resistencia eléctrica?",
    options: ["Voltio", "Amperio", "Vatio", "Ohmio"],
    correctIndex: 3,
  },
  {
    id: 36,
    category: "Historia",
    difficulty: "expert",
    question:
      "¿Qué emperador romano legalizó el cristianismo con el Edicto de Milán?",
    options: ["Nerón", "Constantino I", "Augusto", "Diocleciano"],
    correctIndex: 1,
  },
  {
    id: 37,
    category: "Tecnología",
    difficulty: "expert",
    question: "¿Quién creó el lenguaje de programación Python?",
    options: [
      "Dennis Ritchie",
      "Guido van Rossum",
      "James Gosling",
      "Bjarne Stroustrup",
    ],
    correctIndex: 1,
  },
  {
    id: 38,
    category: "Geografía",
    difficulty: "expert",
    question: "¿Cuál es la capital de Kazajistán?",
    options: ["Almatý", "Astaná", "Biskek", "Dusambé"],
    correctIndex: 1,
  },
  {
    id: 39,
    category: "Química",
    difficulty: "expert",
    question: "¿Cuál es el gas noble más ligero?",
    options: ["Neón", "Argón", "Helio", "Kriptón"],
    correctIndex: 2,
  },
  {
    id: 40,
    category: "Historia",
    difficulty: "expert",
    question: "¿En qué año se firmó la Carta Magna en Inglaterra?",
    options: ["1066", "1215", "1492", "1305"],
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
