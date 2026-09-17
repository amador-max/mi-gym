# Mi Gym / 3 días

Web app gratuita y sin persistencia para registrar visualmente las series de tres entrenamientos de cuerpo completo. Incluye 12 ilustraciones SVG locales, 18 ejercicios distribuidos entre los tres días, instrucciones, consejos desplegables, progreso y temporizador de descanso.

## Requisitos

Node.js 20.19+ o 22.12+ y npm.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL que indique Vite (normalmente http://localhost:5173).

## Compilar

```bash
npm run build
npm run preview
```

El resultado está en `dist/`.

## Publicar gratis en GitHub Pages

1. Crea un repositorio de GitHub y coloca el contenido de **esta carpeta** en la raíz del repositorio (incluye `.github/workflows/deploy.yml`).
2. Usa la rama `main` y sube los archivos. Por ejemplo: `git init && git add . && git commit -m "Mi Gym" && git branch -M main && git remote add origin URL_DE_TU_REPOSITORIO && git push -u origin main`.
3. En GitHub, abre **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. En la pestaña **Actions**, revisa el workflow **Publicar en GitHub Pages**. Tras una ejecución correcta, GitHub Pages mostrará la URL.

El `vite.config.ts` determina automáticamente `base` según el nombre del repositorio durante el despliegue. No necesitas editar rutas, ni pagar hosting ni crear una API.

## Qué incluye y qué no

- Día 1: espalda y pecho; día 2: piernas y hombros; día 3: espalda y brazos. Los tres son full body.
- Cada día muestra un resumen, ejercicios ilustrados, indicaciones, series para marcar, progreso y descanso con cronómetro.
- Estado únicamente en memoria mientras la app está abierta. Si recargas, cierras la pestaña o vuelves a abrir el sitio, las marcas desaparecen. Cambiar entre días sin recargar conserva sus marcas temporalmente.
- No usa base de datos, localStorage, cookies, cuentas, métricas ni sincronización.
- Las ilustraciones SVG originales son esquemáticas: no son fotografías ni sustituyen una demostración profesional.

## Ajuste de la rutina

Edita `src/workouts.ts`: cambia nombres, series, repeticiones, tiempos, explicaciones e imágenes sin tocar la interfaz. Las ilustraciones son archivos SVG en `public/exercises/`.

**Seguridad:** Ajusta cargas a tu técnica, comienza ligero y evita trabajar sobre dolor. Consulta a un profesional si tienes restricciones específicas.

## Referencias para entender cada ejercicio

Cada tarjeta incluye ahora **Ver demostración del movimiento**, que abre la página de MuscleWiki correspondiente con guía visual y pasos; además incluye **Buscar tutorial en YouTube**, que abre resultados de búsqueda (no se afirma que haya un video concreto seleccionado o validado). Los 12 SVG existentes siguen incluidos en `public/exercises/` y funcionan sin conexión después de cargar la aplicación. Las demostraciones externas requieren internet y se abren en otra pestaña. No se redistribuyen imágenes ni videos de terceros.
