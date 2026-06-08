import CV from '../pdf/CV_Luis-Castaño_2026.pdf';
import DiplomaBachiller from '../pdf/DiplomaBachiller.pdf';
import DiplomaTecnico from '../pdf/diplomaTecnicoEnSistemas.pdf';
import DiplomaTecnologo from '../pdf/diplomaTecnologo en sistemas.pdf';

export const profile = {
  fullName: 'Luis Manuel Castaño Grueso',
  displayName: 'Luis Castaño',
  title: 'Full Stack Developer',
  subtitle: 'Desarrollador Full Stack',
  tagline:
    'Ingeniero de Sistemas orientado a construir soluciones escalables, eficientes y de alto impacto.',
  bio: `Soy Ingeniero de Sistemas con experiencia en desarrollo web full stack y optimización de procesos de software.
Me especializo en identificar cuellos de botella, mejorar el rendimiento de aplicaciones y construir soluciones
eficientes combinando tecnología moderna con impacto real. Trabajo con PHP y Symfony en entornos de producción,
diseño interfaces dinámicas con React y JavaScript, integro APIs RESTful y gestiono bases de datos relacionales.`,
  location: 'Bucaramanga, Colombia',
  email: 'mannuelcast321@gmail.com',
  phone: '+57 316 814 2027',
  github: 'https://github.com/blackrose99',
  linkedin: 'https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/',
  whatsapp: 'https://wa.me/573168142027',
  dockerhub: 'https://hub.docker.com/u/lmcastano',
  telegram: 'https://t.me/Lmcastano',
  facebook: 'https://www.facebook.com/LuisManuelCastano14/',
  instagram: 'https://www.instagram.com/luismanuelcastano14/',
  twitter: 'https://twitter.com/Manuel_0914',
  reddit: 'https://www.reddit.com/user/DecentGrowth7631/',
  cv: CV,
};

export const skills = [
  { name: 'PHP', category: 'Uso Profesional Diario', level: 'daily' },
  { name: 'Symfony', category: 'Uso Profesional Diario', level: 'daily' },
  { name: 'JavaScript', category: 'Uso Profesional Diario', level: 'daily' },
  { name: 'jQuery', category: 'Uso Profesional Diario', level: 'daily' },
  { name: 'MariaDB', category: 'Uso Profesional Diario', level: 'daily' },
  { name: 'MySQL', category: 'Uso Profesional Diario', level: 'daily' },
  { name: 'React', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'Laravel', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'Java', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'Spring', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'Python', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'Node.js', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'PostgreSQL', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'MongoDB', category: 'Dominio con Experiencia', level: 'experienced' },
  { name: 'HTML5', category: 'Frontend', level: 'experienced' },
  { name: 'CSS3', category: 'Frontend', level: 'experienced' },
  { name: 'Tailwind', category: 'Frontend', level: 'experienced' },
  { name: 'Bootstrap', category: 'Frontend', level: 'experienced' },
  { name: 'Docker', category: 'Aprendizaje Activo', level: 'learning' },
  { name: 'Kubernetes', category: 'Aprendizaje Activo', level: 'learning' },
  { name: 'React Native', category: 'Aprendizaje Activo', level: 'learning' },
  { name: 'Flutter', category: 'Aprendizaje Activo', level: 'learning' },
  { name: 'ML / IA', category: 'Aprendizaje Activo', level: 'learning' },
  { name: 'Prog. agéntica', category: 'Aprendizaje Activo', level: 'learning' },
  { name: 'GitHub', category: 'Herramientas', level: 'tool' },
  { name: 'GitLab', category: 'Herramientas', level: 'tool' },
  { name: 'ClickUp', category: 'Herramientas', level: 'tool' },
  { name: 'Trello', category: 'Herramientas', level: 'tool' },
  { name: 'Linux', category: 'Herramientas', level: 'tool' },
];

export const education = [
  {
    id: 1,
    institution: 'Unidades Tecnológicas de Santander',
    degree: 'Ingeniería de Sistemas',
    period: '2021 – 2026',
    location: 'Bucaramanga, Santander',
    status: 'En Formación',
    diploma: null,
  },
  {
    id: 2,
    institution: 'Unidades Tecnológicas de Santander',
    degree: 'Tecnología en Desarrollo de Sistemas Informáticos',
    period: '2021 – 2023',
    location: 'Bucaramanga, Santander',
    status: 'Graduado',
    diploma: DiplomaTecnologo,
  },
  {
    id: 3,
    institution: 'SENA',
    degree: 'Técnico en Sistemas',
    period: '2017 – 2018',
    location: 'Cimitarra, Santander',
    status: 'Graduado',
    diploma: DiplomaTecnico,
  },
  {
    id: 4,
    institution: 'Colegio Nuestra Señora de La Candelaria',
    degree: 'Bachiller Académico',
    period: '2018',
    location: 'Cimitarra, Santander',
    status: 'Graduado',
    diploma: DiplomaBachiller,
  },
];

