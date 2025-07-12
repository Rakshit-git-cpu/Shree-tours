import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, MapPin, Phone, Mail, Edit } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { getUserBookings, trips } = useApp();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }

  const userBookings = getUserBookings(user.id);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 px-6 py-8">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-purple-600" />
              </div>
              <div className="ml-6 text-white">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-purple-100">{user.email}</p>
                <p className="text-purple-100">{user.phone}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Personal Information */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>

              {/* Booking History */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Booking History</h2>
                {userBookings.length === 0 ? (
                  <div className="text-center py-8">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No bookings yet</p>
                    <button
                      onClick={() => navigate('/trips')}
                      className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Browse Trips
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userBookings.map((booking) => {
                      const trip = trips.find(t => t.id === booking.tripId);
                      return (
                        <div key={booking.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{trip?.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <p>Travelers: {booking.numberOfTravelers}</p>
                              <p>Booking Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p>Total Amount: ₹{booking.totalAmount.toLocaleString()}</p>
                              <p>Trip Date: {trip ? new Date(trip.startDate).toLocaleDateString() : 'N/A'}</p>
                            </div>
                          </div>
                          {booking.specialRequests && (
                            <div className="mt-2">
                              <p className="text-sm text-gray-600">
                                <strong>Special Requests:</strong> {booking.specialRequests}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;