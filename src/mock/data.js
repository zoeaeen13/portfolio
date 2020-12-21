import { nanoid } from 'nanoid';
import project from '../images/project.jpg'
import projectTitch from '../images/project_twitch.gif';
import projectMessageBoard from '../images/project_messageboard.gif';
import projectReduxBlog from '../images/project_reduxBlog.gif';
import projectReactTodolist from '../images/project_reactTodolist.gif';
import projectReactGame from '../images/project_reactGame.gif'
import imgAbout from '../images/about.jpg';

// HEAD DATA
export const headData = {
  title: 'Meng-Hua Yu | Front-end Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcom to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Meng-Hua Yu',
  subtitle: `a Front-end Developer, I make Application for better life.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: imgAbout,
  resume: 'https://www.cakeresume.com/zoeaeen13-frontend',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: projectReduxBlog,
    title: 'Redux: Blog',
    info: 'A blog system that enables users to upload, edit and delete articles.',
    info2: '- Involved in reworking on single page application using React, Redux and Router',
    url: 'https://zoeaeen13.github.io/lidemy-week24-redux-blog/#/',
    repo: 'https://github.com/zoeaeen13/lidemy-week24-redux-blog',
  },
  {
    id: nanoid(),
    img: projectReactGame,
    title: 'Tic Tac Toe & Gobang',
    info: 'Tic Tac Toe & Gobang are very easy to learn and popular board games, purely strategic chess games of two players.',
    info2: '- Building a SPA using the reusable components and routers',
    info3: '- Using React developer tools plugin for debugging',
    url: 'https://zoeaeen13.github.io/react-game/#/',
    repo: 'https://github.com/zoeaeen13/react-game',
  },
  {
    id: nanoid(),
    img: projectReactTodolist,
    title: 'React: Todo List',
    info: 'A todo list with React, JSX, styled-component and hooks.',
    info2: '- Developing the presentational styled components with SASS',
    info3: '- Using hooks to handle state & side effects',
    url: 'https://zoeaeen13.github.io/lidemy-week21-react-todolist/',
    repo: 'https://github.com/zoeaeen13/lidemy-week21-react-todolist',
  },
  {
    id: nanoid(),
    img: projectMessageBoard,
    title: 'PHP: Message Board',
    info: 'A message board with menber management system.',
    info2: '- Using PDO prepared statement to write queries to prevent SQL Injection',
    url: 'http://oldfish.tw/Demo/week11/messageBoard/index.php',
    repo: 'https://github.com/zoeaeen13/Demo/tree/master/week11/messageBoard',
  },
  {
    id: nanoid(),
    img: projectTitch,
    title: 'Twitch Live Streams',
    info: `A information platform to show live streams of five top games on Twitch.`,
    info2: '- Fetching data from Restful APIs',
    url: '',
    repo: '', 
  },
];



// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ymh.961026@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://zoeaeen13.github.io/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/meng-hua-yu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zoeaeen13',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
