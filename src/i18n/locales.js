// ============================================================
//  i18n LOCALES — every human-readable string, in EN / ES / PT.
//  Structural data (icons, tags, logos, percentages) lives in
//  src/data/portfolioData.js and is merged by index/id at render.
//  Default language: English (EN).
// ============================================================

const en = {
  langName: 'English',
  dir: 'ltr',

  nav: {
    about: 'About',
    story: 'Story',
    education: 'Education',
    skills: 'Skills',
    services: 'Services',
    contact: 'Contact',
    talk: 'Let’s talk',
  },

  a11y: {
    theme: 'Toggle light / dark theme',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    language: 'Select language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    scroll: 'Scroll down',
    sectionNav: 'Section navigation',
    footerNav: 'Footer navigation',
  },

  hero: {
    eyebrow: 'Full Stack Developer',
    tagline: 'I build scalable, efficient, high-impact software.',
    talk: 'Let’s talk',
    discover: 'Discover more',
    available: 'Available for projects',
    now: 'Building robust backends and crafting seamless digital experiences across the full stack.',
    stats: [
      'Daily-driver technologies',
      'Technologies in my toolbox',
      'Years building software',
      'Curiosity for new tech',
    ],
  },

  about: {
    kicker: 'Who I am',
    title: 'A developer who turns problems into performance',
    lead:
      'Systems Engineer specialized in full-stack web development and software optimization. ' +
      'I build robust services, craft accessible interfaces, integrate APIs and tune databases — ' +
      'turning bottlenecks into performance and ideas into real impact.',
    cards: [
      { title: 'Performance-minded', text: 'I hunt bottlenecks and refactor heavy systems into fast, efficient ones.' },
      { title: 'Clean code believer', text: 'Readable, maintainable software that keeps paying off over time.' },
    ],
  },

  story: {
    kicker: 'A (mostly) fictional origin story',
    title: 'The Bug That Changed Everything',
    paragraphs: [
      'It was a Tuesday in 2019. I was 17, had 500 pesos to my name, and depended on Mr. Ernesto’s Wi-Fi — the town’s only connection, strategically located in the pharmacy across the street, billed by the hour and switched off without warning at 7:00 p.m. sharp.',
      'That day I was about to push my first project to GitHub: an inventory system for my mom’s shop, written in raw PHP — no framework, no comments, passwords in plain text, and a file proudly named "final_version_THIS_ONE.php". A masterpiece of chaos.',
      'It was 6:58 p.m. The upload began. The progress bar hit 87%. Silence. The cursor blinked three times, like a goodbye. Mr. Ernesto had pulled the plug on the router.',
      'The repo stayed half-uploaded. The system never reached the shop. My mom kept using her paper notebook. Mr. Ernesto never gave back the 500 pesos.',
      'That night I made two promises: to learn how to build real software, and to never again depend on someone else’s Wi-Fi. Today I ship code to production, integrate APIs, tune databases — and I have fiber optic at home.',
      'Mr. Ernesto closed the pharmacy in 2022. Life, sometimes, is fair.',
    ],
  },

  education: {
    kicker: 'Academic background',
    title: 'Education & Certifications',
    sub: 'A path built with persistence — from Cimitarra to Bucaramanga, and beyond.',
    items: {
      1: { institution: 'Unidades Tecnológicas de Santander', degree: 'Systems Engineering', status: 'Graduated' },
      2: { institution: 'Unidades Tecnológicas de Santander', degree: 'Technology in Software Systems Development', status: 'Graduated' },
      3: { institution: 'SENA', degree: 'Systems Technician', status: 'Graduated' },
      4: { institution: 'Colegio Nuestra Señora de La Candelaria', degree: 'Academic High School Diploma', status: 'Graduated' },
      5: { institution: 'MikroTik', degree: 'MikroTik Certified Network Associate (MTCNA)', status: 'Certified' },
      6: { institution: 'ISO/IEC', degree: 'ISO/IEC 27001 — Information Security', status: 'Certified' },
    },
  },

  skills: {
    kicker: 'What I work with',
    title: 'Skills & Strengths',
    sub: 'The technologies I use, the way I work, and the languages I speak.',
    groups: {
      daily: 'Daily Professional Use',
      experienced: 'Experienced',
      learning: 'Actively Learning',
      tool: 'Tools',
    },
    softTitle: 'Soft skills',
    langsTitle: 'Languages',
    soft: [
      { name: 'Effective Communication', description: 'I translate technical ideas into clear language for teams and clients.' },
      { name: 'Teamwork',                description: 'I collaborate actively in agile, multidisciplinary environments.' },
      { name: 'Problem Solving',         description: 'I spot bottlenecks and design efficient, pragmatic solutions.' },
      { name: 'Fast Learning',           description: 'I pick up new technologies and methodologies quickly.' },
      { name: 'Adaptability',            description: 'I stay effective in changing contexts and under pressure.' },
      { name: 'Leadership',              description: 'I take initiative and steer teams toward concrete results.' },
    ],
    langs: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'A2 Basic' },
    ],
  },

  services: {
    kicker: 'How I can help',
    title: 'Services & IT advisory',
    sub: 'Focused on quality, performance and real impact.',
    items: [
      { title: 'Web Applications',       desc: 'Robust, secure and scalable web apps built with clean architecture.' },
      { title: 'Mobile App Development', desc: 'Cross-platform mobile apps with a native feel, offline support and smooth UX.' },
      { title: 'RESTful APIs',           desc: 'API design and integration to connect systems, automate flows and sync data.' },
      { title: 'Databases',              desc: 'Modeling, optimization and management of relational databases for high performance.' },
      { title: 'Dynamic Interfaces',     desc: 'Responsive, fluid and accessible UIs that elevate the end-user experience.' },
      { title: 'IT Advisory',            desc: 'Technical guidance to choose the right stack, untangle legacy code and ship with confidence.' },
      { title: 'Performance Tuning',     desc: 'Profiling and optimization to turn slow, heavy systems into fast, efficient ones.' },
    ],
  },

  contact: {
    kicker: 'Let’s build something',
    title: 'Have a project in mind?',
    titleSub: 'Let’s make it real.',
    sub: 'Reach out through any channel — I usually reply fast.',
    channels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', telegram: 'Telegram' },
  },

  footer: {
    builtWith: 'Built with React & Anime.js',
    rights: 'Bucaramanga, Colombia',
  },
};

