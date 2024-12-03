export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  timeSlot: string;
};

export type BookingStep = 'service' | 'datetime' | 'info' | 'payment' | 'confirmation';