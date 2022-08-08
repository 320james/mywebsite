import cheers from '../../assets/cheers.jpg'
import wildlife from '../../assets/wildlife.jpg'
import covidtravel from '../../assets/covidtravel.jpg'

const showcaseData = [
    {
        title: 'Cheers!',
        image: cheers,
        github: true,
        githubLink: "https://github.com/320james/Cheers",
        video: false,
        videoLink: "",
        liveDemo: true,
        liveDemoLink: "https://cheers-application.netlify.app/",
        technologies: "MySQL, Express.js, React.js, Node.js",
        description: "Web application that allows users to sign up, log in, share & explore a plethora of different cocktails recipes (21 and older, of course).",
        lock: false
    },
    {
        title: 'CovidTravel',
        image: covidtravel,
        github: false,
        githubLink: "",
        video: true,
        videoLink: "https://drive.google.com/file/d/1AejkB-oECHbPFnlj_aRC1vRemeAmnMb3/view",
        liveDemo: false,
        liveDemoLink: "",
        technologies: "Swift, XCode, iOS",
        description: "iOS application that provides various resources to help the community travel safely and stay informed during the COVID-19 pandemic.",
        lock: false
    },
    {
        title: 'Wildlife Disease & Ecology',
        image: wildlife,
        github: false,
        githubLink: "",
        video: false,
        videoLink: "",
        liveDemo: false,
        liveDemoLink: "",
        technologies: "MongoDB, Express.js, React.js, Node.js",
        description: "Responsive and minimalistic redesign for the Laboratory of Disease Ecology & Biogeography website at Virginia Tech.",
        lock: true
    },


]

export default showcaseData;