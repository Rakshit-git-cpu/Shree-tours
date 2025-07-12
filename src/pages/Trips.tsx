import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Users, Star } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import TripCard from '../components/UI/TripCard';

const Trips: React.FC = () => {
  const { getActiveTrips } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const trips = getActiveTrips();

  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || trip.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesPrice = priceRange === '' || 
                        (priceRange === 'under-25k' && trip.price < 25000) ||
                        (priceRange === '25k-50k' && trip.price >= 25000 && trip.price < 50000) ||
                        (priceRange === 'over-50k' && trip.price >= 50000);
    
    return matchesSearch && matchesLocation && matchesPrice;
  });

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'featured':
      default:
        return b.featured ? 1 : -1;
    }
  });

  const locations = [...new Set(trips.map(trip => trip.location))];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Travel Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collection of travel experiences across India
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search trips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                <option value="">All Prices</option>
                <option value="under-25k">Under ₹25,000</option>
                <option value="25k-50k">₹25,000 - ₹50,000</option>
                <option value="over-50k">Over ₹50,000</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedTrips.length} of {trips.length} trips
          </p>
        </div>

        {/* Trip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} featured={trip.featured} />
          ))}
        </div>

        {/* No Results */}
        {sortedTrips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No trips found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setLocationFilter('');
                setPriceRange('');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;