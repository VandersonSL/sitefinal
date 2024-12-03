import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { BookingDialog } from '@/components/booking/booking-dialog';
import { STUDIO_NAME } from '@/lib/constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-semibold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                {STUDIO_NAME}
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#home" className="hover:text-primary">Home</a>
                <a href="#about" className="hover:text-primary">Sobre</a>
                <a href="#services" className="hover:text-primary">Serviços</a>
                <a href="#gallery" className="hover:text-primary">Galeria</a>
                <a href="#contact" className="hover:text-primary">Contato</a>
                <Button 
                  variant="default"
                  onClick={() => setBookingOpen(true)}
                >
                  Agendar
                </Button>
                <ModeToggle />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <ModeToggle />
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block hover:text-primary px-3 py-2">Home</a>
              <a href="#about" className="block hover:text-primary px-3 py-2">Sobre</a>
              <a href="#services" className="block hover:text-primary px-3 py-2">Serviços</a>
              <a href="#gallery" className="block hover:text-primary px-3 py-2">Galeria</a>
              <a href="#contact" className="block hover:text-primary px-3 py-2">Contato</a>
              <Button 
                className="w-full mt-4"
                onClick={() => {
                  setBookingOpen(true);
                  setIsOpen(false);
                }}
              >
                Agendar
              </Button>
            </div>
          </div>
        )}
      </nav>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}