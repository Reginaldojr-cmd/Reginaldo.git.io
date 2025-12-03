import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Em Desenvolvimento",
    description: "Estou trabalhando em projetos pessoais para aplicar meus conhecimentos em Python, HTML, CSS e JavaScript.",
    tags: ["Python", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    title: "Aprendizado Contínuo",
    description: "Estudando e praticando desenvolvimento web e programação para expandir meu portfólio.",
    tags: ["Estudos", "Prática", "Desenvolvimento"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
            Projetos <span className="text-gradient">Destacados</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article 
                key={index}
                className="group bg-card rounded-lg overflow-hidden card-shadow hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver código no GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
