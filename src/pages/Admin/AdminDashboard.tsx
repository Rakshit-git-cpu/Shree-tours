import React, { useState } from 'react';
import { Users, MapPin, Calendar, DollarSign, TrendingUp, Eye, Edit, Trash2, Plus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import TripForm from '../../components/Admin/TripForm';
import { Trip } from '../../types';

const AdminDashboard: React.FC = () => {
  const { user, isAdmin } = useAuth();
  const { trips, bookings, newsletters, addTrip, updateTrip, deleteTrip } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showTripForm, setShowTripForm] = useState(false);
  const [editingTrip, setEditingTrip] = useState<Trip | undefined>(undefined);

  if (!isAdmin) {
    navigate('/');
    return null;
  }

  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalAmount, 0);
  const activeTrips = trips.filter(trip => trip.active).length;
  const totalSubscribers = newsletters.length;

  const stats = [
    { icon: Calendar, label: 'Total Bookings', value: totalBookings, color: 'bg-blue-500' },
    { icon: DollarSign, label: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, color: 'bg-green-500' },
    { icon: MapPin, label: 'Active Trips', value: activeTrips, color: 'bg-purple-500' },
    { icon: Users, label: 'Newsletter Subscribers', value: totalSubscribers, color: 'bg-orange-500' }
  ];

  const handleAddTrip = () => {
    setEditingTrip(undefined);
    setShowTripForm(true);
  };

  const handleEditTrip = (trip: Trip) => {
    setEditingTrip(trip);
    setShowTripForm(true);
  };

  const handleSaveTrip = (trip: Trip) => {
    if (editingTrip) {
      updateTrip(trip.id, trip);
    } else {
      addTrip(trip);
    }
    setShowTripForm(false);
    setEditingTrip(undefined);
  };

  const handleDeleteTrip = (tripId: string) => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      deleteTrip(tripId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color.replace('bg-', 'bg-gradient-to-r from-').replace('-500', '-500 to-').replace('blue', 'blue-600').replace('green', 'emerald-600').replace('purple', 'purple-600').replace('orange', 'pink-600')} text-white p-3 rounded-full`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'trips', label: 'Trips' },
                { id: 'bookings', label: 'Bookings' },
                { id: 'users', label: 'Users' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
                  <div className="space-y-4">
                    {bookings.slice(0, 5).map((booking) => (
                      <div key={booking.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{booking.userName}</h4>
                            <p className="text-sm text-gray-600">{booking.userEmail}</p>
                            <p className="text-sm text-gray-600">
                              {trips.find(t => t.id === booking.tripId)?.title}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                              ₹{booking.totalAmount.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(booking.bookingDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Trip Performance</h3>
                  <div className="space-y-4">
                    {trips.map((trip) => {
                      const tripBookings = bookings.filter(b => b.tripId === trip.id);
                      const fillRate = (trip.currentBookings / trip.maxCapacity) * 100;
                      return (
                        <div key={trip.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-gray-900">{trip.title}</h4>
                            <span className="text-sm text-gray-600">{fillRate.toFixed(0)}% filled</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${fillRate}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            {trip.currentBookings}/{trip.maxCapacity} bookings
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'trips' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Manage Trips</h3>
                  <button 
                    onClick={handleAddTrip}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Trip
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trip
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bookings
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {trips.map((trip) => (
                        <tr key={trip.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img className="h-10 w-10 rounded-full object-cover" src={trip.images[0]} alt={trip.title} />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{trip.title}</div>
                                <div className="text-sm text-gray-500">{trip.location}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ₹{trip.price.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {trip.currentBookings}/{trip.maxCapacity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              trip.active 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {trip.active ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button 
                                onClick={() => navigate(`/trip/${trip.id}`)}
                                className="text-purple-600 hover:text-purple-900"
                                title="View Trip"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleEditTrip(trip)}
                                className="text-emerald-600 hover:text-emerald-900"
                                title="Edit Trip"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteTrip(trip.id)}
                                className="text-red-600 hover:text-red-900"
                                title="Delete Trip"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">All Bookings</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trip
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Travelers
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{booking.userName}</div>
                            <div className="text-sm text-gray-500">{booking.userEmail}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {trips.find(t => t.id === booking.tripId)?.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {booking.numberOfTravelers}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ₹{booking.totalAmount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(booking.bookingDate).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">User Management</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">User management features coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trip Form Modal */}
      {showTripForm && (
        <TripForm
          trip={editingTrip}
          onSave={handleSaveTrip}
          onCancel={() => {
            setShowTripForm(false);
            setEditingTrip(undefined);
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;