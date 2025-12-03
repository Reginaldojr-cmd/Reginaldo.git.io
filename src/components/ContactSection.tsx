import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:seu.email@email.com"
              className="group bg-card rounded-lg p-6 card-shadow hover:border-primary border border-transparent transition-all"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Email</p>
              <p className="text-muted-foreground text-sm">Disponível para contato</p>
            </a>
            
            <a 
              href="#"
              className="group bg-card rounded-lg p-6 card-shadow hover:border-primary border border-transparent transition-all"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Telefone</p>
              <p className="text-muted-foreground text-sm">Disponível para contato</p>
            </a>
            
            <div className="group bg-card rounded-lg p-6 card-shadow hover:border-primary border border-transparent transition-all">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-medium mb-1">Localização</p>
              <p className="text-muted-foreground text-sm">São Francisco, SP - Brasil</p>
            </div>
          </div>
          
          <a 
            href="mailto:seu.email@email.com"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity glow"
          >
            <Mail className="w-5 h-5" />
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
