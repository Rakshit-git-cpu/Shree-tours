import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          for {testimonial.tripTitle}
        </span>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        "{testimonial.comment}"
      </p>
      
      <div className="mt-4 text-xs text-gray-500">
        {new Date(testimonial.date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default TestimonialCard;