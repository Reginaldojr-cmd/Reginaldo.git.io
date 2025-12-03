const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Sobre <span className="text-gradient">Mim</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sou uma pessoa empenhada, curiosa e sempre com vontade de aprender. 
                  Tenho paciência para resolver problemas e sou objetivo e proativo 
                  nas minhas tarefas.
                </p>
                <p>
                  Atualmente estou em busca de oportunidades para crescer na área de 
                  tecnologia, onde posso aplicar e expandir meus conhecimentos em 
                  programação e desenvolvimento.
                </p>
                <p>
                  Meu foco está em desenvolvimento web e programação, 
                  utilizando Python, HTML, CSS e JavaScript.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-6 card-shadow">
                <p className="text-4xl font-display font-bold text-gradient mb-2">4</p>
                <p className="text-muted-foreground text-sm">Linguagens</p>
              </div>
              <div className="bg-card rounded-lg p-6 card-shadow">
                <p className="text-4xl font-display font-bold text-gradient mb-2">2</p>
                <p className="text-muted-foreground text-sm">Experiências</p>
              </div>
              <div className="bg-card rounded-lg p-6 card-shadow">
                <p className="text-4xl font-display font-bold text-gradient mb-2">100%</p>
                <p className="text-muted-foreground text-sm">Dedicação</p>
              </div>
              <div className="bg-card rounded-lg p-6 card-shadow">
                <p className="text-4xl font-display font-bold text-gradient mb-2">∞</p>
                <p className="text-muted-foreground text-sm">Vontade de Aprender</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
