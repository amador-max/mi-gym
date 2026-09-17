export interface Exercise {
  id: string
  name: string
  group: string
  sets: number
  reps: string
  rest: number
  image: string
  description: string
  tip: string
}
export interface WorkoutDay {
  id: number
  name: string
  focus: string
  summary: string
  suggested: string
  exercises: Exercise[]
}

export const generalDays: WorkoutDay[] = [
  {
    id: 1,
    name: 'Espalda + cuerpo completo',
    focus: 'Espalda y pecho',
    summary: 'Remo como movimiento principal, luego pecho, piernas, glúteos, hombros y bíceps. Es la sesión que comenzaste.',
    suggested: 'Lunes · 45–60 min',
    exercises: [
      { id: 'd1-row', name: 'Remo con pecho apoyado', group: 'Espalda', sets: 3, reps: '10–12', rest: 90, image: 'chest-row.svg', description: 'Inclina el banco 30–45°. Apoya el pecho y lleva los codos hacia la cadera; baja con control.', tip: 'No despegues el pecho del banco.' },
      { id: 'd1-bench', name: 'Press de pecho con mancuernas', group: 'Pecho', sets: 3, reps: '8–12', rest: 120, image: 'bench-press.svg', description: 'Banco plano, pies firmes. Baja las mancuernas de forma controlada a los lados del pecho y empuja.', tip: 'Prueba primero un peso ligero; no existe equivalencia automática con el remo.' },
      { id: 'd1-goblet', name: 'Sentadilla goblet', group: 'Cuádriceps · glúteos', sets: 3, reps: '10–12', rest: 90, image: 'goblet-squat.svg', description: 'Sujeta una mancuerna frente al pecho. Flexiona cadera y rodillas hasta una profundidad cómoda y sube.', tip: 'Puedes empezar sin carga adicional; mantén los talones apoyados.' },
      { id: 'd1-rdl', name: 'Peso muerto rumano', group: 'Femoral · glúteos', sets: 2, reps: '10–12', rest: 90, image: 'rdl.svg', description: 'Lleva la cadera hacia atrás, con rodillas ligeramente flexionadas y mancuernas cerca de las piernas.', tip: 'Mantén la espalda neutra y detén el descenso si pierdes la postura.' },
      { id: 'd1-shoulder', name: 'Press de hombros sentado', group: 'Hombros', sets: 2, reps: '10–12', rest: 90, image: 'shoulder-press.svg', description: 'Respaldo casi vertical. Parte con las mancuernas cerca de los hombros y presiona hacia arriba.', tip: 'Haz una serie ligera de calentamiento y evita arquear la zona lumbar.' },
      { id: 'd1-curl', name: 'Curl de bíceps', group: 'Bíceps', sets: 2, reps: '10–12', rest: 60, image: 'curl.svg', description: 'Con codos cercanos al cuerpo, flexiona los brazos sin balancearte; baja lentamente.', tip: 'Evita impulsar las mancuernas con la espalda.' }
    ]
  },
  {
    id: 2,
    name: 'Piernas + hombros',
    focus: 'Piernas y hombros',
    summary: 'Segundo entrenamiento de cuerpo completo con prioridad en piernas. Incluye un tirón y un empuje para equilibrar.',
    suggested: 'Miércoles · 45–60 min',
    exercises: [
      { id: 'd2-goblet', name: 'Sentadilla goblet', group: 'Cuádriceps · glúteos', sets: 3, reps: '8–12', rest: 120, image: 'goblet-squat.svg', description: 'Mancuerna frente al pecho o solo peso corporal. Desciende controladamente y empuja el suelo al subir.', tip: 'Aumenta carga solo si mantienes equilibrio y técnica.' },
      { id: 'd2-rdl', name: 'Peso muerto rumano', group: 'Femoral · glúteos', sets: 3, reps: '8–12', rest: 120, image: 'rdl.svg', description: 'Bisagra de cadera: empuja los glúteos hacia atrás y mantén las mancuernas cerca de los muslos.', tip: 'No necesitas tocar el suelo.' },
      { id: 'd2-shoulder', name: 'Press de hombros sentado', group: 'Hombros', sets: 3, reps: '8–12', rest: 90, image: 'shoulder-press.svg', description: 'Con banco estable y respaldo alto, empuja las mancuernas sobre la cabeza con control.', tip: 'Si hay dolor o pinchazo en el hombro, detente.' },
      { id: 'd2-row', name: 'Remo unilateral', group: 'Espalda', sets: 2, reps: '10–12 por lado', rest: 90, image: 'one-arm-row.svg', description: 'Apoya una mano en el banco estable. Rema llevando el codo hacia la cadera, sin girar el torso.', tip: 'Haz ambos lados para completar una serie.' },
      { id: 'd2-incline', name: 'Press inclinado con mancuernas', group: 'Pecho', sets: 2, reps: '8–12', rest: 90, image: 'incline-press.svg', description: 'Ajusta el banco a 15–30°. Baja de manera controlada y empuja hacia arriba.', tip: 'No hace falta llevar el banco a una inclinación muy alta.' },
      { id: 'd2-plank', name: 'Plancha', group: 'Abdomen', sets: 2, reps: '20–40 segundos', rest: 60, image: 'plank.svg', description: 'Apoya antebrazos y puntas de pies; mantén una línea cómoda de cabeza a cadera.', tip: 'Puedes apoyar las rodillas si así conservas mejor la postura.' }
    ]
  },
  {
    id: 3,
    name: 'Espalda + brazos',
    focus: 'Espalda y brazos',
    summary: 'Última sesión de cuerpo completo: más trabajo de espalda y brazos sin abandonar pecho y piernas.',
    suggested: 'Viernes · 45–60 min',
    exercises: [
      { id: 'd3-row', name: 'Remo unilateral', group: 'Espalda', sets: 3, reps: '10–12 por lado', rest: 90, image: 'one-arm-row.svg', description: 'Una mano apoyada en el banco y torso estable. Lleva la mancuerna hacia la cadera.', tip: 'Evita girar el cuerpo para levantar más peso.' },
      { id: 'd3-incline', name: 'Press inclinado con mancuernas', group: 'Pecho', sets: 3, reps: '8–12', rest: 90, image: 'incline-press.svg', description: 'Banco inclinado ligeramente. Desciende con control y empuja sin golpear las mancuernas.', tip: 'Mantén los pies firmes.' },
      { id: 'd3-split', name: 'Sentadilla dividida con apoyo', group: 'Piernas · glúteos', sets: 2, reps: '8–10 por lado', rest: 90, image: 'split-squat.svg', description: 'Coloca un pie adelantado y otro atrás; sujétate de un apoyo firme y baja verticalmente con control.', tip: 'Empieza sin mancuernas y usa un recorrido cómodo.' },
      { id: 'd3-reverse', name: 'Aperturas inversas en banco', group: 'Espalda alta · hombro posterior', sets: 2, reps: '12–15', rest: 60, image: 'reverse-fly.svg', description: 'Con pecho apoyado en banco inclinado, abre los brazos hacia los lados con mancuernas ligeras.', tip: 'No encogas los hombros ni uses impulso.' },
      { id: 'd3-curl', name: 'Curl de bíceps', group: 'Bíceps', sets: 2, reps: '10–12', rest: 60, image: 'curl.svg', description: 'Sube las mancuernas flexionando los codos, con el torso estable.', tip: 'Baja despacio.' },
      { id: 'd3-triceps', name: 'Extensión de tríceps sobre la cabeza', group: 'Tríceps', sets: 2, reps: '10–12', rest: 60, image: 'triceps.svg', description: 'Sentado, sujeta una mancuerna ligera con ambas manos. Flexiona y extiende los codos con control.', tip: 'Evita arquear la espalda y detente si molesta el hombro.' }
    ]
  }
]


