// Diccionario offline inglés → español para el lector.
// Cada entrada: { traduccion, pronunciacion, categoria, ejemplo }
//  - pronunciacion: aproximación fonética pensada para hispanohablantes.
//  - categoria: categoría gramatical en español.
// Cubre el vocabulario más relevante de los capítulos 1–3. Para palabras no
// incluidas, lookupWord() devuelve un resultado de respaldo (igualmente se
// puede escuchar la pronunciación real con la Web Speech API).

export const dictionary = {
  truth: {
    traduccion: "verdad",
    pronunciacion: "truuz",
    categoria: "sustantivo",
    ejemplo: "It is a simple truth.",
  },
  universally: {
    traduccion: "universalmente",
    pronunciacion: "iunivérsali",
    categoria: "adverbio",
    ejemplo: "It is universally known.",
  },
  acknowledged: {
    traduccion: "reconocido",
    pronunciacion: "aknólesht",
    categoria: "adjetivo/verbo",
    ejemplo: "A widely acknowledged fact.",
  },
  single: {
    traduccion: "soltero / único",
    pronunciacion: "síngol",
    categoria: "adjetivo",
    ejemplo: "He is a single man.",
  },
  man: {
    traduccion: "hombre",
    pronunciacion: "man",
    categoria: "sustantivo",
    ejemplo: "The man arrived.",
  },
  possession: {
    traduccion: "posesión",
    pronunciacion: "poséshon",
    categoria: "sustantivo",
    ejemplo: "In possession of a fortune.",
  },
  good: {
    traduccion: "bueno / buena",
    pronunciacion: "gud",
    categoria: "adjetivo",
    ejemplo: "A good fortune.",
  },
  fortune: {
    traduccion: "fortuna",
    pronunciacion: "fórchun",
    categoria: "sustantivo",
    ejemplo: "A large fortune.",
  },
  must: {
    traduccion: "debe / tiene que",
    pronunciacion: "mast",
    categoria: "verbo modal",
    ejemplo: "He must go.",
  },
  want: {
    traduccion: "querer / necesitar",
    pronunciacion: "uánt",
    categoria: "verbo",
    ejemplo: "In want of a wife.",
  },
  wife: {
    traduccion: "esposa",
    pronunciacion: "uáif",
    categoria: "sustantivo",
    ejemplo: "His wife is kind.",
  },
  feelings: {
    traduccion: "sentimientos",
    pronunciacion: "fílings",
    categoria: "sustantivo",
    ejemplo: "Her feelings were hurt.",
  },
  views: {
    traduccion: "opiniones / vistas",
    pronunciacion: "viús",
    categoria: "sustantivo",
    ejemplo: "His political views.",
  },
  neighbourhood: {
    traduccion: "vecindario",
    pronunciacion: "néiborjud",
    categoria: "sustantivo",
    ejemplo: "A quiet neighbourhood.",
  },
  families: {
    traduccion: "familias",
    pronunciacion: "fámilis",
    categoria: "sustantivo",
    ejemplo: "Two families met.",
  },
  considered: {
    traduccion: "considerado",
    pronunciacion: "consíderd",
    categoria: "verbo",
    ejemplo: "He is considered rich.",
  },
  property: {
    traduccion: "propiedad",
    pronunciacion: "próperti",
    categoria: "sustantivo",
    ejemplo: "Private property.",
  },
  daughters: {
    traduccion: "hijas",
    pronunciacion: "dóters",
    categoria: "sustantivo",
    ejemplo: "She has five daughters.",
  },
  dear: {
    traduccion: "querido / querida",
    pronunciacion: "díar",
    categoria: "adjetivo",
    ejemplo: "My dear friend.",
  },
  said: {
    traduccion: "dijo",
    pronunciacion: "sed",
    categoria: "verbo",
    ejemplo: "She said hello.",
  },
  lady: {
    traduccion: "dama / señora",
    pronunciacion: "léidi",
    categoria: "sustantivo",
    ejemplo: "The lady smiled.",
  },
  heard: {
    traduccion: "oído / escuchó",
    pronunciacion: "jerd",
    categoria: "verbo",
    ejemplo: "I heard the news.",
  },
  park: {
    traduccion: "parque / finca",
    pronunciacion: "park",
    categoria: "sustantivo",
    ejemplo: "Netherfield Park.",
  },
  let: {
    traduccion: "alquilado / dejar",
    pronunciacion: "let",
    categoria: "verbo",
    ejemplo: "The house is let.",
  },
  last: {
    traduccion: "último / por fin",
    pronunciacion: "last",
    categoria: "adjetivo/adverbio",
    ejemplo: "At last he came.",
  },
  replied: {
    traduccion: "respondió",
    pronunciacion: "ripláid",
    categoria: "verbo",
    ejemplo: "He replied quickly.",
  },
  answer: {
    traduccion: "respuesta / responder",
    pronunciacion: "ánser",
    categoria: "sustantivo/verbo",
    ejemplo: "Give me an answer.",
  },
  know: {
    traduccion: "saber / conocer",
    pronunciacion: "nou",
    categoria: "verbo",
    ejemplo: "I know the truth.",
  },
  cried: {
    traduccion: "exclamó / lloró",
    pronunciacion: "cráid",
    categoria: "verbo",
    ejemplo: "She cried out.",
  },
  impatiently: {
    traduccion: "con impaciencia",
    pronunciacion: "impéishentli",
    categoria: "adverbio",
    ejemplo: "He waited impatiently.",
  },
  tell: {
    traduccion: "decir / contar",
    pronunciacion: "tel",
    categoria: "verbo",
    ejemplo: "Tell me a story.",
  },
  objection: {
    traduccion: "objeción",
    pronunciacion: "obshécshon",
    categoria: "sustantivo",
    ejemplo: "I have no objection.",
  },
  invitation: {
    traduccion: "invitación",
    pronunciacion: "invitéishon",
    categoria: "sustantivo",
    ejemplo: "A dinner invitation.",
  },
  enough: {
    traduccion: "suficiente",
    pronunciacion: "ináf",
    categoria: "adverbio/adjetivo",
    ejemplo: "That is enough.",
  },
  young: {
    traduccion: "joven",
    pronunciacion: "iáng",
    categoria: "adjetivo",
    ejemplo: "A young man.",
  },
  large: {
    traduccion: "grande",
    pronunciacion: "larsh",
    categoria: "adjetivo",
    ejemplo: "A large house.",
  },
  delighted: {
    traduccion: "encantado",
    pronunciacion: "diláited",
    categoria: "adjetivo",
    ejemplo: "I am delighted.",
  },
  immediately: {
    traduccion: "inmediatamente",
    pronunciacion: "imídiatli",
    categoria: "adverbio",
    ejemplo: "Come immediately.",
  },
  servants: {
    traduccion: "criados / sirvientes",
    pronunciacion: "sérvants",
    categoria: "sustantivo",
    ejemplo: "The servants worked.",
  },
  house: {
    traduccion: "casa",
    pronunciacion: "jáus",
    categoria: "sustantivo",
    ejemplo: "A big house.",
  },
  week: {
    traduccion: "semana",
    pronunciacion: "uík",
    categoria: "sustantivo",
    ejemplo: "Next week.",
  },
  name: {
    traduccion: "nombre",
    pronunciacion: "néim",
    categoria: "sustantivo",
    ejemplo: "What is your name?",
  },
  married: {
    traduccion: "casado / casada",
    pronunciacion: "márid",
    categoria: "adjetivo",
    ejemplo: "They are married.",
  },
  sure: {
    traduccion: "seguro",
    pronunciacion: "shúar",
    categoria: "adjetivo",
    ejemplo: "I am sure.",
  },
  year: {
    traduccion: "año",
    pronunciacion: "íar",
    categoria: "sustantivo",
    ejemplo: "Four thousand a year.",
  },
  fine: {
    traduccion: "fino / excelente",
    pronunciacion: "fáin",
    categoria: "adjetivo",
    ejemplo: "A fine thing.",
  },
  thing: {
    traduccion: "cosa",
    pronunciacion: "zing",
    categoria: "sustantivo",
    ejemplo: "A good thing.",
  },
  girls: {
    traduccion: "chicas / niñas",
    pronunciacion: "guerls",
    categoria: "sustantivo",
    ejemplo: "The girls played.",
  },
  tiresome: {
    traduccion: "pesado / fastidioso",
    pronunciacion: "táiarsom",
    categoria: "adjetivo",
    ejemplo: "How tiresome you are!",
  },
  marrying: {
    traduccion: "casarse (con)",
    pronunciacion: "mári-ing",
    categoria: "verbo",
    ejemplo: "Thinking of marrying her.",
  },
  design: {
    traduccion: "propósito / diseño",
    pronunciacion: "disáin",
    categoria: "sustantivo",
    ejemplo: "His design was clear.",
  },
  nonsense: {
    traduccion: "tonterías",
    pronunciacion: "nónsens",
    categoria: "sustantivo",
    ejemplo: "That is nonsense.",
  },
  likely: {
    traduccion: "probable",
    pronunciacion: "láikli",
    categoria: "adjetivo/adverbio",
    ejemplo: "It is very likely.",
  },
  love: {
    traduccion: "amor / amar",
    pronunciacion: "lav",
    categoria: "sustantivo/verbo",
    ejemplo: "Fall in love.",
  },
  visit: {
    traduccion: "visita / visitar",
    pronunciacion: "vísit",
    categoria: "verbo/sustantivo",
    ejemplo: "You must visit him.",
  },
  handsome: {
    traduccion: "apuesto / guapo",
    pronunciacion: "jánsom",
    categoria: "adjetivo",
    ejemplo: "A handsome man.",
  },
  like: {
    traduccion: "gustar / como",
    pronunciacion: "láik",
    categoria: "verbo/preposición",
    ejemplo: "I like tea.",
  },
  best: {
    traduccion: "mejor",
    pronunciacion: "best",
    categoria: "adjetivo",
    ejemplo: "The best choice.",
  },
  party: {
    traduccion: "grupo / fiesta",
    pronunciacion: "párti",
    categoria: "sustantivo",
    ejemplo: "A large party.",
  },
  beauty: {
    traduccion: "belleza",
    pronunciacion: "biúti",
    categoria: "sustantivo",
    ejemplo: "Her beauty was famous.",
  },
  nerves: {
    traduccion: "nervios",
    pronunciacion: "nervs",
    categoria: "sustantivo",
    ejemplo: "My poor nerves!",
  },
  respect: {
    traduccion: "respeto / respetar",
    pronunciacion: "rispékt",
    categoria: "sustantivo/verbo",
    ejemplo: "I have respect for you.",
  },
  friends: {
    traduccion: "amigos",
    pronunciacion: "frends",
    categoria: "sustantivo",
    ejemplo: "Old friends.",
  },
  suffer: {
    traduccion: "sufrir",
    pronunciacion: "sáfer",
    categoria: "verbo",
    ejemplo: "You do not know what I suffer.",
  },
  hope: {
    traduccion: "esperar / esperanza",
    pronunciacion: "joup",
    categoria: "verbo/sustantivo",
    ejemplo: "I hope so.",
  },
  character: {
    traduccion: "carácter",
    pronunciacion: "káracter",
    categoria: "sustantivo",
    ejemplo: "A strong character.",
  },
  understand: {
    traduccion: "entender",
    pronunciacion: "anderstánd",
    categoria: "verbo",
    ejemplo: "I understand you.",
  },
  proud: {
    traduccion: "orgulloso",
    pronunciacion: "práud",
    categoria: "adjetivo",
    ejemplo: "He was proud.",
  },
  disagreeable: {
    traduccion: "desagradable",
    pronunciacion: "disagríabol",
    categoria: "adjetivo",
    ejemplo: "A disagreeable man.",
  },
  dance: {
    traduccion: "bailar / baile",
    pronunciacion: "dans",
    categoria: "verbo/sustantivo",
    ejemplo: "Let us dance.",
  },
  dancing: {
    traduccion: "bailando / baile",
    pronunciacion: "dánsing",
    categoria: "verbo/sustantivo",
    ejemplo: "Fond of dancing.",
  },
  ball: {
    traduccion: "baile / pelota",
    pronunciacion: "bol",
    categoria: "sustantivo",
    ejemplo: "The next ball.",
  },
  assembly: {
    traduccion: "baile / reunión",
    pronunciacion: "asémbli",
    categoria: "sustantivo",
    ejemplo: "At the assembly.",
  },
  beautiful: {
    traduccion: "hermoso / hermosa",
    pronunciacion: "biútiful",
    categoria: "adjetivo",
    ejemplo: "A beautiful creature.",
  },
  creature: {
    traduccion: "criatura",
    pronunciacion: "críchur",
    categoria: "sustantivo",
    ejemplo: "A lovely creature.",
  },
  tolerable: {
    traduccion: "pasable / tolerable",
    pronunciacion: "tólerabol",
    categoria: "adjetivo",
    ejemplo: "She is tolerable.",
  },
  tempt: {
    traduccion: "tentar",
    pronunciacion: "tempt",
    categoria: "verbo",
    ejemplo: "Not enough to tempt me.",
  },
  pretty: {
    traduccion: "bonita",
    pronunciacion: "príti",
    categoria: "adjetivo",
    ejemplo: "A pretty girl.",
  },
  evening: {
    traduccion: "noche / velada",
    pronunciacion: "ívning",
    categoria: "sustantivo",
    ejemplo: "A pleasant evening.",
  },
  sisters: {
    traduccion: "hermanas",
    pronunciacion: "sísters",
    categoria: "sustantivo",
    ejemplo: "Her two sisters.",
  },
  friend: {
    traduccion: "amigo / amiga",
    pronunciacion: "frend",
    categoria: "sustantivo",
    ejemplo: "His friend Darcy.",
  },
  room: {
    traduccion: "sala / habitación",
    pronunciacion: "rum",
    categoria: "sustantivo",
    ejemplo: "The whole room looked.",
  },
  partner: {
    traduccion: "pareja (de baile)",
    pronunciacion: "pártner",
    categoria: "sustantivo",
    ejemplo: "Return to your partner.",
  },
  pleasant: {
    traduccion: "agradable",
    pronunciacion: "plésant",
    categoria: "adjetivo",
    ejemplo: "A pleasant countenance.",
  },
  countenance: {
    traduccion: "semblante",
    pronunciacion: "káuntenans",
    categoria: "sustantivo",
    ejemplo: "A noble countenance.",
  },
  manners: {
    traduccion: "modales",
    pronunciacion: "máners",
    categoria: "sustantivo",
    ejemplo: "Easy manners.",
  },
  admiration: {
    traduccion: "admiración",
    pronunciacion: "admiréishon",
    categoria: "sustantivo",
    ejemplo: "Looked at with admiration.",
  },
  conceited: {
    traduccion: "engreído",
    pronunciacion: "consíted",
    categoria: "adjetivo",
    ejemplo: "So high and conceited.",
  },
  detest: {
    traduccion: "detestar",
    pronunciacion: "ditést",
    categoria: "verbo",
    ejemplo: "I detest the man.",
  },
  library: {
    traduccion: "biblioteca",
    pronunciacion: "láibreri",
    categoria: "sustantivo",
    ejemplo: "In his library.",
  },
  horse: {
    traduccion: "caballo",
    pronunciacion: "jors",
    categoria: "sustantivo",
    ejemplo: "A black horse.",
  },
  coat: {
    traduccion: "abrigo / casaca",
    pronunciacion: "kóut",
    categoria: "sustantivo",
    ejemplo: "A blue coat.",
  },
  dinner: {
    traduccion: "cena",
    pronunciacion: "díner",
    categoria: "sustantivo",
    ejemplo: "An invitation to dinner.",
  },
  town: {
    traduccion: "ciudad / pueblo",
    pronunciacion: "táun",
    categoria: "sustantivo",
    ejemplo: "He went to town.",
  },
  cough: {
    traduccion: "toser / tos",
    pronunciacion: "kof",
    categoria: "verbo/sustantivo",
    ejemplo: "Don't cough so.",
  },
  father: {
    traduccion: "padre",
    pronunciacion: "fáder",
    categoria: "sustantivo",
    ejemplo: "An excellent father.",
  },
  mother: {
    traduccion: "madre",
    pronunciacion: "máder",
    categoria: "sustantivo",
    ejemplo: "Said her mother.",
  },
  youngest: {
    traduccion: "la más joven",
    pronunciacion: "iánguest",
    categoria: "adjetivo",
    ejemplo: "Though I am the youngest.",
  },
  tallest: {
    traduccion: "la más alta",
    pronunciacion: "tólest",
    categoria: "adjetivo",
    ejemplo: "I'm the tallest.",
  },
  pride: {
    traduccion: "orgullo",
    pronunciacion: "práid",
    categoria: "sustantivo",
    ejemplo: "Pride and Prejudice.",
  },
  prejudice: {
    traduccion: "prejuicio",
    pronunciacion: "préshudis",
    categoria: "sustantivo",
    ejemplo: "Without prejudice.",
  },
  gentleman: {
    traduccion: "caballero",
    pronunciacion: "chéntelman",
    categoria: "sustantivo",
    ejemplo: "A perfect gentleman.",
  },
  money: {
    traduccion: "dinero",
    pronunciacion: "máni",
    categoria: "sustantivo",
    ejemplo: "He has money.",
  },
  rich: {
    traduccion: "rico",
    pronunciacion: "rich",
    categoria: "adjetivo",
    ejemplo: "A rich man.",
  },
  marry: {
    traduccion: "casarse",
    pronunciacion: "mári",
    categoria: "verbo",
    ejemplo: "She will marry him.",
  },
  eldest: {
    traduccion: "el/la mayor",
    pronunciacion: "éldest",
    categoria: "adjetivo",
    ejemplo: "The eldest sister.",
  },
  pleased: {
    traduccion: "complacido / contento",
    pronunciacion: "plíisd",
    categoria: "adjetivo",
    ejemplo: "I am pleased.",
  },
  admired: {
    traduccion: "admirada / admiró",
    pronunciacion: "admáiard",
    categoria: "verbo",
    ejemplo: "Jane was much admired.",
  },
};

// Normaliza una palabra: minúsculas y sin signos de puntuación a los lados.
export function normalizeWord(word) {
  return word.toLowerCase().replace(/^[^a-zà-ÿ']+|[^a-zà-ÿ']+$/gi, "");
}

// Busca una palabra en el diccionario; si no existe, devuelve un resultado
// de respaldo (la pronunciación de audio sigue funcionando vía Web Speech API).
export function lookupWord(rawWord) {
  const key = normalizeWord(rawWord);
  if (dictionary[key]) {
    return { word: key, found: true, ...dictionary[key] };
  }
  return {
    word: key,
    found: false,
    traduccion: "(sin traducción offline)",
    pronunciacion: "—",
    categoria: "—",
    ejemplo: "",
  };
}

export default dictionary;
