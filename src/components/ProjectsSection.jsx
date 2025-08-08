import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "GreenCart",
        description: "Greencart is a modern e-commerce website for groceries and daily essentials, offering a seamless shopping experience with fast delivery and user-friendly design.",    
        image: "src/assets/project1.png",
        tags: ["React", "Express", "MongoDB"],
        demoUrl: "https://greencart-nine-sandy.vercel.app/",
        githubUrl: "https://github.com/Sidhjain17/greencart"
    },
    {
        id: 2,
        title: "TextUtils",
        description: "TextUtils is a web application for efficient text manipulation, offering tools like case conversion, word ,character count, extra space removal with a clean and responsive interface.",
        image: "src/assets/project2.png",
        tags: ["React", "JavaScript", "CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Sidhjain17/TextUtils-React"
    },
    {
        id: 3,
        title: "ARMS",
        description: "Animal Rescue Management System is a web-based platform to manage animal rescue operations, including reporting, tracking, and adoption of rescued animals.",
        image: "/project3.png",
        tags: ["React", "Express", "Node.js"],
        demoUrl: "https://ngo-client-eatb.onrender.com",
        githubUrl: "https://github.com/Sidhjain17/NGO"
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are some of my projects. Each project showcases my skills in web development, design, and problem-solving.
            </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                  <span className="px-2 py-1 border font-medium bg-secondary rounded-full text-sm text-secondary-foreground">
                    {tag}
                  </span>
                ))}
                </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank" href="https://github.com/Sidhjain17">Check My Github <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}