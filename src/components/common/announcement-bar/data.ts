import type { Promo } from './types';

/**
 * Single source of truth for the referral promo. Consumed by the site-wide
 * announcement bar and by the callout above the contact form, so the offer
 * only ever has to be edited in one place.
 */
export const referralPromo: Promo = {
  badge: 'Referral Program',
  headline: 'Get $50 off your next cleaning',
  detail: 'Refer a friend or family member and save when they book with us.',
  fineprint: 'Your discount is applied once your referral completes their first cleaning.',
  ctaLabel: 'Refer a Friend',
  ctaPrefillMessage:
    "Hi! I'd like to take part in your referral program. Please let me know how to refer a friend and claim my $50 off.",
  storageKey: 'jcs.announcement.referral-50',
};

export default referralPromo;
