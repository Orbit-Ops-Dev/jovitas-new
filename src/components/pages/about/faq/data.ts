import { FAQ } from './types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What areas do you serve?',
    answer: 'We proudly serve Austin and surrounding communities. If you don’t see your area listed, reach out – we may still be able to help.',
    answerList: [
      'Elgin',
      'Manor',
      'North Austin',
      'Pflugerville',
      'Round Rock',
      'Williamson County',
      'Lakeway',
      'Hutto',
      'Taylor',
    ],
  },
  {
    id: '2',
    question: 'What are your hours of operation?',
    answer:
      "We operate Monday through Friday from 8:00 AM to 5:30 PM CST. We understand that life doesn't always fit into a 9-to-5 schedule, so we're happy to work with you to find times that work best for your needs.",
  },
  {
    id: '3',
    question: 'Do you provide your own cleaning supplies?',
    answer:
      "Absolutely! We come fully equipped with all the cleaning supplies and tools we need to get the job done right. But if you have favorite products or specific cleaners you'd like us to use, just let us know – we're happy to work with whatever you prefer.",
  },
];
