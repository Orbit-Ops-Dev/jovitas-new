import { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Commercial Cleaning',
    description:
      'Commercial cleaning services are not just a necessity, but a reflection of your commitment to providing a high-quality workplace. A clean and organized space can boost employee productivity and morale, while also giving your customers confidence in your business.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    slug: 'commercial-cleaning',
  },
  {
    id: '2',
    title: 'Residential Cleaning',
    description:
      'Full residential cleaning is a comprehensive service that provides a thorough cleaning of every room in your home. Our professional cleaning company can tackle even the toughest cleaning jobs to ensure that your home is sparkling clean and hygienic.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    slug: 'residential-cleaning',
  },
  {
    id: '3',
    title: 'Post Construction Cleaning',
    description:
      "Post-construction cleaning is a specialized service that is designed to clean and sanitize a property after a construction project has been completed. Whether it's a newly constructed building or a renovation, we ensure that the space is safe, clean, and ready for occupancy.",
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
    slug: 'post-construction-cleaning',
  },
  {
    id: '4',
    title: 'Deep Cleaning',
    description:
      'Thorough, intensive cleaning that goes beyond regular maintenance to tackle hidden dirt, grime, and bacteria in every corner of your space.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    slug: 'deep-cleaning',
  },
  {
    id: '5',
    title: 'Move In/Move Out Cleaning',
    description:
      'Comprehensive cleaning service for transitions, ensuring your old space is spotless for the next occupant and your new space is fresh and ready for move-in.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    slug: 'move-in-move-out-cleaning',
  },
  {
    id: '6',
    title: 'Office Cleaning',
    description:
      'Professional office cleaning services that maintain a productive, healthy work environment for your team and create a positive impression for clients.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    slug: 'office-cleaning',
  },
  {
    id: '7',
    title: 'Vacation Rental Cleaning',
    description:
      'Vacation rental cleaning is essential for ensuring that your rental property is clean, hygienic, and welcoming for every guest.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
    slug: 'vacation-rental-cleaning',
  },
  {
    id: '8',
    title: 'Window Cleaning',
    description:
      'Professional window cleaning services that deliver streak-free, crystal-clear windows for both residential and commercial properties.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop',
    slug: 'window-cleaning',
  },
  {
    id: '9',
    title: 'Carpet Cleaning',
    description:
      'Deep carpet cleaning that removes stains, allergens, and embedded dirt to restore your carpets to like-new condition.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    slug: 'carpet-cleaning',
  },
  {
    id: '10',
    title: 'Pressure Washing',
    description:
      'High-powered exterior cleaning that removes dirt, mold, and grime from driveways, walkways, siding, and outdoor surfaces.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    slug: 'pressure-washing',
  },
];

// Services specific to the services page (with features and gallery images)
export const servicesDetailed: Service[] = [
  {
    id: '1',
    title: 'House Cleaning',
    description: 'Complete residential cleaning services to keep your home spotless and healthy.',
    features: ['Living areas', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Dusting & vacuuming'],
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    slug: 'house-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '2',
    title: 'Apartment Cleaning',
    description: 'Specialized cleaning for apartments, condos, and smaller living spaces.',
    features: ['All rooms', 'Kitchen deep clean', 'Bathroom sanitization', 'Floor care'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    slug: 'apartment-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '3',
    title: 'Office Cleaning',
    description: 'Professional commercial cleaning to maintain a productive workspace.',
    features: ['Workstations', 'Conference rooms', 'Break rooms', 'Restrooms', 'Common areas'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    slug: 'office-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '4',
    title: 'Deep Cleaning',
    description: 'Thorough, intensive cleaning for spaces that need extra attention.',
    features: ['Baseboards', 'Window tracks', 'Behind appliances', 'Detailed sanitization'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    slug: 'deep-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '5',
    title: 'Post Construction Cleaning',
    description: 'Remove construction dust and debris after renovations or new builds.',
    features: ['Dust removal', 'Paint splatter cleanup', 'Floor polishing', 'Window cleaning'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
    slug: 'post-construction-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '6',
    title: 'After Party Cleaning',
    description: 'Quick and efficient cleanup after events and gatherings.',
    features: ['Trash removal', 'Surface cleaning', 'Floor care', 'Kitchen cleanup'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    slug: 'after-party-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
    ],
  },
];
