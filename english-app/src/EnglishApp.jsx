import { useState, useEffect, useMemo, useCallback } from "react";

/* ============================================================================
 * LingoOwl — App de aprendizaje de inglés estilo Duolingo
 * Todo el contenido y la lógica viven en este archivo.
 * Componente principal exportado por defecto: EnglishApp
 * ========================================================================== */

/* ----------------------------- DATOS ------------------------------------- */

// Unidades temáticas. Cada ejercicio tiene un "type":
//  - "choice"  : traducción con opción múltiple
//  - "listen"  : escuchar (Web Speech API) y elegir la traducción
//  - "fill"    : completar la oración (hueco con opciones)
//  - "order"   : ordenar palabras para formar una frase
//  - "match"   : emparejar inglés ↔ español
const UNITS = [
  {
    id: "greetings",
    title: "Saludos",
    icon: "👋",
    color: "#58CC02",
    colorDark: "#46A302",
    exercises: [
      {
        type: "choice",
        prompt: "¿Cómo se dice «Hola» en inglés?",
        options: ["Hello", "Goodbye", "Please", "Sorry"],
        answer: "Hello",
      },
      {
        type: "choice",
        prompt: "¿Cómo se dice «Gracias»?",
        options: ["Sorry", "Please", "Thank you", "Yes"],
        answer: "Thank you",
      },
      {
        type: "listen",
        prompt: "Escucha y elige la traducción correcta",
        audioText: "Good morning",
        options: ["Buenas noches", "Buenos días", "Buenas tardes", "Adiós"],
        answer: "Buenos días",
      },
      {
        type: "fill",
        prompt: "Completa la oración",
        before: "I",
        after: "a student.",
        options: ["am", "is", "are", "be"],
        answer: "am",
        translation: "Yo soy un estudiante.",
      },
      {
        type: "order",
        prompt: "Ordena las palabras para formar la frase",
        words: ["Nice", "to", "meet", "you"],
        translation: "Encantado de conocerte",
      },
      {
        type: "match",
        prompt: "Empareja cada palabra con su traducción",
        pairs: [
          { en: "Hello", es: "Hola" },
          { en: "Goodbye", es: "Adiós" },
          { en: "Please", es: "Por favor" },
          { en: "Sorry", es: "Perdón" },
        ],
      },
      {
        type: "choice",
        prompt: "¿Cómo se dice «Adiós»?",
        options: ["Hello", "Goodbye", "Thanks", "Good"],
        answer: "Goodbye",
      },
    ],
  },
  {
    id: "numbers",
    title: "Números",
    icon: "🔢",
    color: "#1CB0F6",
    colorDark: "#1899D6",
    exercises: [
      {
        type: "choice",
        prompt: "¿Cómo se dice «tres»?",
        options: ["one", "two", "three", "four"],
        answer: "three",
      },
      {
        type: "choice",
        prompt: "¿Cómo se dice «ocho»?",
        options: ["six", "seven", "eight", "nine"],
        answer: "eight",
      },
      {
        type: "listen",
        prompt: "Escucha y elige la traducción correcta",
        audioText: "five",
        options: ["cuatro", "cinco", "seis", "siete"],
        answer: "cinco",
      },
      {
        type: "fill",
        prompt: "Completa la oración",
        before: "I have",
        after: "apples.",
        options: ["two", "three", "four", "five"],
        answer: "three",
        translation: "Tengo tres manzanas.",
      },
      {
        type: "order",
        prompt: "Ordena las palabras para formar la frase",
        words: ["I", "am", "ten", "years", "old"],
        translation: "Tengo diez años",
      },
      {
        type: "match",
        prompt: "Empareja cada número con su traducción",
        pairs: [
          { en: "one", es: "uno" },
          { en: "two", es: "dos" },
          { en: "three", es: "tres" },
          { en: "four", es: "cuatro" },
        ],
      },
      {
        type: "choice",
        prompt: "¿Cómo se dice «diez»?",
        options: ["nine", "ten", "eleven", "twelve"],
        answer: "ten",
      },
    ],
  },
  {
    id: "colors",
    title: "Colores",
    icon: "🎨",
    color: "#FFC800",
    colorDark: "#E0AC00",
    exercises: [
      {
        type: "choice",
        prompt: "¿Cómo se dice «rojo»?",
        options: ["blue", "red", "green", "black"],
        answer: "red",
      },
      {
        type: "choice",
        prompt: "¿Cómo se dice «azul»?",
        options: ["yellow", "blue", "white", "green"],
        answer: "blue",
      },
      {
        type: "listen",
        prompt: "Escucha y elige la traducción correcta",
        audioText: "green",
        options: ["rojo", "verde", "azul", "amarillo"],
        answer: "verde",
      },
      {
        type: "fill",
        prompt: "Completa la oración",
        before: "The sky is",
        after: "today.",
        options: ["green", "blue", "red", "yellow"],
        answer: "blue",
        translation: "El cielo está azul hoy.",
      },
      {
        type: "order",
        prompt: "Ordena las palabras para formar la frase",
        words: ["The", "apple", "is", "red"],
        translation: "La manzana es roja",
      },
      {
        type: "match",
        prompt: "Empareja cada color con su traducción",
        pairs: [
          { en: "red", es: "rojo" },
          { en: "blue", es: "azul" },
          { en: "green", es: "verde" },
          { en: "yellow", es: "amarillo" },
        ],
      },
      {
        type: "choice",
        prompt: "¿Cómo se dice «negro»?",
        options: ["white", "black", "brown", "gray"],
        answer: "black",
      },
    ],
  },
];

