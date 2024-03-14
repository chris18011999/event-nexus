export interface EventData {
  id: number;
  title: string;
  category: string;
  date: Date;
  location: string;
  description: string;
  price: number;
  capacity: number;
  available_space: number;
  registration_deadline: Date;
  tags?: string[]
}
