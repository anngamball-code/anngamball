import { useMemo, useRef } from "react";
import { tokenize } from "../utils/text";

// Renderiza el capítulo párrafo a párrafo, con cada palabra clickeable.
// - onWordClick(rawWord): abre el panel con la info de la palabra.
// - onTranslatePhrase(phrase, es): traduce una selección / párrafo.
// - activePara / activeWordIndex: resaltado sincronizado en modo escucha.
function Reader({
  chapter,
  activePara,
  activeWordIndex,
  onWordClick,
  onTranslatePhrase,
}) {
  const containerRef = useRef(null);

  // Tokeniza cada párrafo una sola vez por capítulo.
  const paragraphTokens = useMemo(
    () => chapter.paragraphs.map((p) => tokenize(p.en)),
    [chapter],
  );

  // Si el usuario selecciona texto, traducimos el párrafo que lo contiene.
  const handleSelection = () => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const text = sel.toString().trim();
    if (text.length < 2) return;

    let node = sel.anchorNode;
    while (node && node.nodeType !== 1) node = node.parentNode;
    let el = node;
    while (el && !el.dataset?.para) el = el.parentElement;
    if (!el) return;

    const idx = Number(el.dataset.para);
    const para = chapter.paragraphs[idx];
    if (para) onTranslatePhrase(text, para.es);
  };

  return (
    <div
      ref={containerRef}
      className="reader"
      onMouseUp={handleSelection}
      onTouchEnd={handleSelection}
    >
      {chapter.paragraphs.map((para, pIdx) => (
        <p
          key={pIdx}
          className={`para${activePara === pIdx ? " para-active" : ""}`}
          data-para={pIdx}
        >
          {paragraphTokens[pIdx].map((tok, tIdx) =>
            tok.isWord ? (
              <span
                key={tIdx}
                className={`word${
                  activePara === pIdx && activeWordIndex === tIdx
                    ? " word-active"
                    : ""
                }`}
                onClick={() => onWordClick(tok.text)}
              >
                {tok.text}
              </span>
            ) : (
              <span key={tIdx}>{tok.text}</span>
            ),
          )}{" "}
          <button
            className="translate-para"
            title="Traducir este párrafo"
            onClick={() => onTranslatePhrase(para.en, para.es)}
          >
            🌐
          </button>
        </p>
      ))}
    </div>
  );
}

export default Reader;
