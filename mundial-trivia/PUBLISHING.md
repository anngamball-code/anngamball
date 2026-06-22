# 📱 Publicar "Trivia del Mundial 2026" en Google Play con Capacitor

Esta guía te lleva desde el código web hasta una app Android (`.aab`) lista para
subir a la **Google Play Console**.

> El proyecto ya viene **preconfigurado con Capacitor**: dependencias, scripts,
> `capacitor.config.json`, base relativa en Vite e iconos/splash en `assets/`.
> Solo tienes que ejecutar los comandos en tu máquina (necesitan Node y el SDK
> de Android, que no se pueden ejecutar en el entorno donde se generó el código).

---

## 0. Requisitos previos (instalar una sola vez)

| Herramienta                    | Para qué                      | Dónde                                |
| ------------------------------ | ----------------------------- | ------------------------------------ |
| **Node.js 20+**                | Ejecutar la app y Capacitor   | https://nodejs.org                   |
| **Android Studio**             | Compilar y firmar el `.aab`   | https://developer.android.com/studio |
| **JDK 17**                     | Requerido por Android Gradle  | Viene incluido con Android Studio    |
| **Cuenta Google Play Console** | Publicar (pago único ~25 USD) | https://play.google.com/console      |

> En Android Studio, abre **SDK Manager** y asegúrate de tener instalado un
> **Android SDK Platform** reciente (API 34/35) y las **Build Tools**.

---

## 1. Instalar dependencias

Dentro de la carpeta `mundial-trivia/`:

```bash
npm install
```

Esto instala React, Vite y Capacitor (`@capacitor/core`, `@capacitor/cli`,
`@capacitor/android`, `@capacitor/assets`).

---

## 2. Generar el build web

```bash
npm run build
```

Crea la carpeta `dist/` con la app optimizada (es lo que se empaqueta en Android).

---

## 3. Añadir la plataforma Android

```bash
npx cap add android
```

Esto crea la carpeta `android/` con el proyecto nativo. **Solo se hace una vez.**

---

## 4. Generar iconos y splash

En `assets/` tienes los diseños en SVG (`icon.svg` y `splash.svg`).
La herramienta `@capacitor/assets` necesita **PNG**, así que primero conviértelos:

- `assets/icon.svg` → `assets/icon-only.png` (1024×1024)
- `assets/icon.svg` → `assets/icon-foreground.png` (1024×1024, el balón centrado)
- un cuadrado verde → `assets/icon-background.png` (1024×1024, color `#065f46`)
- `assets/splash.svg` → `assets/splash.png` (2732×2732)

> Puedes convertir SVG→PNG con un editor (Figma, Inkscape, Photopea) o un
> conversor online. Mantén los nombres exactos de arriba.

Luego genera todos los tamaños automáticamente:

```bash
npm run assets:generate
```

> Si tu versión de `@capacitor/assets` admite SVG directamente, puedes saltarte
> la conversión y nombrar el archivo `assets/icon.svg` como `assets/logo.svg`.
> Ante la duda, usa PNG (siempre funciona).

---

## 5. Sincronizar y abrir en Android Studio

```bash
npx cap sync
npx cap open android
```

> Atajo: `npm run cap:sync` hace `build` + `cap sync` de una vez.

Android Studio abrirá el proyecto. Espera a que termine de indexar (Gradle).

---

## 6. Configurar nombre, versión y ID

- **applicationId** (ya configurado): `com.anngamball.mundialtrivia`
  - ⚠️ Este ID es **permanente** una vez publicado. Cámbialo ahora si quieres
    otro (en `capacitor.config.json` y vuelve a `cap sync`).
- **Versión:** en `android/app/build.gradle` ajusta:
  - `versionCode` (entero, súbelo en cada actualización: 1, 2, 3…)
  - `versionName` (texto visible, p. ej. `"1.0.0"`)

---

## 7. Crear la clave de firma (keystore)

Google exige que la app esté firmada. Crea tu clave **una sola vez** y
**guárdala muy bien** (si la pierdes, no podrás actualizar la app):

```bash
keytool -genkey -v -keystore mundial-trivia.keystore \
  -alias mundial -keyalg RSA -keysize 2048 -validity 10000
```

> El `.gitignore` ya excluye `*.keystore`/`*.jks` para que **nunca** subas la
> clave al repositorio. Haz una copia de seguridad en un lugar seguro.

---

## 8. Generar el Android App Bundle (`.aab`)

Google Play requiere formato **AAB** (no APK). En Android Studio:

1. Menú **Build → Generate Signed Bundle / APK…**
2. Elige **Android App Bundle**.
3. Selecciona tu `mundial-trivia.keystore`, introduce alias y contraseñas.
4. Elige la variante **release** y finaliza.

El archivo quedará en `android/app/release/app-release.aab`.

> Alternativa por terminal: `cd android && ./gradlew bundleRelease`
> (requiere configurar la firma en `build.gradle`; ver más abajo).

---

## 9. Subir a la Google Play Console

1. Entra en https://play.google.com/console y crea una **app nueva**.
2. Rellena la **ficha de Play Store**: título, descripción, **icono** (512×512),
   **gráfico destacado** (1024×500) y **capturas** (mín. 2 del teléfono).
3. Completa los cuestionarios obligatorios: **clasificación de contenido**,
   **política de privacidad**, **seguridad de los datos** y **público objetivo**.
4. Ve a **Producción → Crear nueva versión** y sube el `.aab`.
5. Envía a **revisión**. La aprobación suele tardar de unas horas a varios días.

---

## ⚖️ Notas legales (importante para comercializar)

- Esta app usa **solo datos públicos e históricos**; no incluye marcas, logos ni
  nombres oficiales protegidos. Publícala con **tu propia marca**.
- Evita en la ficha de la tienda términos o imágenes oficiales protegidos.
- Si añades anuncios (AdMob) o compras, deberás declararlo en **Seguridad de los
  datos** y cumplir las políticas de Google Play.

---

## 🔁 Para publicar una actualización más adelante

```bash
# 1) Sube versionCode/versionName en android/app/build.gradle
# 2) Reconstruye y sincroniza
npm run cap:sync
# 3) Genera un nuevo .aab firmado (con la MISMA keystore) y súbelo a la consola
```

---

## 🆘 Problemas comunes

| Síntoma                          | Solución                                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| Pantalla en blanco en el móvil   | Verifica que `vite.config.js` tiene `base: "./"` y vuelve a `npm run build && npx cap sync`. |
| `SDK location not found`         | Abre el proyecto desde Android Studio (crea `local.properties`) o define `ANDROID_HOME`.     |
| Gradle falla por versión de Java | Usa **JDK 17** (Android Studio → Settings → Build → Gradle → Gradle JDK).                    |
| El icono no cambia               | Reejecuta `npm run assets:generate` y luego `npx cap sync`.                                  |
