import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Home } from '@/components/home';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Gallery } from '@/components/gallery';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { HistoryTestimonials } from '@/components/history-testimonials';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Home />
          <About />
          <HistoryTestimonials />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;