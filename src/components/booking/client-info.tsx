import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import type { BookingFormData } from '@/lib/types';

const formSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
});

type ClientInfoProps = {
  formData: Partial<BookingFormData>;
  onBack: () => void;
  onNext: (data: Partial<BookingFormData>) => void;
};

export function ClientInfo({ formData, onBack, onNext }: ClientInfoProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onNext(data))} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button type="submit">Continuar</Button>
        </div>
      </form>
    </Form>
  );
}