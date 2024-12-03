import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ServiceSelection } from '@/components/booking/service-selection';
import { DateTimeSelection } from '@/components/booking/date-time-selection';
import { ClientInfo } from '@/components/booking/client-info';
import { PaymentSection } from '@/components/booking/payment-section';
import { Confirmation } from '@/components/booking/confirmation';
import type { BookingStep, BookingFormData } from '@/lib/types';

type BookingDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const STEPS: { [key in BookingStep]: string } = {
  service: 'Escolha o Serviço',
  datetime: 'Data e Horário',
  info: 'Suas Informações',
  payment: 'Pagamento',
  confirmation: 'Confirmação',
};

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [step, setStep] = useState<BookingStep>('service');
  const [formData, setFormData] = useState<Partial<BookingFormData>>({});

  const updateFormData = (data: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    const steps: BookingStep[] = ['service', 'datetime', 'info', 'payment', 'confirmation'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const steps: BookingStep[] = ['service', 'datetime', 'info', 'payment', 'confirmation'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
              {STEPS[step]}
            </span>
          </DialogTitle>
        </DialogHeader>

        {step === 'service' && (
          <ServiceSelection
            selectedService={formData.service}
            onSelect={(service) => {
              updateFormData({ service });
              nextStep();
            }}
          />
        )}

        {step === 'datetime' && (
          <DateTimeSelection
            onBack={prevStep}
            onNext={(date, timeSlot) => {
              updateFormData({ date, timeSlot });
              nextStep();
            }}
          />
        )}

        {step === 'info' && (
          <ClientInfo
            formData={formData}
            onBack={prevStep}
            onNext={(clientData) => {
              updateFormData(clientData);
              nextStep();
            }}
          />
        )}

        {step === 'payment' && (
          <PaymentSection
            formData={formData}
            onBack={prevStep}
            onSuccess={() => nextStep()}
          />
        )}

        {step === 'confirmation' && (
          <Confirmation
            formData={formData}
            onClose={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}