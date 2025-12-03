import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Estagiário de TI",
    company: "Área de Tecnologia da Informação",
    period: "Atual",
    description: "Suporte técnico, manutenção de sistemas e auxílio no desenvolvimento de soluções tecnológicas.",
  },
  {
    title: "Atendimento ao Cliente",
    company: "Experiência Profissional",
    period: "Anterior",
    description: "Atendimento direto ao público, resolução de problemas e comunicação eficiente com clientes.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Experiência</span> Profissional
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div 
                  className={`bg-card rounded-lg p-6 card-shadow ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } hover:border-primary/50 border border-transparent transition-colors`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full top-6 glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
