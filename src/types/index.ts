export interface Trip {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  images: string[];
  price: number;
  duration: string;
  location: string;
  startDate: string;
  endDate: string;
  maxCapacity: number;
  currentBookings: number;
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  featured: boolean;
  active: boolean;
  createdAt: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  isAdmin: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  tripId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  numberOfTravelers: number;
  totalAmount: number;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  tripTitle: string;
  date: string;
}

export interface Newsletter {
  id: string;
  email: string;
  subscribedAt: string;
}