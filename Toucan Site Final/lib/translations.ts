export const translations = {
  en: {
    menu: {
      games: "GAMES",
      aboutUs: "ABOUT US",
      contact: "CONTACT",
    },
    hero: {
      alt1: "EmojiLand Hero",
      alt2: "Tower Escape Hero",
    },
    news: [
      "A RELAXING GAME WHERE YOUR EMOS DEPEND ON YOU",
      "EMOJILAND NOW AVAILABLE ON ANDROID",
      "NEW UPDATE COMING SOON WITH MORE FEATURES",
      "THANK YOU FOR 10K DOWNLOADS",
      "JOIN OUR DISCORD COMMUNITY",
    ],
    studio: {
      line1: "WE ARE A SMALL",
      line2: "ARGENTINIAN INDIE",
      line3: "GAME STUDIO",
    },
    about: {
      title: "Crafting Worlds You'll Want to Stay In",
      p1: "We're an indie studio that believes in something simple yet powerful: video games should make you feel good.",
      p2: "Since our first title, we've worked with a clear philosophy: create experiences that invite exploration, spark creativity, and make you smile while you play. We don't chase trends or empty formulas. We chase that feeling of discovery, that moment when you lose track of time because you're genuinely enjoying yourself.",
      p3: "Our most ambitious project yet is Emojiland, a cozy city builder packed with personality, crafting, and endless possibilities. But it's just the beginning. At Toucan Studio, every game is an invitation to a new world, designed with care,",
      signature: "Toucan Studio",
    },
    footer: {
      copyright: "© 2025 Made with",
      by: "by Toucan Studio",
      privacyPolicy: "Privacy Policy",
    },
  },
  es: {
    menu: {
      games: "JUEGOS",
      aboutUs: "NOSOTROS",
      contact: "CONTACTO",
    },
    hero: {
      alt1: "EmojiLand Hero",
      alt2: "Tower Escape Hero",
    },
    news: [
      "UN JUEGO RELAJANTE DONDE TUS EMOJIS DEPENDEN DE TI",
      "EMOJILAND AHORA DISPONIBLE EN ANDROID",
      "NUEVA ACTUALIZACIÓN PRÓXIMAMENTE CON MÁS FUNCIONES",
      "GRACIAS POR 10K DESCARGAS",
      "ÚNETE A NUESTRA COMUNIDAD DE DISCORD",
    ],
    studio: {
      line1: "SOMOS UN PEQUEÑO",
      line2: "ESTUDIO INDIE",
      line3: "ARGENTINO",
    },
    about: {
      title: "Creando Mundos en los que Querrás Quedarte",
      p1: "Somos un estudio indie que cree en algo simple pero poderoso: los videojuegos deben hacerte sentir bien.",
      p2: "Desde nuestro primer título, trabajamos con una filosofía clara: crear experiencias que inviten a la exploración, despierten la creatividad y te hagan sonreír mientras juegas. No perseguimos tendencias ni fórmulas vacías. Perseguimos esa sensación de descubrimiento, ese momento en que pierdes la noción del tiempo porque genuinamente lo estás disfrutando.",
      p3: "Nuestro proyecto más ambicioso hasta ahora es Emojiland, un acogedor constructor de ciudades lleno de personalidad, crafteo y posibilidades infinitas. Pero es solo el comienzo. En Toucan Studio, cada juego es una invitación a un nuevo mundo, diseñado con cariño,",
      signature: "Toucan Studio",
    },
    footer: {
      copyright: "© 2025 Hecho con",
      by: "por Toucan Studio",
      privacyPolicy: "Política de Privacidad",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.en
