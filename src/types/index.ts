export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  condition: string;
}