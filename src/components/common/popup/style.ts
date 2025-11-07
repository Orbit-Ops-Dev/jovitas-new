import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const scaleIn = keyframes`
	from { transform: translateY(10px) scale(0.96); opacity: 0; }
	to { transform: translateY(0) scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(13, 27, 43, 0.65); /* primary with transparency */
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${({ theme }) => theme.zIndex.overlay};
	animation: ${fadeIn} ${({ theme }) => theme.transitions.normal};
`;

export const Modal = styled.div`
	background: ${({ theme }) => theme.colors.white};
	width: min(900px, 92%);
	border-radius: ${({ theme }) => theme.borderRadius.xl};
	box-shadow: ${({ theme }) => theme.shadows.xl};
	display: grid;
	grid-template-columns: 1.1fr 0.9fr;
	overflow: hidden;
	position: relative;
	animation: ${scaleIn} ${({ theme }) => theme.transitions.normal};

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		grid-template-columns: 1fr;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	height: 100%;
	min-height: 280px;
	background: ${({ theme }) => theme.colors.gray100};
	display: flex;
	align-items: stretch;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(13,27,43,0.55) 0%, rgba(106,180,168,0.25) 60%);
		mix-blend-mode: multiply;
	}
`;

export const Content = styled.div`
	padding: ${({ theme }) => theme.spacing['2xl']};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.lg};
	justify-content: center;
	background: linear-gradient(145deg, ${({ theme }) => theme.colors.white} 0%, ${({ theme }) => theme.colors.gray100} 100%);

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		padding: ${({ theme }) => theme.spacing.xl};
	}
`;

export const Badge = styled.span`
	display: inline-block;
	background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
	color: ${({ theme }) => theme.colors.textWhite};
	padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
	font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
	border-radius: ${({ theme }) => theme.borderRadius.full};
	letter-spacing: 0.5px;
	box-shadow: ${({ theme }) => theme.shadows.md};
	width: fit-content;
`;

export const Title = styled.h3`
	font-size: clamp(1.9rem, 4.5vw, 2.6rem);
	line-height: ${({ theme }) => theme.typography.lineHeight.tight};
	color: ${({ theme }) => theme.colors.primary};
	letter-spacing: -0.5px;
`;

export const Description = styled.p`
	font-size: ${({ theme }) => theme.typography.fontSize.md};
	color: ${({ theme }) => theme.colors.gray700};
	max-width: 46ch;
`;

export const Actions = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing.md};
	margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const CloseButton = styled.button`
	position: absolute;
	top: ${({ theme }) => theme.spacing.md};
	right: ${({ theme }) => theme.spacing.md};
	width: 38px;
	height: 38px;
	border-radius: ${({ theme }) => theme.borderRadius.full};
	background: ${({ theme }) => theme.colors.gray100};
	color: ${({ theme }) => theme.colors.dark};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
	line-height: 1;
	border: 2px solid transparent;
	transition: background ${({ theme }) => theme.transitions.fast}, transform ${({ theme }) => theme.transitions.fast};
	cursor: pointer;
	box-shadow: ${({ theme }) => theme.shadows.sm};

	&:hover {
		background: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.92);
	}

	&:focus-visible {
		outline: none;
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Highlight = styled.span`
	font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
	color: ${({ theme }) => theme.colors.primary};
`;

export const SmallNote = styled.span`
	font-size: ${({ theme }) => theme.typography.fontSize.xs};
	color: ${({ theme }) => theme.colors.gray500};
	margin-top: ${({ theme }) => theme.spacing.xs};
`;

