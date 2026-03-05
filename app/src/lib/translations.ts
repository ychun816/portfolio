/**
 * All UI strings for EN and FR.
 * Import `useTranslations` in any component to get typed strings for the active language.
 */

export const translations = {
  en: {
    nav: {
      home: 'Home',
      intro: 'Intro',
      certificates: 'Certificates',
      projects: 'Projects',
      resume: 'Resume',
      contact: 'Contact',
    },
    home: {
      title: "Hello! I'm LIN Yichun",
      subtitle1: (
        projects: string,
        resume: string
      ) =>
        `I'm a Junior Cloud/DevOps Software Engineer from Ecole 42 Paris, eager to adapt to new challenges and create effective solutions.` as const,
      subtitle2Label: 'Please check out my',
      projectsLink: 'projects',
      resumeLink: 'resume',
      subtitle2Suffix: '!',
    },
    intro: {
      heading: 'About Me',
      tagline: 'From Art Galleries to Cloud Infrastructure.',
      p1Before: "Hi! I'm Yichun Lin. I swapped curating exhibitions for",
      p1Highlight: ' orchestrating containers',
      p1After:
        ", bringing a Project Manager's mindset to DevOps engineering. Born in Taiwan and forged at École 42 Paris, I build systems that are as resilient as they are elegant.",
      p2Before: "I don't just write scripts; I",
      p2Highlight1: ' design workflows',
      p2Middle:
        '. My background in art management taught me how to handle chaos and deadlines, while École 42 gave me the technical grit to master',
      p2Highlight2: ' C/C++',
      p2Highlight3: ' Kubernetes',
      p2Highlight4: ' CI/CD',
      p2After:
        '. I view infrastructure as a canvas—it requires structure, automation, and precise execution to truly flow.',
      cta: 'Explore my projects!',
      closing:
        "Currently seeking a DevOps/Cloud Internship in Paris. Let's engineer something beautiful together. Always passionate to",
      connectLink: 'connect',
      closingSuffix: '!',
    },
    certificates: {
      heading: 'Certificates',
      viewCert: 'View Certificate',
      items: [
        {
          id: 1,
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: 'Certified',
          description: 'Obtained the certificate and the skills of AWS Cloud Services & Computing',
          url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
          imageUrl: '/certificates/AWS-Certified-Cloud-Practitioner_badge.png',
        },
        {
          id: 2,
          name: 'AWS Certified Solutions Architect - Associate',
          issuer: 'Amazon Web Services',
          date: '2026',
          description: 'Preparing and set to pass in 2026',
          url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
          imageUrl: '/certificates/AWS-Certified-Solutions-Architect-Associate_badge.png',
        },
      ],
    },
    projects: {
      heading: 'Projects',
      viewLabel: 'View',
    },
    resume: {
      heading: 'Resume',
      download: 'Download PDF',
      footer1: 'Feel free to reach out via',
      contactLink: 'contact form',
      footer2: 'or',
      emailLink: 'email me',
      footer3: "if you'd like to discuss any opportunities!",
    },
    contact: {
      heading: 'Contact',
      emailPlaceholder: 'Email',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Type your message',
      sendButton: 'Send Message',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      intro: 'Intro',
      certificates: 'Certifications',
      projects: 'Projets',
      resume: 'CV',
      contact: 'Contact',
    },
    home: {
      title: 'Bonjour\u00A0! Je suis LIN Yichun',
      subtitle1: () =>
        `Je suis Ingénieure Logicielle Cloud/DevOps Junior de l\u2019École 42 Paris, passionnée par les nouveaux défis et la création de solutions efficaces.` as const,
      subtitle2Label: 'Découvrez mes',
      projectsLink: 'projets',
      resumeLink: 'CV',
      subtitle2Suffix: '\u00A0!',
    },
    intro: {
      heading: 'À Propos',
      tagline: 'Des Galeries d\u2019Art à l\u2019Infrastructure Cloud.',
      p1Before: "Bonjour\u00A0! Je suis Yichun Lin. J'ai échangé la curation d\u2019expositions contre",
      p1Highlight: ' l\u2019orchestration de conteneurs',
      p1After:
        ", en apportant l\u2019état d\u2019esprit d\u2019une Chef de Projet au DevOps. Née à Taïwan et formée à l\u2019École 42 Paris, je construis des systèmes aussi résilients qu\u2019élégants.",
      p2Before: 'Je ne me contente pas d\u2019écrire des scripts\u00A0; je',
      p2Highlight1: ' conçois des workflows',
      p2Middle:
        '. Mon expérience en gestion artistique m\u2019a appris à gérer le chaos et les délais, tandis qu\u2019École 42 m\u2019a donné la rigueur technique pour maîtriser',
      p2Highlight2: ' C/C++',
      p2Highlight3: ' Kubernetes',
      p2Highlight4: ' CI/CD',
      p2After:
        '. Je vois l\u2019infrastructure comme une toile\u00A0— elle exige structure, automatisation et exécution précise pour vraiment fonctionner.',
      cta: 'Explorez mes projets\u00A0!',
      closing:
        'Actuellement à la recherche d\u2019un stage DevOps/Cloud à Paris. Construisons ensemble quelque chose de beau. Toujours ravie de',
      connectLink: 'me connecter',
      closingSuffix: '\u00A0!',
    },
    certificates: {
      heading: 'Certifications',
      viewCert: 'Voir la Certification',
      items: [
        {
          id: 1,
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          date: 'Certifié',
          description: 'Certification obtenue et compétences acquises en Services Cloud AWS',
          url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
          imageUrl: '/certificates/AWS-Certified-Cloud-Practitioner_badge.png',
        },
        {
          id: 2,
          name: 'AWS Certified Solutions Architect - Associate',
          issuer: 'Amazon Web Services',
          date: '2026',
          description: 'En préparation, passage prévu en 2026',
          url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
          imageUrl: '/certificates/AWS-Certified-Solutions-Architect-Associate_badge.png',
        },
      ],
    },
    projects: {
      heading: 'Projets',
      viewLabel: 'Voir',
    },
    resume: {
      heading: 'CV',
      download: 'Télécharger le PDF',
      footer1: 'N\u2019hésitez pas à me contacter via le',
      contactLink: 'formulaire de contact',
      footer2: 'ou par',
      emailLink: 'e-mail',
      footer3: 'pour discuter d\u2019opportunités\u00A0!',
    },
    contact: {
      heading: 'Contact',
      emailPlaceholder: 'E-mail',
      subjectPlaceholder: 'Sujet',
      messagePlaceholder: 'Votre message',
      sendButton: 'Envoyer',
    },
  },
} as const;

export type Translations = typeof translations;
