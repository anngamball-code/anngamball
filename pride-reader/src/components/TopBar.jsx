// Barra superior: navegación de capítulos, progreso y cambio de modo.
function TopBar({
  chapter,
  chapterIndex,
  totalChapters,
  mode,
  onSetMode,
  onPrev,
  onNext,
}) {
  const progress = Math.round(((chapterIndex + 1) / totalChapters) * 100);

  return (
    <header className="topbar">
      <div className="topbar-row">
        <span className="brand">Pride &amp; Prejudice</span>
        <div className="mode-toggle" role="group" aria-label="Modo">
          <button
            className={`mode-btn${mode === "read" ? " mode-active" : ""}`}
            onClick={() => onSetMode("read")}
          >
            📖 Leer
          </button>
          <button
            className={`mode-btn${mode === "listen" ? " mode-active" : ""}`}
            onClick={() => onSetMode("listen")}
          >
            🎧 Escuchar
          </button>
        </div>
      </div>

      <div className="topbar-row chapter-row">
        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={chapterIndex === 0}
          aria-label="Capítulo anterior"
        >
          ‹
        </button>
        <div className="chapter-title">
          <span className="chapter-name">{chapter.titleEs}</span>
          <span className="chapter-sub">{chapter.title}</span>
        </div>
        <button
          className="nav-btn"
          onClick={onNext}
          disabled={chapterIndex === totalChapters - 1}
          aria-label="Capítulo siguiente"
        >
          ›
        </button>
      </div>

      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}

export default TopBar;