// Usuarios ficticios para la tabla de clasificación.
const LEADERBOARD = [
  { name: "Sofía", xp: 320, avatar: "🦊" },
  { name: "Liam", xp: 250, avatar: "🐼" },
  { name: "Mia", xp: 180, avatar: "🐯" },
  { name: "Noah", xp: 120, avatar: "🐨" },
  { name: "Emma", xp: 70, avatar: "🐰" },
];

// Mensajes motivacionales aleatorios al acertar.
const MOTIVATION = [
  "¡Excelente! 🎉",
  "¡Lo estás haciendo genial! 💪",
  "¡Perfecto! ⭐",
  "¡Sigue así! 🚀",
  "¡Increíble! 🤩",
  "¡Muy bien! 👏",
];

const STORAGE_KEY = "lingoowl:v1";

/* --------------------------- UTILIDADES ---------------------------------- */

// Mezcla un array (Fisher-Yates) devolviendo una copia.
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function dateKey(d) {
  return d.toISOString().slice(0, 10);
}

function getLevel(xp) {
  if (xp >= 300) return { name: "Avanzado", min: 300, max: null };
  if (xp >= 120) return { name: "Intermedio", min: 120, max: 300 };
  return { name: "Principiante", min: 0, max: 120 };
}

// Reproduce texto en inglés con la API del navegador (si está disponible).
function speak(text) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  } catch {
    /* Silencioso si el navegador no soporta síntesis de voz. */
  }
}

function vibrate(ms) {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(ms);
  }
}

/* ------------------------ COMPONENTES VISUALES --------------------------- */