const es = {
  langName: 'Español',
  dir: 'ltr',

  nav: {
    about: 'Sobre mí',
    story: 'Historia',
    education: 'Educación',
    skills: 'Habilidades',
    services: 'Servicios',
    contact: 'Contacto',
    talk: 'Hablemos',
  },

  a11y: {
    theme: 'Alternar tema claro / oscuro',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    language: 'Seleccionar idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    scroll: 'Desplázate hacia abajo',
    sectionNav: 'Navegación por secciones',
    footerNav: 'Navegación del pie de página',
  },

  hero: {
    eyebrow: 'Desarrollador Full Stack',
    tagline: 'Construyo software escalable, eficiente y de alto impacto.',
    talk: 'Hablemos',
    discover: 'Descubre más',
    available: 'Disponible para proyectos',
    now: 'Construyo backends robustos y creo experiencias digitales impecables en todo el stack.',
    stats: [
      'Tecnologías del día a día',
      'Tecnologías en mi caja de herramientas',
      'Años construyendo software',
      'Curiosidad por la nueva tecnología',
    ],
  },

  about: {
    kicker: 'Quién soy',
    title: 'Un desarrollador que convierte problemas en rendimiento',
    lead:
      'Ingeniero de Sistemas especializado en desarrollo web full-stack y optimización de software. ' +
      'Construyo servicios robustos, diseño interfaces accesibles, integro APIs y afino bases de datos — ' +
      'convirtiendo cuellos de botella en rendimiento e ideas en impacto real.',
    cards: [
      { title: 'Enfoque en rendimiento', text: 'Detecto cuellos de botella y refactorizo sistemas pesados para hacerlos rápidos y eficientes.' },
      { title: 'Creyente del código limpio', text: 'Software legible y mantenible que sigue rindiendo con el tiempo.' },
    ],
  },

  story: {
    kicker: 'Una historia de origen (casi) ficticia',
    title: 'El Bug Que Lo Cambió Todo',
    paragraphs: [
      'Era un martes de 2019. Tenía 17 años, 500 pesos a mi nombre y dependía del Wi-Fi de don Ernesto — la única conexión del pueblo, estratégicamente ubicada en la farmacia de enfrente, cobrada por hora y apagada sin aviso a las 7:00 p. m. en punto.',
      'Ese día estaba a punto de subir mi primer proyecto a GitHub: un sistema de inventario para la tienda de mi mamá, escrito en PHP puro — sin framework, sin comentarios, contraseñas en texto plano y un archivo orgullosamente llamado "version_final_ESTA_SI.php". Una obra maestra del caos.',
      'Eran las 6:58 p. m. La subida comenzó. La barra de progreso llegó al 87 %. Silencio. El cursor parpadeó tres veces, como una despedida. Don Ernesto había desconectado el router.',
      'El repo quedó a medio subir. El sistema nunca llegó a la tienda. Mi mamá siguió usando su cuaderno de papel. Don Ernesto nunca devolvió los 500 pesos.',
      'Esa noche hice dos promesas: aprender a construir software de verdad y no volver a depender del Wi-Fi de nadie. Hoy llevo código a producción, integro APIs, afino bases de datos — y tengo fibra óptica en casa.',
      'Don Ernesto cerró la farmacia en 2022. La vida, a veces, es justa.',
    ],
  },

  education: {
    kicker: 'Formación académica',
    title: 'Educación y Certificaciones',
    sub: 'Un camino construido con persistencia — de Cimitarra a Bucaramanga, y más allá.',
    items: {
      1: { institution: 'Unidades Tecnológicas de Santander', degree: 'Ingeniería de Sistemas', status: 'Graduado' },
      2: { institution: 'Unidades Tecnológicas de Santander', degree: 'Tecnología en Desarrollo de Sistemas de Software', status: 'Graduado' },
      3: { institution: 'SENA', degree: 'Técnico en Sistemas', status: 'Graduado' },
      4: { institution: 'Colegio Nuestra Señora de La Candelaria', degree: 'Bachiller Académico', status: 'Graduado' },
      5: { institution: 'MikroTik', degree: 'MikroTik Certified Network Associate (MTCNA)', status: 'Certificado' },
      6: { institution: 'ISO/IEC', degree: 'ISO/IEC 27001 — Seguridad de la Información', status: 'Certificado' },
    },
  },

  skills: {
    kicker: 'Con qué trabajo',
    title: 'Habilidades y Fortalezas',
    sub: 'Las tecnologías que uso, mi forma de trabajar y los idiomas que hablo.',
    groups: {
      daily: 'Uso Profesional Diario',
      experienced: 'Con Experiencia',
      learning: 'Aprendiendo Activamente',
      tool: 'Herramientas',
    },
    softTitle: 'Habilidades blandas',
    langsTitle: 'Idiomas',
    soft: [
      { name: 'Comunicación Efectiva', description: 'Traduzco ideas técnicas a un lenguaje claro para equipos y clientes.' },
      { name: 'Trabajo en Equipo',     description: 'Colaboro activamente en entornos ágiles y multidisciplinarios.' },
      { name: 'Resolución de Problemas', description: 'Identifico cuellos de botella y diseño soluciones eficientes y pragmáticas.' },
      { name: 'Aprendizaje Rápido',    description: 'Asimilo nuevas tecnologías y metodologías con rapidez.' },
      { name: 'Adaptabilidad',         description: 'Me mantengo efectivo en contextos cambiantes y bajo presión.' },
      { name: 'Liderazgo',             description: 'Tomo la iniciativa y guío equipos hacia resultados concretos.' },
    ],
    langs: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés',  level: 'A2 Básico' },
    ],
  },

  services: {
    kicker: 'Cómo puedo ayudar',
    title: 'Servicios y asesoría IT',
    sub: 'Enfocado en calidad, rendimiento e impacto real.',
    items: [
      { title: 'Aplicaciones Web',           desc: 'Apps web robustas, seguras y escalables, construidas con arquitectura limpia.' },
      { title: 'Desarrollo de Apps Móviles', desc: 'Apps móviles multiplataforma con sensación nativa, soporte offline y una UX fluida.' },
      { title: 'APIs RESTful',               desc: 'Diseño e integración de APIs para conectar sistemas, automatizar flujos y sincronizar datos.' },
      { title: 'Bases de Datos',             desc: 'Modelado, optimización y gestión de bases de datos relacionales de alto rendimiento.' },
      { title: 'Interfaces Dinámicas',       desc: 'Interfaces responsivas, fluidas y accesibles que elevan la experiencia del usuario.' },
      { title: 'Asesoría IT',                desc: 'Guía técnica para elegir el stack correcto, ordenar código heredado y desplegar con confianza.' },
      { title: 'Optimización de Rendimiento', desc: 'Perfilado y optimización para convertir sistemas lentos y pesados en rápidos y eficientes.' },
    ],
  },

  contact: {
    kicker: 'Construyamos algo',
    title: '¿Tienes un proyecto en mente?',
    titleSub: 'Hagámoslo realidad.',
    sub: 'Escríbeme por cualquier canal — suelo responder rápido.',
    channels: { email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub', telegram: 'Telegram' },
  },

  footer: {
    builtWith: 'Hecho con React y Anime.js',
    rights: 'Bucaramanga, Colombia',
  },
};

