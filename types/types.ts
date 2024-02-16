export type NavigationDictionary = {
  home: string;
  projects: string;
  contact: string;
};

export type HomeDictionary = {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  about: {
    title: string;
    subtitle: string;
    firstAboutParagraph: string;
    firstAboutParagraphBoldText: string;
    firstAboutParagraphRest: string;
    secondAboutParagraph: string;
    thirdAboutParagraph: string;
    fourthAboutParagraph: string;
    contactButtonText: string;
  };
  services: {
    title: string;
    subtitle: string;
    servicesList: {
      title: string;
      description: string;
    }[];
  };
  selectedProjects: {
    title: string;
    subtitle: string;
    decsription: string;
    buttonText: string;
  };
};

export type ProjectsDictionary = {
  title: string;
  subtitle: string;
  projectName: string;
  projectType: string;
  projectFunction: string;
  projectParticipants: string;
};

export type ContactDictionary = {
  title: string;
  subtitle: string;
  message: string;
  form: {
    name: string;
    email: string;
    title: string;
    content: string;
    buttonText: string;
    messageSent: string;
    messageFailed: string;
  };
  info: string;
  phone: string;
  office: string;
  locations: string;
  teamInviteTitle: string;
  teamInviteDescription: string;
};

export type FooterDictionary = {
  location: {
    title: string;
    hq: string;
    office: string;
    countries: {
      name: string;
      hqAddress: string;
      officeAddress?: string;
    }[];
  };
  contact: {
    title: string;
    email: string;
    office: string;
  };
};

export type ProjectDetails = {
  fields: {
    en: ProjectTextData;
    hr: ProjectTextData;
    featured: boolean;
    featuredImage: ImageData;
    images: ImageData[];
    slug: string;
  };
};

export type ImageData = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: { image: { width: number; height: number } };
    };
  };
};

export type ProjectTextData = {
  fields: {
    title: string;
    type: string;
    function: string;
    participants?: string;
    description: string;
    location?: string;
  };
};
