import ToDoAppPage from "@/assets/images/todo-app.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import responsivemultipage from "@/assets/images/responsive-multipage.png";
import smallReactMUIProject from "@/assets/images/localhost_3000_(1200).png";
import darkSaasBlockchainSite from "@/assets/images/dark-saas-blockchain-site.png";
import responsiveTripsWebsite from "@/assets/images/allam-travel.png";
import socialMediaProject from "@/assets/images/socialmedia.png";

const portfolioProjects = [
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Dark Saas Blockchain Website",
    results: [
      { title: "Astro js" },
      { title: "Tailwind CSS" },
      { title: "Framer Motion" },
    ],
    link: "https://dark-saas-blockchain-site-phi.vercel.app/",
    image: darkSaasBlockchainSite,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Responsive Multipage Website",
    results: [
      { title: "HTNL" },
      { title: "CSS" },
      { title: "JS" },
    ],
    link: "https://responsive-multipage-website.vercel.app/",
    image: responsivemultipage,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Responsive Trips Website",
    results: [
      { title: "Vite js" },
      { title: "aos Animation" },
      { title: "TypeScript" },
    ],
    link: "https://allam-travel.vercel.app/",
    image: responsiveTripsWebsite,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Responsive Social Media Website",
    results: [
      { title: "HTNL" },
      { title: "JS" },
      { title: "Bootstrap" },
    ],
    link: "https://elaborate-sherbet-2df90d.netlify.app/profile.html?user=4237",
    image: socialMediaProject,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Dark Saas Landing Website",
    results: [
      { title: "Next js" },
      { title: "Tailwind CSS" },
      { title: "Framer Motion" },
    ],
    link: "https://saas-website-dark-landing-page-teal.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Light Saas Landing Website",
    results: [
      { title: "Next js" },
      { title: "Tailwind CSS" },
      { title: "Framer Motion" },
    ],
    link: "https://light-saas-landing-page-eight.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "AI SEO Landing Website",
    results: [
      { title: "Next js" },
      { title: "Tailwind CSS" },
      { title: "Framer Motion" },
    ],
    link: "https://ai-landing-page-omega-teal.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "Small React MUI Project",
    results: [
      { title: "React" },
      { title: "Material UI" },
      { title: "JavaScript" },
    ],
    link: "https://small-react-mui-project.vercel.app/",
    image: smallReactMUIProject,
  },
  {
    company: "RFRF Projects",
    year: "2025",
    title: "To-Do-App-List Project",
    results: [
      { title: "React"},
      { title: "Java Script" },
      { title: "Local Storage" },
    ],
    link: "https://ahmedsaadrf.github.io/todo-list-web-app/",
    image: ToDoAppPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">

        <SectionHeader title="Featured Projects" eyebrow="Real-world Results" description="See how I transformed concepts into engaging digital experiences." />

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (

              <div key={project.title} className="sticky"  style={{ top: projectIndex <= 3 ? `calc(64px + ${projectIndex * 40}px)` : `calc(64px + ${3 * 40}px)` }}>
                <Card className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">

                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                        <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                          <CheckCircleIcon className="size-5 md:size-6"/>
                          <span>{result.title}</span>
                        </li>
                      ))}</ul>

                      <a href={project.link} target='_blank'>
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6 md:w-auto ">
                          <span>Visit Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>

                    <div className="relative">
                      <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-2xl" />
                    </div>

                  </div>

                </Card>
              </div>
          ))}

        </div>

      </div>
    </section>
  )
};
