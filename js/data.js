/**
 * VALKA ESTUDIO - Base de Datos y Contenido
 * Arquitectura que transforma. Espacios que cuidan.
 */

const VALKA_DATA = {
  brand: {
    name: 'VALKA',
    subtitle: 'ESTUDIO',
    tagline: 'Arquitectura que transforma. Espacios que cuidan.',
    heroTitle: 'Diseñamos espacios que mejoran la forma de vivir, trabajar y conectar con quienes somos.',
    quote: 'Creemos que la arquitectura tiene la capacidad de transformar el bienestar cotidiano.',
    enfoqueShort: 'Diseñamos desde las personas para crear espacios que cuiden, inspiren y mejoren la calidad de vida.',
    location: 'Licán Ray, Región de La Araucanía | Santiago, Chile',
    city: 'Licán Ray, Villarrica, Pucón y Santiago',
    phone: '+56 9 1234 5678',
    email: 'hola@valkaestudio.cl',
    instagram: '@valka.estudio',
    instagramUrl: 'https://instagram.com/valka.estudio',
    whatsappUrl: 'https://wa.me/56912345678?text=Hola%20Valka%20Estudio,%20quisiera%20conversar%20sobre%20un%20proyecto'
  },

  services: [
    {
      id: 'comercial',
      tag: 'Arquitectura Comercial',
      title: 'Arquitectura Comercial',
      subtitle: 'Espacios con enfoque humano',
      description: 'Diseñamos espacios de trabajo, comercio y servicios que potencian la productividad, la experiencia y el bienestar de las personas.',
      fullDescription: 'Diseñamos espacios de trabajo, comercio y servicios que potencian la productividad, la experiencia y el bienestar de las personas.',
      image: 'assets/images/services/service-comercial.jpg',
      heroImage: 'assets/images/services/servicios-hero-comercial.jpg?v=5',
      benefits: [
        'Optimización del espacio',
        'Eficiencia y confort',
        'Materiales en armonia'
      ],
      featuredProjects: ['oficinas-hibridas', 'clinica-dermatologica', 'restaurante-arboleda', 'cowork-valle']
    },
    {
      id: 'residencial',
      tag: 'Arquitectura Residencial',
      title: 'Arquitectura Residencial',
      subtitle: 'Hogares con propósito',
      description: 'Creamos hogares que reflejan tu esencia y se adaptan a tu forma de vivir, hoy y en el futuro.',
      fullDescription: 'Diseñamos viviendas unifamiliares y segundas residencias que respetan el entorno natural y abrazan la vida de quienes las habitan. Desde el primer boceto, integramos luz natural, ventilación cruzada y una relación íntima con el paisaje circundante.',
      image: 'assets/images/services/service-residencial.png',
      heroImage: 'assets/images/services/servicios-hero-residencial.png?v=1',
      benefits: [
        'Diseño personalizado según hábitos, rutinas y etapas de vida',
        'Integración armónica con el paisaje y la naturaleza',
        'Eficiencia térmica y selección consciente de materiales',
        'Espacios flexibles y luminosos para el encuentro familiar'
      ],
      featuredProjects: ['casa-arrayan', 'depto-cumbres', 'mobiliario-casa-lican']
    },
    {
      id: 'mobiliario',
      tag: 'Mobiliario Personalizado',
      title: 'Mobiliario Personalizado',
      subtitle: 'Diseño que nace junto al espacio',
      description: 'Fabricamos mobiliario único que se integra al diseño y materializa cada detalle con precisión.',
      fullDescription: 'El mobiliario no es un accesorio: es arquitectura a escala humana. Diseñamos y producimos piezas a medida que resuelven almacenamiento, delimitan ambientes y aportan calidez táctil a través de maderas nobles, herrajes de alta precisión y ensambles artesanales.',
      image: 'assets/images/services/service-mobiliario.jpg',
      heroImage: 'assets/images/services/servicios-hero-mobiliario.png?v=1',
      benefits: [
        'Optimización milimétrica del espacio disponible',
        'Selección de maderas nobles, piedras y acabados táctiles',
        'Diseño integral coordinado con la arquitectura general',
        'Fabricación cuidada y supervisión directa en taller'
      ],
      featuredProjects: ['mobiliario-casa-lican', 'remodelacion-las-condes', 'depto-cumbres']
    },
    {
      id: 'remodelaciones',
      tag: 'Remodelaciones Integrales',
      title: 'Remodelaciones Integrales',
      subtitle: 'Transformar antes que reemplazar',
      description: 'Renovamos espacios existentes para convertirlos en lugares funcionales, estéticos y duraderos.',
      fullDescription: 'Creemos en el potencial latente de los espacios existentes. A través de diagnósticos rigurosos y propuestas sensibles, renovamos departamentos, casas y recintos comerciales rescatando su valor estructural y dotándolos de una nueva vida contemporánea y eficiente.',
      image: 'assets/images/services/service-remodelaciones.jpg',
      heroImage: 'assets/images/services/servicios-hero-remodelaciones.png?v=1',
      benefits: [
        'Reconfiguración inteligente de recintos y circulación',
        'Renovación completa de iluminación, sanitarios y revestimientos',
        'Preservación de elementos con valor patrimonial o afectivo',
        'Control estricto de presupuestos y plazos de obra'
      ],
      featuredProjects: ['remodelacion-las-condes', 'depto-cumbres', 'clinica-dermatologica']
    },
    {
      id: 'regularizacion',
      tag: 'Regularización y Asesoría Técnica',
      title: 'Regularización y Asesoría Técnica',
      subtitle: 'Gestión Normativa & Planimetría',
      description: 'Te acompañamos en los procesos normativos y técnicos para que tu proyecto cumpla con todas las exigencias.',
      fullDescription: 'Brindamos acompañamiento integral en la gestión ante Direcciones de Obras Municipales (DOM), permisos de edificación, recepciones finales, subdivisión y adecuación a la Ordenanza General de Urbanismo y Construcciones (OGUC).',
      image: 'assets/images/services/service-regularizacion.jpg',
      heroImage: 'assets/images/services/service-regularizacion.jpg',
      benefits: [
        'Levantamiento planimétrico riguroso y expedientes municipales',
        'Tramitación de permisos de edificación y recepción final',
        'Asesoría técnica en normativas urbanísticas y cambios de destino',
        'Gestión documental expedita y transparente'
      ],
      featuredProjects: ['casa-arrayan', 'oficinas-hibridas', 'clinica-dermatologica']
    }
  ],

  projects: [
    {
      id: 'oficinas-hibridas',
      title: 'Proyecto Baladi Gourmet',
      location: 'Lo Barnechea',
      category: 'comercial',
      categoryName: 'Arquitectura Comercial',
      categoryLabel: 'Tienda',
      year: '2024',
      area: 'Tienda',
      image: 'assets/images/projects/baladi-01.jpg',
      description: 'Una intervención integral para transformar un espacio existente en un lugar versátil, funcional y con identidad propia. Desde la asesoría inicial y el diseño de imagen, hasta la distribución, iluminación y desarrollo de mobiliario a medida, cada decisión fue pensada en torno a la experiencia y funcionamiento de Baladi Gourmet.',
      fullStory: 'Una intervención integral para transformar un espacio existente en un lugar versátil, funcional y con identidad propia.<br><br>Desde la asesoría inicial y el diseño de imagen, hasta la distribución, iluminación y desarrollo de mobiliario a medida, cada decisión fue pensada en torno a la experiencia y funcionamiento de Baladi Gourmet.<br><br>Al tratarse también de un espacio destinado a clases de cocina, incorporamos mobiliario móvil que permite reorganizar mesas y mesones según cada actividad, entregando flexibilidad sin renunciar a una estética cuidada y coherente.',
      clientQuote: 'Diseño, funcionalidad y materialidad se encuentran en un espacio pensado para adaptarse a quienes lo habitan y lo utilizan.',
      gallery: [
        'assets/images/projects/baladi-01.jpg',
        'assets/images/projects/baladi-02.jpg',
        'assets/images/projects/baladi-03.jpg'
      ]
    },
    {
      id: 'casa-arrayan',
      title: 'Conjunto dormitorio SE+J',
      location: 'Stgo Centro',
      category: 'residencial',
      categoryName: 'Arquitectura Residencial',
      categoryLabel: 'Dormitorio',
      year: '2024',
      area: 'Dormitorio',
      image: 'assets/images/projects/sd-j-01.jpg',
      description: 'Un dormitorio de dimensiones acotadas donde el desafío fue incorporar distintas funciones sin comprometer la amplitud ni la comodidad del espacio. La propuesta organiza el mobiliario a ambos lados de la cama conectando visualmente el espacio a través de palillaje y materialidades equilibradas.',
      fullStory: 'Un dormitorio de dimensiones acotadas donde el desafío fue incorporar distintas funciones sin comprometer la amplitud ni la comodidad del espacio.<br><br>La propuesta organiza el mobiliario a ambos lados de la cama: un velador en uno de ellos y un tocador en el otro, acompañado por un espejo que se extiende hasta el cielo. Ambos elementos se conectan visualmente a través del palillaje dispuesto a ambos lados de la cabecera, generando continuidad y dando unidad al conjunto.<br><br>A los pies de la cama se incorpora un zapatero de formato angosto, diseñado específicamente para aprovechar este sector sin interferir con la circulación. Sobre él, el palillaje vuelve a aparecer como un elemento conector que, además de aportar textura y continuidad al diseño, permite ocultar la extensión eléctrica y reforzar el muro destinado al soporte del televisor.<br><br>La materialidad combina principalmente melamina Moscova con un laminado de textura marmoleada, buscando equilibrar la calidez de la madera con una superficie de mayor contraste y carácter.<br><br>Un proyecto donde cada centímetro responde a una necesidad, demostrando que un espacio reducido no tiene por qué limitar sus posibilidades, sino que puede convertirse en una oportunidad para diseñar con mayor precisión.',
      clientQuote: 'Un proyecto donde cada centímetro responde a una necesidad, demostrando que un espacio reducido puede convertirse en una oportunidad para diseñar con mayor precisión.',
      gallery: [
        'assets/images/projects/sd-j-01.jpg',
        'assets/images/projects/sd-j-02.jpg',
        'assets/images/projects/sd-j-03.jpg'
      ]
    },
    {
      id: 'clinica-dermatologica',
      title: 'Cafetería Verdi',
      location: 'Santiago, Chile',
      category: 'comercial',
      categoryName: 'Arquitectura Comercial',
      categoryLabel: 'Cafetería',
      year: '2024',
      area: 'Cafetería',
      image: 'assets/images/projects/verdi-01.jpg',
      description: 'El proyecto se basa en el diseño de un mobiliario clave para la cafetería, con un diseño minimalista inspirado en las cafeterías japonesas y un mesón de venta en "L" de gran presencia.',
      fullStory: 'El proyecto se basa en el diseño de un mobiliario clave para la cafetería. Contiene los espacios y el diseño específico tanto para almacenaje interno como para exhibición, e incluso para disponer la máquina de café en el mesón principal.<br><br>La propuesta destaca por un diseño minimalista inspirado en las cafeterías japonesas, protagonizado por un mesón de atención y venta en "L" de gran presencia, que organiza el flujo de atención y optimiza la operatividad diaria del local.',
      clientQuote: 'Un diseño minimalista inspirado en las cafeterías japonesas, donde cada detalle responde a la funcionalidad y al arte del buen café.',
      gallery: [
        'assets/images/projects/verdi-01.jpg',
        'assets/images/projects/verdi-02.jpg',
        'assets/images/projects/verdi-03.jpg'
      ]
    },
    {
      id: 'depto-cumbres',
      title: 'Departamento Cumbres',
      location: 'Santiago, Chile',
      category: 'interiorismo',
      categoryName: 'Interiorismo & Mobiliario',
      year: '2023',
      area: '140 m²',
      image: 'assets/images/projects/depto-cumbres.jpg',
      description: 'Propuesta de interiorismo integral con mobiliario a medida para una familia joven, integrando cocina, comedor y estar en un espacio fluido y luminoso.',
      fullStory: 'Se eliminaron tabiques divisorios para crear una planta abierta conectada visualmente con la cordillera. El mobiliario a medida enchapado en madera natural funciona como elemento unificador, ocultando zonas de servicio y optimizando al máximo el almacenamiento.',
      clientQuote: 'El cambio en la luminosidad y en cómo compartimos el día a día en la casa fue simplemente increíble.',
      gallery: [
        'assets/images/projects/depto-cumbres.jpg',
        'assets/images/services/service-mobiliario.jpg',
        'assets/images/interior-cozy-hd.jpg'
      ]
    },
    {
      id: 'remodelacion-las-condes',
      title: 'Remodelación Las Condes',
      location: 'Santiago, Chile',
      category: 'remodelaciones',
      categoryName: 'Remodelaciones Integrales',
      year: '2024',
      area: '165 m²',
      image: 'assets/images/projects/remodelacion-las-condes.jpg',
      description: 'Renovación integral de vivienda de los años 80, actualizando su envolvente térmica, redistribuyendo recintos y modernizando cocina y baños.',
      fullStory: 'Respetando la nobleza estructural original, se reemplazaron instalaciones obsoletas, se introdujeron ventanas de termopanel de altas prestaciones y se rediseñó por completo el núcleo húmedo, dotando a la vivienda de una habitabilidad moderna y duradera.',
      clientQuote: 'Lograron modernizar nuestra casa sin hacerle perder su historia y carácter original.',
      gallery: [
        'assets/images/projects/remodelacion-las-condes.jpg',
        'assets/images/services/service-remodelaciones.jpg',
        'assets/images/services/service-residencial.jpg'
      ]
    },
    {
      id: 'mobiliario-casa-lican',
      title: 'Mobiliario Casa Licán',
      location: 'Licán Ray, Chile',
      category: 'mobiliario',
      categoryName: 'Mobiliario Personalizado',
      year: '2024',
      area: 'Piezas a Medida',
      image: 'assets/images/projects/mobiliario-casa-lican.jpg',
      description: 'Colección de mobiliario a medida en madera de roble reciclado y piedra volcánica para una residencia de descanso en el lago Calafquén.',
      fullStory: 'Diseñamos una mesa de comedor escultórica, aparadores flotantes y respaldos de cama integrados con iluminación tenue. Cada pieza fue fabricada a mano por ebanistas locales con materiales sustentables de la zona.',
      clientQuote: 'Las piezas tienen un peso visual y una calidez que elevan todo el ambiente de la casa.',
      gallery: [
        'assets/images/projects/mobiliario-casa-lican.jpg',
        'assets/images/material-wood-hd.jpg',
        'assets/images/moodboard-hd.jpg'
      ]
    },
    {
      id: 'restaurante-arboleda',
      title: 'Restaurante Arboleda',
      location: 'Pucón, Chile',
      category: 'comercial',
      categoryName: 'Arquitectura Comercial',
      year: '2023',
      area: '320 m²',
      image: 'assets/images/projects/restaurante-arboleda.jpg',
      description: 'Propuesta gastronómica centrada en la experiencia sensorial, estructurada en torno a un patio interior arbolado con iluminación cálida.',
      fullStory: 'El proyecto articula salones semi-abiertos con una cubierta de vigas a la vista, creando una atmósfera íntima que conecta a los comensales con la cocina de origen y el entorno natural.',
      clientQuote: 'La arquitectura se convirtió en parte esencial de nuestra identidad gastronómica.',
      gallery: [
        'assets/images/projects/restaurante-arboleda.jpg',
        'assets/images/services/servicios-hero-comercial.jpg'
      ]
    },
    {
      id: 'cowork-valle',
      title: 'Cowork Valle',
      location: 'Santiago, Chile',
      category: 'comercial',
      categoryName: 'Arquitectura Comercial',
      year: '2024',
      area: '450 m²',
      image: 'assets/images/projects/cowork-valle.jpg',
      description: 'Hub de innovación y trabajo cooperativo con cabinas acústicas, salas de reuniones flexibles y cafetería comunitaria.',
      fullStory: 'Desarrollo de un layout de alta versatilidad que equilibra espacios de máxima concentración con zonas dinámicas de encuentro casual y networking.',
      clientQuote: 'Un espacio inspirador donde fluyen las ideas y el confort ambiental es inmejorable.',
      gallery: [
        'assets/images/projects/cowork-valle.jpg',
        'assets/images/projects/oficinas-hibridas.jpg'
      ]
    }
  ],

  enfoquePillars: [
    {
      id: 'humano',
      title: 'Humano',
      description: 'Ponemos a las personas en el centro de cada decisión de diseño.',
      detail: 'Cada proyecto comienza escuchando y comprendiendo a quienes habitarán el lugar. Diseñamos para los hábitos cotidianos, los rituales familiares y el bienestar físico y emocional.',
      icon: 'human'
    },
    {
      id: 'consciente',
      title: 'Consciente',
      description: 'Respetamos el entorno natural y construimos con responsabilidad.',
      detail: 'Nos inspira la naturaleza. Buscamos soluciones constructivas eficientes, orientación solar estratégica y materiales honestos que envejezcan con nobleza y bajo impacto ecológico.',
      icon: 'conscious'
    },
    {
      id: 'funcional',
      title: 'Funcional',
      description: 'Diseñamos espacios bellos, eficientes y adaptados a la vida real.',
      detail: 'La belleza y la funcionalidad cobran sentido cuando mejoran la vida cotidiana. Cada metro cuadrado responde a una lógica de uso clara, cómoda y perdurable.',
      icon: 'functional'
    },
    {
      id: 'integral',
      title: 'Integral',
      description: 'Acompañamos todo el proceso, desde la idea hasta la materialización.',
      detail: 'Nos involucramos en cada fase: desde el concepto inicial y las gestiones normativas, hasta el diseño de mobiliario y la supervisión rigurosa de obra.',
      icon: 'integral'
    }
  ],

  about: {
    title: 'Sobre nosotros',
    founders: 'Daniela y Sebastián',
    role: 'Arquitectos y socios fundadores de Valka Estudio',
    intro: 'Somos Daniela y Sebastián, arquitectos y socios fundadores de Valka Estudio.',
    quote1: 'Creemos en una arquitectura que mejora la vida de las personas, que es coherente, honesta y pensada para durar.',
    quote2: 'Nos inspira la naturaleza, el diseño consciente y la búsqueda constante de espacios que generen bienestar.',
    philosophy: 'En Valka entendemos la arquitectura no solo como la construcción de muros o planos, sino como una herramienta transformadora para elevar la calidad de vida diaria. Cada proyecto es una oportunidad para crear espacios que acompañen la vida cotidiana con equilibrio, identidad y propósito.',
    image: 'assets/images/about-daniela-sebastian.jpg',
    values: [
      { name: 'Escucha Activa', desc: 'Comprendemos antes de trazar la primera línea.' },
      { name: 'Honestidad Material', desc: 'Maderas, piedras y texturas auténticas.' },
      { name: 'Rigor Técnico', desc: 'Cumplimiento normativo y precisión constructiva.' },
      { name: 'Vínculo con el Entorno', desc: 'Diálogo constante entre arquitectura y naturaleza.' }
    ]
  },

  blogPosts: [
    {
      id: 'bienestar-cotidiano',
      title: 'La arquitectura como herramienta de bienestar cotidiano',
      category: 'Pensamiento',
      date: 'Agosto 2024',
      readTime: '4 min de lectura',
      excerpt: 'Un espacio bien pensado puede transformar la manera en que vivimos, trabajamos y nos relacionamos a diario.',
      content: 'Creemos que la arquitectura tiene la capacidad de transformar el bienestar cotidiano. Más allá de las modas pasajeras, diseñar desde las personas significa analizar cómo entra la luz por la mañana, cómo se comparte una comida y cómo los silencios espaciales favorecen el descanso mental.',
      image: 'assets/images/hero-home.jpg'
    },
    {
      id: 'naturaleza-e-identidad',
      title: 'Diseñar con la naturaleza: La arquitectura del sur de Chile',
      category: 'Inspiración',
      date: 'Julio 2024',
      readTime: '5 min de lectura',
      excerpt: 'La naturaleza inspira nuestro trabajo; las personas le dan sentido. Claves de la arquitectura en la Región de La Araucanía.',
      content: 'Construir en entornos como Licán Ray, Pucón o Villarrica exige una reverencia por el paisaje. La arquitectura no debe competir con el bosque o el lago, sino enmarcarlo, proteger de las inclemencias climáticas y ofrecer un cobijo cálido y eficiente.',
      image: 'assets/images/forest-banner.jpg'
    },
    {
      id: 'transformar-antes-reemplazar',
      title: 'Transformar antes que reemplazar: El valor de las remodelaciones',
      category: 'Diseño Consciente',
      date: 'Junio 2024',
      readTime: '3 min de lectura',
      excerpt: 'Por qué renovar espacios existentes es una de las decisiones más sustentables y gratificantes.',
      content: 'Cada estructura existente guarda una memoria. Diagnosticar con precisión, redistribuir los recintos e integrar mobiliario a medida permite renovar por completo la experiencia de habitar sin el costo ecológico de una demolición innecesaria.',
      image: 'assets/images/services/service-remodelaciones.jpg'
    }
  ]
};
