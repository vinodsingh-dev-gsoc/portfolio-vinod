import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const deviconBrand = (title: string, cdnUrl: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: (
    <img
      src={cdnUrl}
      alt={title}
      className="w-full h-full object-contain drop-shadow-sm"
    />
  ),
});
const PROJECT_SKILLS = {
  flutter: deviconBrand(
    "Flutter",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/flutter/flutter-original.svg"
  ),
  dart: deviconBrand(
    "Dart",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/dart/dart-original.svg"
  ),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  cplusplus: deviconBrand(
    "C++",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/cplusplus/cplusplus-original.svg"
  ),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: deviconBrand(
    "Python",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/python/python-original.svg"
  ),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: deviconBrand(
    "Firebase",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/firebase/firebase-plain.svg"
  ),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  
    {
    id: "padhaipedia",
    category: "E-commerce Mobile Application",
    title: "PadhaiPedia",
    src: "/assets/projects-screenshots/padhaipedia/padhaiPedia_Tablet_welcomeScreen.png",
    screenshots: [
      "padhaiPedia_Tablet_welcomeScreen.png",
      "home_screen.jpeg",
      "padhaiPedia_Tablet_notesViewScreen.png",
      "explore_notes.jpeg",
      "padhaiPedia_Tablet_ReferAndEarnScreen.png",
      "refer_and_earn.jpeg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "https://play.google.com/store/apps/details?id=com.vinod.padhaipedia",
    get content() {
      return (
        <div>
          <div className="mb-8">
            <SlideShow
              images={this.screenshots.map(
                (img) => `/assets/projects-screenshots/${this.id}/${img}`
              )}
            />
          </div>
          <TypographyP className="font-mono text-2xl text-center">
            An end-to-end cross-platform application for coaching institutes.
          </TypographyP>
          <TypographyP className="font-mono">
            Developed a secure platform to distribute over 50 proprietary
            courses. Integrated a Firebase backend and Google Play Billing to
            handle real-time digital transactions and secure in-app
            purchases. Successfully managed live production builds and
            published the application live on the Google Play Store.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "digital-twin",
    category: "IoT & Data Analytics",
    title: "Real-time Digital Twin",
    src: "/assets/projects-screenshots/livestock/implementationOfProject.png",
    screenshots: [
      "implementationOfProject.png",
      "implementationOfProject2.png",
      "outcomesOfApp.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.cplusplus],
    },
    live: "#",
    get content() {
      return (
        <div>
          <div className="mb-8">
            <SlideShow
              images={this.screenshots.map(
                (img) => `/assets/projects-screenshots/livestock/${img}`
              )}
            />
          </div>
          <TypographyP className="font-mono text-2xl text-center">
            A real-time Digital Twin application integrating Machine Learning
            models.
          </TypographyP>
          <TypographyP className="font-mono">
            Built a cross-platform Flutter IoT dashboard that achieves 60 FPS
            UI rendering and stays under 200ms latency. The system
            successfully processes over 10,000 live sensor data points daily
            for predictive analytics, utilizing behavior classification
            models like XGBoost and SVM to monitor physical activities.
            Engineered a highly scalable Dart state-management architecture
            that handles 500+ concurrent requests maintaining 99.9% uptime.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "3D Web Application & Portfolio",
    title: "Interactive 3D Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [
      "landing.png",
      "projects.png",
      "skills.png",
      "blogs.png",
      "contact.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.shadcn,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <div className="mb-8">
            <SlideShow
              images={this.screenshots.map(
                (img) => `/assets/projects-screenshots/portfolio/${img}`
              )}
            />
          </div>
          <TypographyP className="font-mono text-2xl text-center">
            An immersive 3D interactive portfolio featuring real-time WebGL animations.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed and built a state-of-the-art interactive web application using Next.js, React, and TypeScript. Integrated an interactive 3D mechanical keyboard built with Spline and Three.js where keycaps dynamically bounce and respond to user interactions and hover events. Leveraged Framer Motion and GSAP for fluid micro-animations, glassmorphism UI components, and optimal performance across all devices.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
