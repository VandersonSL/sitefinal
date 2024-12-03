import { STUDIO_NAME } from '@/lib/constants';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {STUDIO_NAME}
            </span>
            <p className="mt-4 text-muted-foreground">
              Transformando olhares com elegância e profissionalismo.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Serviços</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary">Galeria</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Sheet>
                  <SheetTrigger className="text-muted-foreground hover:text-primary">
                    Política de Privacidade
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Política de Privacidade</SheetTitle>
                      <SheetDescription>
                        <div className="prose prose-sm mt-4">
                          <h4 className="text-lg font-semibold mb-2">1. Coleta de Dados</h4>
                          <p className="mb-4">
                            Coletamos apenas as informações necessárias para prestar nossos serviços,
                            incluindo nome, contato e preferências de agendamento.
                          </p>

                          <h4 className="text-lg font-semibold mb-2">2. Uso das Informações</h4>
                          <p className="mb-4">
                            Suas informações são utilizadas exclusivamente para:
                            - Agendamento de serviços
                            - Comunicação sobre seus procedimentos
                            - Envio de promoções (mediante autorização)
                          </p>

                          <h4 className="text-lg font-semibold mb-2">3. Proteção de Dados</h4>
                          <p className="mb-4">
                            Implementamos medidas de segurança para proteger suas informações
                            pessoais contra acesso não autorizado ou uso indevido.
                          </p>

                          <h4 className="text-lg font-semibold mb-2">4. Seus Direitos</h4>
                          <p>
                            Você tem direito a:
                            - Acessar seus dados
                            - Solicitar correções
                            - Excluir suas informações
                            - Revogar consentimentos
                          </p>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </li>
              <li>
                <Sheet>
                  <SheetTrigger className="text-muted-foreground hover:text-primary">
                    Termos de Uso
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Termos de Uso</SheetTitle>
                      <SheetDescription>
                        <div className="prose prose-sm mt-4">
                          <p className="mb-4">
                            Ao utilizar nossos serviços, você concorda com nossas políticas
                            e procedimentos.
                          </p>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {STUDIO_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}