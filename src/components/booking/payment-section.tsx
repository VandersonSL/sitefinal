import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import type { BookingFormData } from '@/lib/types';

type PaymentSectionProps = {
  formData: Partial<BookingFormData>;
  onBack: () => void;
  onSuccess: () => void;
};

export function PaymentSection({ formData, onBack, onSuccess }: PaymentSectionProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const service = SERVICES.find((s) => s.id === formData.service);
  const price = service ? parseInt(service.price.replace(/\D/g, '')) : 0;
  const deposit = Math.round(price * 0.3);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onSuccess();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-4">
        <h3 className="font-semibold mb-4">Resumo do Agendamento</h3>
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
            <span className="text-muted-foreground">Valor Total:</span>
            <span className="font-semibold">{service?.price}</span>
          </div>
          <div className="flex justify-between text-primary font-semibold">
            <span>Sinal (30%):</span>
            <span>R$ {deposit},00</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button onClick={handlePayment} disabled={isProcessing}>
          {isProcessing ? 'Processando...' : 'Pagar Sinal'}
        </Button>
      </div>
    </div>
  );
}