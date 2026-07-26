
export enum SkillNames {
  FLUTTER = "flutter",
  DART = "dart",
  JS = "js",
  CPP = "cpp",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  FIREBASE = "firebase",
  LINUX = "linux",
  DSA = "dsa",
  DOCKER = "docker",
  AWS = "aws",
  GCP = "gcp",
  PYTHON = "python",
  restApi = "restapi",
  JAVA = "java",
  REACT_NATIVE = "react-native",
  REACT_NATIVE_ALT = "reactnative",
  ANDROID = "android",
  ANDROID_STUDIO = "androidstudio",
  ANDROID_STUDIO_ALT = "android-studio",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  proficiency?: "Expert" | "Advanced" | "Proficient" | "Familiar";
  level?: number;
  category?: "Frontend & Mobile" | "Backend & Cloud" | "Core & Architecture" | "Tools & DevOps";
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.restApi]: {
    id: 30,
    name: "restapi",
    label: "REST API",
    shortDescription:
      "the vital bridge connecting sleek mobile and web apps to powerful backend services! 🌉⚡",
    color: "#FF6C37",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg",
    proficiency: "Advanced",
    level: 90,
    category: "Backend & Cloud",
  },
  [SkillNames.DSA]: {
    id: 31,
    name: "dsa",
    label: "Data Structures & Algorithms",
    shortDescription:
      "the secret sauce behind efficient code, making your programs fly! 🚀💻",
    color: "#FF6C37",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg",
    proficiency: "Expert",
    level: 100,
    category: "Core & Architecture",
  },
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/javascript/javascript-original.svg",
    proficiency: "Advanced",
    level: 85,
    category: "Core & Architecture",
  },
  [SkillNames.PYTHON]: {
    id: 29,
    name: "python",
    label: "Python",
    shortDescription: "The Swiss Army knife of programming, no cap! 🛠️🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/python/python-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Core & Architecture",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/html5/html5-original.svg",
    proficiency: "Expert",
    level: 90,
    category: "Frontend & Mobile",
  },
  [SkillNames.CPP]: {
    id: 28,
    name: "cpp",
    label: "C++",
    shortDescription: "The backbone of high-performance applications, no cap! 🚀",
    color: "#00599C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/cplusplus/cplusplus-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Core & Architecture",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/css3/css3-original.svg",
    proficiency: "Advanced",
    level: 85
    ,
    category: "Frontend & Mobile",
  },
  [SkillNames.FLUTTER]: {
    id: 26,
    name: "flutter",
    label: "Flutter",
    shortDescription: "Cross-platform apps running at buttery smooth 60 FPS! 📱⚡",
    color: "#02569B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/flutter/flutter-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Frontend & Mobile",
  },
  [SkillNames.DART]: {
    id: 27,
    name: "dart",
    label: "Dart",
    shortDescription: "Client-optimized language for fast apps on any platform! 🎯⚡",
    color: "#0175C2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/dart/dart-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Frontend & Mobile",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/react/react-original.svg",
    proficiency: "Advanced",
    level: 80,
    category: "Frontend & Mobile",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nextjs/nextjs-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Frontend & Mobile",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nodejs/nodejs-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Backend & Cloud",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/express/express-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Backend & Cloud",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/mongodb/mongodb-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Backend & Cloud",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/git/git-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Tools & DevOps",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/github/github-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Tools & DevOps",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/npm/npm-original-wordmark.svg",
    proficiency: "Proficient",
    level: 85,
    category: "Tools & DevOps",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/firebase/firebase-plain.svg",
    proficiency: "Expert",
    level: 100,
    category: "Backend & Cloud",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/linux/linux-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Tools & DevOps",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/docker/docker-original.svg",
    proficiency: "Advanced",
    level: 80,
    category: "Tools & DevOps",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    proficiency: "Expert",
    level: 100,
    category: "Backend & Cloud",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/googlecloud/googlecloud-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Backend & Cloud",
  },
  [SkillNames.JAVA]: {
    id: 32,
    name: "java",
    label: "Java",
    shortDescription:
      "Write once, debug everywhere! The OG powerhouse of enterprise tech ☕🔥",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/java/java-original.svg",
    proficiency: "Advanced",
    level: 90,
    category: "Core & Architecture",
  },
  [SkillNames.REACT_NATIVE]: {
    id: 33,
    name: "react-native",
    label: "React Native",
    shortDescription:
      "One codebase to rule iOS and Android! Mobile dev made seamless 📱⚡",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/react/react-original.svg",
    proficiency: "Advanced",
    level: 85,
    category: "Frontend & Mobile",
  },
  [SkillNames.REACT_NATIVE_ALT]: {
    id: 34,
    name: "reactnative",
    label: "React Native",
    shortDescription:
      "One codebase to rule iOS and Android! Mobile dev made seamless 📱⚡",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/react/react-original.svg",
    proficiency: "Advanced",
    level: 85,
    category: "Frontend & Mobile",
  },
  [SkillNames.ANDROID]: {
    id: 35,
    name: "android",
    label: "Android Studio",
    shortDescription:
      "The heavy-duty workshop for building native Android masterpieces! 🤖🔋",
    color: "#3DDC84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/androidstudio/androidstudio-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Tools & DevOps",
  },
  [SkillNames.ANDROID_STUDIO]: {
    id: 36,
    name: "androidstudio",
    label: "Android Studio",
    shortDescription:
      "The heavy-duty workshop for building native Android masterpieces! 🤖🔋",
    color: "#3DDC84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/androidstudio/androidstudio-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Tools & DevOps",
  },
  [SkillNames.ANDROID_STUDIO_ALT]: {
    id: 37,
    name: "android-studio",
    label: "Android Studio",
    shortDescription:
      "The heavy-duty workshop for building native Android masterpieces! 🤖🔋",
    color: "#3DDC84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/androidstudio/androidstudio-original.svg",
    proficiency: "Expert",
    level: 100,
    category: "Tools & DevOps",
  },
};

