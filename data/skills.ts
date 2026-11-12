import { 
  SiPython, SiJavascript, SiR,
  SiSpringboot, SiReact, SiNodedotjs, SiExpress, SiBootstrap, SiJquery,
  SiHtml5, SiMysql, SiMongodb, SiPostman, SiIntellijidea, SiGithub, SiGit
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa6"; // Swapped the missing icons here!
import { Database, Code2, Layout, Wrench } from "lucide-react";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: Database, color: "#00758F" },
      { name: "R", icon: SiR, color: "#276DC3" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    ],
  },
  {
    title: "Web Technologies",
    icon: Code2,
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" }, // Swapped here too
      { name: "AJAX", icon: Code2, color: "#ffffff" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PL/SQL", icon: Database, color: "#F80000" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#FE315D" },
    ],
  },
];