// Objetivo opcional: hipertrofia con énfasis estético, manteniendo piernas y recuperación.
// Las ilustraciones y las guías del plan original se comparten entre los dos objetivos.
export const muscularDays: WorkoutDay[] = [
  {
    id: 1, name: 'Espalda, pecho y cuádriceps', focus: 'Torso + piernas',
    summary: 'Base de hipertrofia: remo, press plano y sentadilla, con trabajo de hombros y bíceps.', suggested: 'Lunes · 50–60 min',
    exercises: [
      { id: 'm1-row', name: 'Remo con pecho apoyado', group: 'Espalda', sets: 3, reps: '8–12', rest: 90, image: 'chest-row.svg', description: 'Inclina el banco 30–45°. Apoya el pecho y lleva los codos hacia la cadera; baja con control.', tip: 'Tus 25 lb por mancuerna son una referencia inicial, no una obligación.' },
      { id: 'm1-bench', name: 'Press de pecho plano', group: 'Pecho', sets: 3, reps: '8–12', rest: 120, image: 'bench-press.svg', description: 'En banco plano, mantén los pies firmes. Baja las mancuernas con control y empuja hacia arriba.', tip: 'Puedes utilizar barra libre solo con soportes seguros; empieza ligero.' },
      { id: 'm1-goblet', name: 'Sentadilla goblet', group: 'Cuádriceps · glúteos', sets: 3, reps: '10–12', rest: 90, image: 'goblet-squat.svg', description: 'Sujeta una mancuerna frente al pecho o empieza sin carga; desciende a una profundidad cómoda.', tip: 'Prioriza el equilibrio y mantén los talones apoyados.' },
      { id: 'm1-shoulder', name: 'Press de hombros sentado', group: 'Hombros', sets: 2, reps: '8–12', rest: 90, image: 'shoulder-press.svg', description: 'Respaldo casi vertical; lleva las mancuernas desde los hombros hacia arriba.', tip: 'Como vienes del press de pecho, ajusta la carga a la fatiga.' },
      { id: 'm1-curl', name: 'Curl de bíceps', group: 'Bíceps', sets: 2, reps: '10–15', rest: 60, image: 'curl.svg', description: 'Flexiona los codos sin balancear el cuerpo y baja lentamente.', tip: 'Evita utilizar la espalda para impulsar las mancuernas.' }
    ]
  },
  {
    id: 2, name: 'Piernas, hombros y espalda', focus: 'Fuerza y proporción',
    summary: 'Énfasis en cadena posterior y deltoides laterales, con remo para completar el torso.', suggested: 'Miércoles · 50–60 min',
    exercises: [
      { id: 'm2-rdl', name: 'Peso muerto rumano', group: 'Femoral · glúteos', sets: 3, reps: '8–12', rest: 120, image: 'rdl.svg', description: 'Lleva la cadera hacia atrás con rodillas semiflexionadas y espalda neutra.', tip: 'No necesitas llegar hasta el suelo: detente cuando pierdas la postura.' },
      { id: 'm2-split', name: 'Sentadilla dividida con apoyo', group: 'Piernas · glúteos', sets: 2, reps: '8–10 por pierna', rest: 90, image: 'split-squat.svg', description: 'Un pie delante del otro, sujetándote de un soporte firme para equilibrarte.', tip: 'Empieza sin mancuernas y realiza un recorrido cómodo.' },
      { id: 'm2-lateral', name: 'Elevaciones laterales', group: 'Hombros laterales', sets: 3, reps: '12–15', rest: 60, image: 'lateral-raise.svg', description: 'Con mancuernas ligeras, eleva los brazos hacia los lados sin balancearte.', tip: 'Evita encoger los hombros y no es necesario subir por encima de la altura de los hombros.' },
      { id: 'm2-row', name: 'Remo unilateral', group: 'Espalda', sets: 3, reps: '10–12 por brazo', rest: 90, image: 'one-arm-row.svg', description: 'Apoya una mano en el banco estable y lleva el codo hacia la cadera sin girar el torso.', tip: 'Ambos brazos equivalen a una serie.' },
      { id: 'm2-calf', name: 'Elevación de pantorrillas', group: 'Pantorrillas', sets: 2, reps: '12–15', rest: 60, image: 'calf-raise.svg', description: 'De pie y con apoyo estable, elévate sobre las puntas de los pies y baja con control.', tip: 'Empieza con tu propio peso y evita rebotar.' }
    ]
  },
  {
    id: 3, name: 'Espalda en V, pecho y brazos', focus: 'Énfasis estético',
    summary: 'Segundo estímulo de pecho y espalda, trabajo de brazos y hombro posterior, sin abandonar piernas.', suggested: 'Viernes · 55–65 min',
    exercises: [
      { id: 'm3-incline', name: 'Press inclinado con mancuernas', group: 'Pecho', sets: 3, reps: '8–12', rest: 120, image: 'incline-press.svg', description: 'Banco a 15–30°. Desciende con control y empuja hacia arriba.', tip: 'No necesitas una inclinación muy alta.' },
      { id: 'm3-row', name: 'Remo con agarre neutro', group: 'Espalda', sets: 3, reps: '10–12', rest: 90, image: 'chest-row.svg', description: 'Pecho apoyado en el banco inclinado, palmas enfrentadas y codos cerca del torso.', tip: 'Mantén el tronco fijo y controla la bajada.' },
      { id: 'm3-goblet', name: 'Sentadilla goblet', group: 'Cuádriceps · glúteos', sets: 2, reps: '10–12', rest: 90, image: 'goblet-squat.svg', description: 'Repite la sentadilla del lunes y progresa gradualmente si mantienes el control.', tip: 'Puedes continuar sin peso si aún estás dominando el patrón.' },
      { id: 'm3-reverse', name: 'Aperturas inversas', group: 'Hombro posterior · espalda alta', sets: 2, reps: '12–15', rest: 60, image: 'reverse-fly.svg', description: 'Pecho apoyado en banco inclinado; abre los brazos lateralmente con mancuernas ligeras.', tip: 'No encogas los hombros ni uses impulso.' },
      { id: 'm3-hammer', name: 'Curl martillo', group: 'Bíceps · braquial', sets: 2, reps: '10–12', rest: 60, image: 'hammer-curl.svg', description: 'Eleva las mancuernas con las palmas enfrentadas durante todo el recorrido.', tip: 'Mantén los codos próximos al cuerpo.' },
      { id: 'm3-triceps', name: 'Extensión de tríceps acostado', group: 'Tríceps', sets: 2, reps: '10–15', rest: 60, image: 'lying-triceps.svg', description: 'Acostado en banco plano, flexiona los codos llevando mancuernas ligeras hacia los lados de la cabeza y vuelve a extender.', tip: 'Muévete con control; si el hombro o el codo duelen, detente.' }
    ]
  }
]

export type TrainingGoal = 'general' | 'muscular'
export const goals: { id: TrainingGoal; title: string; subtitle: string; description: string }[] = [
  { id: 'general', title: 'Fuerza y condición general', subtitle: 'Rutina original', description: 'Cuerpo completo equilibrado para aprender técnica, mejorar fuerza y acompañar la reducción de grasa.' },
  { id: 'muscular', title: 'Musculoso natural', subtitle: 'Hipertrofia progresiva', description: 'Tres días de cuerpo completo con énfasis en espalda, pecho, hombros y brazos sin descuidar piernas.' }
]
export const daysByGoal: Record<TrainingGoal, WorkoutDay[]> = { general: generalDays, muscular: muscularDays }
