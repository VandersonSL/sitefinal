import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { TimeSlot } from '@/lib/types';

type DateTimeSelectionProps = {
  onBack: () => void;
  onNext: (date: Date, timeSlot: string) => void;
};

// Simulated time slots
const TIME_SLOTS: TimeSlot[] = [
  { id: '1', time: '09:00', available: true },
  { id: '2', time: '10:00', available: true },
  { id: '3', time: '11:00', available: false },
  { id: '4', time: '14:00', available: true },
  { id: '5', time: '15:00', available: true },
  { id: '6', time: '16:00', available: true },
];

export function DateTimeSelection({ onBack, onNext }: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        disabled={(date) => date < new Date() || date.getDay() === 0}
        className="rounded-md border"
      />

      <ScrollArea className="h-[200px] rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Horários Disponíveis
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <Button
                key={slot.id}
                variant={selectedTimeSlot === slot.id ? 'default' : 'outline'}
                disabled={!slot.available}
                onClick={() => setSelectedTimeSlot(slot.id)}
                className="w-full"
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button
          onClick={() => selectedDate && selectedTimeSlot && onNext(selectedDate, selectedTimeSlot)}
          disabled={!selectedDate || !selectedTimeSlot}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}