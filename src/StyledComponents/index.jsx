import styled,{keyframes,css,createGlobalStyle} from 'styled-components'
import { HiOutlineHandRaised } from "react-icons/hi2";
import { motion } from "framer-motion"

export const GlobalScrollbar = createGlobalStyle`
  /* WebKit Browsers */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ $dark }) => ($dark ? '#000000' : '#ffffff')};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ $dark }) =>
      $dark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};

    border-radius: 100px;
    border: 3px solid ${({ $dark }) => ($dark ? '#000000' : '#ffffff')};

    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #09f26a;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ $dark }) =>
      $dark
        ? 'rgba(255, 255, 255, 0.2) #000000'
        : 'rgba(0, 0, 0, 0.2) #ffffff'};
  }
`

export const MainBackgroundContainer = styled.div`
  min-height: 100vh;
  /* Fix: Changed 100vw to 100% to prevent horizontal scroll */
  width: 100%;
  max-width: 100vw;
  
  /* Standardizing padding for mobile vs desktop */
  padding: 50px 20px;
  box-sizing: border-box;
  
  position: relative;
  /* Allows vertical scroll but kills horizontal scroll */
  overflow-x: hidden;
  overflow-y: auto;

  background-color: ${({ $dark }) => ($dark ? '#000000' : '#ffffff')};
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};

  display: flex;
  align-items: center;
  flex-direction: column;
  
  transition: 
    background-color 0.55s cubic-bezier(0.25, 0.1, 0.25, 1), 
    color 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);

  /* --- CUSTOM SCROLLBAR STYLING --- */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ $dark }) => ($dark ? '#0a0a0a' : '#f5f5f5')};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ $dark }) => ($dark ? '#333333' : '#cccccc')};
    border-radius: 10px;
    /* Creating a 'floating' bar effect with borders */
    border: 3px solid ${({ $dark }) => ($dark ? '#0a0a0a' : '#f5f5f5')};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #09f26aff; /* Brand Green on hover */
  }

  /* Firefox Support */
  scrollbar-width: thin;
  scrollbar-color: ${({ $dark }) => ($dark ? '#333333 #0a0a0a' : '#cccccc #f5f5f5')};

  /* Overlay / Grain Logic */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $dark }) =>
      $dark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)"}; 
    opacity: ${({ $dark }) => ($dark ? 1 : 0)};
    transition: opacity 0.45s ease;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => (props.$scrolled ? '85%' : '100%')};
  margin-top: ${props => (props.$scrolled ? '15px' : '0px')};
  padding: ${props => (props.$scrolled ? '7px 10px' : '10px 20px')};
  border-radius: ${props => (props.$scrolled ? '50px' : '0px')};
  background-color: ${props => (props.$scrolled 
    ? (props.$dark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)') 
    : 'transparent')
  };
  backdrop-filter: ${props => (props.$scrolled ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${props => (props.$scrolled ? 'blur(12px)' : 'none')}; /* Safari support */
  border: ${props => (props.$scrolled 
    ? '1px solid rgba(255, 255, 255, 0.1)' 
    : 'none')
  };
  box-shadow: ${props => (props.$scrolled 
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.2)' 
    : 'none')
  };
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SignatureLogo = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  transform: rotate(-5deg); 
  color: ${props => (props.$dark ? '#f8f9fa' : '#1a1a1a')};
  text-shadow: ${props => (props.$dark 
    ? '0 0 10px rgba(255,255,255,0.2)' 
    : 'none')};

  transition: all 0.3s ease;

  &:hover {
    transform: rotate(0deg) scale(1.05);
    color: #3b82f6;
  }
`;

export const ThemeButton=styled.button`
    background-color: transparent;
    border: none;
`

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const SmoothScrollWrapper = styled.div`
  transition: transform 0.05s ease-out;
`;

export const NavLinkItem = styled.p`
  margin: 0;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative; /* Necessary for the underline indicator */
  
  /* Base color based on theme */
  color: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)')};
  transition: all 0.3s ease;

  /* --- ACTIVE STATE STYLES --- */
  ${({ $active, $dark }) => $active && css`
    color: ${$dark ? '#9cff57' : '#09f26aff'}; /* Brand Green */
    font-weight: 600;

    /* Animated Underline Indicator */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 16px;
      height: 2px;
      background-color: ${$dark ? '#9cff57' : '#09f26aff'};
      border-radius: 2px;
    }
  `}

  &:hover {
    color: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};
    transform: translateY(-2px);
  }
`;

