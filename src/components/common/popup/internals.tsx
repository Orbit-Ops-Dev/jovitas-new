import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/internals';
import promoImg from '../../../assets/home/popup.jpg';
import {
	Overlay,
	Modal,
	ImageWrapper,
	Content,
	Badge,
	Title,
	Description,
	Actions,
	CloseButton,
	Highlight,
	SmallNote,
	CloseText,
} from './style';

const STORAGE_KEY = 'jovitas_first_visit_promo_v1';

type PromoPopupProps = { imageSrc?: string; onClose?: () => void };

const PromoPopup: React.FC<PromoPopupProps> = ({ imageSrc = promoImg, onClose }) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		try {
			const seen = localStorage.getItem(STORAGE_KEY);
			if (!seen) {
				// small delay to feel smooth after page load
				const t = setTimeout(() => setOpen(true), 400);
				return () => clearTimeout(t);
			}
		} catch (e) {
			setOpen(true);
		}
	}, []);

	const handleClose = () => {
		try {
			localStorage.setItem(STORAGE_KEY, '1');
		} catch {}
		setOpen(false);
		onClose?.();
	};

	const handleClaim = () => {
		try {
			localStorage.setItem(STORAGE_KEY, '1');
		} catch {}
		setOpen(false);
		const msg = "Hi! I'm interested in my first deep cleaning and the $30 OFF special.";
		navigate(`/contact?prefillMessage=${encodeURIComponent(msg)}`);
	};

	if (!open) return null;

	return (
		<Overlay role="dialog" aria-modal="true" aria-label="Special Offer">
			<Modal>
				<CloseButton aria-label="Close" onClick={handleClose}>
					×
				</CloseButton>
				<ImageWrapper>
					<img src={imageSrc} alt="Deep cleaning service" />
				</ImageWrapper>
				<Content>
					<Badge>Limited Time</Badge>
					<Title>Special Deal: $30 OFF!</Title>
					<Description>
						We have an amazing offer, just for you! Get <Highlight>$30 OFF</Highlight>, on your first deep cleaning service!
					</Description>
				<Actions>
					<Button size="large" variant="primary" onClick={handleClaim}>
						Claim Offer
					</Button>
				</Actions>
				<SmallNote>New customers only. Terms apply.</SmallNote>
				<CloseText onClick={handleClose}>Close</CloseText>
				</Content>
			</Modal>
		</Overlay>
	);
};

export default PromoPopup;

