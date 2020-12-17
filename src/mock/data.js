import { nanoid } from 'nanoid';
import project from '../images/project.jpg'
import projectTitch from '../images/project_twitch.gif';
import projectMessageBoard from '../images/project_messageboard.gif';
import projectReduxBlog from '../images/project_reduxBlog.gif';
import projectReactTodolist from '../images/project_reactTodolist.gif';


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
  subtitle: `a Designer & Front-end Developer, I make Application for better life.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpg',
  resume: 'https://www.cakeresume.com/zoeaeen13-frontend',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: projectReduxBlog,
    title: 'Redux: Blog',
    info: 'A blog system enable users to add new posts.',
    info2: '- Involved in reworking on single page applications using React, ThunkRedux, React-Router',
    url: 'https://zoeaeen13.github.io/lidemy-week24-redux-blog/#/',
    repo: '',
  },
  {
    id: nanoid(),
    img: projectReactTodolist,
    title: 'React: Todo List',
    info: 'A todo list with React, JSX, styled-component and hooks.',
    info2: '- Developing the presentational styled components with SASS',
    info3: '- Using hooks for state and effects',
    url: 'https://zoeaeen13.github.io/lidemy-week21-react-todolist/',
    repo: '',
  },
  {
    id: nanoid(),
    img: projectMessageBoard,
    title: 'PHP: Message Board',
    info: 'A message board with menber management system.',
    info2: '- Using PDO prepared statement to write queries to prevent SQL Injection',
    url: 'http://oldfish.tw/Demo/week11/messageBoard/index.php',
    repo: '',
  },
  {
    id: nanoid(),
    img: projectTitch,
    title: 'Twitch Live Streams',
    info: `A information platform to show live streams of five top games on Twitch.`,
    info2: '- Fetching data from Restful APIs',
    url: 'http://mentor-program.co/mtr04group6/zoeaeen13/week13/hw3/index.html',
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
