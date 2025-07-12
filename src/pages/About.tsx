import React from 'react';
import { Award, Users, MapPin, Heart, Star, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in travel services with multiple industry awards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional and experienced travel consultants dedicated to your journey.'
    },
    {
      icon: MapPin,
      title: 'Unique Destinations',
      description: 'Carefully curated destinations that showcase the best of India.'
    },
    {
      icon: Heart,
      title: 'Personalized Experience',
      description: 'Tailored itineraries designed to match your interests and preferences.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'High standards of accommodation, transportation, and services.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety and security are our top priorities throughout your journey.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 15 years in the travel industry, Rajesh founded Shree Tours to share his passion for incredible India.'
    },
    {
      name: 'Priya Patel',
      role: 'Travel Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Priya leads our team of travel experts, ensuring every trip meets our high standards of excellence.'
    },
    {
      name: 'Amit Kumar',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Amit manages our day-to-day operations, making sure every detail of your journey is perfect.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Shree Tours</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating extraordinary travel experiences that showcase 
            the incredible diversity, culture, and beauty of India. Every journey with us is 
            carefully crafted to create memories that last a lifetime.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2019, Shree Tours & Travel began as a small family business with a big dream - 
              to share the incredible beauty and rich culture of India with travelers from around the world.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a passion project has grown into a trusted travel company that has helped 
              over 1,000 travelers discover the magic of India. From the majestic palaces of Rajasthan 
              to the serene backwaters of Kerala, we curate experiences that go beyond typical tourism.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence, attention to detail, and genuine care for our travelers 
              has earned us recognition in the travel industry and, more importantly, the trust of 
              our customers who return to us year after year.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Story"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              What makes Shree Tours your ideal travel partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind your unforgettable journeys
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">
                We are passionate about travel and sharing the incredible experiences India has to offer.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships with our travelers based on trust, transparency, and reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from planning to execution.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you discover the incredible beauty and culture of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Browse Our Trips
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;