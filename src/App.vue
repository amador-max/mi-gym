<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import { days, type Exercise } from "./workouts";

type SeriesState = Record<string, boolean>;
const selectedDay = ref<number | null>(null);
const imageBase = `${import.meta.env.BASE_URL}exercises/`;
// Referencias de movimiento revisadas: páginas de demostración externas, no archivos descargados.
const demonstrations: Record<string, string> = {
  "chest-row.svg":
    "https://musclewiki.com/exercise/dumbbell-laying-incline-row",
  "bench-press.svg": "https://musclewiki.com/exercise/dumbbell-bench-press",
  "goblet-squat.svg": "https://musclewiki.com/exercise/dumbbell-goblet-squat",
  "rdl.svg": "https://musclewiki.com/exercise/dumbbell-romanian-deadlift",
  "shoulder-press.svg":
    "https://musclewiki.com/exercise/dumbbell-seated-overhead-press",
  "curl.svg": "https://musclewiki.com/exercise/dumbbell-seated-curl",
  "one-arm-row.svg": "https://musclewiki.com/exercise/dumbbell-single-arm-row",
  "incline-press.svg":
    "https://musclewiki.com/exercise/dumbbell-incline-bench-press",
  "plank.svg": "https://musclewiki.com/exercise/forearm-plank",
  "split-squat.svg": "https://musclewiki.com/exercise/dumbbell-split-squat",
  "reverse-fly.svg":
    "https://musclewiki.com/exercise/dumbbell-laying-reverse-fly",
  "triceps.svg":
    "https://musclewiki.com/exercise/dumbbell-seated-overhead-tricep-extension",
};
const youtubeQueries: Record<string, string> = {
  "chest-row.svg": "remo pecho apoyado banco inclinado mancuernas técnica",
  "bench-press.svg": "press banca mancuernas técnica",
  "goblet-squat.svg": "sentadilla goblet técnica mancuernas",
  "rdl.svg": "peso muerto rumano mancuernas técnica",
  "shoulder-press.svg": "press hombros sentado mancuernas técnica",
  "curl.svg": "curl bíceps mancuernas técnica",
  "one-arm-row.svg": "remo unilateral mancuerna banco técnica",
  "incline-press.svg": "press inclinado mancuernas técnica",
  "plank.svg": "plancha antebrazos técnica",
  "split-squat.svg": "sentadilla dividida con apoyo técnica",
  "reverse-fly.svg": "aperturas inversas banco inclinado mancuernas",
  "triceps.svg": "extensión tríceps sobre cabeza mancuerna sentado",
};
function youtubeSearch(image: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeQueries[image] || image)}`;
}

const completed = ref<SeriesState>({});
const expanded = ref<string | null>(null);
const secondsLeft = ref(0);
const timerRunning = ref(false);
let interval: ReturnType<typeof setInterval> | undefined;
const currentDay = computed(() =>
  days.find((day) => day.id === selectedDay.value),
);
const total = computed(
  () => currentDay.value?.exercises.reduce((sum, ex) => sum + ex.sets, 0) ?? 0,
);

const done = computed(
  () =>
    currentDay.value?.exercises.reduce((sum, ex) => {
      return (
        sum +
        Array.from({ length: ex.sets }, (_, i) =>
          completed.value[`${ex.id}-${i}`] ? 1 : 0,
        ).reduce<number>((a, b) => a + b, 0)
      );
    }, 0) ?? 0,
);

const percentage = computed(() =>
  total.value === 0 ? 0 : Math.round((done.value / total.value) * 100),
);
const timerLabel = computed(
  () =>
    `${Math.floor(secondsLeft.value / 60)
      .toString()
      .padStart(
        2,
        "0",
      )}:${(secondsLeft.value % 60).toString().padStart(2, "0")}`,
);
function openDay(day: number) {
  selectedDay.value = day;
  expanded.value = null;
  stopTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSeries(id: string, index: number, checked: boolean) {
  completed.value = { ...completed.value, [`${id}-${index}`]: checked };
}
function isComplete(ex: Exercise) {
  return Array.from(
    { length: ex.sets },
    (_, i) => completed.value[`${ex.id}-${i}`],
  ).every(Boolean);
}
function stopTimer() {
  if (interval !== undefined) clearInterval(interval);
  interval = undefined;
  timerRunning.value = false;
  secondsLeft.value = 0;
}
function startTimer(seconds: number) {
  stopTimer();
  secondsLeft.value = seconds;
  timerRunning.value = true;
  interval = setInterval(() => {
    if (secondsLeft.value > 0) secondsLeft.value--;
    if (secondsLeft.value <= 0) stopTimer();
  }, 1000);
}
function resetDay() {
  if (
    !currentDay.value ||
    !window.confirm("¿Reiniciar todas las series de este día?")
  )
    return;
  const updated = { ...completed.value };
  for (const exercise of currentDay.value.exercises) {
    for (let i = 0; i < exercise.sets; i++)
      delete updated[`${exercise.id}-${i}`];
  }
  completed.value = updated;
  stopTimer();
  secondsLeft.value = 0;
}
onUnmounted(stopTimer);
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <button
        class="brand"
        type="button"
        @click="
          selectedDay = null;
          stopTimer();
        "
        aria-label="Volver al inicio"
      >
        <span class="brand-icon" aria-hidden="true">✦</span
        ><span>MI GYM<span class="brand-light"> / 3 DÍAS</span></span>
      </button>
      <span class="header-note">FUERZA · A TU RITMO</span>
    </header>

    <main v-if="selectedDay === null" class="home container">
      <span class="eyebrow"
        ><span class="eyebrow-dot"></span> PLAN DE ENTRENAMIENTO</span
      >
      <h1>Entrena 3 días.<br /><em>Haz que cuenten.</em></h1>
      <p class="intro">
        Una rutina de cuerpo completo con mancuernas y banco ajustable. Elige tu
        día, consulta una demostración del movimiento y marca las series que
        completes.
      </p>
      <div class="home-info">
        <span>↗ 3 sesiones / semana</span><span>◷ 45–60 min</span
        ><span>✓ Sin cuentas ni guardado</span>
      </div>
      <h2 class="section-title">Elige tu entrenamiento <span>01 — 03</span></h2>
      <div class="day-grid">
        <button
          v-for="day in days"
          :key="day.id"
          class="day-card"
          type="button"
          @click="openDay(day.id)"
        >
          <div class="card-top">
            <span class="day-number"
              >DÍA {{ String(day.id).padStart(2, "0") }}</span
            ><span class="arrow" aria-hidden="true">↗</span>
          </div>
          <div class="card-art">
            <span>{{ day.id === 1 ? "↗" : day.id === 2 ? "◈" : "✳" }}</span>
          </div>
          <span class="focus">{{ day.focus.toUpperCase() }}</span>
          <h3>{{ day.name }}</h3>
          <p>{{ day.summary }}</p>
          <div class="card-footer">
            <span>{{ day.suggested }}</span
            ><span>Empezar →</span>
          </div>
        </button>
      </div>
      <p class="footnote">
        Deja un día de descanso entre sesiones. Ejemplo: lunes, miércoles y
        viernes. Ajusta peso y rango de movimiento a tu capacidad.
      </p>
    </main>

    <main v-else-if="currentDay" class="workout container">
      <button
        class="back-button"
        type="button"
        @click="
          selectedDay = null;
          stopTimer();
        "
      >
        ← Todos los días
      </button>
      <div class="workout-heading">
        <div>
          <span class="eyebrow"
            >DÍA {{ String(currentDay.id).padStart(2, "0") }} /
            ENTRENAMIENTO</span
          >
          <h1>{{ currentDay.name }}</h1>
          <p>{{ currentDay.summary }}</p>
        </div>
        <span class="session-pill">{{ currentDay.suggested }}</span>
      </div>
      <div class="progress-panel" aria-live="polite">
        <div class="progress-head">
          <span>SERIES COMPLETADAS</span
          ><strong
            >{{ done }} <small>/ {{ total }}</small></strong
          >
        </div>
        <div class="track">
          <div class="fill" :style="{ width: `${percentage}%` }"></div>
        </div>
        <p>
          {{
            done === total
              ? "¡Sesión completada! Excelente trabajo."
              : `${percentage}% completado · Marca cada serie al terminarla.`
          }}
        </p>
      </div>
      <div class="routine-head">
        <h2>Tu rutina</h2>
        <span>{{ currentDay.exercises.length }} ejercicios</span>
      </div>
      <div class="exercise-list">
        <article
          v-for="(exercise, index) in currentDay.exercises"
          :key="exercise.id"
          class="exercise-card"
          :class="{ finished: isComplete(exercise) }"
        >
          <div class="exercise-image">
            <img
              :src="`${imageBase}${exercise.image}`"
              :alt="`Ilustración esquemática de ${exercise.name}`"
              loading="lazy"
            /><span class="exercise-count">{{
              String(index + 1).padStart(2, "0")
            }}</span>
          </div>
          <div class="exercise-body">
            <div class="exercise-meta">
              <span>{{ exercise.group }}</span
              ><span v-if="isComplete(exercise)" class="done-badge"
                >✓ LISTO</span
              >
            </div>
            <h3>{{ exercise.name }}</h3>
            <p class="prescription">
              {{ exercise.sets }} series <span>×</span> {{ exercise.reps }}
              <span>·</span> {{ exercise.rest }} s descanso
            </p>
            <p class="instruction">{{ exercise.description }}</p>
            <button
              class="technique-toggle"
              type="button"
              :aria-expanded="expanded === exercise.id"
              @click="expanded = expanded === exercise.id ? null : exercise.id"
            >
              {{
                expanded === exercise.id
                  ? "Ocultar consejo −"
                  : "Consejo de técnica +"
              }}
            </button>
            <p v-if="expanded === exercise.id" class="tip">
              {{ exercise.tip }}
            </p>
            <div class="visual-guides">
              <a
                class="guide-link guide-primary"
                :href="demonstrations[exercise.image]"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Ver demostración de ${exercise.name} en MuscleWiki`"
                >▶ Ver demostración del movimiento ↗</a
              ><a
                class="guide-link"
                :href="youtubeSearch(exercise.image)"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Buscar tutorial de ${exercise.name} en YouTube`"
                >▷ Buscar tutorial en YouTube ↗</a
              ><small
                >La demostración se abre con internet; la imagen y el registro
                funcionan sin ella. YouTube abre resultados de búsqueda, no un
                video preseleccionado.</small
              >
            </div>
            <div class="sets-heading">MARCA TUS SERIES</div>
            <div class="set-grid">
              <label
                v-for="indexSet in exercise.sets"
                :key="indexSet"
                class="set-pill"
                :class="{
                  checked: completed[`${exercise.id}-${indexSet - 1}`],
                }"
                ><input
                  type="checkbox"
                  :checked="!!completed[`${exercise.id}-${indexSet - 1}`]"
                  @change="
                    toggleSeries(
                      exercise.id,
                      indexSet - 1,
                      ($event.target as HTMLInputElement).checked,
                    )
                  "
                /><span aria-hidden="true">{{
                  completed[`${exercise.id}-${indexSet - 1}`] ? "✓" : indexSet
                }}</span
                ><span>Serie {{ indexSet }}</span></label
              >
            </div>
            <button
              class="rest-button"
              type="button"
              @click="startTimer(exercise.rest)"
            >
              ◷ Iniciar descanso · {{ exercise.rest }} s
            </button>
          </div>
        </article>
      </div>
      <div class="session-end">
        <h2>
          {{ done === total ? "¡Rutina terminada! ✨" : "Un paso a la vez." }}
        </h2>
        <p>
          Elige una carga que permita terminar cada serie con unas 2
          repeticiones en reserva. Si hay dolor agudo, detén el ejercicio.
        </p>
        <div class="session-actions">
          <button type="button" class="secondary-button" @click="resetDay">
            Reiniciar este día</button
          ><button
            type="button"
            class="primary-button"
            @click="
              selectedDay = null;
              stopTimer();
            "
          >
            Elegir otro día →
          </button>
        </div>
      </div>
    </main>

    <div
      v-if="timerRunning || secondsLeft > 0"
      class="timer-bar"
      role="timer"
      aria-label="Tiempo de descanso"
    >
      <span
        >DESCANSO <strong>{{ timerLabel }}</strong></span
      ><button
        type="button"
        @click="
          stopTimer();
          secondsLeft = 0;
        "
      >
        Cerrar ×
      </button>
    </div>
    <footer class="site-footer container">
      <span>MI GYM / 3 DÍAS</span
      ><span
        >Las marcas viven solo en esta pestaña: se borran al recargar.
        Ilustraciones esquemáticas orientativas.</span
      >
    </footer>
  </div>
</template>
