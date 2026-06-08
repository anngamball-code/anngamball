import { speakWord } from "../utils/speech";

// Panel deslizante con la información de una palabra o la traducción de una frase.
function InfoPanel({ panel, onClose }) {
  if (!panel) return null;

  return (
    <>
      <div className="panel-backdrop" onClick={onClose} />
      <aside className="info-panel" role="dialog" aria-modal="true">
        <button className="panel-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {panel.type === "word" ? (
          <div>
            <div className="panel-word-row">
              <h3 className="panel-word">{panel.word}</h3>
              <button
                className="speak-btn"
                onClick={() => speakWord(panel.word)}
                aria-label="Escuchar pronunciación"
              >
                🔊
              </button>
            </div>

            <p className="panel-translation">{panel.traduccion}</p>

            <div className="panel-meta">
              <span className="meta-chip">/{panel.pronunciacion}/</span>
              <span className="meta-chip meta-cat">{panel.categoria}</span>
            </div>

            {panel.ejemplo && (
              <p className="panel-example">
                <span className="example-label">Ejemplo:</span> {panel.ejemplo}
              </p>
            )}

            {!panel.found && (
              <p className="panel-note">
                Esta palabra no está en el diccionario offline, pero puedes
                escuchar su pronunciación con el botón 🔊.
              </p>
            )}
          </div>
        ) : (
          <div>
            <h3 className="panel-heading">Traducción</h3>
            <p className="panel-phrase-en">“{panel.phrase}”</p>
            <p className="panel-phrase-es">{panel.es}</p>
            <p className="panel-note">
              Traducción del pasaje que contiene la selección.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

export default InfoPanel;
