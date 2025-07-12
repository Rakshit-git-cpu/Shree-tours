import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Trip, Booking, Newsletter } from '../types';
import { mockTrips, mockBookings } from '../data/mockData';

interface AppContextType {
  trips: Trip[];
  bookings: Booking[];
  newsletters: Newsletter[];
  addTrip: (trip: Trip) => void;
  updateTrip: (id: string, trip: Partial<Trip>) => void;
  deleteTrip: (id: string) => void;
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, booking: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  addNewsletter: (email: string) => void;
  getFeaturedTrips: () => Trip[];
  getActiveTrips: () => Trip[];
  getTripById: (id: string) => Trip | undefined;
  getUserBookings: (userId: string) => Booking[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [trips, setTrips] = useState<Trip[]>(mockTrips);
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);

  const addTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
  };

  const updateTrip = (id: string, updatedTrip: Partial<Trip>) => {
    setTrips(trips.map(trip => trip.id === id ? { ...trip, ...updatedTrip } : trip));
  };

  const deleteTrip = (id: string) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  const updateBooking = (id: string, updatedBooking: Partial<Booking>) => {
    setBookings(bookings.map(booking => booking.id === id ? { ...booking, ...updatedBooking } : booking));
  };

  const deleteBooking = (id: string) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const addNewsletter = (email: string) => {
    const newsletter: Newsletter = {
      id: Date.now().toString(),
      email,
      subscribedAt: new Date().toISOString()
    };
    setNewsletters([...newsletters, newsletter]);
  };

  const getFeaturedTrips = () => {
    return trips.filter(trip => trip.featured && trip.active);
  };

  const getActiveTrips = () => {
    return trips.filter(trip => trip.active);
  };

  const getTripById = (id: string) => {
    return trips.find(trip => trip.id === id);
  };

  const getUserBookings = (userId: string) => {
    return bookings.filter(booking => booking.userId === userId);
  };

  const value = {
    trips,
    bookings,
    newsletters,
    addTrip,
    updateTrip,
    deleteTrip,
    addBooking,
    updateBooking,
    deleteBooking,
    addNewsletter,
    getFeaturedTrips,
    getActiveTrips,
    getTripById,
    getUserBookings
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};