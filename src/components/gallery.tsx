import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_IMAGES = [
  {
     src: "image/cilios1.jpeg",
    alt: 'Extensão de cílios clássica',
  },
  {
    src: "image/cilios2.jpeg",
    alt: 'Volume russo',
  },
  {
    src: "image/cilios3.jpeg",
    alt: 'Volume híbrido',
  },
  {
    src: "image/cilios4.jpeg",
    alt: 'Resultado natural',
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((current) =>
      current === GALLERY_IMAGES.length - 1 ? 0 : current + 1
    );

  const previous = () =>
    setCurrentIndex((current) =>
      current === 0 ? GALLERY_IMAGES.length - 1 : current - 1
    );

  return (
    <section id="gallery" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Nossa{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Galeria
            </span>
          </h2>
          <p className="text-muted-foreground">
            Confira alguns dos nossos trabalhos e transformações incríveis.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="aspect-[16/9] overflow-hidden rounded-lg"
            >
              <img
                src={GALLERY_IMAGES[currentIndex].url}
                alt={GALLERY_IMAGES[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-amber-500/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-amber-500/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {GALLERY_IMAGES.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-amber-500' : 'bg-amber-500/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}