export const HeroSection = styled.section`
  min-height: calc(100vh - 80px); 
  width: 100%;
  padding: 80px 80px 40px;

  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 64px 48px;
  }

  @media (max-width: 768px) {
    padding: 48px 24px;
    min-height: calc(50vh - 5px);
    padding-bottom: 0px;
    align-items: flex-end;
  }
`;
export const HeroGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 64px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;
export const LeftHero = styled.div`
  max-width: 900px;
`;
export const Greeting = styled.p`
  font-size: 16px;
  color: #b3b3b3;
  margin-bottom: 24px;
`;
export const HeroTitle = styled.h1`
  font-size: clamp(48px, 6vw, 96px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.02em;

  span {
    color: ${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};
  }
`;
export const SocialLinks = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 28px;
  cursor: pointer;
  a {
    font-size: 12px;
    letter-spacing: 1px;
    color: #b3b3b3;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;
export const RightHero = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 32px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
export const HeroDescription = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: #9e9e9e;
`;
export const HeroCTA = styled.button`
  align-self: flex-start;
  padding: 14px 28px;
  border-radius: 999px;

  position: relative;
  overflow: hidden;
  z-index: 1;

  border: 1px solid ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};
  background: transparent;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};

  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  transform: scale(1);
  transition:
    color 0.35s ease,
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* LIQUID LAYER */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20%;
    height: 120%;

    background: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};

    /* CURVED LIQUID EDGE */
    border-radius: 50% 50% 0 0;

    transform: translateY(100%);
    transition:
      transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-radius 0.45s ease;

    z-index: -1;
  }

  /* Hover — liquid rise + rubber */
  &:hover {
    color: ${({ $dark }) => ($dark ? '#000000' : '#ffffff')};
    transform: scaleX(1.06) scaleY(0.94);

    &::before {
      transform: translateY(0);
      border-radius: 0;
    }
  }

  /* Active — soft press */
  &:active {
    transform: scale(0.92);
    transition-duration: 0.15s;
  }
`;

const waveAnimation = keyframes`
  0%   { transform: rotate(0deg); }
  10%  { transform: rotate(12deg); }
  20%  { transform: rotate(-6deg); }
  30%  { transform: rotate(10deg); }
  40%  { transform: rotate(-4deg); }
  50%  { transform: rotate(8deg); }
  60%  { transform: rotate(-2deg); }
  70%  { transform: rotate(6deg); }
  80%  { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`

export const WavingHand = styled(HiOutlineHandRaised)`
  color: ${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};
  font-size: 30px;
  display: inline-block;
  margin-left: 10px;

  /* Wrist pivot */
  transform-origin: 75% 75%;

  /* Play once on load */
  animation: ${waveAnimation} 1.8s ease-in-out both;

  /* Subtle repeat on hover */
  &:hover {
    animation: ${waveAnimation} 1.6s ease-in-out infinite;
  }
`;

const marqueeScroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const MarqueeSection = styled.section`
  width: 95vw;
  overflow: hidden; 
  position: relative;
  padding: 20px 0;

  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;


export const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  /* Apple-style fade edges */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 1px;
  border: none;

  background-color: ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'};

`;



export const MarqueeTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;

  width: max-content;     /* instead of fit-content */
  min-width: 200%;        /* ensures smooth looping */

  animation: ${marqueeScroll} 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const MarqueeText = styled.span`
  font-size: clamp(40px, 7vw, 88px);
  font-weight: 600;
  letter-spacing: -0.03em;
  overflow: hidden;

  margin-right: 48px;

  /* Light mode */
  color: rgba(0, 0, 0, 0.08);

  /* Dark mode */
  ${({ $dark }) =>
    $dark &&
    `
      color: rgba(255, 255, 255, 0.12);
    `}

  @media (max-width: 768px) {
    font-size: clamp(28px, 9vw, 56px);
    margin-right: 32px;
  }
`;

export const AboutSection = styled.section`
  width: 100%;
  padding: 100px 24px 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 16px 120px;
  }
