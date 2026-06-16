// =========================================================================
// ESTRUCTURA CURRICULAR DE LOS 40 TEMAS (A1 - C2) EN ESPAÑOL PARA EL ALUMNO
// =========================================================================

const TEMARIO_COMPLETO = [
  // --- BÁSICO (A1 - A2) ---
  { id: "alphabet_numbers", nivel: "A1 - A2 | Gramática Básica", tema: "1. Alphabet & Numbers", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", keyword: "el deletreo y los números en contextos reales" },
  { id: "verb_to_be", nivel: "A1 - A2 | Gramática Básica", tema: "2. Verb To Be (Am/Is/Are)", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600", keyword: "hablar de tu identidad, origen y estados" },
  { id: "pronouns_subject_object", nivel: "A1 - A2 | Gramática Básica", tema: "3. Subject & Object Pronouns", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600", keyword: "quién hace la acción y quién la recibe" },
  { id: "possessives", nivel: "A1 - A2 | Gramática Básica", tema: "4. Possessive Adj & Pronouns", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600", keyword: "expresar posesión y pertenencia con claridad" },
  { id: "demonstratives", nivel: "A1 - A2 | Gramática Básica", tema: "5. Demonstratives", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600", keyword: "señalar objetos según su distancia" },
  { id: "nouns_plurals", nivel: "A1 - A2 | Gramática Básica", tema: "6. Nouns & Plurals", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600", keyword: "formar plurales regulares e irregulares" },
  { id: "there_is_are", nivel: "A1 - A2 | Gramática Básica", tema: "7. There is / There are", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600", keyword: "describir la existencia y disponibilidad de cosas" },
  { id: "articles_a_an_the", nivel: "A1 - A2 | Gramática Básica", tema: "8. Articles: A, An, The", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", keyword: "usar artículos según las reglas de sonido" },
  { id: "present_simple", nivel: "A1 - A2 | Gramática Básica", tema: "9. Present Simple (Routines)", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "hablar de tus hábitos, rutinas y verdades generales" },
  { id: "adverbs_frequency", nivel: "A1 - A2 | Gramática Básica", tema: "10. Adverbs of Frequency", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "expresar qué tan seguido haces una actividad" },
  { id: "present_continuous", nivel: "A1 - A2 | Gramática Básica", tema: "11. Present Continuous", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600", keyword: "describir acciones que están ocurriendo en este momento" },
  { id: "past_simple_regular", nivel: "A1 - A2 | Gramática Básica", tema: "12. Past Simple: Regular", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "hablar de acciones pasadas con verbos regulares" },
  { id: "past_simple_irregular", nivel: "A1 - A2 | Gramática Básica", tema: "13. Past Simple: Irregular", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "dominar los cambios en los verbos irregulares pasados" },
  { id: "past_continuous", nivel: "A1 - A2 | Gramática Básica", tema: "14. Past Continuous", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600", keyword: "acciones que estaban en progreso en el pasado" },
  { id: "future_will", nivel: "A1 - A2 | Gramática Básica", tema: "15. Future Simple (Will)", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600", keyword: "tomar decisiones espontáneas y hacer promesas" },
  { id: "future_going_to", nivel: "A1 - A2 | Gramática Básica", tema: "16. Future (Going to)", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "expresar planes e intenciones a futuro" },
  { id: "modals_basic", nivel: "A1 - A2 | Gramática Básica", tema: "17. Basic Modals", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600", keyword: "expresar habilidades, consejos y obligaciones" },

  // --- INTERMEDIO (B1 - B2) ---
  { id: "present_perfect", nivel: "B1 - B2 | Gramática Intermedia", tema: "18. Present Perfect Simple", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600", keyword: "conectar tus experiencias pasadas con el presente" },
  { id: "present_perfect_continuous", nivel: "B1 - B2 | Gramática Intermedia", tema: "19. Present Perfect Continuous", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600", keyword: "resaltar la duración de una actividad que sigue vigente" },
  { id: "past_perfect", nivel: "B1 - B2 | Gramática Intermedia", tema: "20. Past Perfect Simple", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "ordenar dos eventos pasados de forma cronológica" },
  { id: "past_perfect_continuous", nivel: "B1 - B2 | Gramática Intermedia", tema: "21. Past Perfect Continuous", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "procesos continuos que ocurrieron antes de otro evento pasado" },
  { id: "future_continuous", nivel: "B1 - B2 | Gramática Intermedia", tema: "22. Future Continuous", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600", keyword: "visualizar acciones que estarán en progreso en el futuro" },
  { id: "future_perfect", nivel: "B1 - B2 | Gramática Intermedia", tema: "23. Future Perfect Simple", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "asegurar que una meta estará cumplida antes de un límite temporal" },
  { id: "conditionals_012", nivel: "B1 - B2 | Gramática Intermedia", tema: "24. Zero & First Conditionals", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", keyword: "establecer condiciones reales, lógicas y probables" },
  { id: "conditional_2", nivel: "B1 - B2 | Gramática Intermedia", tema: "25. Second Conditional", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600", keyword: "plantear escenarios imaginarios o hipotéticos en el presente" },
  { id: "passive_voice", nivel: "B1 - B2 | Gramática Intermedia", tema: "26. Passive Voice Basics", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600", keyword: "darle más importancia a la acción u objeto que al ejecutor" },
  { id: "reported_speech", nivel: "B1 - B2 | Gramática Intermedia", tema: "27. Reported Speech", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600", keyword: "contar o reportar lo que otra persona dijo" },
  { id: "relative_clauses", nivel: "B1 - B2 | Gramática Intermedia", tema: "28. Relative Clauses", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", keyword: "unir ideas agregando información clave sin repetir palabras" },
  { id: "gerunds_infinitives", nivel: "B1 - B2 | Gramática Intermedia", tema: "29. Gerunds vs Infinitives", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "saber cuándo usar un verbo con -ing o con 'to'" },
  { id: "modals_deduction", nivel: "B1 - B2 | Gramática Intermedia", tema: "30. Modals of Deduction", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600", keyword: "hacer suposiciones lógicas basadas en la evidencia actual" },
  { id: "phrasal_verbs_intro", nivel: "B1 - B2 | Gramática Intermedia", tema: "31. Phrasal Verbs Foundations", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600", keyword: "comprender combinaciones de verbos y partículas" },

  /* --- AVANZADO (C1 - C2) --- */
  { id: "third_conditional", nivel: "C1 - C2 | Retórica Avanzada", tema: "32. Third Conditional", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "especular sobre situaciones pasadas que ya no se pueden cambiar" },
  { id: "mixed_conditionals", nivel: "C1 - C2 | Retórica Avanzada", tema: "33. Mixed Conditionals", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "conectar una condición del pasado con un resultado en el presente" },
  { id: "inversion", nivel: "C1 - C2 | Retórica Avanzada", tema: "34. Inversion Rules", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", keyword: "cambiar el orden de las palabras para dar énfasis formal" },
  { id: "cleft_sentences", nivel: "C1 - C2 | Retórica Avanzada", tema: "35. Cleft Sentences", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600", keyword: "dividir una oración para destacar un dato específico" },
  { id: "subjunctive_mood", nivel: "C1 - C2 | Retórica Avanzada", tema: "36. The Subjunctive Mood", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "expresar demandas, peticiones urgentes o deseos formales" },
  { id: "participle_clauses", nivel: "C1 - C2 | Retórica Avanzada", tema: "37. Participle Clauses", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600", keyword: "reducir oraciones largas usando participios activos o pasivos" },
  { id: "advanced_modals_perfect", nivel: "C1 - C2 | Retórica Avanzada", tema: "38. Perfect Modals", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600", keyword: "analizar e interpretar eventos del pasado con alta precisión" },
  { id: "ellipsis_substitution", nivel: "C1 - C2 | Retórica Avanzada", tema: "39. Ellipsis & Substitution", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600", keyword: "evitar repeticiones innecesarias para ganar fluidez" },
  { id: "discourse_markers", nivel: "C1 - C2 | Retórica Avanzada", tema: "40. Advanced Discourse Markers", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600", keyword: "conectar argumentos complejos de manera natural y formal" }
];

const CURSO_GRAMATICA = {};

// Motor Generador Automatizado enfocado 100% en la experiencia de aprendizaje del alumno
TEMARIO_COMPLETO.forEach(t => {
  CURSO_GRAMATICA[t.id] = {
    tituloNivel: t.nivel,
    nombreTema: t.tema,
    imagenDestacada: t.img,
    diapositivas: [
      {
        tipo: "teoria_extensa",
        titulo: `1. Concepto Esencial 📚`,
        contenido: `Te damos la bienvenida al estudio de <strong>${t.tema}</strong>. Dominar este bloque es un paso fundamental para comunicarte de manera clara, profesional y natural en cualquier entorno en inglés.<br><br>En esta lección aprenderás las claves prácticas para manejar con fluidez <u>${t.keyword}</u>. Verás cómo organizar tus ideas te dará muchísima seguridad al hablar y escribir.`,
        formula: `Meta de Aprendizaje: Usar la estructura de ${t.id.replace(/_/g, " ")} con total naturalidad.`
      },
      {
        tipo: "teoria_extensa",
        titulo: "2. Reglas Prácticas de Construcción 🛠️",
        contenido: "Veamos cómo armar esta estructura paso a paso sin complicaciones. Al construir frases en inglés, cada elemento tiene un lugar asignado para que tu mensaje sea fácil de entender por hablantes nativos.<br><br>💡 <em>Un gran consejo:</em> Observa cómo cambian los conectores principales y enfócate en la relación entre el sujeto que realiza la acción y las palabras que lo acompañan.",
        formula: `Guía Visual:\nEstructura Clave ➔ Uso correcto de [${t.keyword.toUpperCase()}]`
      },
      {
        tipo: "ejemplos_visuales",
        titulo: "3. Modelos de Uso en la Vida Real 🖥️",
        contenido: "Analiza con atención estos ejemplos prácticos de comunicación cotidiana y profesional. Observa con cuidado las palabras resaltadas en negrita para entender el patrón.",
        formula: "⚠️ Tip de Fluidez: Mantén tus estructuras limpias para que tu mensaje sea directo.",
        ejemplos: [
          `✨ <strong>Ejemplo A:</strong> We meticulously optimized the structural assets concerning <strong>${t.id.replace(/_/g, " ")}</strong>.`,
          `📝 <strong>Ejemplo B:</strong> The system doesn't require complex configurations for this specific layout.`,
          `🚀 <strong>Ejemplo C:</strong> After validation, the development group resolved the code mismatch instantly.`
        ]
      },
      {
        tipo: "examen_multi_pregunta",
        titulo: "4. Desafío de Práctica 🎯",
        preguntas: [
          {
            enunciado: `Pregunta 1/3: Elige la opción que aplique correctamente las reglas para ${t.id.replace(/_/g, " ")}:`,
            opciones: [
              { texto: `The correct parsing matrix for ${t.keyword}`, correcta: true, feedback: `¡Excelente trabajo! Esta opción sigue la lógica exacta de la estructura de ${t.id.replace(/_/g, " ")}.` },
              { texto: "An unoptimized layout variation", correcta: false, feedback: "Incorrecto porque esta combinación no sigue el orden gramatical estándar de este módulo." }
            ]
          },
          {
            enunciado: "Pregunta 2/3: ¿Cuál es una regla importante que debemos recordar al formular oraciones?",
            opciones: [
              { texto: "Evitar duplicar reglas o auxiliares de forma innecesaria", correcta: true, feedback: `¡Así se hace! En inglés, colocar dos marcas de tiempo o dos auxiliares juntos en la misma cláusula se considera un error redundante.` },
              { texto: "Usar siempre estructuras excesivamente largas", correcta: false, feedback: "Incorrecto porque las frases claras y directas suelen ser mucho más eficientes y naturales." }
            ]
          },
          {
            enunciado: `Pregunta 3/3: Selecciona la mejor actitud al poner en práctica las reglas de ${t.keyword}:`,
            opciones: [
              { texto: "Aplicar patrones consistentes y limpios", correcta: true, feedback: "¡Extraordinario! Seguir los patrones de forma consistente te garantiza hablar y escribir con total corrección." },
              { texto: "Mezclar estructuras sin verificar su orden", correcta: false, feedback: "Incorrecto porque desordenar los elementos puede confundir a la persona que te está escuchando." }
            ]
          }
        ]
      }
    ]
  };
});

// =========================================================================
// CONTENIDO ESPECÍFICO REESCRITO EXCLUSIVAMENTE PARA EL ALUMNO (PRESENT SIMPLE)
// =========================================================================
CURSO_GRAMATICA["present_simple"].diapositivas = [
  {
    tipo: "teoria_extensa",
    titulo: "1. El Concepto Central: Acciones Constantes y Hábitos ⏳",
    contenido: "Usamos el <strong>Present Simple</strong> para hablar de cosas que son **permanentes, hábitos, rutinas diarias o verdades generales** de la vida. Es el tiempo verbal que describe tu mundo regular.<br><br>💡 <em>¡Un buen truco!</em> Identificarás este tiempo muy rápido porque suele ir de la mano con palabras clave como <em>every day (todos los días), on Mondays (los lunes)</em> o adverbios de frecuencia.",
    formula: "• Routine: I wake up at 6 AM every day.\n• Fact: The sun rises in the east.\n• Habit: He drinks coffee in the morning."
  },
  {
    tipo: "teoria_extensa",
    titulo: "2. La Tercera Persona Singular (He, She, It) ✍️",
    contenido: "Esta es la regla más importante de este tiempo: Cuando construyes una oración afirmativa y el sujeto es <strong>He (Él), She (Ella) o It (Eso)</strong>, el verbo principal debe cambiar obligatoriamente añadiendo una terminación.<br><br>📝 <strong>Reglas de escritura según el verbo:</strong><br>• Verbos estándar: Añades simplemente una <strong>-s</strong> (work ➔ works).<br>• Si termina en -ch, -sh, -x, -ss, -o: Añades <strong>-es</strong> (watch ➔ watches, go ➔ goes).<br>• Si termina en consonante + Y: Cambias la Y por <strong>-ies</strong> (study ➔ studies).",
    formula: "Estructura:\n[Positivo] Subject + Verb(-s/-es) + Complement\n[Negativo] Subject + DOES NOT / DO NOT + Verb (Forma base)"
  },
  {
    tipo: "ejemplos_visuales",
    titulo: "3. Aplicación Práctica y el 'Efecto' del Negativo 🖥️",
    contenido: "¡Presta mucha atención a lo que pasa en las negaciones y preguntas! Cuando usas los auxiliares <strong>DOES NOT (doesn't)</strong> o <strong>DOES</strong>, el auxiliar ya indica que estás hablando en tercera persona. Por eso, el verbo principal **regresa a su forma base**.",
    formula: "⚠️ Error muy común: 'She doesn't works' ❌ -> 'She doesn't work' ✓",
    ejemplos: [
      "📝 <strong>Affirmative:</strong> Alex <strong>designs</strong> circular logos focusing on a minimal aesthetic.",
      "🛑 <strong>Negative:</strong> He <strong>doesn't work</strong> on weekends because he prefers to rest.",
      "❓ <strong>Question:</strong> <strong>Does</strong> she <strong>study</strong> digital illustration at night?"
    ]
  },
  {
    tipo: "examen_multi_pregunta",
    titulo: "4. Desafío de Práctica: Pon a prueba tus conocimientos 🎯",
    preguntas: [
      {
        enunciado: "Pregunta 1/3: Completa el espacio: 'My sister Maria ________ (manage) the financial transactions using mobile wallets.'",
        opciones: [
          { texto: "manage", correcta: false, feedback: "Incorrecto porque 'Maria' equivale al pronombre 'She' (Tercera persona singular). En oraciones afirmativas en presente es obligatorio aplicar la regla del sufijo -s al verbo." },
          { texto: "manages", correcta: true, feedback: "¡Excelente! Porque añadir -s al verbo ('manages') cumple a la perfección con la regla de la tercera persona singular." },
          { texto: "managing", correcta: false, feedback: "Incorrecto porque los verbos terminados en -ing no se usan para describir rutinas o hábitos directamente sin un verbo To Be al lado." }
        ]
      },
      {
        enunciado: "Pregunta 2/3: Completa el espacio: 'Our current corporate client ________ (not want) a complex menu structure on the website.'",
        opciones: [
          { texto: "don't want", correcta: false, feedback: "Incorrecto porque 'Client' es una sola persona en singular (He o She). El auxiliar negativo correcto para la tercera persona es 'doesn't'." },
          { texto: "doesn't want", correcta: true, feedback: "¡Perfecto! Porque usaste correctamente 'doesn't' para la tercera persona singular, lo que además mantiene el verbo 'want' en su forma base." },
          { texto: "doesn't wants", correcta: false, feedback: "¡Cuidado! Incorrecto porque el auxiliar 'doesn't' ya cumple la función de marcar la tercera persona; añadirle una 's' al verbo 'wants' es un error redundante." }
        ]
      },
      {
        enunciado: "Pregunta 3/3: Completa los espacios: '________ your brother Daniel ________ (play) digital video games on the Nintendo Switch?'",
        opciones: [
          { texto: "Do / play", correcta: false, feedback: "Incorrecto porque Daniel equivale al pronombre 'He' (Él). Las preguntas para tercera persona singular en presente deben iniciar siempre con el auxiliar 'Does'." },
          { texto: "Does / play", correcta: true, feedback: "¡Extraordinario! Porque 'Does' abre la pregunta para la tercera persona y hace que el verbo principal ('play') se mantenga correctamente en su forma base." },
          { texto: "Does / plays", correcta: false, feedback: "Incorrecto porque estás duplicando la regla. Si ya colocaste el auxiliar 'Does' al inicio, el verbo principal no debe llevar la letra 's'." }
        ]
      }
    ]
  }
];