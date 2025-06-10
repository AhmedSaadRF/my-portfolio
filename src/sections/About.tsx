"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import BookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import myImg from "@/assets/images/1704637099130.jpg";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import CIcon from "@/assets/icons/cLang.svg";
import TypeScriptIcon from "@/assets/icons/icons8-typescript.svg";
import NextIcon from "@/assets/icons/Next.js.svg";
import TailwindIcon from "@/assets/icons/icons8-tailwind-css.svg";
import CppIcon from "@/assets/icons/cplusplus-svgrepo-com.svg";
import PythonIcon from "@/assets/icons/icons8-python.svg";
import JavaIcon from "@/assets/icons/icons8-java.svg";
import BootstrapIcon from "@/assets/icons/icons8-bootstrap.svg";
import SASSIcon from "@/assets/icons/icons8-sass.svg";
import ReduxIcon from "@/assets/icons/redux-svgrepo-com.svg";
import ExpressJSIcon from "@/assets/icons/icons8-express-js.svg";
import GulpJSIcon from "@/assets/icons/icons8-gulp.svg";
import NodeJSIcon from "@/assets/icons/icons8-nodejs.svg";
import FirebaseIcon from "@/assets/icons/icons8-firebase.svg";
import FontAwesomeIcon from "@/assets/icons/font-awesome-svgrepo-com.svg";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: <JavaScriptIcon className="size-[43px]" />,
  },
  {
    title: "HTML5",
    iconType: <HtmlIcon className="size-11" />,
  },
  {
    title: "CSS3",
    iconType: <CssIcon />,
  },
  {
    title: "React",
    iconType: <ReactIcon />,
  },
  {
    title: "C-Lang",
    iconType: <CIcon className="size-10" />,
  },
  {
    title: "Github",
    iconType: <GithubIcon />,
  },
  {
    title: "TypeScript",
    iconType: <TypeScriptIcon className="size-[43px]" />,
  },
  {
    title: "Next.js",
    iconType: <NextIcon />,
  },
  {
    title: "Tailwind CSS",
    iconType: <TailwindIcon className="size-10" />,
  },
  {
    title: "Cpp",
    iconType: <CppIcon className="size-10" />,
  },
  {
    title: "Python",
    iconType: <PythonIcon className="size-10" />,
  },
  {
    title: "Java",
    iconType: <JavaIcon className="size-10" />,
  },
  {
    title: "Bootstrap",
    iconType: <BootstrapIcon className="size-11" />,
  },
  {
    title: "SASS",
    iconType: <SASSIcon className="size-10" />,
  },
  {
    title: "Redux",
    iconType: <ReduxIcon className="size-10" />,
  },
  {
    title: "ExpressJS",
    iconType: <ExpressJSIcon className="size-10" />,
  },
  {
    title: "GulpJS",
    iconType: <GulpJSIcon className="size-10" />,
  },
  {
    title: "NodeJS",
    iconType: <NodeJSIcon className="size-10" />,
  },
  {
    title: "Firebase",
    iconType: <FirebaseIcon className="size-10" />,
  },
  {
    title: "FontAwesome",
    iconType: <FontAwesomeIcon className="size-10" />,
  },
];

const hobbies = [
  {
    title: "Football",
    emoji:"",
    left: "5%",
    top: "5%",
  },
  {
    title: "Watch Movies",
    emoji:"🎥",
    left: "30%",
    top: "5%",
  },
  {
    title: "Watch Football",
    emoji:"⚽",
    left: "65%",
    top: "5%",
  },
  {
    title: "Travel",
    emoji:"✈️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji:"🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji:"🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji:"🏋‍♂",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji:"📚",
    left: "45%",
    top: "70%",
  },
]

export const AboutSection = () => {
  const constraintref = useRef(null);

  return (
    <div className="py-20 lg:py28" id="about">
      <div className="container">
        <SectionHeader title="A Glimpse Into My World" eyebrow="About Me" description="Learn more about who I am, what I do, What inspires me." />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <Card className="h-[320px]">
                <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={BookImage} alt="Book Cover" />
                </div>
              </Card>
            </div>

            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px]">
                <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." />
                <ToolBoxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:60s]" />
                <ToolBoxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:30s]" />
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-3 lg:col-span-2">
              <Card className="h-[320px] p-0 flex flex-col">
                <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
                <div className="relative flex-1" ref={constraintref}>
                  {hobbies.map(hobby => (
                    <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{ left: hobby.left, top: hobby.top }} drag dragConstraints={constraintref}>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <a href="https://maps.app.goo.gl/mSMrAhwqmw7kQePV6" target="_blank">
                <Card className="h-[320px] p-0 relative md:col-span-1">
                  <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                    <div className="absolute inset-0 rounded-full bg-white/30 bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                    <div className="absolute inset-0 rounded-full bg-white/30 bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

                    <Image src={myImg} alt="Memoji" className="size-20 rounded-full" />
                  </div>
                </Card>
              </a>
            </div>
          </div>      

        </div>
      </div>
    </div>
  )
};
