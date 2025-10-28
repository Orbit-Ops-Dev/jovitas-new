import { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Cleaning',
    description:
      'We provide comprehensive residential cleaning or home cleaning services designed to keep your home spotless, fresh, and inviting. From regular maintenance to deep cleaning, our professional team ensures every corner is cleaned with care and attention to detail.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    slug: 'residential-cleaning',
  },
  {
    id: '2',
    title: 'Move In/Move Out Cleaning',
    description:
      'Our Move-In and Move-Out cleaning services ensure your home is ready for its next chapter. Whether you’re settling in or moving out, we provide a deep clean, leaving every room spotless and ready for new memories.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    slug: 'move-in-move-out-cleaning',
  },
  {
    id: '3',
    title: 'Post Construction Cleaning',
    description:
      'Our Post Construction Cleaning services ensure your newly constructed or renovated space is move-in ready. We meticulously clean every corner, removing dust, debris, and construction residue to reveal a polished, pristine environment.',
    slug: 'post-construction-cleaning',
  },
];

// Services specific to the services page (with features and gallery images)
export const servicesDetailed: Service[] = [
  {
    id: '1',
    title: 'Residential Cleaning',
    description:
      'We provide comprehensive residential cleaning or home cleaning services designed to keep your home spotless, fresh, and inviting. From regular maintenance to deep cleaning, our professional team ensures every corner is cleaned with care and attention to detail.',
    features: ['Living areas', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Dusting & vacuuming'],
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    slug: 'residential-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '2',
    title: 'Move In/Move Out Cleaning',
    description:
      "Our Move-In and Move-Out cleaning services ensure your home is ready for its next chapter. Whether you're settling in or moving out, we provide a deep clean, leaving every room spotless and ready for new memories.",
    features: ['Deep cleaning', 'Kitchen sanitization', 'Bathroom disinfection', 'Floor care', 'Window cleaning'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    slug: 'move-in-move-out-cleaning',
    gallery: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    ],
  },
  {
    id: '3',
    title: 'Post Construction Cleaning',
    description:
      'Our Post Construction Cleaning services ensure your newly constructed or renovated space is move-in ready. We meticulously clean every corner, removing dust, debris, and construction residue to reveal a polished, pristine environment.',
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
];
