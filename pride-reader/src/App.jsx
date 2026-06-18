import { useState, useRef, useEffect, useCallback } from "react";
import book from "./data/book";
import { lookupWord } from "./data/dictionary";
import { tokenize, tokenIndexAtChar } from "./utils/text";
import {
  speak,
  speakWord,
  cancelSpeech,
  pauseSpeech,
  resumeSpeech,
  speechSupported,
  getVoices,
} from "./utils/speech";
import TopBar from "./components/TopBar";
import Reader from "./components/Reader";
import InfoPanel from "./components/InfoPanel";
import ListenControls from "./components/ListenControls";
import "./index.css";

const TOTAL = book.chapters.length;

export default function App() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [mode, setMode] = useState("read"); // "read" | "listen"
  const [panel, setPanel] = useState(null);
  const [rate, setRateState] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activePara, setActivePara] = useState(-1);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);

  const supported = speechSupported();
  const chapter = book.chapters[chapterIndex];

  // Refs para evitar closures obsoletos en la lectura por voz.
  const playingRef = useRef(false);
  const rateRef = useRef(1);
  const chapterIdxRef = useRef(0);
  const paraRef = useRef(0);
  const genRef = useRef(0); // invalida callbacks "onEnd" de locuciones canceladas

  useEffect(() => {
    chapterIdxRef.current = chapterIndex;
  }, [chapterIndex]);

  // "Calienta" la lista de voces del navegador.
  useEffect(() => {
    if (!supported) return;
    getVoices();
    window.speechSynthesis.onvoiceschanged = () => getVoices();
    return () => cancelSpeech();
  }, [supported]);

  // Detiene la lectura por completo y reinicia el resaltado.
  const stopListen = useCallback(() => {
    genRef.current++;
    playingRef.current = false;
    cancelSpeech();
    setIsPlaying(false);
    setIsPaused(false);
    setActivePara(-1);
    setActiveWordIndex(-1);
    paraRef.current = 0;
  }, []);

  // Lee el párrafo i y, al terminar, continúa con el siguiente.
  const speakParagraph = (i) => {
    const ch = book.chapters[chapterIdxRef.current];
    if (i >= ch.paragraphs.length) {
      stopListen();
      return;
    }
    const myGen = ++genRef.current;
    paraRef.current = i;
    setActivePara(i);
    setActiveWordIndex(-1);

    const text = ch.paragraphs[i].en;
    const tokens = tokenize(text);

    cancelSpeech();
    speak(text, {
      rate: rateRef.current,
      onBoundary: (e) => {
        if (e.name && e.name !== "word") return;
        const idx = tokenIndexAtChar(tokens, e.charIndex);
        if (idx !== -1) setActiveWordIndex(idx);
      },
      onEnd: () => {
        if (genRef.current !== myGen || !playingRef.current) return;
        speakParagraph(i + 1);
      },
    });
  };

  const togglePlay = () => {
    if (!supported) return;
    if (!isPlaying && !isPaused) {
      // Empezar (o reanudar desde el párrafo actual)
      playingRef.current = true;
      setIsPlaying(true);
      setIsPaused(false);
      speakParagraph(paraRef.current || 0);
    } else if (isPlaying && !isPaused) {
      pauseSpeech();
      setIsPaused(true);
    } else {
      resumeSpeech();
      setIsPaused(false);
    }
  };

  const handleSetRate = (r) => {
    rateRef.current = r;
    setRateState(r);
    // Si está leyendo, reinicia el párrafo actual a la nueva velocidad.
    if (playingRef.current && !isPaused) {
      speakParagraph(paraRef.current);
    }
  };

  // Cambiar de modo o capítulo detiene la lectura.
  const handleSetMode = (m) => {
    if (m === "read") stopListen();
    setMode(m);
  };

  const goChapter = (idx) => {
    if (idx < 0 || idx >= TOTAL) return;
    stopListen();
    setPanel(null);
    setChapterIndex(idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWordClick = (rawWord) => {
    if (playingRef.current) stopListen();
    setPanel({ type: "word", ...lookupWord(rawWord) });
    speakWord(rawWord);
  };

  const handleTranslatePhrase = (phrase, es) => {
    setPanel({ type: "phrase", phrase, es });
  };

  // Limpieza al desmontar.
  useEffect(() => () => cancelSpeech(), []);

  return (
    <div className="app">
      <TopBar
        chapter={chapter}
        chapterIndex={chapterIndex}
        totalChapters={TOTAL}
        mode={mode}
        onSetMode={handleSetMode}
        onPrev={() => goChapter(chapterIndex - 1)}
        onNext={() => goChapter(chapterIndex + 1)}
      />

      <main className={`content${mode === "listen" ? " content-listen" : ""}`}>
        <Reader
          chapter={chapter}
          activePara={mode === "listen" ? activePara : -1}
          activeWordIndex={mode === "listen" ? activeWordIndex : -1}
          onWordClick={handleWordClick}
          onTranslatePhrase={handleTranslatePhrase}
        />
      </main>

      {mode === "listen" && (
        <ListenControls
          isPlaying={isPlaying}
          isPaused={isPaused}
          rate={rate}
          supported={supported}
          onTogglePlay={togglePlay}
          onStop={stopListen}
          onSetRate={handleSetRate}
        />
      )}

      <InfoPanel panel={panel} onClose={() => setPanel(null)} />
    </div>
  );
}
