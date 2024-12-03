import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BookingDialog } from '@/components/booking/booking-dialog';
import { SERVICES } from '@/lib/constants';

export function Services() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Nossos{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Procedimentos
            </span>
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma variedade de técnicas para realçar sua beleza natural,
            desde extensões clássicas até volumes mais dramáticos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card 
              key={service.id} 
              className="service-card group overflow-hidden bg-card/50 backdrop-blur-sm cursor-pointer"
              onClick={() => setBookingOpen(true)}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-amber-500">
                    {service.price}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
            onClick={() => setBookingOpen(true)}
          >
            Agende seu Horário
          </Button>
        </div>

        <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      </div>
    </section>
  );
}