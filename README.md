# anngamball 🎮

Monorepo con dos aplicaciones web hechas en **React + Vite**:

| App | Carpeta | Descripción |
|-----|---------|-------------|
| 🧠 **Trivia Challenge** | [`trivia-app/`](./trivia-app) | Juego de preguntas y respuestas con temporizador y niveles de dificultad. |
| 🦉 **LingoOwl** | [`english-app/`](./english-app) | App para aprender inglés al estilo Duolingo, con gamificación. |

---

## 🧠 Trivia Challenge

Un quiz de cultura general con feedback inmediato.

**Características:**
- **40 preguntas** repartidas en categorías (Geografía, Ciencia, Historia, Arte, etc.).
- **5 niveles de dificultad:** 🟢 Fácil, 🟡 Medio, 🟠 Difícil, 🔴 Experto y 🎲 Mixto.
- **Temporizador por pregunta** (el tiempo depende del nivel); si se agota, la pregunta cuenta como fallada.
- Preguntas **mezcladas aleatoriamente** en cada partida.
- Barra de progreso, puntuación con círculo visual y mensajes según el desempeño.

**Stack:** React 18, Vite, CSS puro.

---

## 🦉 LingoOwl (app de inglés)

Aprende inglés con mecánicas de gamificación inspiradas en Duolingo.

**Características:**
- **6 unidades temáticas:** Saludos, Números, Colores, Familia, Comida y Verbos.
- **5 tipos de ejercicio:** traducción, escuchar (con voz del navegador), completar la oración, ordenar palabras y emparejar.
- **Gamificación:** vidas ❤️, experiencia ⚡ (XP), racha diaria 🔥 y niveles (Principiante → Intermedio → Avanzado).
- **Retroalimentación inmediata:** confeti al acertar, vibración al fallar y mensajes motivacionales.
- **Efectos de sonido** sintetizados (Web Audio API) y **modo oscuro** 🌙, ambos activables y persistentes.
- Mapa de lecciones con nodos bloqueados/desbloqueados, mascota búho animada y tabla de clasificación.
- El progreso y las preferencias se guardan en `localStorage`.

**Stack:** React 18, Vite, Tailwind CSS (vía CDN).

---

## 🚀 Cómo ejecutar

Cada app es independiente. Necesitas **Node.js 18+**.

```bash
# Clonar el repositorio
git clone https://github.com/anngamball-code/anngamball.git
cd anngamball

# --- Trivia Challenge ---
cd trivia-app
npm install
npm run dev      # abre http://localhost:5173

# --- LingoOwl (en otra terminal) ---
cd ../english-app
npm install
npm run dev      # abre http://localhost:5173
```

Para generar la versión de producción de cualquiera de ellas:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # sirve la build localmente
```

---

## 📁 Estructura del repositorio

```
anngamball/
├── README.md
├── trivia-app/      # Quiz con temporizador y dificultades
│   └── src/
│       ├── components/   # StartScreen, Question, Timer, ProgressBar, Results
│       └── data/         # questions.js, difficulties.js
└── english-app/     # LingoOwl
    └── src/
        ├── EnglishApp.jsx  # datos + lógica + todas las pantallas
        └── index.css       # animaciones y modo oscuro
```
