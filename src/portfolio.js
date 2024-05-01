/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Digvijay's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Digvijay shelar Portfolio",
    type: "website",
    url: "http://https://devshelar.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Digvijay shelar",
  logo_name: "Dev Shelar",
  nickname: "DevShelar",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1jRF6c6XN8B2IKrO37w3AyHr90rHLI4525nRQW011amk/edit?usp=sharing",
  portfolio_repository: "https://github.com/Shelar1423",
  githubProfile: "https://github.com/shelar1423",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shelar1423",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/digvijayshelar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@devshelar",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:digvijayshelar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/_DevShelar_",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/__shelar__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "FrontEnd Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using using Kotlin",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/devshelarwork/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Bhavan's Vivekananda College of Science, Humanities & Commerce Sainikpur",
      subtitle: "Bachelor's in Computer Application",
      logo_path: "bvclogo.png",
      alt_name: "bhavans viviekananda college",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on  Cloud Computing and  front-end Development.",
      ],
      website_link: "https://www.bhavansvc.ac.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AI productivity hacks",
      subtitle: "- Dr. Marily Nika",
      logo_path: "hrci.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/9b06e5eb56cbd4d72d8383b4d4f620d88719367638943e806a997fec17142670?u=60693444",
      alt_name: "linkedin learning",
      color_code: "#0000",
    },
    {
      title: "Prompt Enginerring for Generative AI",
      subtitle: "-  Ronnie Sheer",
      logo_path: "linkedin.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/aa4ec5d76b8bfb15c6364768ff5ffd0f63cb1de55d58c6655a11dd07f302cff4?u=60693444",
      alt_name: "deeplearning.ai",
      color_code: "#0000",
    },
    {
      title: "Distributed Systems",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1X37pGg7TdxGo2sRUV-GvATq9JKbAxufq/view?usp=sharing",
      alt_name: "nptel",
      color_code: "#FFBB0099",
    },
    {
      title: "Soda Code Hackathon",
      subtitle: "- 2nd Runner-Up",
      logo_path: "sodalogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Lzy9hfugu6KGKKsZjgoe8DoUT7U7uJSq/view?usp=sharing",
      alt_name: "sodacode",
      color_code: "#0000",
    },
    {
      title: "Infomatique Exhib: Nation Level Technical Fest",
      subtitle: "-1st Runner-Up",
      logo_path: "jospeh.png",
      certificate_link:
        "https://drive.google.com/file/d/1qGEQHp-0xUgXmNBP-qsyeHyTdQ_DAcAP/view?usp=sharing",
      alt_name: "stjoseph",
      color_code: "##0B6A3E",
    },
    {
      title: "Charles Babage Day: Intra-college technical Event",
      subtitle: "- 1st Runner Up",
      logo_path: "bvclogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qGEQHp-0xUgXmNBP-qsyeHyTdQ_DAcAP/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#0000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Been an intern at a startup and vounteer for Microsoft learn student ambassador's and college club.   I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Intern",
          company: "Caze labs private limited",
          company_url: "https://www.cazelabs.com/",
          logo_path: "cazelabslogo.png",
          // duration: "May 2022 - Aug 2022",
          // location: "San Francisco, USA",
          description:
            " Collaborated with a team to develop a responsive web design for organizations product dashboard , as a Support web dev intern",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Learn Student Ambassdor",
          company: "Microsoft",
          company_url:
            "https://mvp.microsoft.com/en-US/studentambassadors/profile/0fb9a10e-59e2-4ceb-8ac7-9d8fb985e1b2",
          logo_path: "microsoft_logo.png",
          duration: "Oct 2023 - Present",
          location: "Hyderabad, Telangana",
          description:
            "As a dedicated Microsoft Learn Student Ambassador, I had the incredible opportunity to contribute to the tech community and empower fellow students through various initiatives.A significant aspect of my role involved organizing and conducting event that aimed to learning, collaboration, and innovation among students",
          color: "#D83B01",
        },

        {
          title: "Fusion-Tech Club Public Relations Head",
          company: "Fusion-Tech Club",
          company_url: "https://www.instagram.com/fusiontech__/",
          logo_path: "fusiontech.jpeg",
          duration: " Mar 2023 - Mar 2024",
          location: "Hyderabad, Telangana",
          description:
            "As the Public Relations Coordinator for Fusion Tech, a dynamic club within the college community, I play a pivotal role in shaping the club's public image and fostering positive relationships. This role allowed me to leverage strategic communication skills to promote the club's activities and enhance its visibility both within and beyond the college community.",
          color: "#0C9D58",
        },
      ],
    },
    {
      title: "Work",
      work: true,
      experiences: [
        // {
        //   title: "Machine Learning Engineer",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "June 2023 - Present",
        //   location: "San Jose, CA, USA",
        //   description:
        //     "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
        //   color: "#000000",
        // },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        {
          title: "Fresher",
          // company: "N.A",
          // company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "fresher.png",
          // duration: "Nov 2017 - Dec 2017",
          // location: "Ahmedabad, Gujarat",
          description: "Fresher looking for opportunities",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Dev projects",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "image.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://dev.to/shelar1423/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dubaigate,Secundrabad",
    locality: "Hyderabad",
    country: "India",
    region: "Telangana",
    postalCode: "50009",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/8C1pSwQJrDaMqZNF6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
