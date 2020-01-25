import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Ryan Raishart',
  subtitle: `I'm the developer you need.`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: `https://drive.google.com/uc?export=download&id=1eQ6Up7hpLQi5oUELYnukymXiMAWXmzOR`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'robofriends.png',
    title: 'robofriends',
    info: 'Searchable React app of user list from API',
    info2: '',
    url: 'https://rraishart.github.io/robofriends/',
    repo: 'https://github.com/rraishart/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'bggen.png',
    title: 'Background Generator',
    info: 'Simple java script app that displays color gradient and relevant CSS.',
    info2: '',
    url: 'https://rraishart.github.io/background-generator/',
    repo: 'https://github.com/rraishart/background-generator', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'email',
  email: 'rjraishart@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Kittyboy1919',
    },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryanraishart/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/rraishart',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