export const UNIQUE_SKILLS: Skill[] = Object.values(SKILLS).reduce((acc: Skill[], curr: Skill) => {
  if (!acc.some(s => s.label === curr.label)) {
    acc.push(curr);
  }
  return acc;
}, []).sort((a, b) => (b.level || 80) - (a.level || 80));

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "july 2026",
    title: "Research Intern",
    company: "IIT Roorkee",
    description: [
     "Built a cross-platform Flutter IoT application, achieving 60 FPS UI rendering and under 200ms latency.",
      "Developed a real-time Digital Twin application integrating Advanced Machine Learning models, successfully processing 10,000+ live sensor data points daily for predictive analytics.",
      "Engineered a scalable Dart state-management architecture, handling 500+ concurrent requests at 99.9% uptime.",],
    skills: [
      SkillNames.FLUTTER,
      SkillNames.DART,
      SkillNames.FIREBASE,
      SkillNames.CPP,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.LINUX,
    ],
  },
  {
    id: 2,
    startDate: "Dec 2023",
    endDate: "Dec 2025",
    title: "Freelance Full Stack Developer",
    company: "Self-employed",
    description: [
      "Engineered and Deployed custom cross-platform mobile applications for clients using Flutter and Dart.",
      "Integrated Firebase and MongoDB backends for user authentication, real-time databases, and cloud storage.",
      "Implemented payment gateways and secure REST API integrations tailored to specific client workflows.",
      "Managed full app development lifecycles from initial UI design to production deployment.",
    ],
    skills: [
      SkillNames.FLUTTER,
      SkillNames.DART,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.FIREBASE,
      SkillNames.CPP,
      SkillNames.GIT,
      SkillNames.GITHUB,
      SkillNames.LINUX,

      
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thank you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