`;
export const AboutContent = styled.div`
  max-width: 960px;   /* controls line length */
  width: 100%;
  text-align: center;
`;
export const SectionLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: ${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};

  margin-bottom: 32px;
`;

const revealAnimation = keyframes`
  from {
    transform: translateY(110%);
  }
  to {
    transform: translateY(0);
  }
`;

export const RevealWrapper = styled.div`
  overflow: hidden; 
  display: block;
  line-height: 1.2;
`;

export const ScrollRevealText = styled.span`
  display: inline-block;
  will-change: transform;
  font-size: 28px;
  
  /* Initial state: hidden below the mask */
  transform: translateY(110%);
  
  /* The animation only triggers when the 'visible' class is added */
  ${props => props.$isVisible && css`
    animation: ${revealAnimation} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: ${props.$delay || '0s'};
  `}
`;
export const ProjectsSection = styled.section`
  width: 100%;
  padding: 140px 0;
  display: flex;
  justify-content: center;
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  padding: 0 24px;
`;

export const ProjectsHeader = styled.div`
  margin-bottom: 64px;
`;


export const SectionTitle = styled.h2`
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};
  transition: color 0.3s ease;
`;
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;

  /* This targets the 2nd, 4th, 6th... cards (the right column) */
  & > div:nth-child(even) {
    margin-top: 60px; /* Pushes the right column down */
  }

  /* Responsive: Remove the offset on mobile so they stack normally */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
    
    & > div:nth-child(even) {
      margin-top: 0;
    }
  }
`;
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  
  /* Initial state for the scroll reveal */
  opacity: 0;
  transform: translateY(30px);
  
  /* Smooth transition for both the scroll reveal and the hover effect */
  transition: 
    transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), 
    opacity 0.6s ease;

  /* Triggered when it comes into view */
  ${props => props.$isVisible && css`
    opacity: 1;
    transform: translateY(0);
  `}

  /* Hover effect: Subtle lift and scale */
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }

  /* Soften the image inside on hover */
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

// Also update ProjectMedia to handle the image overflow
export const ProjectMedia = styled.div`
  border-radius: 18px;
  padding: 18px;
  background: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  aspect-ratio: 16 / 10;
  overflow: hidden; /* Important for the image zoom effect */
  
  img {
    transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), filter 0.3s ease;
  }
`;
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
`;
export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 0; /* Prevents unwanted spacing */
  
  /* Toggle color based on the $dark prop */
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#101010')};
  
  /* Smooth color transition when toggling themes */
  transition: color 0.4s ease;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProjectMeta = styled.span`
  font-size: 13px;
  color: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)')};
`;
export const ViewAllButton = styled.button`
  padding: 14px 28px;
  border-radius: 999px;

  /* ✅ THIS is enough to center */
  margin: 80px auto 0;
  display: block;

  position: relative;
  overflow: hidden;

  border: 1px solid ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};
  background: transparent;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};

  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  transform: scale(1);
  transition:
    color 0.35s ease,
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20%;
    height: 120%;
    background: ${({ $dark }) => ($dark ? '#ffffff' : '#000000')};
    border-radius: 50% 50% 0 0;
    transform: translateY(100%);
    transition:
      transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-radius 0.45s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ $dark }) => ($dark ? '#000000' : '#ffffff')};
    transform: scaleX(1.06) scaleY(0.94);

    &::before {
      transform: translateY(0);
      border-radius: 0;
    }
  }

  &:active {
    transform: scale(0.92);
    transition-duration: 0.15s;
  }

  @media (max-width: 768px) {
    margin: 56px auto 0;
  }
`;


export const ExpertiseSection = styled.section`
  width: 100%;
  padding: 20px 0; /* Reduced padding for mobile naturally */
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`;

export const ExpertiseContainer = styled.div`
  width: 100%;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 1fr; /* Stack by default */
  gap: 40px;
  justify-content: space-around !important;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1.2fr; 
    gap: 80px;
    padding: 0 0 0 50px;
  }
`;

export const ExpertiseLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;


