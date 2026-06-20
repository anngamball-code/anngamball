# 🖥️ Crear una app de escritorio ejecutable (Electron)

Esta guía empaqueta el lector interactivo en una aplicación de escritorio:
**`.exe`** (Windows), **`.dmg`** (macOS) o **`.AppImage`** (Linux).

> El proyecto ya viene **preconfigurado con Electron**: dependencias, scripts,
> proceso principal (`electron/main.cjs`) y configuración de empaquetado en
> `package.json` (sección `build`). El **empaquetado se hace en tu máquina**
> (necesita Node y herramientas nativas que no están disponibles en el entorno
> donde se generó el código).

---

## 0. Requisitos

| Herramienta                         | Para qué                                          |
| ----------------------------------- | ------------------------------------------------- | ------------------ |
| **Node.js 20+**                     | Ejecutar y empaquetar                             | https://nodejs.org |
| (Windows) nada extra                | `electron-builder` genera el `.exe` directamente  |
| (macOS) Xcode Command Line Tools    | Para firmar/empaquetar (`xcode-select --install`) |
| (Linux) `rpm`/`fakeroot` opcionales | Solo si generas otros formatos                    |

> Importante: cada sistema genera **su propio** instalador. El `.exe` se
> construye en Windows, el `.dmg` en macOS y el `.AppImage` en Linux.

---

## 1. Instalar dependencias

Dentro de `pride-reader/`:

```bash
npm install
```

(Instala React, Vite, Electron y electron-builder.)

---

## 2. Probar la app de escritorio en desarrollo

```bash
npm run electron:dev
```

Esto levanta Vite y abre una ventana de Electron con recarga en caliente.
Ideal para desarrollar con la experiencia de escritorio.

> ¿Solo quieres ver la build de producción en una ventana sin generar el
> instalador? Usa `npm run electron:preview`.

---

## 3. Crear el icono (paso manual de 1 minuto)

`electron-builder` necesita un PNG. En `build/icon.svg` tienes el diseño:

- Convierte **`build/icon.svg` → `build/icon.png`** a **1024×1024**.
- Puedes usar Figma, Inkscape, Photopea o un conversor SVG→PNG online.

> A partir de ese PNG, electron-builder genera automáticamente los formatos de
> cada sistema (`.ico`, `.icns`). Si omites el icono, usará el de Electron por
> defecto.

---

## 4. Generar el ejecutable

```bash
npm run electron:build
```

El resultado queda en la carpeta **`release/`**:

| Sistema     | Archivos típicos en `release/`                                                     |
| ----------- | ---------------------------------------------------------------------------------- |
| **Windows** | `Pride and Prejudice Reader Setup 1.0.0.exe` (instalador) y una versión `portable` |
| **macOS**   | `Pride and Prejudice Reader-1.0.0.dmg`                                             |
| **Linux**   | `Pride and Prejudice Reader-1.0.0.AppImage`                                        |

Para construir un formato concreto puedes usar, por ejemplo:

```bash
npm run build && npx electron-builder --win      # solo Windows
npm run build && npx electron-builder --mac      # solo macOS
npm run build && npx electron-builder --linux    # solo Linux
```

---

## 5. Instalar / ejecutar el resultado

- **Windows:** ejecuta el `...Setup.exe` para instalar, o usa el `.exe` portable
  sin instalación.
- **macOS:** abre el `.dmg` y arrastra la app a _Aplicaciones_.
- **Linux:** da permisos de ejecución al AppImage y ábrelo:
  ```bash
  chmod +x "Pride and Prejudice Reader-1.0.0.AppImage"
  ./"Pride and Prejudice Reader-1.0.0.AppImage"
  ```

---

## 🔊 Nota sobre el audio (modo Escuchar)

La app usa la **Web Speech API** del motor Chromium de Electron:

- **Windows y macOS:** las voces del sistema funcionan de fábrica. ✅
- **Linux:** puede que necesites instalar el sintetizador de voz del sistema,
  por ejemplo:
  ```bash
  sudo apt install speech-dispatcher espeak-ng
  ```
  Si no hay voces instaladas, la lectura no sonará (el resto de la app funciona).

---

## ✍️ Firma de código (opcional, para distribuir)

Para distribuir sin advertencias de seguridad:

- **Windows:** se recomienda un certificado de firma de código (Authenticode).
- **macOS:** se requiere una cuenta de Apple Developer para _firmar_ y _notarizar_
  la app; de lo contrario, Gatekeeper mostrará una advertencia al abrirla.

Mientras pruebas en tu propio equipo no necesitas firmar nada.

---

## 🆘 Problemas comunes

| Síntoma                                           | Solución                                                                              |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Ventana en blanco al abrir el ejecutable          | Verifica que `vite.config.js` tiene `base: "./"` y vuelve a `npm run electron:build`. |
| `electron-builder` falla descargando dependencias | Reintenta con buena conexión; la primera vez descarga binarios de Electron.           |
| No hay sonido en Linux                            | Instala `speech-dispatcher`/`espeak-ng` (ver arriba).                                 |
| El icono no cambia                                | Asegúrate de tener `build/icon.png` (≥512×512) antes de empaquetar.                   |