const pt = {
  langName: 'Português',
  dir: 'ltr',

  nav: {
    about: 'Sobre',
    story: 'História',
    education: 'Educação',
    skills: 'Habilidades',
    services: 'Serviços',
    contact: 'Contato',
    talk: 'Vamos conversar',
  },

  a11y: {
    theme: 'Alternar tema claro / escuro',
    themeToLight: 'Mudar para o modo claro',
    themeToDark: 'Mudar para o modo escuro',
    language: 'Selecionar idioma',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    scroll: 'Role para baixo',
    sectionNav: 'Navegação por seções',
    footerNav: 'Navegação do rodapé',
  },

  hero: {
    eyebrow: 'Desenvolvedor Full Stack',
    tagline: 'Construo software escalável, eficiente e de alto impacto.',
    talk: 'Vamos conversar',
    discover: 'Descubra mais',
    available: 'Disponível para projetos',
    now: 'Construindo backends robustos e criando experiências digitais impecáveis em toda a stack.',
    stats: [
      'Tecnologias do dia a dia',
      'Tecnologias na minha caixa de ferramentas',
      'Anos construindo software',
      'Curiosidade por novas tecnologias',
    ],
  },

  about: {
    kicker: 'Quem sou eu',
    title: 'Um desenvolvedor que transforma problemas em desempenho',
    lead:
      'Engenheiro de Sistemas especializado em desenvolvimento web full-stack e otimização de software. ' +
      'Construo serviços robustos, crio interfaces acessíveis, integro APIs e ajusto bancos de dados — ' +
      'transformando gargalos em desempenho e ideias em impacto real.',
    cards: [
      { title: 'Foco em desempenho', text: 'Caço gargalos e refatoro sistemas pesados para torná-los rápidos e eficientes.' },
      { title: 'Adepto do código limpo', text: 'Software legível e sustentável que continua valendo a pena com o tempo.' },
    ],
  },

  story: {
    kicker: 'Uma história de origem (quase) fictícia',
    title: 'O Bug Que Mudou Tudo',
    paragraphs: [
      'Era uma terça-feira de 2019. Eu tinha 17 anos, 500 pesos em meu nome e dependia do Wi-Fi do seu Ernesto — a única conexão da cidade, estrategicamente localizada na farmácia em frente, cobrada por hora e desligada sem aviso às 19h em ponto.',
      'Naquele dia eu estava prestes a subir meu primeiro projeto para o GitHub: um sistema de estoque para a loja da minha mãe, escrito em PHP puro — sem framework, sem comentários, senhas em texto plano e um arquivo orgulhosamente chamado "versao_final_ESSA_SIM.php". Uma obra-prima do caos.',
      'Eram 18h58. O upload começou. A barra de progresso chegou a 87%. Silêncio. O cursor piscou três vezes, como uma despedida. O seu Ernesto havia desligado o roteador.',
      'O repositório ficou pela metade. O sistema nunca chegou à loja. Minha mãe continuou usando seu caderno de papel. O seu Ernesto nunca devolveu os 500 pesos.',
      'Naquela noite fiz duas promessas: aprender a construir software de verdade e nunca mais depender do Wi-Fi de ninguém. Hoje levo código à produção, integro APIs, ajusto bancos de dados — e tenho fibra óptica em casa.',
      'O seu Ernesto fechou a farmácia em 2022. A vida, às vezes, é justa.',
    ],
  },

  education: {
    kicker: 'Formação acadêmica',
    title: 'Educação e Certificações',
    sub: 'Um caminho construído com persistência — de Cimitarra a Bucaramanga, e além.',
    items: {
      1: { institution: 'Unidades Tecnológicas de Santander', degree: 'Engenharia de Sistemas', status: 'Formado' },
      2: { institution: 'Unidades Tecnológicas de Santander', degree: 'Tecnologia em Desenvolvimento de Sistemas de Software', status: 'Formado' },
      3: { institution: 'SENA', degree: 'Técnico em Sistemas', status: 'Formado' },
      4: { institution: 'Colegio Nuestra Señora de La Candelaria', degree: 'Diploma de Ensino Médio Acadêmico', status: 'Formado' },
      5: { institution: 'MikroTik', degree: 'MikroTik Certified Network Associate (MTCNA)', status: 'Certificado' },
      6: { institution: 'ISO/IEC', degree: 'ISO/IEC 27001 — Segurança da Informação', status: 'Certificado' },
    },
  },

  skills: {
    kicker: 'Com o que trabalho',
    title: 'Habilidades e Pontos Fortes',
    sub: 'As tecnologias que uso, minha forma de trabalhar e os idiomas que falo.',
    groups: {
      daily: 'Uso Profissional Diário',
      experienced: 'Com Experiência',
      learning: 'Aprendendo Ativamente',
      tool: 'Ferramentas',
    },
    softTitle: 'Habilidades comportamentais',
    langsTitle: 'Idiomas',
    soft: [
      { name: 'Comunicação Eficaz',     description: 'Traduzo ideias técnicas para uma linguagem clara para equipes e clientes.' },
      { name: 'Trabalho em Equipe',     description: 'Colaboro ativamente em ambientes ágeis e multidisciplinares.' },
      { name: 'Resolução de Problemas', description: 'Identifico gargalos e projeto soluções eficientes e pragmáticas.' },
      { name: 'Aprendizado Rápido',     description: 'Assimilo novas tecnologias e metodologias com rapidez.' },
      { name: 'Adaptabilidade',         description: 'Mantenho-me eficaz em contextos mutáveis e sob pressão.' },
      { name: 'Liderança',              description: 'Tomo a iniciativa e conduzo equipes a resultados concretos.' },
    ],
    langs: [
      { name: 'Espanhol', level: 'Nativo' },
      { name: 'Inglês',   level: 'A2 Básico' },
    ],
  },

  services: {
    kicker: 'Como posso ajudar',
    title: 'Serviços e consultoria de TI',
    sub: 'Focado em qualidade, desempenho e impacto real.',
    items: [
      { title: 'Aplicações Web',                desc: 'Apps web robustas, seguras e escaláveis, construídas com arquitetura limpa.' },
      { title: 'Desenvolvimento de Apps Mobile', desc: 'Apps móveis multiplataforma com aparência nativa, suporte offline e UX fluida.' },
      { title: 'APIs RESTful',                  desc: 'Design e integração de APIs para conectar sistemas, automatizar fluxos e sincronizar dados.' },
      { title: 'Bancos de Dados',               desc: 'Modelagem, otimização e gestão de bancos de dados relacionais de alto desempenho.' },
      { title: 'Interfaces Dinâmicas',          desc: 'Interfaces responsivas, fluidas e acessíveis que elevam a experiência do usuário.' },
      { title: 'Consultoria de TI',             desc: 'Orientação técnica para escolher a stack certa, organizar código legado e publicar com confiança.' },
      { title: 'Otimização de Desempenho',      desc: 'Profiling e otimização para transformar sistemas lentos e pesados em rápidos e eficientes.' },
    ],
  },

  contact: {
    kicker: 'Vamos construir algo',
    title: 'Tem um projeto em mente?',
    titleSub: 'Vamos torná-lo real.',
    sub: 'Fale comigo por qualquer canal — costumo responder rápido.',
    channels: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', telegram: 'Telegram' },
  },

  footer: {
    builtWith: 'Feito com React e Anime.js',
    rights: 'Bucaramanga, Colombia',
  },
};

export const locales = { en, es, pt };

export const LANGS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
];

export const DEFAULT_LANG = 'en';