export const ExpertiseItem = styled.button`
  width: 100%;
  padding: 18px 20px;
  border-radius: 14px;

  background: ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)'};

  border: 1px solid ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#1a1a1a')};

  cursor: pointer;
  background-clip: padding-box;

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ $dark }) =>
      $dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'};
    border-color: #09f26a;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 14px;
  }
`;


export const ExpertiseRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ExpertiseImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 24px;
  
  /* Adds a subtle glow in dark mode */
  box-shadow: ${({ $dark }) => ($dark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.1)')};
`;
export const TechStackWrapper = styled.div`
  margin-top: 60px;
  width: 100vw;
  overflow: hidden;
  position: relative;
  
  /* Apple-style fade edges so the tags don't just "cut off" at the sides */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
`;

const scrollLoop = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); } /* Requires the list to be duplicated */
`;

export const TechStack = styled.div`
  display: flex;
  gap: 12px;
  width: max-content; /* Vital for the calculation */
  padding: 10px 0;
  
  animation: ${scrollLoop} 40s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
`;

export const TechPill = styled.span`
  padding: 10px 20px;
  border-radius: 999px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 10px;
  align-items: center;
  
  background: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)')};
  border: 1px solid ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)')};
  color: ${({ $dark }) => ($dark ? '#e0e0e0' : '#333333')};
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #09f26a;
    color: #09f26a;
    background: ${({ $dark }) => ($dark ? 'rgba(9, 242, 106, 0.1)' : 'rgba(9, 242, 106, 0.05)')};
    transform: translateY(-2px);
  }
`;

export const ExpertiseItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 12px; /* Changed from margin to avoid layout shifting */
`;

export const ExpertiseContent = styled.div`
  /* The Secret Sauce: Grid rows expansion */
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  
  /* Use transform & opacity for hardware acceleration */
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  
  transition: 
    grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;
  
  overflow: hidden;
`;

export const ExpertiseInner = styled.div`
  min-height: 0; 
  padding: 16px 20px 20px;
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-10px)')};
  transition: transform 0.4s ease;
`;

export const ExpertiseText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ $dark }) => ($dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)')};
`;
export const FinalCTASection = styled.section`
  width: 100%;
  padding: 140px 24px 120px;
  display: flex;
  justify-content: center;
`;
export const FinalCTAContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 80px 24px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  /* Responsive Gradient Background */
  background: ${({ $dark }) =>
    $dark
      ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)'
      : 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)'};

  /* Responsive Border */
  border: 1px solid ${({ $dark }) =>
    $dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Respectful Shadow for both themes */
  box-shadow: ${({ $dark }) =>
    $dark
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(156, 255, 87, 0.05)' 
      : '0 20px 40px -15px rgba(0, 0, 0, 0.1)'};

  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 60px 20px;
    border-radius: 24px;
  }
`;
const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.8;
    box-shadow: 0 0 0 0 rgba(156, 255, 87, 0.7);
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
    box-shadow: 0 0 12px 4px rgba(156, 255, 87, 0.3);
  }
  100% {
    transform: scale(0.95);
    opacity: 0.8;
    box-shadow: 0 0 0 0 rgba(156, 255, 87, 0);
  }
`;

export const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;
  border-radius: 999px;

  /* Theme-aware background - adjustments for visibility */
  background: ${({ $dark }) => ($dark ? 'rgba(34, 197, 94, 0.12)' : 'rgba(34, 197, 94, 0.08)')};
  border: 1px solid rgba(34, 197, 94, 0.3);

  font-size: 13px;
  font-weight: 500;
  /* Brand green color */
  color: ${({ $dark }) => ($dark ? '#9cff57' : '#166534')}; 

  margin-bottom: 32px;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e; /* Solid green base */
    
    /* Apply the animation */
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;
export const FinalCTATitle = styled.h2`
  /* Font Family: Syne provides that wide, artistic look from your image */
  font-family: 'Syne', sans-serif;
  
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700; /* Bumped to 700 to match the bold 'What others say' style */
  letter-spacing: -0.04em; /* Tightened slightly for display text */
  line-height: 1.1;

  /* Theme-aware color logic */
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#101010')};

  margin-bottom: 40px;
  max-width: 800px; /* Prevents lines from getting too long and hard to read */
  
  transition: color 0.4s ease;

  @media (max-width: 768px) {
    letter-spacing: -0.02em;
    margin-bottom: 32px;
  }
`;
export const FooterSection = styled.footer`
  width: 100%;
  padding: 48px 25px 20px 20px;
  display: flex;
  justify-content: center;
  /* Added top border to separate from FinalCTASection */
  border-top: 1px solid ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)')};
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Font from your UI: Inter */
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
  
  /* Dynamic text color for copyright info */
  color: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)')};

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Put icons on top for better mobile flow */
    gap: 24px;
    text-align: center;
  }
`;

