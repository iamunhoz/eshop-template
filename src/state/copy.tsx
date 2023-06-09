import { useAtomValue } from 'jotai';
import { siteLanguageAtom } from '.';
import { generateLorem } from '../utils';

type ContactFormField = {
  label: string;
  message?: {
    required?: string;
    mismatch?: string;
  };
};

type CopyData = {
  linkHome: string;
  linkBlog: string;
  linkContact: string;
  linkProjects: string;
  linkAbout: string;

  heroTitle: string;
  heroDescription: string[];
  homeButtonAbout: string;

  aboutTitle: string;
  aboutDescription: string[];

  contactTitle: string;
  contactDescription: string;
  contactEmailTitle: string;
  contactFirstName: ContactFormField;
  contactLastName: ContactFormField;
  contactEmail: ContactFormField;
  contactMessage: ContactFormField;
  contactTelephone: ContactFormField;
  contactSendButtonLabel: string;
};

type Copy = {
  pt: CopyData;
  en: CopyData;
};

const aboutDescription = generateLorem(5, 180);
const heroDescription = generateLorem(3, 120);

const copyData: Copy = {
  en: {
    linkHome: 'Home',
    linkAbout: 'About',
    linkBlog: 'Blog',
    linkContact: 'Contact',
    linkProjects: 'Projects',
    heroTitle: 'A hero text with exactly seven words',
    heroDescription: [
      'Meet your web development hero - a fullstack TypeScript developer who can create stunning web apps with beautiful animations and powerful business databases.',
      "With expertise in front-end and back-end development, this hero is equipped to take your project from conception to completion, ensuring a seamless user experience and exceptional functionality. Let's create something amazing together.",
    ],
    homeButtonAbout: 'About me',
    aboutTitle: 'Hello there!',
    aboutDescription,
    contactTitle: 'What is your dream project?',
    contactDescription:
      "I love hearing about people's dreams and provide services to make them come true. Let's get in touch and see how I can help fulfill your goals :)",
    contactEmailTitle: 'Email me directly',
    contactFirstName: {
      label: 'First Name',
      message: {
        required: 'Please, inform your first name',
      },
    },
    contactLastName: {
      label: 'Last Name',
    },
    contactEmail: {
      label: 'Email',
      message: {
        required: 'Please, inform your e-mail',
        mismatch: 'Please, inform a valid e-mail address',
      },
    },
    contactMessage: {
      label: 'Message',
      message: {
        required: 'Please, send a message',
      },
    },
    contactTelephone: {
      label: 'Telephone',
    },
    contactSendButtonLabel: 'Send',
  },
  pt: {
    linkHome: 'Início',
    linkAbout: 'Sobre',
    linkBlog: 'Blog',
    linkContact: 'Contato',
    linkProjects: 'Projetos',
    heroTitle: 'Um subtitulo com exatamente seis palavras',
    heroDescription,
    homeButtonAbout: 'Sobre Mim',
    aboutTitle: 'Olá!',
    aboutDescription,
    contactTitle: 'Qual é o projeto dos seus sonhos?',
    contactDescription:
      'Adoro ouvir o sonho das pessoas e prover serviços que possam ajudar a realizá-los',
    contactEmailTitle: 'Entre em contato comigo diretamente',
    contactFirstName: {
      label: 'Nome',
      message: {
        required: 'Por favor, informe seu nome',
      },
    },
    contactLastName: {
      label: 'Sobrenome',
    },
    contactEmail: {
      label: 'Email',
      message: {
        required: 'Por favor, informe seu e-mail',
        mismatch: 'Por favor, informe um e-mail válido',
      },
    },
    contactMessage: {
      label: 'Mensagem',
      message: {
        required: 'Por favor, insira uma mensagem',
      },
    },
    contactTelephone: {
      label: 'Telefone',
    },
    contactSendButtonLabel: 'Enviar',
  },
};

export default function useCopy() {
  const language = useAtomValue(siteLanguageAtom);

  return copyData[language];
}
