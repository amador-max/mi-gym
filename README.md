# Mi Gym — 2 objetivos · 3 días

Aplicación estática en Vue 3 + Vite + TypeScript. Dos objetivos seleccionables: **Fuerza y condición general** (rutina original) y **Musculoso natural** (rutina nueva). Cada objetivo tiene tres días con resumen, imágenes SVG locales, enlaces a demostraciones y búsquedas de YouTube, casillas de series y temporizador de descanso. No hay cuentas ni persistencia: las marcas se borran al recargar.

## Instalar y comprobar

```bash
npm install
npm run build
npm run dev
```

## Publicación en GitHub Pages

1. Sube el **contenido** de esta carpeta a la raíz de tu repositorio (no el ZIP).
2. Ve a **Settings → Pages → Source: GitHub Actions**.
3. Haz push a `main`. El workflow `.github/workflows/deploy.yml` define el nombre del repositorio al compilar para configurar automáticamente el prefijo de Vite.
4. Si el repositorio se llama `mi-gym`, la URL será `https://TU_USUARIO.github.io/mi-gym/`. En un repo `TU_USUARIO.github.io`, se publica en raíz.

## Notas

- Las ilustraciones SVG son esquemáticas y no reemplazan una demostración técnica. Los enlaces externos requieren internet y pueden cambiar. YouTube abre búsquedas, no videos seleccionados.
- Si empiezas o retomas el entrenamiento, puedes reducir a dos series por ejercicio inicialmente. Trabaja con técnica controlada y evita el dolor.
- Los dos objetivos son alternativas de planificación, no se realizan ambos al mismo tiempo.
- No hay `localStorage`, cookies ni backend.