export const FooterLeft = styled.span`
  white-space: nowrap;
  letter-spacing: 0.01em;
`;

export const FooterRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const FooterIcon = styled.a`
  /* Dynamic color for social icons */
  color: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)')};
  font-size: 20px; /* Slightly larger for better tap targets */
  display: flex;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* Brand Green for the hover state */
    color: #09f26aff; 
    transform: translateY(-3px);
  }
`;
export const MobileNav = styled.nav`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  /* Shared Glassmorphism */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: ${({ $dark }) => 
    $dark ? 'rgba(25, 25, 25, 0.85)' : 'rgba(255, 255, 255, 0.9)'};

  /* Dynamic Layout Logic */
  ${({ $isScrollingDown }) => $isScrollingDown ? css`
    /* STICKY BAR STATE (Scrolled Down) */
    bottom: 0;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    padding: 12px 8px env(safe-area-inset-bottom); /* Respects notch/home bar */
    border-top: 1px solid ${({ $dark }) => $dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
  ` : css`
    /* FLOATING DOCK STATE (Scrolled Up / Idle) */
    bottom: 24px;
    width: calc(100% - 32px);
    max-width: 420px;
    border-radius: 24px;
    padding: 8px;
    border: 1px solid ${({ $dark }) => $dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
    box-shadow: ${({ $dark }) => $dark ? '0 15px 35px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.08)'};
  `}

  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.button`
  flex: 1;
  border: none;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  font-size: 11px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;

  /* Active color is your brand green, inactive depends on theme */
  color: ${({ $active, $dark }) =>
    $active ? '#09f26aff' : ($dark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)')};

  cursor: pointer;
  padding: 10px 0;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    font-size: 22px;
    transition: transform 0.3s ease;
  }

  /* Active State Highlight */
  ${({ $active, $dark }) =>
    $active && css`
      background: ${$dark ? 'rgba(9, 242, 106, 0.12)' : 'rgba(9, 242, 106, 0.08)'};
      
      svg {
        transform: translateY(-2px);
      }
    `}

  &:active {
    transform: scale(0.95);
  }
`;

export const AboutHeroSection = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Theme-aware background */
  background: ${({ $dark }) => ($dark ? '#000000' : '#f9faf9')};
  
  /* Adjusted padding for mobile responsiveness */
  padding: clamp(40px, 8vw, 80px) 20px;
  
  /* Ensures padding doesn't push the width beyond 100% */
  box-sizing: border-box;
  
  /* Smooth transition for theme toggling */
  transition: background 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  position: relative;
  overflow: hidden;
`;
export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* Ensures the container stays centered */
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
  align-items: center;

  /* Theme-aware text color for any direct text children */
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#111111')};
  
  transition: color 0.5s ease;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 0 20px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
    /* On mobile, we often want the image on top, 
       ensure your JSX order is Image then Content */
  }
`;
export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; /* Ensures content is perfectly centered */
  
  /* Layering to ensure the profile image and "LetsTalk" circle 
     stay above the background grain/texture */
  z-index: 2;

  /* Optional: Adds a subtle entrance animation when the page loads */
  transition: transform 0.4s ease-out;

  @media (max-width: 900px) {
    margin-bottom: 20px; /* Adds space before the text on mobile */
  }
`;
export const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  /* Maintain the pill shape */
  border-radius: 50%; 

  /* Theme-aware border: Subtle light gray in light mode, deep gray in dark mode */
  border: 4px solid ${({ $dark }) => ($dark ? '#1a1a1a' : '#ffffff')};

  /* Theme-aware shadow: Soft shadow in light mode, glowing effect in dark mode */
  box-shadow: ${({ $dark }) => 
    $dark 
      ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(45, 191, 100, 0.1)' 
      : '0 20px 40px rgba(0, 0, 0, 0.1)'};

  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
    /* Border lights up with your brand green on hover */
    border-color: #2dbf64; 
  }

  @media (max-width: 900px) {
    width: 280px;
    height: 380px;
    border-radius: 140px; /* Adjusted to keep the curve proportional */
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const ClockContainer = styled.div`
  position: absolute;
  bottom: -40px;
  right: 20px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  /* Theme-aware background and border */
  border: 1px solid ${({ $dark }) => ($dark ? '#333' : '#ddd')};
  background: ${({ $dark }) => ($dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)')};
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @media (max-width: 900px){
  display: none;
  }
`;

export const SpinningText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${spin} 12s linear infinite;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ $dark }) => ($dark ? '#ffffff' : '#555555')};
    /* This creates the circular text effect */
    transform: rotate(calc(var(--index) * 22deg)); 
  }
