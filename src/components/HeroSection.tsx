import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(16_85%_60%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="animate-fade-up text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Desenvolvedor Junior
          </p>
          
          <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Reginaldo <span className="text-gradient">Lioci</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Empenhado e sempre em busca de aprendizado. 
            Especializado em Python, HTML, CSS e JavaScript.
          </p>
          
          <div className="animate-fade-up-delay-3 flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://github.com/Reginaldojr-cmd/Reginaldo.git.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:joao@email.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <a 
            href="#sobre"
            className="animate-fade-up-delay-4 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm tracking-wide">Saiba mais</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
