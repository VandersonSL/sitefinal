import { motion } from 'framer-motion';
import { PROFESSIONAL, TESTIMONIALS } from '@/lib/constants';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Award, GraduationCap, Heart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function HistoryTestimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Conheça Nossa{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Especialista
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Excelência e dedicação em cada atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={PROFESSIONAL.image}
                alt={PROFESSIONAL.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
              <h3 className="text-xl font-semibold">{PROFESSIONAL.name}</h3>
              <p className="text-amber-500">{PROFESSIONAL.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {PROFESSIONAL.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-amber-500" />
                Certificações
              </h4>
              <div className="flex flex-wrap gap-2">
                {PROFESSIONAL.certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-amber-500/10 hover:bg-amber-500/20"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-amber-500/10">
                <Award className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Premiada</span>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-500/10">
                <Star className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Especialista</span>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-500/10">
                <Heart className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Dedicada</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">
              O Que Nossas Clientes Dizem
            </h3>
            <p className="text-muted-foreground">
              Histórias reais de transformação e satisfação
            </p>
          </div>

          <InfiniteMovingCards
            items={TESTIMONIALS}
            speed="slow"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
}