`;

export const ClockHand = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom;
  border-radius: 10px;
  transform: translateX(-50%) rotate(${props => props.$degrees}deg);
  background-color: ${props => props.$color || '#2dbf64'};
  
  /* Hour Hand */
  ${props => props.$type === 'hour' && `
    width: 4px;
    height: 30px;
    z-index: 3;
  `}
  
  /* Minute Hand */
  ${props => props.$type === 'minute' && `
    width: 3px;
    height: 40px;
    z-index: 2;
  `}
  
  /* Second Hand */
  ${props => props.$type === 'second' && `
    width: 2px;
    height: 45px;
    background-color: #ff4d4d;
    z-index: 4;
  `}
`;

export const CenterDot = styled.div`
  width: 8px;
  height: 8px;
  background: #2dbf64;
  border-radius: 50%;
  z-index: 5;
`;

/* Content */
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Headline = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.1;
  
  /* Theme-aware color logic */
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#111111')};
  
  /* Smooth color transition */
  transition: color 0.5s ease;

  span {
    color: ${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};
  }

  /* Responsive font size for tablets and mobile */
  @media (max-width: 1024px) {
    font-size: 52px;
  }

  @media (max-width: 600px) {
    font-size: 38px;
    letter-spacing: -1px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  max-width: 520px;
  font-size: 18px;
  line-height: 1.6;
  
  /* Theme-aware color: 
     Light Mode: Medium gray (#555) 
     Dark Mode: Soft light gray/white (rgba for better blending) 
  */
  color: ${({ $dark }) => ($dark ? 'rgba(255, 255, 255, 0.7)' : '#555555')};
  
  transition: color 0.5s ease;

  @media (max-width: 900px) {
    font-size: 16px;
    margin: 20px auto 0; /* Centers the description on mobile */
  }
`;

export const AboutPage=styled.div`
    background: ${({ $dark }) => ($dark ? '#000000' : '#f9faf9')};
    width: 100vw;
`

export const PageWrapper = styled.section`
  min-height: 100vh;
  padding: 100px 40px;
`

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 60px;
  text-align: center;

  span {
    color: ${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};
  }
`

export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`

export const Card = styled(motion.div)`
  /* Use RGBA so the blur is actually visible */
  background: ${({ $dark }) => 
    $dark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(249, 250, 249, 0.7)'};
  
  /* Now the blur will work beautifully */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* For Safari support */
  
  border-radius: 20px;
  padding: 24px; /* Increased slightly for better breathing room */
  cursor: pointer;
  color: ${({ $dark }) => ($dark ? '#ffffff' : '#090808ff')};
  transition: color 0.3s ease;
  
  /* Theme-aware border makes it look sharper in Dark Mode */
  border: 1px solid ${({ $dark }) => 
    $dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  
  /* Smoother, deeper shadow for a premium feel */
  box-shadow: ${({ $dark }) => 
    $dark 
      ? '0 20px 40px rgba(0, 0, 0, 0.4)' 
      : '0 20px 40px rgba(0, 0, 0, 0.08)'};

  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: #2dbf64; /* Highlight with your brand green */
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
`

export const CardContent = styled.div`
  margin-top: 18px;
`

export const CertTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`

export const CertIssuer = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: #666;
`


const revealUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const JourneySection = styled.section`
  width: 100%;
  padding: 100px 20px;
  background: ${({ $dark }) => ($dark ? "#000000" : "#f9faf9")};
  display: flex;
  flex-direction: column;
  align-items: center;

  .chrono-container {
    width: 100%;
    max-width: 1100px;
  }

  /* ================= REMOVE CONTROLS (PORTFOLIO MODE) ================= */
  [data-testid="controls-wrapper"] {
    display: none;
  }

  /* ================= DATE (YEAR) ================= */
  .chrono-date {
    color: #2dbf64 !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    background: none !important;
    padding: 0 !important;
  }

  /* ================= CARD ================= */
  [data-testid="timeline-card"] {
    position: relative;
    background: ${({ $dark }) =>
      $dark ? "rgba(18,18,18,0.95)" : "#ffffff"};
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(45, 191, 100, 0.25);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    animation: ${revealUp} 0.7s cubic-bezier(0.2, 1, 0.3, 1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  /* ================= IMAGE ================= */
  [data-testid="timeline-card"] figure {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
  }

  [data-testid="timeline-card"] img {
    width: 100%;
    display: block;
    transition: transform 0.6s ease;
  }

  /* ================= IMAGE-ONLY HOVER OVERLAY ================= */
  [data-testid="timeline-card"] figure::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(45, 191, 100, 0.35),
      rgba(0, 0, 0, 0.75)
    );
    opacity: 0;
    transition: opacity 0.45s ease;
    pointer-events: none;
  }

  /* Hover effects */
  [data-testid="timeline-card"]:hover img {
    transform: scale(1.08);
  }

  [data-testid="timeline-card"]:hover figure::after {
    opacity: 1;
  }

  [data-testid="timeline-card"]:hover {
    transform: translateY(-8px);
    box-shadow:
      0 30px 60px rgba(0,0,0,0.6),
      0 0 0 1px rgba(45, 191, 100, 0.4);
  }

  /* ================= TEXT ================= */
  [data-testid="timeline-card"] h3 {
    color: #9cff57;
    font-size: 1.35rem;
    font-weight: 700;
  }

  [data-testid="timeline-card"] h4 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  [data-testid="timeline-card"] p {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* ================= TIMELINE LINE ================= */
  [data-testid="timeline-line"] {
    width: 3px;
    background: linear-gradient(
      to bottom,
      rgba(45, 191, 100, 0.15),
      rgba(45, 191, 100, 0.6),
      rgba(45, 191, 100, 0.15)
    );
    box-shadow: 0 0 18px rgba(45, 191, 100, 0.55);
  }

  /* ================= MARKER ================= */
  [data-testid="timeline-point"] {
    background: #000;
    border: 3px solid #2dbf64;
    box-shadow:
      0 0 0 4px rgba(45, 191, 100, 0.2),
      0 0 14px rgba(45, 191, 100, 0.8);
  }
`;

export const CenterPage = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: transparent;
`

export const CenterCard = styled.div`
  width: 100%;
  max-width: 420px;

  padding: 32px 28px;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;

  background: ${({ $dark }) =>
    $dark
      ? "#000"
      : "#ffffff"};

  color: ${({ $dark }) => ($dark ? "#ffffff" : "#121212")};

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 20px 50px rgba(0,0,0,0.6)"
      : "0 16px 40px rgba(0,0,0,0.12)"};

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ $dark }) =>
      $dark
        ? "0 24px 60px rgba(0,0,0,0.7)"
        : "0 20px 48px rgba(0,0,0,0.16)"};
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
    border-radius: 14px;
  }
`

export const CardImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 8px;
  border-radius: 50%;
  margin-bottom: 0px;
  padding-bottom:0px;

  @media (max-width: 480px) {
    width: 200px;
  }
`

export const CardTitle = styled.h1`
  font-size: clamp(3.4rem, 20vw, 3.5rem);
  margin: 0px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 0px;
  color: ${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};
`

export const CardText = styled.p`
  font-size: 1.23rem;
  opacity: 0.90;
  margin: 0px;
  letter-spacing: -0.5px;
  padding:0px;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 2;
  font-weight: 400;
  color:${({ $dark }) => ($dark ? '#9cff57' : '#09f26aff')};
`
