import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Users, Star, Calendar } from 'lucide-react';
import { Trip } from '../../types';

interface TripCardProps {
  trip: Trip;
  featured?: boolean;
}

const TripCard: React.FC<TripCardProps> = ({ trip, featured = false }) => {
  const availableSpots = trip.maxCapacity - trip.currentBookings;
  const isAlmostFull = availableSpots <= 3;

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${featured ? 'border-2 border-gradient-to-r from-pink-400 to-purple-400 relative' : ''}`}>
      {featured && (
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-1">
          <span className="text-sm font-semibold">Featured Trip</span>
        </div>
      )}
      
      <div className="relative">
        <img
          src={trip.images[0]}
          alt={trip.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1">
          <span className="text-sm font-bold text-green-600">₹{trip.price.toLocaleString()}</span>
        </div>
        {isAlmostFull && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Only {availableSpots} spots left!
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{trip.shortDescription}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2 text-purple-500" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-pink-500" />
            <span>{trip.location}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-2 text-indigo-500" />
            <span>{trip.currentBookings}/{trip.maxCapacity} booked</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span>{new Date(trip.startDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm text-gray-600">4.8 (124 reviews)</span>
          </div>
          <Link
            to={`/trip/${trip.id}`}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;