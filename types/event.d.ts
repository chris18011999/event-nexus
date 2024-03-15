export interface Location {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  street: string;
  house_number: string;
  zip: string;
  city: string;
  country: string;
}

export interface EventTag {
  id: number;
  name: string;
  slug: string;
}

export interface EventData {
  id: number;
  title: string;
  category: string;
  date: Date;
  location?: Location;
  description: string;
  price: number;
  capacity: number;
  available_space: number;
  registration_deadline: Date;
  tags?: EventTag[];
}
