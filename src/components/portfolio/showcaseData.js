import charta from '../../assets/charta.png';
import wildlife from '../../assets/wildlife.jpg';
import covidtravel from '../../assets/covidtravel.jpg';

const showcaseData = [
  {
    title: 'Charta',
    image: charta,
    github: true,
    githubLink: 'https://github.com/320james/charta',
    video: false,
    videoLink: '',
    technologies: 'Next 15, Node, Postgres, Prisma, NeonDB, Shadcn',
    description:
      'Charta was built to provide a sleek, and modern template to create a web application that adds advanced authentication - along with admin / user dashboard and settings.',
    lock: false,
  },
  {
    title: 'CovidTravel',
    image: covidtravel,
    github: false,
    githubLink: '',
    video: true,
    videoLink:
      'https://drive.google.com/file/d/1AejkB-oECHbPFnlj_aRC1vRemeAmnMb3/view',
    liveDemo: false,
    liveDemoLink: '',
    technologies: 'Swift, XCode, iOS',
    description:
      'iOS application that provides various resources to help the community travel safely and stay informed during the COVID-19 pandemic.',
    lock: false,
  },
  {
    title: 'Wildlife Disease & Ecology',
    image: wildlife,
    github: false,
    githubLink: '',
    video: false,
    videoLink: '',
    liveDemo: false,
    liveDemoLink: '',
    technologies: 'MongoDB, Express.js, React.js, Node.js',
    description:
      'Responsive and minimalistic redesign for the Laboratory of Disease Ecology & Biogeography website at Virginia Tech.',
    lock: true,
  },
];

export default showcaseData;
