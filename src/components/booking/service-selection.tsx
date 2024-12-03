import { SERVICES } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

type ServiceSelectionProps = {
  selectedService?: string;
  onSelect: (serviceId: string) => void;
};

export function ServiceSelection({ selectedService, onSelect }: ServiceSelectionProps) {
  return (
    <div className="grid gap-4">
      {SERVICES.map((service) => (
        <Card
          key={service.id}
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
            selectedService === service.id
              ? 'ring-2 ring-primary'
              : 'hover:shadow-primary/20'
          }`}
          onClick={() => onSelect(service.id)}
        >
          <CardContent className="flex items-center gap-4 p-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary font-semibold">{service.price}</span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.duration}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}