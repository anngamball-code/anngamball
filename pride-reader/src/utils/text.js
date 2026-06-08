// Divide un texto en tokens conservando la posición inicial (charIndex) de cada
// uno. Esto permite sincronizar el resaltado con los eventos "boundary" de la
// Web Speech API (que informan el charIndex de la palabra que se está leyendo).
//
// Cada token: { text, isWord, start, end }
//  - isWord = true  → palabra clickeable (letras y apóstrofes)
//  - isWord = false → espacios o signos de puntuación
export function tokenize(text) {
  const tokens = [];
  // Grupos: 1) palabra (con apóstrofes internos)  2) espacios  3) puntuación
  const re = /([A-Za-zÀ-ÿ]+(?:['’][A-Za-zÀ-ÿ]+)*)|(\s+)|([^\sA-Za-zÀ-ÿ]+)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const chunk = m[0];
    tokens.push({
      text: chunk,
      isWord: Boolean(m[1]),
      start: m.index,
      end: m.index + chunk.length,
    });
  }
  return tokens;
}

// Dado un charIndex (de un evento boundary), devuelve el índice del token de
// palabra que lo contiene, o -1 si no hay coincidencia.
export function tokenIndexAtChar(tokens, charIndex) {
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.isWord && charIndex >= t.start && charIndex < t.end) {
      return i;
    }
  }
  return -1;
}
