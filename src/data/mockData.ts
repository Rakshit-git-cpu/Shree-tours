import { Trip, User, Booking, Testimonial } from '../types';

export const mockTrips: Trip[] = [
  {
    id: '1',
    title: 'Golden Triangle Tour',
    description: 'Experience the magnificent Golden Triangle covering Delhi, Agra, and Jaipur. This classic tour showcases India\'s rich heritage, architectural marvels, and cultural diversity.',
    shortDescription: 'Delhi - Agra - Jaipur | 6 Days',
    images: [
      'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3679181/pexels-photo-3679181.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 25000,
    duration: '6 Days / 5 Nights',
    location: 'Delhi, Agra, Jaipur',
    startDate: '2024-02-15',
    endDate: '2024-02-20',
    maxCapacity: 15,
    currentBookings: 8,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Welcome to India! Arrive at Delhi airport and transfer to hotel.',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'City orientation']
      },
      {
        day: 2,
        title: 'Delhi Sightseeing',
        description: 'Explore Old and New Delhi with guided tours.',
        activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'India Gate', 'Humayun Tomb']
      },
      {
        day: 3,
        title: 'Delhi to Agra',
        description: 'Journey to Agra and visit the magnificent Taj Mahal.',
        activities: ['Drive to Agra', 'Taj Mahal visit', 'Agra Fort', 'Local market shopping']
      },
      {
        day: 4,
        title: 'Agra to Jaipur',
        description: 'Travel to the Pink City of Jaipur via Fatehpur Sikri.',
        activities: ['Fatehpur Sikri', 'Drive to Jaipur', 'City Palace', 'Local cuisine dinner']
      },
      {
        day: 5,
        title: 'Jaipur Exploration',
        description: 'Discover the royal heritage of Jaipur.',
        activities: ['Amber Fort', 'Hawa Mahal', 'Jantar Mantar', 'Local handicrafts shopping']
      },
      {
        day: 6,
        title: 'Return to Delhi',
        description: 'Return journey to Delhi and departure.',
        activities: ['Drive to Delhi', 'Airport transfer', 'Departure']
      }
    ],
    inclusions: [
      'Accommodation in 4-star hotels',
      'All meals (breakfast, lunch, dinner)',
      'AC transportation throughout',
      'Professional tour guide',
      'All entrance fees',
      'Airport transfers'
    ],
    exclusions: [
      'International flights',
      'Personal expenses',
      'Tips and gratuities',
      'Travel insurance',
      'Alcoholic beverages'
    ],
    highlights: [
      'Visit iconic Taj Mahal at sunrise',
      'Explore majestic forts and palaces',
      'Experience local culture and cuisine',
      'Professional photography assistance',
      'Comfortable luxury transportation'
    ],
    featured: true,
    active: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Kerala Backwaters & Hills',
    description: 'Discover God\'s Own Country with this enchanting Kerala tour covering serene backwaters, lush hill stations, and pristine beaches.',
    shortDescription: 'Munnar - Alleppey - Kochi | 7 Days',
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 32000,
    duration: '7 Days / 6 Nights',
    location: 'Munnar, Alleppey, Kochi',
    startDate: '2024-03-01',
    endDate: '2024-03-07',
    maxCapacity: 12,
    currentBookings: 5,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi',
        description: 'Welcome to Kerala! Explore the historic port city.',
        activities: ['Airport pickup', 'Chinese fishing nets', 'Fort Kochi walk', 'Spice market visit']
      },
      {
        day: 2,
        title: 'Kochi to Munnar',
        description: 'Journey to the hill station of Munnar.',
        activities: ['Scenic drive', 'Tea plantation visit', 'Mattupetty Dam', 'Hotel check-in']
      },
      {
        day: 3,
        title: 'Munnar Sightseeing',
        description: 'Explore the tea gardens and wildlife.',
        activities: ['Eravikulam National Park', 'Tea Museum', 'Echo Point', 'Kundala Lake']
      },
      {
        day: 4,
        title: 'Munnar to Alleppey',
        description: 'Travel to the backwater paradise.',
        activities: ['Drive to Alleppey', 'Houseboat check-in', 'Backwater cruise', 'Local fishing']
      },
      {
        day: 5,
        title: 'Alleppey Backwaters',
        description: 'Full day houseboat experience.',
        activities: ['Village visits', 'Coir making demo', 'Bird watching', 'Sunset cruise']
      },
      {
        day: 6,
        title: 'Alleppey to Kochi',
        description: 'Return to Kochi for cultural experiences.',
        activities: ['Kathakali performance', 'Ayurvedic spa', 'Shopping', 'Farewell dinner']
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Final departure from Kochi.',
        activities: ['Hotel check-out', 'Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Luxury houseboat stay',
      'Hill station accommodation',
      'All meals included',
      'Professional guide services',
      'Ayurvedic treatments',
      'All transfers and sightseeing'
    ],
    exclusions: [
      'Airfare to/from Kerala',
      'Personal expenses',
      'Alcoholic beverages',
      'Photography charges',
      'Travel insurance'
    ],
    highlights: [
      'Luxury houseboat experience',
      'Tea plantation tours',
      'Traditional Kathakali performance',
      'Ayurvedic wellness treatments',
      'Scenic mountain drives'
    ],
    featured: true,
    active: true,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Rajasthan Royal Heritage',
    description: 'Experience the royal grandeur of Rajasthan with visits to majestic palaces, desert landscapes, and vibrant cultural experiences.',
    shortDescription: 'Jaipur - Udaipur - Jodhpur - Jaisalmer | 10 Days',
    images: [
      'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 45000,
    duration: '10 Days / 9 Nights',
    location: 'Jaipur, Udaipur, Jodhpur, Jaisalmer',
    startDate: '2024-04-10',
    endDate: '2024-04-19',
    maxCapacity: 18,
    currentBookings: 12,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        description: 'Welcome to the Pink City of Rajasthan.',
        activities: ['Airport pickup', 'Hotel check-in', 'City orientation', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Jaipur Sightseeing',
        description: 'Explore the royal palaces and forts.',
        activities: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar']
      },
      {
        day: 3,
        title: 'Jaipur to Udaipur',
        description: 'Journey to the City of Lakes.',
        activities: ['Drive to Udaipur', 'City Palace visit', 'Lake Pichola boat ride']
      },
      {
        day: 4,
        title: 'Udaipur Exploration',
        description: 'Discover the romantic charm of Udaipur.',
        activities: ['Jagdish Temple', 'Saheliyon ki Bari', 'Vintage car museum', 'Cultural show']
      },
      {
        day: 5,
        title: 'Udaipur to Jodhpur',
        description: 'Travel to the Blue City.',
        activities: ['Drive to Jodhpur', 'Mehrangarh Fort', 'Jaswant Thada', 'Clock Tower market']
      },
      {
        day: 6,
        title: 'Jodhpur to Jaisalmer',
        description: 'Journey to the Golden City.',
        activities: ['Drive to Jaisalmer', 'Jaisalmer Fort', 'Patwon ki Haveli', 'Sunset point']
      },
      {
        day: 7,
        title: 'Jaisalmer Desert Safari',
        description: 'Experience the Thar Desert.',
        activities: ['Sam Sand Dunes', 'Camel safari', 'Desert camping', 'Folk dance show']
      },
      {
        day: 8,
        title: 'Jaisalmer to Jodhpur',
        description: 'Return journey with sightseeing.',
        activities: ['Desert sunrise', 'Drive to Jodhpur', 'Local market shopping', 'Heritage hotel']
      },
      {
        day: 9,
        title: 'Jodhpur to Jaipur',
        description: 'Final leg of the royal journey.',
        activities: ['Drive to Jaipur', 'Albert Hall Museum', 'Birla Temple', 'Farewell dinner']
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Final departure from Jaipur.',
        activities: ['Hotel check-out', 'Shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Heritage hotel accommodation',
      'Desert camping experience',
      'All meals and refreshments',
      'Professional tour guide',
      'Camel safari and cultural shows',
      'All entrance fees and transfers'
    ],
    exclusions: [
      'Domestic flights',
      'Personal shopping',
      'Tips and gratuities',
      'Travel insurance',
      'Alcoholic beverages'
    ],
    highlights: [
      'Stay in heritage palaces',
      'Desert camping under stars',
      'Traditional camel safari',
      'Royal architecture exploration',
      'Cultural performances and cuisine'
    ],
    featured: false,
    active: true,
    createdAt: '2024-01-25'
  },
  {
    id: '4',
    title: 'Goa Beach Paradise',
    description: 'Relax and unwind on the pristine beaches of Goa. Experience the perfect blend of Portuguese heritage, vibrant nightlife, and stunning coastal beauty.',
    shortDescription: 'North & South Goa | 5 Days',
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 18000,
    duration: '5 Days / 4 Nights',
    location: 'North & South Goa',
    startDate: '2024-05-15',
    endDate: '2024-05-19',
    maxCapacity: 20,
    currentBookings: 7,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Goa',
        description: 'Welcome to the beach paradise of India.',
        activities: ['Airport pickup', 'Hotel check-in', 'Calangute Beach', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'North Goa Exploration',
        description: 'Discover the vibrant beaches and markets of North Goa.',
        activities: ['Baga Beach', 'Anjuna Flea Market', 'Fort Aguada', 'Beach shacks dinner']
      },
      {
        day: 3,
        title: 'South Goa Serenity',
        description: 'Experience the peaceful side of Goa.',
        activities: ['Colva Beach', 'Old Goa Churches', 'Spice plantation tour', 'Traditional Goan cuisine']
      },
      {
        day: 4,
        title: 'Water Sports & Leisure',
        description: 'Adventure and relaxation by the sea.',
        activities: ['Parasailing', 'Jet skiing', 'Dolphin watching', 'Beach volleyball']
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Final departure from Goa.',
        activities: ['Hotel check-out', 'Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Beach resort accommodation',
      'All meals and beverages',
      'Water sports activities',
      'Professional guide services',
      'Airport transfers',
      'Sightseeing tours'
    ],
    exclusions: [
      'Airfare to/from Goa',
      'Personal expenses',
      'Alcoholic beverages',
      'Travel insurance',
      'Tips and gratuities'
    ],
    highlights: [
      'Pristine beaches and water sports',
      'Portuguese colonial architecture',
      'Vibrant nightlife and beach parties',
      'Authentic Goan cuisine',
      'Spice plantation experience'
    ],
    featured: true,
    active: true,
    createdAt: '2024-02-01'
  },
  {
    id: '5',
    title: 'Himalayan Adventure Trek',
    description: 'Embark on an unforgettable journey through the majestic Himalayas. Experience breathtaking mountain views, pristine valleys, and spiritual serenity.',
    shortDescription: 'Manali - Leh - Ladakh | 12 Days',
    images: [
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 55000,
    duration: '12 Days / 11 Nights',
    location: 'Manali, Leh, Ladakh',
    startDate: '2024-06-01',
    endDate: '2024-06-12',
    maxCapacity: 10,
    currentBookings: 6,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        description: 'Begin your Himalayan adventure.',
        activities: ['Airport pickup', 'Acclimatization', 'Local market visit', 'Briefing session']
      },
      {
        day: 2,
        title: 'Manali to Jispa',
        description: 'Journey through scenic mountain roads.',
        activities: ['Early morning departure', 'Rohtang Pass', 'Keylong visit', 'Overnight camping']
      },
      {
        day: 3,
        title: 'Jispa to Leh',
        description: 'Cross high altitude passes.',
        activities: ['Baralacha Pass', 'Sarchu plains', 'Gata loops', 'Leh arrival']
      },
      {
        day: 4,
        title: 'Leh Acclimatization',
        description: 'Rest and explore Leh city.',
        activities: ['Leh Palace', 'Shanti Stupa', 'Local bazaar', 'Monastery visit']
      },
      {
        day: 5,
        title: 'Nubra Valley',
        description: 'Visit the valley of flowers.',
        activities: ['Khardung La Pass', 'Diskit Monastery', 'Camel safari', 'Sand dunes']
      },
      {
        day: 6,
        title: 'Pangong Lake',
        description: 'Experience the famous blue lake.',
        activities: ['Early departure', 'Chang La Pass', 'Pangong Tso', 'Lakeside camping']
      },
      {
        day: 7,
        title: 'Pangong to Leh',
        description: 'Return journey with sightseeing.',
        activities: ['Sunrise at lake', 'Hemis Monastery', 'Thiksey Monastery', 'Leh return']
      },
      {
        day: 8,
        title: 'Tso Moriri Lake',
        description: 'Visit another pristine high-altitude lake.',
        activities: ['Chumathang hot springs', 'Tso Moriri', 'Korzok village', 'Wildlife spotting']
      },
      {
        day: 9,
        title: 'Alchi and Likir',
        description: 'Explore ancient monasteries.',
        activities: ['Alchi Monastery', 'Likir Monastery', 'Traditional lunch', 'Cultural interactions']
      },
      {
        day: 10,
        title: 'Lamayuru',
        description: 'Visit the moonland of Ladakh.',
        activities: ['Lamayuru Monastery', 'Moon landscape', 'Magnetic Hill', 'Gurudwara Pathar Sahib']
      },
      {
        day: 11,
        title: 'Leh Leisure',
        description: 'Free day for personal exploration.',
        activities: ['Shopping', 'Spa treatments', 'Photography', 'Farewell dinner']
      },
      {
        day: 12,
        title: 'Departure',
        description: 'End of the Himalayan adventure.',
        activities: ['Hotel check-out', 'Airport transfer', 'Departure']
      }
    ],
    inclusions: [
      'Mountain accommodation and camping',
      'All meals during trek',
      'Professional mountain guide',
      'Permits and entry fees',
      'Oxygen cylinders and first aid',
      'All transfers and sightseeing'
    ],
    exclusions: [
      'Domestic flights',
      'Personal trekking gear',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and drivers'
    ],
    highlights: [
      'High altitude mountain passes',
      'Pristine Himalayan lakes',
      'Ancient Buddhist monasteries',
      'Unique Ladakhi culture',
      'Adventure trekking experience'
    ],
    featured: false,
    active: true,
    createdAt: '2024-02-05'
  },
  {
    id: '6',
    title: 'South India Temple Trail',
    description: 'Discover the rich spiritual heritage of South India with visits to magnificent temples, ancient architecture, and cultural experiences.',
    shortDescription: 'Chennai - Madurai - Kanyakumari | 8 Days',
    images: [
      'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3679181/pexels-photo-3679181.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 28000,
    duration: '8 Days / 7 Nights',
    location: 'Chennai, Madurai, Kanyakumari',
    startDate: '2024-07-10',
    endDate: '2024-07-17',
    maxCapacity: 16,
    currentBookings: 9,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Chennai',
        description: 'Welcome to the cultural capital of South India.',
        activities: ['Airport pickup', 'Hotel check-in', 'Marina Beach', 'Local cuisine dinner']
      },
      {
        day: 2,
        title: 'Chennai Sightseeing',
        description: 'Explore the heritage of Chennai.',
        activities: ['Kapaleeshwarar Temple', 'Fort St. George', 'Government Museum', 'Classical dance show']
      },
      {
        day: 3,
        title: 'Chennai to Mahabalipuram',
        description: 'Visit the UNESCO World Heritage site.',
        activities: ['Shore Temple', 'Five Rathas', 'Arjuna\'s Penance', 'Stone carving workshop']
      },
      {
        day: 4,
        title: 'Mahabalipuram to Pondicherry',
        description: 'Experience French colonial charm.',
        activities: ['French Quarter', 'Aurobindo Ashram', 'Beach promenade', 'French cuisine']
      },
      {
        day: 5,
        title: 'Pondicherry to Thanjavur',
        description: 'Journey to the land of temples.',
        activities: ['Brihadeeswara Temple', 'Thanjavur Palace', 'Bronze gallery', 'Classical music performance']
      },
      {
        day: 6,
        title: 'Thanjavur to Madurai',
        description: 'Visit the temple city.',
        activities: ['Meenakshi Temple', 'Thirumalai Nayak Palace', 'Gandhi Museum', 'Evening temple ceremony']
      },
      {
        day: 7,
        title: 'Madurai to Kanyakumari',
        description: 'Reach the southernmost tip of India.',
        activities: ['Vivekananda Rock', 'Thiruvalluvar Statue', 'Sunset point', 'Kumari Amman Temple']
      },
      {
        day: 8,
        title: 'Departure',
        description: 'End of the spiritual journey.',
        activities: ['Sunrise viewing', 'Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Heritage hotel accommodation',
      'All meals and refreshments',
      'Professional cultural guide',
      'Temple entry fees',
      'Cultural performances',
      'All transfers and sightseeing'
    ],
    exclusions: [
      'Domestic flights',
      'Personal expenses',
      'Camera fees at monuments',
      'Travel insurance',
      'Tips and gratuities'
    ],
    highlights: [
      'UNESCO World Heritage temples',
      'Classical dance and music',
      'Ancient Dravidian architecture',
      'Spiritual experiences',
      'Traditional South Indian cuisine'
    ],
    featured: false,
    active: true,
    createdAt: '2024-02-10'
  },
  {
    id: '7',
    title: 'Kashmir Valley Paradise',
    description: 'Experience the breathtaking beauty of Kashmir, often called "Paradise on Earth". Enjoy serene lakes, snow-capped mountains, and Mughal gardens.',
    shortDescription: 'Srinagar - Gulmarg - Pahalgam | 6 Days',
    images: [
      'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 35000,
    duration: '6 Days / 5 Nights',
    location: 'Srinagar, Gulmarg, Pahalgam',
    startDate: '2024-08-05',
    endDate: '2024-08-10',
    maxCapacity: 14,
    currentBookings: 4,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Welcome to the Venice of the East.',
        activities: ['Airport pickup', 'Houseboat check-in', 'Dal Lake shikara ride', 'Floating market visit']
      },
      {
        day: 2,
        title: 'Srinagar Sightseeing',
        description: 'Explore the Mughal heritage.',
        activities: ['Mughal Gardens', 'Hazratbal Shrine', 'Pari Mahal', 'Local handicrafts shopping']
      },
      {
        day: 3,
        title: 'Srinagar to Gulmarg',
        description: 'Visit the meadow of flowers.',
        activities: ['Drive to Gulmarg', 'Gondola cable car', 'Snow activities', 'Mountain views']
      },
      {
        day: 4,
        title: 'Gulmarg to Pahalgam',
        description: 'Journey to the valley of shepherds.',
        activities: ['Scenic drive', 'Betaab Valley', 'Aru Valley', 'River rafting']
      },
      {
        day: 5,
        title: 'Pahalgam Exploration',
        description: 'Discover natural beauty.',
        activities: ['Chandanwari visit', 'Mini Switzerland', 'Horse riding', 'Nature walks']
      },
      {
        day: 6,
        title: 'Return to Srinagar',
        description: 'Final departure.',
        activities: ['Drive to Srinagar', 'Last-minute shopping', 'Airport transfer']
      }
    ],
    inclusions: [
      'Houseboat and hotel accommodation',
      'All meals and Kashmiri cuisine',
      'Professional guide services',
      'Shikara rides and cable car',
      'All transfers and sightseeing',
      'Adventure activities'
    ],
    exclusions: [
      'Airfare to/from Kashmir',
      'Personal expenses',
      'Travel insurance',
      'Tips and gratuities',
      'Additional adventure activities'
    ],
    highlights: [
      'Houseboat stay on Dal Lake',
      'Mughal gardens and architecture',
      'Snow activities in Gulmarg',
      'Scenic valley landscapes',
      'Traditional Kashmiri hospitality'
    ],
    featured: true,
    active: true,
    createdAt: '2024-02-15'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Shree Tours Admin',
    email: 'admin@shreetours.in',
    phone: '+91 9876543210',
    createdAt: '2024-01-01',
    isAdmin: true
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 9876543211',
    createdAt: '2024-01-15',
    isAdmin: false
  },
  {
    id: '3',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543212',
    createdAt: '2024-01-20',
    isAdmin: false
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    userId: '2',
    tripId: '1',
    userName: 'Priya Sharma',
    userEmail: 'priya.sharma@email.com',
    userPhone: '+91 9876543211',
    numberOfTravelers: 2,
    totalAmount: 50000,
    bookingDate: '2024-01-25',
    status: 'confirmed',
    specialRequests: 'Vegetarian meals preferred'
  },
  {
    id: '2',
    userId: '3',
    tripId: '2',
    userName: 'Rajesh Kumar',
    userEmail: 'rajesh.kumar@email.com',
    userPhone: '+91 9876543212',
    numberOfTravelers: 4,
    totalAmount: 128000,
    bookingDate: '2024-01-30',
    status: 'pending'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely amazing experience! The Golden Triangle tour was perfectly organized. Every detail was taken care of, and our guide was incredibly knowledgeable. Highly recommend Shree Tours!',
    tripTitle: 'Golden Triangle Tour',
    date: '2024-01-10'
  },
  {
    id: '2',
    name: 'Rajesh Patel',
    location: 'Bangalore',
    rating: 5,
    comment: 'The Kerala backwaters trip was like a dream come true. The houseboat experience was luxurious and the tea plantation visits were fascinating. Thank you for such wonderful memories!',
    tripTitle: 'Kerala Backwaters & Hills',
    date: '2024-01-05'
  },
  {
    id: '3',
    name: 'Anita Desai',
    location: 'Delhi',
    rating: 4,
    comment: 'Excellent service and beautiful destinations. The Rajasthan heritage tour exceeded our expectations. The desert safari was the highlight of our trip. Will definitely book again!',
    tripTitle: 'Rajasthan Royal Heritage',
    date: '2023-12-20'
  }
];