// Mascota: un búho SVG que cambia de expresión según el estado.
function OwlMascot({ mood = "idle", size = 96 }) {
  const pupilY = mood === "happy" ? -3 : mood === "sad" ? 3 : 0;
  const green = "#58CC02";
  const greenDark = "#46A302";
  const belly = "#B8F06B";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className="animate-bob"
      aria-hidden="true"
    >
      {/* Orejas / plumas */}
      <path d="M28 30 L40 10 L52 30 Z" fill={greenDark} />
      <path d="M92 30 L80 10 L68 30 Z" fill={greenDark} />
      {/* Cuerpo */}
      <ellipse cx="60" cy="66" rx="44" ry="46" fill={green} />
      <ellipse cx="60" cy="78" rx="29" ry="30" fill={belly} />
      {/* Ojos */}
      <circle cx="45" cy="54" r="19" fill="#fff" />
      <circle cx="75" cy="54" r="19" fill="#fff" />
      <circle
        cx="45"
        cy="54"
        r="19"
        fill="none"
        stroke={greenDark}
        strokeWidth="3"
      />
      <circle
        cx="75"
        cy="54"
        r="19"
        fill="none"
        stroke={greenDark}
        strokeWidth="3"
      />
      {mood === "happy" ? (
        <>
          {/* Ojos felices (arcos) */}
          <path
            d="M36 56 q9 -12 18 0"
            fill="none"
            stroke="#3b3b3b"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M66 56 q9 -12 18 0"
            fill="none"
            stroke="#3b3b3b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx="45" cy={54 + pupilY} r="8" fill="#3b3b3b" />
          <circle cx="75" cy={54 + pupilY} r="8" fill="#3b3b3b" />
          <circle cx="48" cy={51 + pupilY} r="2.5" fill="#fff" />
          <circle cx="78" cy={51 + pupilY} r="2.5" fill="#fff" />
        </>
      )}
      {/* Pico */}
      <path d="M53 64 L67 64 L60 75 Z" fill="#FF9600" />
      {/* Patas */}
      <path
        d="M50 110 l-5 7 M52 110 l0 8 M54 110 l5 7"
        stroke="#FF9600"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M66 110 l-5 7 M68 110 l0 8 M70 110 l5 7"
        stroke="#FF9600"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Confeti que cae al acertar / completar.
function Confetti({ seed }) {
  const pieces = useMemo(() => {
    const emojis = ["🎉", "⭐", "✨", "🎊", "💛", "💚", "💙", "🌟"];
    return Array.from({ length: 28 }).map((_, i) => ({
      id: `${seed}-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      dur: 1.4 + Math.random() * 1.6,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      size: 14 + Math.random() * 16,
    }));
  }, [seed]);

  return (
    <>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
}

// Botón grande con efecto 3D (sombra inferior).
function PushButton({ color, colorDark, children, className = "", ...props }) {
  return (
    <button
      className={`btn-3d w-full text-white text-lg py-4 px-6 ${className}`}
      style={{ background: color, boxShadow: `0 4px 0 ${colorDark}` }}
      {...props}
    >
      {children}
    </button>
  );
}

// Indicador de corazones (vidas).
function Hearts({ count, breaking }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} vidas`}>
      <span
        className={`text-xl ${breaking ? "animate-heart-break" : ""}`}
        style={{ filter: count <= 0 ? "grayscale(1)" : "none" }}
      >
        ❤️
      </span>
      <span className="font-extrabold text-duo-red">{count}</span>
    </div>
  );
}

/* ---------------------- EJERCICIO: ORDENAR ------------------------------- */

function OrderExercise({
  bank,
  answer,
  locked,
  onPickFromBank,
  onPickFromAnswer,
}) {
  return (
    <div className="w-full">
      {/* Zona de respuesta */}
      <div className="min-h-[64px] border-b-2 border-gray-200 flex flex-wrap gap-2 pb-3 mb-5">
        {answer.map((w, i) => (
          <button
            key={`a-${i}-${w}`}
            disabled={locked}
            onClick={() => onPickFromAnswer(i)}
            className="btn-3d bg-white border-2 border-gray-200 text-gray-700 px-3 py-2 text-base"
            style={{ boxShadow: "0 2px 0 #e5e7eb" }}
          >
            {w}
          </button>
        ))}
      </div>
      {/* Banco de palabras */}
      <div className="flex flex-wrap gap-2 justify-center">
        {bank.map((w, i) =>
          w === null ? (
            <span
              key={`b-${i}`}
              className="px-3 py-2 text-base rounded-2xl bg-gray-100 border-2 border-gray-100 opacity-40 select-none"
            >
              &nbsp;&nbsp;
            </span>
          ) : (
            <button
              key={`b-${i}-${w}`}
              disabled={locked}
              onClick={() => onPickFromBank(i)}
              className="btn-3d bg-white border-2 border-gray-200 text-gray-700 px-3 py-2 text-base"
              style={{ boxShadow: "0 2px 0 #e5e7eb" }}
            >
              {w}
            </button>
          ),
        )}
      </div>
    </div>
  );
}

/* ---------------------- EJERCICIO: EMPAREJAR ----------------------------- */

function MatchExercise({ pairs, locked, onComplete }) {
  const [leftSel, setLeftSel] = useState(null);
  const [rightSel, setRightSel] = useState(null);
  const [matched, setMatched] = useState([]); // claves "en" emparejadas
  const [wrong, setWrong] = useState(null); // {en, es} en error momentáneo

  // Columnas mezcladas una sola vez por ejercicio (el componente se remonta
  // con una "key" distinta en cada ejercicio).
  const leftItems = useMemo(() => pairs.map((p) => p.en), [pairs]);
  const rightItems = useMemo(() => shuffle(pairs.map((p) => p.es)), [pairs]);

  useEffect(() => {
    if (leftSel !== null && rightSel !== null) {
      const pair = pairs.find((p) => p.en === leftSel);
      if (pair && pair.es === rightSel) {
        const nextMatched = [...matched, leftSel];
        setMatched(nextMatched);
        setLeftSel(null);
        setRightSel(null);
        if (nextMatched.length === pairs.length) {
          onComplete();
        }
      } else {
        setWrong({ en: leftSel, es: rightSel });
        vibrate(80);
        const t = setTimeout(() => {
          setWrong(null);
          setLeftSel(null);
          setRightSel(null);
        }, 500);
        return () => clearTimeout(t);
      }
    }
  }, [leftSel, rightSel, pairs, matched, onComplete]);

  const cellClass = (active, isMatched, isWrong) => {
    let base =
      "btn-3d w-full py-3 px-2 text-base border-2 mb-2 transition-colors ";
    if (isMatched)
      return base + "bg-green-100 border-duo-green text-duo-green opacity-60";
    if (isWrong)
      return base + "bg-red-100 border-duo-red text-duo-red animate-shake";
    if (active) return base + "bg-blue-50 border-duo-blue text-duo-blue";
    return base + "bg-white border-gray-200 text-gray-700";
  };

  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <div>
        {leftItems.map((en) => {
          const isMatched = matched.includes(en);
          return (
            <button
              key={en}
              disabled={locked || isMatched}
              onClick={() => setLeftSel(en)}
              className={cellClass(leftSel === en, isMatched, wrong?.en === en)}
              style={{ boxShadow: "0 2px 0 #e5e7eb" }}
            >
              {en}
            </button>
          );
        })}
      </div>
      <div>
        {rightItems.map((es) => {
          const isMatched = matched.some(
            (en) => pairs.find((p) => p.en === en)?.es === es,
          );
          return (
            <button
              key={es}
              disabled={locked || isMatched}
              onClick={() => setRightSel(es)}
              className={cellClass(
                rightSel === es,
                isMatched,
                wrong?.es === es,
              )}
              style={{ boxShadow: "0 2px 0 #e5e7eb" }}
            >
              {es}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------- PANTALLA: HOME -------------------------------- */

function Home({
  xp,
  hearts,
  streak,
  completed,
  onStartUnit,
  onShowLeaderboard,
}) {
  const level = getLevel(xp);
  const levelPct =
    level.max === null
      ? 100
      : Math.round(((xp - level.min) / (level.max - level.min)) * 100);

  const isUnlocked = (index) =>
    index === 0 || Boolean(completed[UNITS[index - 1].id]);

  return (
    <div className="animate-fade">
      {/* Cabecera con avatar y estadísticas */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">
        <div className="flex items-center gap-3">
          <div className="text-4xl bg-duo-green/10 rounded-2xl w-16 h-16 flex items-center justify-center">
            🦉
          </div>
          <div className="flex-1">
            <div className="font-display text-xl text-gray-800">¡Hola!</div>
            <div className="text-sm font-bold text-duo-green">{level.name}</div>
          </div>
          <div className="flex flex-col items-end gap-1 text-sm font-bold">
            <span className="text-orange-500">🔥 {streak}</span>
            <span className="text-duo-red">❤️ {hearts}</span>
          </div>
        </div>
        {/* Barra de XP */}
        <div className="mt-4">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
            <span>⚡ {xp} XP</span>
            <span>{level.max === null ? "Máx" : `${level.max} XP`}</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-duo-yellow rounded-full transition-all"
              style={{ width: `${levelPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mapa de lecciones */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">
        <h2 className="font-display text-lg text-gray-800 mb-4 text-center">
          Mapa de lecciones
        </h2>
        <div className="flex flex-col items-center gap-3">
          {UNITS.map((unit, index) => {
            const unlocked = isUnlocked(index);
            const stars = completed[unit.id] || 0;
            const offset =
              index % 2 === 0 ? "-translate-x-10" : "translate-x-10";
            return (
              <div
                key={unit.id}
                className={`flex flex-col items-center ${offset}`}
              >
                <button
                  disabled={!unlocked}
                  onClick={() => onStartUnit(index)}
                  className="btn-3d w-20 h-20 rounded-full text-3xl flex items-center justify-center"
                  style={{
                    background: unlocked ? unit.color : "#e5e7eb",
                    boxShadow: `0 5px 0 ${unlocked ? unit.colorDark : "#cbd5e1"}`,
                  }}
                  aria-label={unit.title}
                >
                  {unlocked ? unit.icon : "🔒"}
                </button>
                <span className="mt-1 font-bold text-sm text-gray-700">
                  {unit.title}
                </span>
                {stars > 0 && (
                  <span className="text-xs">
                    {"⭐".repeat(stars)}
                    <span className="opacity-25">{"⭐".repeat(3 - stars)}</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onShowLeaderboard}
        className="btn-3d w-full bg-white text-duo-blue font-extrabold py-3 rounded-2xl border-2 border-gray-200"
        style={{ boxShadow: "0 3px 0 #e5e7eb" }}
      >
        🏆 Ver clasificación
      </button>
    </div>
  );
}

/* --------------------- PANTALLA: CLASIFICACIÓN --------------------------- */

function Leaderboard({ xp, onBack }) {
  const rows = useMemo(() => {
    const all = [
      ...LEADERBOARD,
      { name: "Tú", xp, avatar: "🦉", isPlayer: true },
    ];
    return all.sort((a, b) => b.xp - a.xp);
  }, [xp]);

  const medal = (i) => ["🥇", "🥈", "🥉"][i] || `${i + 1}`;

  return (
    <div className="animate-fade">
      <div className="bg-white rounded-3xl p-5 shadow-sm">
        <h2 className="font-display text-xl text-gray-800 mb-4 text-center">
          🏆 Clasificación
        </h2>
        <div className="flex flex-col gap-2">
          {rows.map((r, i) => (
            <div
              key={r.name}
              className={`flex items-center gap-3 p-3 rounded-2xl ${
                r.isPlayer
                  ? "bg-duo-blue/10 border-2 border-duo-blue"
                  : "bg-gray-50"
              }`}
            >
              <span className="w-7 text-center font-extrabold text-gray-500">
                {medal(i)}
              </span>
              <span className="text-2xl">{r.avatar}</span>
              <span className="flex-1 font-bold text-gray-800">{r.name}</span>
              <span className="font-extrabold text-duo-yellow">{r.xp} XP</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={onBack}
        className="btn-3d w-full mt-5 bg-white text-gray-600 font-extrabold py-3 rounded-2xl border-2 border-gray-200"
        style={{ boxShadow: "0 3px 0 #e5e7eb" }}
      >
        ← Volver
      </button>
    </div>
  );
}

/* ----------------- PANTALLA: LECCIÓN COMPLETADA -------------------------- */

function LessonComplete({ stars, gainedXp, onContinue }) {
  return (
    <div className="animate-pop text-center bg-white rounded-3xl p-8 shadow-sm">
      <OwlMascot mood="happy" size={110} />
      <h2 className="font-display text-2xl text-duo-green mt-2">
        ¡Lección completada!
      </h2>
      <div className="text-4xl my-4">
        {[0, 1, 2].map((i) => (
          <span key={i} className={i < stars ? "" : "opacity-20"}>
            ⭐
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-3 mb-6">
        <div className="bg-duo-yellow/15 rounded-2xl px-5 py-3">
          <div className="text-xs font-bold text-gray-500">XP GANADA</div>
          <div className="text-2xl font-extrabold text-duo-yellow">
            +{gainedXp}
          </div>
        </div>
      </div>
      <PushButton color="#58CC02" colorDark="#46A302" onClick={onContinue}>
        CONTINUAR
      </PushButton>
    </div>
  );
}

/* -------------------- PANTALLA: SIN VIDAS -------------------------------- */

function NoHearts({ onWait, onWatch, watching }) {
  return (
    <div className="animate-pop text-center bg-white rounded-3xl p-8 shadow-sm">
      <OwlMascot mood="sad" size={110} />
      <h2 className="font-display text-2xl text-duo-red mt-2">
        ¡Te quedaste sin vidas!
      </h2>
      <p className="text-gray-500 font-semibold mt-2 mb-6">
        Necesitas vidas para seguir practicando. Espera un poco o mira un video.
      </p>

      {watching ? (
        <div className="py-6">
          <div className="text-4xl animate-bob">📺</div>
          <p className="font-bold text-gray-600 mt-3">
            Reproduciendo anuncio (simulado)…
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <PushButton color="#1CB0F6" colorDark="#1899D6" onClick={onWatch}>
            ▶️ Ver video y recuperar vidas
          </PushButton>
          <button
            onClick={onWait}
            className="btn-3d w-full bg-white text-gray-600 font-extrabold py-3 rounded-2xl border-2 border-gray-200"
            style={{ boxShadow: "0 3px 0 #e5e7eb" }}
          >
            ⏳ Esperar (simulado)
          </button>
        </div>
      )}
    </div>
  );
}

/* ====================== COMPONENTE PRINCIPAL ============================= */

export default function EnglishApp() {
  // --- Estado persistente ---
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState({ count: 0, last: null });
  const [completed, setCompleted] = useState({}); // { unitId: stars }
  const [loaded, setLoaded] = useState(false);

  // --- Estado de sesión ---
  const [hearts, setHearts] = useState(3);
  const [screen, setScreen] = useState("home"); // home | lesson | done | noHearts | leaderboard
  const [unitIndex, setUnitIndex] = useState(0);
  const [exIndex, setExIndex] = useState(0);
  const [lessonMistakes, setLessonMistakes] = useState(0);
  const [lessonGainedXp, setLessonGainedXp] = useState(0);
  const [lessonStars, setLessonStars] = useState(3);

  // --- Estado del ejercicio actual ---
  const [selected, setSelected] = useState(null);
  const [orderAnswer, setOrderAnswer] = useState([]);
  const [orderBank, setOrderBank] = useState([]);
  const [phase, setPhase] = useState("answering"); // answering | done
  const [isCorrect, setIsCorrect] = useState(false);

  // --- Estado de efectos visuales ---
  const [message, setMessage] = useState("");
  const [confettiSeed, setConfettiSeed] = useState(0);
  const [heartBreak, setHeartBreak] = useState(false);
  const [watchingAd, setWatchingAd] = useState(false);

  const unit = UNITS[unitIndex];
  const exercise = unit?.exercises[exIndex];
  const totalEx = unit?.exercises.length || 0;
  const isLastEx = exIndex === totalEx - 1;

  // Cargar progreso de localStorage al iniciar.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setXp(data.xp || 0);
        setStreak(data.streak || { count: 0, last: null });
        setCompleted(data.completed || {});
      }
    } catch {
      /* Ignorar datos corruptos. */
    }
    setLoaded(true);
  }, []);

  // Guardar progreso cuando cambie.
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ xp, streak, completed }),
      );
    } catch {
      /* Almacenamiento no disponible. */
    }
  }, [xp, streak, completed, loaded]);

  // Preparar el estado del ejercicio cuando cambia (sobre todo "order").
  useEffect(() => {
    if (screen !== "lesson" || !exercise) return;
    setSelected(null);
    setPhase("answering");
    setIsCorrect(false);
    if (exercise.type === "order") {
      setOrderAnswer([]);
      setOrderBank(shuffle(exercise.words));
    }
  }, [screen, exIndex, unitIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Acciones de navegación ---
  const startUnit = useCallback((index) => {
    setUnitIndex(index);
    setExIndex(0);
    setLessonMistakes(0);
    setLessonGainedXp(0);
    setScreen("lesson");
  }, []);

  const updateStreak = useCallback(() => {
    setStreak((prev) => {
      const today = dateKey(new Date());
      if (prev.last === today) return prev;
      const yesterday = dateKey(new Date(Date.now() - 86400000));
      const count = prev.last === yesterday ? prev.count + 1 : 1;
      return { count, last: today };
    });
  }, []);

  const finishLesson = useCallback(() => {
    const stars = lessonMistakes === 0 ? 3 : lessonMistakes === 1 ? 2 : 1;
    const bonus = 15;
    setLessonStars(stars);
    setXp((x) => x + bonus);
    setLessonGainedXp((g) => g + bonus);
    setCompleted((prev) => ({
      ...prev,
      [unit.id]: Math.max(prev[unit.id] || 0, stars),
    }));
    updateStreak();
    setConfettiSeed((s) => s + 1);
    setScreen("done");
  }, [lessonMistakes, unit, updateStreak]);

  // --- Lógica de "order" ---
  const pickFromBank = (i) => {
    const word = orderBank[i];
    if (word === null) return;
    setOrderAnswer((a) => [...a, word]);
    setOrderBank((b) => b.map((w, idx) => (idx === i ? null : w)));
  };

  const pickFromAnswer = (i) => {
    const word = orderAnswer[i];
    setOrderAnswer((a) => a.filter((_, idx) => idx !== i));
    // Devuelve la palabra al primer hueco libre del banco.
    setOrderBank((b) => {
      const copy = [...b];
      const slot = copy.indexOf(null);
      if (slot !== -1) copy[slot] = word;
      else copy.push(word);
      return copy;
    });
  };

  // --- Evaluación de respuestas ---
  const registerCorrect = useCallback(() => {
    setIsCorrect(true);
    setPhase("done");
    setXp((x) => x + 10);
    setLessonGainedXp((g) => g + 10);
    setMessage(MOTIVATION[Math.floor(Math.random() * MOTIVATION.length)]);
    setConfettiSeed((s) => s + 1);
  }, []);

  const registerWrong = useCallback(() => {
    setIsCorrect(false);
    setPhase("done");
    setLessonMistakes((m) => m + 1);
    setHearts((h) => Math.max(0, h - 1));
    setHeartBreak(true);
    vibrate([0, 60, 40, 60]);
    setTimeout(() => setHeartBreak(false), 450);
  }, []);

  const handleCheck = () => {
    if (exercise.type === "order") {
      const correct = orderAnswer.join(" ") === exercise.words.join(" ");
      correct ? registerCorrect() : registerWrong();
    } else {
      // choice / listen / fill
      const correct = selected === exercise.answer;
      correct ? registerCorrect() : registerWrong();
    }
  };

  // El ejercicio de emparejar se resuelve solo al completar todas las parejas.
  const handleMatchComplete = useCallback(() => {
    registerCorrect();
  }, [registerCorrect]);

  const handleContinue = () => {
    if (hearts <= 0) {
      setScreen("noHearts");
      return;
    }
    if (isLastEx) {
      finishLesson();
      return;
    }
    setExIndex((i) => i + 1);
  };

  // --- Sin vidas ---
  const refillHearts = useCallback(() => {
    setHearts(3);
    setWatchingAd(false);
    setScreen("home");
  }, []);

  const watchAd = useCallback(() => {
    setWatchingAd(true);
  }, []);

  useEffect(() => {
    if (!watchingAd) return;
    const t = setTimeout(refillHearts, 2500);
    return () => clearTimeout(t);
  }, [watchingAd, refillHearts]);

  // --- Determina si se puede comprobar ---
  const canCheck =
    exercise &&
    (exercise.type === "order"
      ? orderBank.every((w) => w === null) && orderAnswer.length > 0
      : selected !== null);

  const correctText =
    exercise?.type === "order" ? exercise.words.join(" ") : exercise?.answer;

  /* ----------------------------- RENDER --------------------------------- */

  const showConfetti =
    (screen === "lesson" && phase === "done" && isCorrect) || screen === "done";

  return (
    <div className="min-h-full w-full flex justify-center font-sans">
      {showConfetti && <Confetti seed={confettiSeed} />}

      <div className="w-full max-w-[480px] min-h-full px-4 py-5 flex flex-col">
        {/* ---------------- HOME ---------------- */}
        {screen === "home" && (
          <Home
            xp={xp}
            hearts={hearts}
            streak={streak.count}
            completed={completed}
            onStartUnit={startUnit}
            onShowLeaderboard={() => setScreen("leaderboard")}
          />
        )}

        {/* ------------- LEADERBOARD ------------ */}
        {screen === "leaderboard" && (
          <Leaderboard xp={xp} onBack={() => setScreen("home")} />
        )}

        {/* --------------- LESSON --------------- */}
        {screen === "lesson" && exercise && (
          <div className="flex flex-col flex-1">
            {/* Barra superior: salir, progreso, vidas */}
            <div className="flex items-center gap-3 mb-5">
              <button
                onClick={() => setScreen("home")}
                className="text-2xl text-gray-400 font-bold leading-none"
                aria-label="Salir de la lección"
              >
                ✕
              </button>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-duo-green rounded-full transition-all"
                  style={{
                    width: `${((exIndex + (phase === "done" ? 1 : 0)) / totalEx) * 100}%`,
                  }}
                />
              </div>
              <Hearts count={hearts} breaking={heartBreak} />
            </div>

            <div className="text-xs font-bold text-gray-400 mb-1">
              Ejercicio {exIndex + 1} de {totalEx}
            </div>
            <h2 className="font-display text-xl text-gray-800 mb-5">
              {exercise.prompt}
            </h2>

            {/* Cuerpo del ejercicio */}
            <div className="flex-1">
              {/* LISTEN: botón de audio */}
              {exercise.type === "listen" && (
                <button
                  onClick={() => speak(exercise.audioText)}
                  className="btn-3d bg-duo-blue text-white px-6 py-4 rounded-2xl mb-5 flex items-center gap-3 mx-auto"
                  style={{ boxShadow: "0 4px 0 #1899D6" }}
                >
                  <span className="text-2xl">🔊</span>
                  <span className="font-extrabold">Escuchar</span>
                </button>
              )}

              {/* FILL: oración con hueco */}
              {exercise.type === "fill" && (
                <div className="text-center text-lg font-bold text-gray-700 mb-5 bg-gray-50 rounded-2xl py-4 px-3">
                  {exercise.before}{" "}
                  <span className="inline-block min-w-[60px] border-b-4 border-dashed border-duo-blue mx-1 align-middle text-duo-blue">
                    {selected || "\u00A0"}
                  </span>{" "}
                  {exercise.after}
                  <div className="text-xs text-gray-400 mt-2 font-semibold">
                    ({exercise.translation})
                  </div>
                </div>
              )}

              {/* CHOICE / LISTEN / FILL: opciones */}
              {(exercise.type === "choice" ||
                exercise.type === "listen" ||
                exercise.type === "fill") && (
                <div className="flex flex-col gap-3">
                  {exercise.options.map((opt) => {
                    const chosen = selected === opt;
                    let cls =
                      "btn-3d w-full py-4 px-5 text-left text-lg border-2 ";
                    if (phase === "done" && opt === exercise.answer) {
                      cls += "bg-green-100 border-duo-green text-duo-green";
                    } else if (phase === "done" && chosen) {
                      cls += "bg-red-100 border-duo-red text-duo-red";
                    } else if (chosen) {
                      cls += "bg-blue-50 border-duo-blue text-duo-blue";
                    } else {
                      cls += "bg-white border-gray-200 text-gray-700";
                    }
                    return (
                      <button
                        key={opt}
                        disabled={phase === "done"}
                        onClick={() => setSelected(opt)}
                        className={cls}
                        style={{ boxShadow: "0 3px 0 #e5e7eb" }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* ORDER */}
              {exercise.type === "order" && (
                <OrderExercise
                  bank={orderBank}
                  answer={orderAnswer}
                  locked={phase === "done"}
                  onPickFromBank={pickFromBank}
                  onPickFromAnswer={pickFromAnswer}
                />
              )}

              {/* MATCH */}
              {exercise.type === "match" && (
                <MatchExercise
                  key={`${unit.id}-${exIndex}`}
                  pairs={exercise.pairs}
                  locked={phase === "done"}
                  onComplete={handleMatchComplete}
                />
              )}
            </div>

            {/* Barra inferior: feedback + acción */}
            <div className="mt-5">
              {phase === "done" && (
                <div
                  className={`rounded-2xl p-4 mb-3 animate-fade ${
                    isCorrect
                      ? "bg-green-100 text-duo-green"
                      : "bg-red-100 text-duo-red"
                  }`}
                >
                  {isCorrect ? (
                    <div className="font-extrabold flex items-center gap-2">
                      <span className="text-2xl">✅</span> {message}
                    </div>
                  ) : (
                    <div className="font-bold">
                      <div className="flex items-center gap-2 font-extrabold">
                        <span className="text-2xl">❌</span> Respuesta correcta:
                      </div>
                      <div className="mt-1 ml-9">{correctText}</div>
                    </div>
                  )}
                </div>
              )}

              {/* +XP flotante al acertar */}
              {phase === "done" && isCorrect && (
                <div className="relative h-0">
                  <div className="animate-float-up absolute left-1/2 -translate-x-1/2 -top-2 text-duo-yellow font-extrabold text-lg pointer-events-none">
                    +10 XP ⚡
                  </div>
                </div>
              )}

              {exercise.type !== "match" && phase === "answering" && (
                <PushButton
                  color={canCheck ? "#58CC02" : "#e5e7eb"}
                  colorDark={canCheck ? "#46A302" : "#cbd5e1"}
                  disabled={!canCheck}
                  onClick={handleCheck}
                  className={canCheck ? "" : "!text-gray-400"}
                >
                  COMPROBAR
                </PushButton>
              )}

              {phase === "done" && (
                <PushButton
                  color={isCorrect ? "#58CC02" : "#FF4B4B"}
                  colorDark={isCorrect ? "#46A302" : "#E63F3F"}
                  onClick={handleContinue}
                >
                  {hearts <= 0
                    ? "CONTINUAR"
                    : isLastEx
                      ? "VER RESULTADOS"
                      : "CONTINUAR"}
                </PushButton>
              )}
            </div>
          </div>
        )}

        {/* ------------- LESSON DONE ------------ */}
        {screen === "done" && (
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <LessonComplete
                stars={lessonStars}
                gainedXp={lessonGainedXp}
                onContinue={() => setScreen("home")}
              />
            </div>
          </div>
        )}

        {/* ------------- NO HEARTS -------------- */}
        {screen === "noHearts" && (
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <NoHearts
                watching={watchingAd}
                onWait={refillHearts}
                onWatch={watchAd}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
