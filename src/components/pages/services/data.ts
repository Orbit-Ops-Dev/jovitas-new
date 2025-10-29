import { Service } from './types';
import residentialImage from '../../../assets/residential.jpg';
import moveInOutImage from '../../../assets/move-in-out.jpg';
import postConstructionImage from '../../../assets/post-construction.jpg';

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Cleaning',
    description:
      'We provide comprehensive residential cleaning or home cleaning services designed to keep your home spotless, fresh, and inviting. From regular maintenance to deep cleaning, our professional team ensures every corner is cleaned with care and attention to detail.',
    image: residentialImage,
    slug: 'residential-cleaning',
  },
  {
    id: '2',
    title: 'Move In/Move Out Cleaning',
    description:
      "Our Move-In and Move-Out cleaning services ensure your home is ready for its next chapter. Whether you're settling in or moving out, we provide a deep clean, leaving every room spotless and ready for new memories.",
    image: moveInOutImage,
    slug: 'move-in-move-out-cleaning',
  },
  {
    id: '3',
    title: 'Post Construction Cleaning',
    description:
      'Our Post Construction Cleaning services ensure your newly constructed or renovated space is move-in ready. We meticulously clean every corner, removing dust, debris, and construction residue to reveal a polished, pristine environment.',
    image: postConstructionImage,
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
    features: [
      'Sweep, mop, vacuum, and dust all surfaces',
      'Maintain a clean and comfortable space',
      'Sanitize appliances and disinfect surfaces',
      'Scrub tiles and remove mold',
      'Make beds, remove cobwebs, and dust vents',
      'Prevent bacteria and mold growth for a healthier living environment',
    ],
    image: residentialImage,
    slug: 'residential-cleaning',
    gallery: [residentialImage, moveInOutImage, postConstructionImage, residentialImage],
  },
  {
    id: '2',
    title: 'Move In/Move Out Cleaning',
    description:
      "Our Move-In and Move-Out cleaning services ensure your home is ready for its next chapter. Whether you're settling in or moving out, we provide a deep clean, leaving every room spotless and ready for new memories.",
    features: [
      'Clean ceiling fans, light fixtures, interior windows, and sills',
      'Wipe baseboards, doors, and frames',
      'Remove cobwebs for a pristine environment',
      'Deep-clean appliances inside and out, including behind the fridge and stove',
      'Scrub and sanitize sinks, tubs, toilets, and tiles',
      'Tackle cabinets, vents, and countertops for a sparkling finish',
      'Add finishing touches to ensure the space is move-in or move-out ready',
      'Vacuum, sweep, and mop floors for a polished look',
      'Clean outlet covers, vents, and blinds',
    ],
    image: moveInOutImage,
    slug: 'move-in-move-out-cleaning',
    gallery: [moveInOutImage, residentialImage, postConstructionImage, moveInOutImage],
  },
  {
    id: '3',
    title: 'Post Construction Cleaning',
    description:
      'Our Post Construction Cleaning services ensure your newly constructed or renovated space is move-in ready. We meticulously clean every corner, removing dust, debris, and construction residue to reveal a polished, pristine environment.',
    features: [
      'Deep-clean and sanitize kitchens and bathrooms, focusing on appliances and fixtures',
      'Clean flat surfaces, light switches, and baseboards',
      'Vacuum, mop, and dust bedrooms, kitchens, and bathrooms',
      'Remove debris and clean entrances, corridors, and lobbies',
      'Wash vents, glass surfaces, and doors',
      'Test and clean light fixtures and switches',
      'Sweep, power-wash, and remove debris from decks, porches, and walkways',
      'Leave outdoor spaces as polished as interiors',
    ],
    image: postConstructionImage,
    slug: 'post-construction-cleaning',
    gallery: [postConstructionImage, residentialImage, moveInOutImage, postConstructionImage],
  },
];
