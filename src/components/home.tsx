import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingDialog } from '@/components/booking/booking-dialog';

export function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("image/cilios.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforme Seu Olhar com{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
              Elegância
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Realce sua beleza natural com nossas extensões de cílios premium.
            Técnicas exclusivas e profissionais especializados para um olhar
            deslumbrante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group"
              onClick={() => setBookingOpen(true)}
            >
              Agende Agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
