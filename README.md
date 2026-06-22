# anngamball 🎮

Monorepo con varias aplicaciones web hechas en **React + Vite**:

| App | Carpeta | Descripción |
|-----|---------|-------------|
| 🧠 **Trivia Challenge** | [`trivia-app/`](./trivia-app) | Quiz de cultura general con temporizador y niveles de dificultad. |
| 🦉 **LingoOwl** | [`english-app/`](./english-app) | App para aprender inglés al estilo Duolingo, con gamificación. |
| ⚽ **Trivia del Mundial 2026** | [`mundial-trivia/`](./mundial-trivia) | Quiz temático sobre la Copa del Mundo (EE.UU., México y Canadá). |

---

## 🧠 Trivia Challenge

Quiz de cultura general con feedback inmediato, **40 preguntas**, 5 niveles de dificultad (🟢🟡🟠🔴 + 🎲 Mixto) y **temporizador por pregunta**. Las preguntas se mezclan en cada partida.

**Stack:** React 18, Vite, CSS puro.

---

## 🦉 LingoOwl (app de inglés)

Aprende inglés con mecánicas de gamificación inspiradas en Duolingo:
- **6 unidades:** Saludos, Números, Colores, Familia, Comida y Verbos.
- **5 tipos de ejercicio:** traducción, escuchar, completar, ordenar y emparejar.
- Vidas ❤️, XP ⚡, racha 🔥, niveles, confeti, **sonido** y **modo oscuro** 🌙.
- Progreso y preferencias en `localStorage`.

**Stack:** React 18, Vite, Tailwind CSS (vía CDN).

---

## ⚽ Trivia del Mundial 2026

El mismo motor de quiz, tematizado para la Copa del Mundo 2026:
- **40 preguntas** sobre historia de los mundiales, selecciones, jugadores, reglas y datos de las sedes 2026.
- Categorías: Historia, Selecciones, Jugadores, Reglas y Mundial 2026.
- 5 niveles de dificultad con temporizador, diseño con tema futbolero 🇺🇸🇲🇽🇨🇦.

> ℹ️ Usa únicamente datos públicos e históricos. No incluye marcas, logos ni nombres oficiales protegidos.

**Stack:** React 18, Vite, CSS puro.

---

## 🚀 Cómo ejecutar (cualquiera de las apps)

Necesitas **Node.js 18+**.

```bash
git clone https://github.com/anngamball-code/anngamball.git
cd anngamball

# Entra en la carpeta de la app que quieras, por ejemplo:
cd mundial-trivia      # o trivia-app, o english-app
npm install
npm run dev            # abre http://localhost:5173
```

Para una build de producción: `npm run build` y luego `npm run preview`.

---

## 📁 Estructura del repositorio

```
anngamball/
├── README.md
├── trivia-app/        # Quiz de cultura general
├── english-app/       # LingoOwl (inglés)
└── mundial-trivia/    # Trivia del Mundial 2026
```
