import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  STUDIO_ADDRESS,
  STUDIO_PHONE,
  STUDIO_EMAIL,
  STUDIO_INSTAGRAM,
  STUDIO_FACEBOOK,
} from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Entre em{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-muted-foreground">
            Estamos aqui para tirar suas dúvidas e agendar seu horário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="space-y-4">
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Telefone" />
                <Textarea placeholder="Mensagem" className="h-32" />
              </div>
              <Button className="w-full">Enviar Mensagem</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{STUDIO_ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href={`tel:${STUDIO_PHONE}`}
                    className="hover:text-primary"
                  >
                    {STUDIO_PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${STUDIO_EMAIL}`}
                    className="hover:text-primary"
                  >
                    {STUDIO_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${STUDIO_INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href={`https://facebook.com/${STUDIO_FACEBOOK}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598015367!2d-46.6549678!3d-23.5647091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjkiUyA0NsKwMzknMTcuOSJX!5e0!3m2!1sen!2sbr!4v1650000000000!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
