import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Star, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';

const TripDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getTripById, addBooking } = useApp();
  const { user, isAuthenticated } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    numberOfTravelers: 1,
    specialRequests: ''
  });

  const trip = getTripById(id || '');

  if (!trip) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Not Found</h2>
          <p className="text-gray-600 mb-6">The trip you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/trips')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Trips
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % trip.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + trip.images.length) % trip.images.length);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const booking = {
      id: Date.now().toString(),
      userId: user!.id,
      tripId: trip.id,
      userName: user!.name,
      userEmail: user!.email,
      userPhone: user!.phone,
      numberOfTravelers: bookingData.numberOfTravelers,
      totalAmount: trip.price * bookingData.numberOfTravelers,
      bookingDate: new Date().toISOString(),
      status: 'pending' as const,
      specialRequests: bookingData.specialRequests
    };

    addBooking(booking);
    alert('Booking submitted successfully! We will contact you soon.');
    setShowBookingForm(false);
  };

  const availableSpots = trip.maxCapacity - trip.currentBookings;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/trips')}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Trips
        </button>

        {/* Trip Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src={trip.images[currentImageIndex]}
              alt={trip.title}
              className="w-full h-full object-cover"
            />
            
            {trip.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {trip.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Trip Info */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{trip.title}</h1>
                <p className="text-gray-600 text-lg mb-6">{trip.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium">{trip.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-pink-600 mr-2" />
                    <span className="text-sm font-medium">{trip.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium">{trip.currentBookings}/{trip.maxCapacity}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">{new Date(trip.startDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">4.8 (124 reviews)</span>
                </div>
              </div>

              {/* Booking Card */}
              <div className="bg-gray-50 rounded-lg p-6 lg:w-80">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">₹{trip.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Available Spots</div>
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">{availableSpots} left</span>
                    <span className="text-sm text-gray-600">out of {trip.maxCapacity}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400"
                  disabled={availableSpots === 0}
                >
                  {availableSpots === 0 ? 'Fully Booked' : 'Book Now'}
                </button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Free cancellation up to 24 hours before departure
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {trip.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-lg font-semibold ml-3">{day.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{day.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((activity, idx) => (
                        <span key={idx} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {trip.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Inclusions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusions</h3>
              <ul className="space-y-2">
                {trip.inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700 text-sm">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusions</h3>
              <ul className="space-y-2">
                {trip.exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                    <span className="text-gray-700 text-sm">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-sm mb-4">Contact our travel experts for personalized assistance</p>
              <div className="space-y-2">
                <div className="text-sm">📞 +91 9876543210</div>
                <div className="text-sm">✉️ info@shreetours.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Book Your Trip</h3>
            <form onSubmit={handleBooking}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  max={availableSpots}
                  value={bookingData.numberOfTravelers}
                  onChange={(e) => setBookingData({...bookingData, numberOfTravelers: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                  placeholder="Any dietary restrictions, special occasions, etc."
                />
              </div>
              
              <div className="mb-6">
                <div className="text-lg font-semibold">
                  Total Amount: ₹{(trip.price * bookingData.numberOfTravelers).toLocaleString()}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripDetails;