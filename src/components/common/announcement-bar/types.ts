export interface Promo {
  /** Short label shown on the pill badge. */
  badge: string;
  /** Headline copy — kept short enough to fit one line on desktop. */
  headline: string;
  /** Supporting sentence. Hidden on narrow screens where the headline has to stand alone. */
  detail: string;
  /** Terms of the offer. */
  fineprint: string;
  /** Text of the call-to-action link. */
  ctaLabel: string;
  /** Pre-populates the contact form's message field via the ?prefillMessage= param. */
  ctaPrefillMessage: string;
  /** localStorage key tracking dismissal. Bump the suffix to re-show the bar after a copy change. */
  storageKey: string;
}
