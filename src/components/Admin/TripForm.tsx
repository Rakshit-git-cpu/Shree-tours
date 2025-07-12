import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Upload, Calendar, MapPin, Users, Clock, Star, DollarSign } from 'lucide-react';
import { Trip, DayItinerary } from '../../types';

interface TripFormProps {
  trip?: Trip;
  onSave: (trip: Trip) => void;
  onCancel: () => void;
}

const TripForm: React.FC<TripFormProps> = ({ trip, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Trip>>({
    title: '',
    description: '',
    shortDescription: '',
    images: [''],
    price: 0,
    duration: '',
    location: '',
    startDate: '',
    endDate: '',
    maxCapacity: 10,
    currentBookings: 0,
    itinerary: [{ day: 1, title: '', description: '', activities: [''] }],
    inclusions: [''],
    exclusions: [''],
    highlights: [''],
    featured: false,
    active: true,
    createdAt: new Date().toISOString()
  });

  useEffect(() => {
    if (trip) {
      setFormData(trip);
    }
  }, [trip]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tripData: Trip = {
      id: trip?.id || Date.now().toString(),
      title: formData.title || '',
      description: formData.description || '',
      shortDescription: formData.shortDescription || '',
      images: formData.images?.filter(img => img.trim() !== '') || [],
      price: formData.price || 0,
      duration: formData.duration || '',
      location: formData.location || '',
      startDate: formData.startDate || '',
      endDate: formData.endDate || '',
      maxCapacity: formData.maxCapacity || 10,
      currentBookings: formData.currentBookings || 0,
      itinerary: formData.itinerary?.filter(day => day.title.trim() !== '') || [],
      inclusions: formData.inclusions?.filter(inc => inc.trim() !== '') || [],
      exclusions: formData.exclusions?.filter(exc => exc.trim() !== '') || [],
      highlights: formData.highlights?.filter(high => high.trim() !== '') || [],
      featured: formData.featured || false,
      active: formData.active !== undefined ? formData.active : true,
      createdAt: formData.createdAt || new Date().toISOString()
    };

    onSave(tripData);
  };

  const addImage = () => {
    setFormData({
      ...formData,
      images: [...(formData.images || []), '']
    });
  };

  const removeImage = (index: number) => {
    const newImages = formData.images?.filter((_, i) => i !== index) || [];
    setFormData({ ...formData, images: newImages });
  };

  const updateImage = (index: number, value: string) => {
    const newImages = [...(formData.images || [])];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const addItineraryDay = () => {
    const newDay: DayItinerary = {
      day: (formData.itinerary?.length || 0) + 1,
      title: '',
      description: '',
      activities: ['']
    };
    setFormData({
      ...formData,
      itinerary: [...(formData.itinerary || []), newDay]
    });
  };

  const removeItineraryDay = (index: number) => {
    const newItinerary = formData.itinerary?.filter((_, i) => i !== index) || [];
    // Renumber days
    const renumbered = newItinerary.map((day, i) => ({ ...day, day: i + 1 }));
    setFormData({ ...formData, itinerary: renumbered });
  };

  const updateItineraryDay = (index: number, field: keyof DayItinerary, value: any) => {
    const newItinerary = [...(formData.itinerary || [])];
    newItinerary[index] = { ...newItinerary[index], [field]: value };
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const addActivity = (dayIndex: number) => {
    const newItinerary = [...(formData.itinerary || [])];
    newItinerary[dayIndex].activities.push('');
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const newItinerary = [...(formData.itinerary || [])];
    newItinerary[dayIndex].activities = newItinerary[dayIndex].activities.filter((_, i) => i !== activityIndex);
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const updateActivity = (dayIndex: number, activityIndex: number, value: string) => {
    const newItinerary = [...(formData.itinerary || [])];
    newItinerary[dayIndex].activities[activityIndex] = value;
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const addListItem = (field: 'inclusions' | 'exclusions' | 'highlights') => {
    setFormData({
      ...formData,
      [field]: [...(formData[field] || []), '']
    });
  };

  const removeListItem = (field: 'inclusions' | 'exclusions' | 'highlights', index: number) => {
    const newList = formData[field]?.filter((_, i) => i !== index) || [];
    setFormData({ ...formData, [field]: newList });
  };

  const updateListItem = (field: 'inclusions' | 'exclusions' | 'highlights', index: number, value: string) => {
    const newList = [...(formData[field] || [])];
    newList[index] = value;
    setFormData({ ...formData, [field]: newList });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {trip ? 'Edit Trip' : 'Add New Trip'}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-purple-600" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trip Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                <input
                  type="text"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Delhi - Agra - Jaipur | 6 Days"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Trip Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 6 Days / 5 Nights"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Capacity</label>
                <input
                  type="number"
                  value={formData.maxCapacity}
                  onChange={(e) => setFormData({ ...formData, maxCapacity: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="mr-2"
                />
                Featured Trip
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="mr-2"
                />
                Active
              </label>
            </div>
          </div>

          {/* Images */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Upload className="w-5 h-5 mr-2 text-green-600" />
              Images
            </h3>
            {formData.images?.map((image, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => updateImage(index, e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addImage}
              className="flex items-center text-green-600 hover:text-green-800"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Image
            </button>
          </div>

          {/* Itinerary */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-600" />
              Itinerary
            </h3>
            {formData.itinerary?.map((day, dayIndex) => (
              <div key={dayIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900">Day {day.day}</h4>
                  <button
                    type="button"
                    onClick={() => removeItineraryDay(dayIndex)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <input
                    type="text"
                    value={day.title}
                    onChange={(e) => updateItineraryDay(dayIndex, 'title', e.target.value)}
                    placeholder="Day title"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    value={day.description}
                    onChange={(e) => updateItineraryDay(dayIndex, 'description', e.target.value)}
                    placeholder="Day description"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Activities</label>
                  {day.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={activity}
                        onChange={(e) => updateActivity(dayIndex, activityIndex, e.target.value)}
                        placeholder="Activity"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeActivity(dayIndex, activityIndex)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addActivity(dayIndex)}
                    className="flex items-center text-green-600 hover:text-green-800 text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Activity
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addItineraryDay}
              className="flex items-center text-orange-600 hover:text-orange-800"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Day
            </button>
          </div>

          {/* Lists */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Inclusions */}
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Inclusions</h4>
              {formData.inclusions?.map((inclusion, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={inclusion}
                    onChange={(e) => updateListItem('inclusions', index, e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('inclusions', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('inclusions')}
                className="flex items-center text-green-600 hover:text-green-800 text-sm"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add
              </button>
            </div>

            {/* Exclusions */}
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Exclusions</h4>
              {formData.exclusions?.map((exclusion, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={exclusion}
                    onChange={(e) => updateListItem('exclusions', index, e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('exclusions', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('exclusions')}
                className="flex items-center text-red-600 hover:text-red-800 text-sm"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add
              </button>
            </div>

            {/* Highlights */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
              {formData.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => updateListItem('highlights', index, e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem('highlights', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem('highlights')}
                className="flex items-center text-yellow-600 hover:text-yellow-800 text-sm"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add
              </button>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {trip ? 'Update Trip' : 'Create Trip'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripForm;