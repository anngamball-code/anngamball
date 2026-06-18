// Utilidades sobre la Web Speech API (SpeechSynthesis) para leer en inglés.

export function speechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function getVoices() {
  if (!speechSupported()) return [];
  return window.speechSynthesis.getVoices() || [];
}

// Elige una voz en inglés, prefiriendo en-GB y luego en-US.
export function pickEnglishVoice() {
  const voices = getVoices();
  return (
    voices.find((v) => /en[-_]GB/i.test(v.lang)) ||
    voices.find((v) => /en[-_]US/i.test(v.lang)) ||
    voices.find((v) => /^en/i.test(v.lang)) ||
    null
  );
}

export function cancelSpeech() {
  if (speechSupported()) window.speechSynthesis.cancel();
}

export function pauseSpeech() {
  if (speechSupported()) window.speechSynthesis.pause();
}

export function resumeSpeech() {
  if (speechSupported()) window.speechSynthesis.resume();
}

// Crea y lanza una locución. Devuelve la "utterance" (o null si no hay soporte).
export function speak(text, { rate = 1, onBoundary, onEnd, onStart } = {}) {
  if (!speechSupported()) return null;
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  const voice = pickEnglishVoice();
  if (voice) utter.voice = voice;
  utter.lang = voice?.lang || "en-US";
  utter.rate = rate;
  utter.pitch = 1;
  if (onBoundary) utter.onboundary = onBoundary;
  if (onEnd) utter.onend = onEnd;
  if (onStart) utter.onstart = onStart;
  synth.speak(utter);
  return utter;
}

// Pronuncia una sola palabra (cancela cualquier locución en curso).
export function speakWord(word, rate = 0.9) {
  if (!speechSupported()) return;
  window.speechSynthesis.cancel();
  speak(word, { rate });
}
