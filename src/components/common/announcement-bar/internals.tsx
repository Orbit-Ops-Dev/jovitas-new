import { useState } from 'react';
import { FaGift, FaArrowRight, FaTimes } from 'react-icons/fa';
import { referralPromo } from './data';
import { Bar, BarContainer, Message, Badge, BadgeText, Headline, Detail, CTA, DismissButton } from './styled';

const promo = referralPromo;

/** localStorage throws in Safari private browsing, so every access is guarded. */
const wasDismissed = () => {
  try {
    return window.localStorage.getItem(promo.storageKey) === 'dismissed';
  } catch {
    return false;
  }
};

const AnnouncementBar = () => {
  // Read during the initial render so a dismissed bar never flashes on screen.
  const [isVisible, setIsVisible] = useState(() => !wasDismissed());

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      window.localStorage.setItem(promo.storageKey, 'dismissed');
    } catch {
      // Dismissal simply won't persist across reloads.
    }
  };

  return (
    <Bar aria-label="Site announcement">
      <BarContainer>
        <Message>
          <Badge>
            <FaGift aria-hidden="true" />
            <BadgeText>{promo.badge}</BadgeText>
          </Badge>
          <span>
            <Headline>{promo.headline}</Headline> <Detail>{promo.detail}</Detail>
          </span>
        </Message>

        <CTA to={`/?prefillMessage=${encodeURIComponent(promo.ctaPrefillMessage)}#contact`}>
          {promo.ctaLabel}
          <FaArrowRight aria-hidden="true" />
        </CTA>

        <DismissButton onClick={handleDismiss} aria-label="Dismiss announcement">
          <FaTimes aria-hidden="true" />
        </DismissButton>
      </BarContainer>
    </Bar>
  );
};

export default AnnouncementBar;
