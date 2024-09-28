import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "भित्तचित्रम्",
    description:
      "भित्तचित्रम् , where you can explore and download custom wallpapers for desktop and Android, all created by me.",
    technologies: [
      "Next.js ,",
      "Tailwind ,",
      "TypeScript ,",
      "Framer Motion ,",
      "Cloudinary ,",
      "Netlify",
    ],
    imageUrl: "/asset/images/bhitChitram.png",
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Chat With Web",
    description:
      "Chat with Web is a web-based AI application that allows users to interact with websites through a chat interface, By entering a URL",
    technologies: [
      "Next.js ,",
      "NextUI ,",
      "Tailwind ,",
      "TypeScript ,",
      "AI-Powered API ,",
      "Upstash Integration",
    ],
    imageUrl: "/asset/images/chat-with-web.png",
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "MovieFlix",
    description:
      "MovieFlix is a web-based application that allows users to search for movies and retrieve their details, including posters, titles, release years, and types.",
    technologies: ["React ,", "CSS ,", "OMDB API"],
    imageUrl: "/asset/images/movieflix.png",
    liveUrl: "https://movieflix-hv.vercel.app/",
    githubUrl: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "T-shirt Design",
    description:
      "I designed t-shirt for our event 'Ultimate Clash' which is part of college's tech fest 'Xenesis'.",
    technologies: ["Figma"],
    imageUrl:
      "/asset/images/tshirt-mockup-of-an-indian-man-with-oversized-fit-scene1-0356.jpg",
    liveUrl:
      "https://drive.google.com/drive/folders/1JxJNoxiG3o2SAVhs8uvzowyu4ehp3JRE?usp=drive_link",
    githubUrl: "https://github.com/yourusername/project3",
  },
  {
    id: 5,
    title: "MovieFlix",
    description:
      "MovieFlix is a web-based application that allows users to search for movies and retrieve their details, including posters, titles, release years, and types.",
    technologies: ["React", "CSS", "OMDB API"],
    imageUrl: "/asset/images/movieflix.png",
    liveUrl: "https://movieflix-hv.vercel.app/",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#1C1C1A] text-[#E6E6E1] p-12">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <p className="text-xl text-start mb-8 text-[#e6e6e16d]">
        Amazing projects i have cooked...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#2A2A27] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300["
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4 italic text-[#e6e6e19e]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-base">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[#E6E6E1] hover:text-[#E6E6E1]/80 px-3 py-1.5 rounded-full bg-[#1C1C1A]/70"
                >
                  <ExternalLinkIcon className="mr-2" size={14} /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#E6E6E1] hover:text-[#E6E6E1]/80 px-3 py-1.5 rounded-full bg-[#1C1C1A]/70"
                >
                  <GithubIcon className="mr-2" size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