export const softSkills = [
  { name: 'Comunicación efectiva', description: 'Transmito ideas técnicas con claridad a equipos y clientes.' },
  { name: 'Trabajo en equipo', description: 'Colaboro activamente en entornos ágiles y multidisciplinarios.' },
  { name: 'Resolución de problemas', description: 'Identifico cuellos de botella y propongo soluciones eficientes.' },
  { name: 'Aprendizaje rápido', description: 'Me adapto a nuevas tecnologías y metodologías con agilidad.' },
  { name: 'Adaptabilidad', description: 'Trabajo eficientemente en contextos cambiantes y bajo presión.' },
  { name: 'Liderazgo', description: 'Tomo iniciativa y oriento equipos hacia resultados concretos.' },
];

export const languages = [
  { name: 'Español', level: 'Nativo', percent: 100 },
  { name: 'Inglés', level: 'A2 Básico', percent: 25 },
];

export const projects = [
  {
    id: 1,
    title: 'Hackatón Financiera Comultrasan',
    tools: ['React.js', 'Node.js', 'SQL', 'Git', 'Bootstrap'],
    description:
      'Sistema de pagos mediante códigos QR para la hackatón Softic 2023. Permite a clientes de Financiera Comultrasan generar QRs ilimitados, recibir pagos y hacer seguimiento de transacciones en tiempo real.',
    github: 'https://github.com/blackrose99/HackatTonReto-1',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Tickets para Eventos',
    tools: ['Laravel', 'MySQL', 'Google Auth', 'PHP', 'Bootstrap'],
    description:
      'Gestión de tickets para ferias y eventos con inicio de sesión Google. Incluye directorio de stands, calificación por QR, seguimiento de asistencia y estadísticas por stand.',
    github: 'https://github.com/blackrose99',
    demo: null,
    highlight: false,
  },
];

export const bibliography = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    type: 'book',
    description: 'Principios y prácticas para escribir código profesional, legible y mantenible en el tiempo.',
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    type: 'book',
    description: 'Guía para convertirse en un desarrollador más efectivo, adaptable e inteligente.',
  },
  {
    id: 3,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    type: 'book',
    description: 'Fundamentos de sistemas distribuidos, bases de datos y arquitecturas de datos a escala.',
  },
  {
    id: 4,
    title: 'Documentación Oficial de Symfony',
    author: 'Symfony Community',
    type: 'resource',
    description: 'Referencia técnica principal para el framework PHP que uso en producción cada día.',
    url: 'https://symfony.com/doc/current/index.html',
  },
  {
    id: 5,
    title: 'React — La Documentación Oficial',
    author: 'Meta Open Source',
    type: 'resource',
    description: 'Fuente de consulta para patrones modernos de React, hooks y arquitectura de componentes.',
    url: 'https://react.dev',
  },
];

export const fictionStory = {
  title: 'El Bug que Cambió Todo',
  subtitle: 'Una historia de ficción (completamente inventada, casi)',
  paragraphs: [
    'Era martes, 2019. Tenía 17 años, 500 pesos y el Wi-Fi del señor Ernesto: el único punto de conexión del pueblo, ubicado estratégicamente en la farmacia de al frente, cobrado por horas y desactivado sin previo aviso a las 7:00 p.m. en punto.',
    'Ese día estaba a punto de subir mi primer proyecto a GitHub: un sistema de inventario para la tienda de mi mamá, escrito en PHP puro, sin framework, sin comentarios, con las contraseñas en texto plano y con un archivo llamado "versión_final_ESTA_SÍ.php". Era una obra maestra del caos.',
    'Eran las 6:58 p.m. Empezó el upload. La barra de progreso llegó al 87%. Silencio. El cursor parpadeó tres veces como despedida. El señor Ernesto había apagado el router.',
    'El repositorio quedó incompleto. El sistema nunca llegó a la tienda. Mi mamá siguió usando un cuaderno. El señor Ernesto no devolvió los 500 pesos.',
    'Esa noche hice dos promesas: aprender a desarrollar software de verdad, y nunca más depender del Wi-Fi ajeno. Hoy trabajo con Symfony en producción, integro APIs RESTful, optimizo bases de datos relacionales y tengo fibra óptica en casa.',
    'El señor Ernesto cerró la farmacia en 2022. La vida, a veces, es justa.',
  ],
};
