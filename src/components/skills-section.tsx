import { ReactNode } from "react";
import "remixicon/fonts/remixicon.css";
interface SkillProps {
  name: string;
}

function Skill({ name }: SkillProps) {
  return <span className="inline-flex items-center font-medium">{name}</span>;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillProps[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold my-2 italic text-[#e6e6e16d]">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={skill.name} className="flex items-center">
            <Skill {...skill} />
            {index < skills.length - 1 && (
              <span className="ml-2 text-gray-400">,</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className = "" }: SectionProps) {
  return (
    <div className={`flex flex-col items-start justify-center ${className}`}>
      {children}
    </div>
  );
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "GSAP" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Figma" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Other",
    skills: [{ name: "C++" }],
  },
];

export default function Skills() {
  return (
    <section className="w-screen h-screen bg-[#E6E6E1] text-[#E6E6E1] flex items-center justify-center p-4">
      <div
        id="skills-box"
        className="w-full max-w-[96%] h-full max-h-[96%] bg-[#1C1C1A] rounded-[35px] p-8 overflow-auto flex flex-col items-center justify-center"
      >
        <Section className="w-full max-w-2xl">
          <Section>
            <h1 className="text-4xl font-bold text-center mb-2">
              Skills{" "}
              <span className="font-extralight">
                <i className="ri-file-code-line"></i>
              </span>
            </h1>
            <p className="text-xl text-start mb-8 text-[#e6e6e16d]">
              Cool languages & tools I have worked with
            </p>
          </Section>
          <Section>
            {skillCategories.map((category) => (
              <SkillCategory key={category.title} {...category} />
            ))}
          </Section>
        </Section>
      </div>
    </section>
  );
}
