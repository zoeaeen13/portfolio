import { nanoid } from 'nanoid';
import project from '../images/project.jpg'
import projectTitch from '../images/project_twitch.gif';
import projectMessageBoard from '../images/project_messageboard.gif';

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
    img: project,
    title: '',
    info: '',
    info2: '',
    url: 'https://nccucentralra.blogspot.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: projectMessageBoard,
    title: 'PHP 留言板系統',
    info: '具備會員功能的留言板， 使用 PDO prepare statement 存取 MySQL 資料庫',
    info2: '佈署自行架設 AWS EC2 Ubuntu 主機',
    url: 'http://oldfish.tw/Demo/week11/messageBoard/index.php',
    repo: 'https://github.com/zoeaeen13/Demo/tree/master/week11/messageBoard',
  },
  {
    id: nanoid(),
    img: projectTitch,
    title: 'Twitch 遊戲實況平台',
    info: '串接 Twitch API 顯示出目前最熱門的 5 個遊戲及實況',
    info2: '使用 Fetch 進行前後端串接',
    url: 'http://mentor-program.co/mtr04group6/zoeaeen13/week13/hw3/index.html',
    repo: '', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'ymh.961026@gmail.com',
  btn: '',
  email: '',
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
