import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import type { BookingFormData } from '@/lib/types';

type ConfirmationProps = {
  formData: Partial<BookingFormData>;
  onClose: () => void;
};

export function Confirmation({ formData, onClose }: ConfirmationProps) {
  const service = SERVICES.find((s) => s.id === formData.service);

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle2 className="h-16 w-16 text-primary" />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Agendamento Confirmado!</h3>
        <p className="text-muted-foreground">
          Em breve você receberá um email com todos os detalhes.
        </p>
      </div>

      <div className="rounded-lg border p-4 text-left">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Serviço:</span>
            <span>{service?.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Data:</span>
            <span>
              {formData.date?.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Nome:</span>
            <span>{formData.name}</span>
          </div>
        </div>
      </div>

      <Button onClick={onClose} className="w-full">
        Fechar
      </Button>
    </div>
  );
}