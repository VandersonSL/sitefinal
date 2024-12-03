import { Award, Heart, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Produtos premium e técnicas seguras para sua tranquilidade',
  },
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description: 'Equipe altamente qualificada e constantemente atualizada',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe um tratamento único e especial',
  },
  {
    icon: Users,
    title: 'Experiência Comprovada',
    description: 'Anos de experiência e milhares de clientes satisfeitas',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Sobre o{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Nosso Estúdio
            </span>
          </h2>
          <p className="text-muted-foreground">
            Dedicados à excelência em extensão de cílios, combinamos arte e
            técnica para realçar sua beleza natural. Nossa missão é proporcionar
            um atendimento excepcional em um ambiente acolhedor e sofisticado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-none bg-card/50 backdrop-blur"
            >
              <CardContent className="pt-6">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square">
            <img
              src= 'url("imagens/studio.jpg")'
              alt="Nosso estúdio"
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
            <p className="text-muted-foreground mb-6">
              Com anos de dedicação à arte da extensão de cílios, Lorena
              construiu uma reputação baseada em excelência e cuidado
              personalizado. Cada procedimento é realizado com atenção aos
              detalhes e compromisso com a satisfação de nossas clientes.
            </p>
            <p className="text-muted-foreground">
              Utilizamos apenas produtos de alta qualidade e técnicas avançadas,
              garantindo resultados naturais e duradouros. Nossa lash passa
              por treinamentos constantes para estar sempre atualizada com as
              últimas tendências e tecnologias do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
