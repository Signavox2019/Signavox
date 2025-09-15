import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import wordmark from '../assets/company name.png';
import missionImg from '../assets/mission.webp';
import targetImg from '../assets/target.webp';
import whatWeDoImg from '../assets/what we do.webp';
import signArrow from '../assets/signArrow.webp';
import aiImg from '../assets/AI.webp';
import cyberImg from '../assets/cybersecurity.png';
import genaiImg from '../assets/Gen AI.png';
import digitalImg from '../assets/digital.png';
import fintechImg from '../assets/fintech.png';
import erpImg from '../assets/ERP.png';
import quantumImg from '../assets/quantum.png';
import iconImg from '../assets/education.png';
import systemSolutionsImg from '../assets/system-solutions.webp';
import businessImg from '../assets/business.webp';
import aiNuclearImg from '../assets/ai-nuclear-energy.webp';
import arIllustrationImg from '../assets/ar-illustration.webp';
import businessHolographyImg from '../assets/business-holography.jpeg';

const useScrollAnimation = (threshold = 0.15, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollProgress, setScrollProgress] = useState(0);
  const domRef = React.useRef();
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const element = domRef.current;
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + currentScrollY;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const progress = Math.max(0, Math.min(1, 
          (currentScrollY + windowHeight - elementTop) / (windowHeight + elementHeight)
        ));
        setScrollProgress(progress);
        
        // Determine scroll direction
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
        lastScrollY.current = currentScrollY;
      }
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset animation when element goes out of view
            setIsVisible(false);
          }
        });
      }, 
      { 
        threshold,
        rootMargin
      }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin]);

  return [domRef, isVisible, scrollDirection, scrollProgress];
};

const services = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    img: aiImg,
    color: '#7F5CFF',
    text: 'The shift from experimentation to enterprise-scale AI adoption.Role of AI & ML in predictive analytics, automation, and customer personalization.'
  },
  {
    title: 'Cross-Industry – Cybersecurity in Cloud Migration',
    img: cyberImg,
    color: '#00D0FF',
    text: 'Securing the Cloud: Cyber Risk Mitigation for Fintech, Healthcare, and Education.Cloud adoption risks, zero-trust security, data sovereignty.Promote secure cloud consulting and managed services.'
  },
  {
    title: 'Cross-Industry – Generative AI in Business Operations',
    img: genaiImg,
    color: '#19E3A6',
    text: 'Generative AI as a Business Partner: Opportunities Across Industries.AI in content creation, customer engagement, and workflow automation.Present expertise in deploying ethical and scalable GenAI solutions.'
  },
  {
    title: 'Digital Transformation Trends',
    img: digitalImg,
    color: '#FF7AD1',
    text: 'Digital Transformation 2025: Roadmap for Enterprises. Cloud adoption, automation, AI-driven workflows, and enterprise modernization. We are positioned as a partner for organizations moving to digital-first models.'
  },
  {
    title: 'Education – AI-Powered Learning',
    img: iconImg,
    color: '#F56565',
    text: 'Smart Classrooms: AI and Adaptive Learning in Modern Education.Personalized learning, chatbots for tutoring, and AR/VR in education.Highlight development of adaptive e-learning platforms.'
  },
  {
    title: 'Fintech & Digital Financial Innovation',
    img: fintechImg,
    color: '#F7C948',
    text: 'Rise of UPI, mobile wallets, cross-border payments, and real-time settlements.Use of AI/ML in fraud detection, credit risk analysis, customer personalization, and robo-advisory.Help banks, NBFCs, and fintech startups modernize their core systems with cloud-native financial platforms.'
  },
  {
    title: 'ERP and SAP',
    img: erpImg,
    color: '#B084FF',
    text: 'Evolution of ERP platforms into cloud-native, intelligent business systems.From traditional ERP to SAP S/4HANA and cloud-first architectures.High migration costs, talent gaps, and balancing customization with standardization.'
  },
  {
    title: 'Quantum Computing Readiness',
    img: quantumImg,
    color: '#68D391',
    text: 'Quantum Computing: Preparing Enterprises for the Next Leap.Business cases for quantum, potential disruptions, and current readiness. We are positioned as a forward-looking advisor.'
  },
  
];

// Add this at the top of the file, after the imports
const GlobalStyles = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return null;
};

// Row component for per-item scroll-triggered animations
const AnimatedInsightRow = ({ item, index }) => {
  const [rowRef, isRowVisible, scrollDirection, scrollProgress] = useScrollAnimation(0.1, '0px 0px -80px 0px');

  // Calculate dynamic transforms based on scroll direction and progress
  const getTextTransform = () => {
    if (!isRowVisible) {
      return scrollDirection === 'down' 
        ? 'translateX(-80px) translateY(20px) scale(0.95)' 
        : 'translateX(80px) translateY(-20px) scale(0.95)';
    }
    const progressOffset = scrollProgress * 20;
    return `translateX(${scrollDirection === 'down' ? progressOffset : -progressOffset}px) translateY(${scrollDirection === 'down' ? -progressOffset : progressOffset}px) scale(${1 + scrollProgress * 0.05})`;
  };

  const getImageTransform = () => {
    if (!isRowVisible) {
      return scrollDirection === 'down' 
        ? 'translateX(80px) scale(0.95) rotate(2deg)' 
        : 'translateX(-80px) scale(0.95) rotate(-2deg)';
    }
    const progressOffset = scrollProgress * 15;
    return `translateX(${scrollDirection === 'down' ? -progressOffset : progressOffset}px) scale(${1 + scrollProgress * 0.03}) rotate(${scrollDirection === 'down' ? -progressOffset * 0.1 : progressOffset * 0.1}deg)`;
  };

  return (
    <Box
      ref={rowRef}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: { xs: '1.5rem', md: '2rem', lg: '3rem' },
        alignItems: 'center',
        mb: index !== 2 ? 4 : 0
      }}
    >
      {/* Text from left */}
      <Box
        sx={{
          order: { xs: 2, md: 1 },
          transform: getTextTransform(),
          opacity: isRowVisible ? 1 : 0,
          transition: `all ${800 + index * 150}ms cubic-bezier(0.16, 1, 0.3, 1)`,
          willChange: 'transform, opacity'
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: '#ffffff',
            fontWeight: 900,
            letterSpacing: 0.4,
            fontSize: { xs: '1.35rem', md: '1.6rem' },
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            transform: isRowVisible ? 'translateY(0)' : 'translateY(10px)',
            opacity: isRowVisible ? 1 : 0,
            transition: `all ${900 + index * 150}ms cubic-bezier(0.16, 1, 0.3, 1) 100ms`
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #7F5CFF 0%, #00D0FF 100%)',
              boxShadow: '0 10px 28px rgba(127,92,255,0.55)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              transform: isRowVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-5deg)',
              transition: `all ${1000 + index * 150}ms cubic-bezier(0.34, 1.56, 0.64, 1) 150ms`
            }}
          >
            {item.k}
          </Box>
          {item.title}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'rgba(255,255,255,0.92)',
            mt: 1.25,
            lineHeight: 1.85,
            letterSpacing: 0.2,
            fontSize: { xs: '1.02rem', md: '1.1rem' },
            transform: isRowVisible ? 'translateY(0)' : 'translateY(15px)',
            opacity: isRowVisible ? 1 : 0,
            transition: `all ${1000 + index * 150}ms cubic-bezier(0.16, 1, 0.3, 1) 200ms`
          }}
        >
          {item.body}
        </Typography>
      </Box>

      {/* Image from right */}
      <Box
        sx={{
          order: { xs: 1, md: 2 },
          transform: getImageTransform(),
          opacity: isRowVisible ? 1 : 0,
          transition: `all ${850 + index * 150}ms cubic-bezier(0.16, 1, 0.3, 1) 50ms`,
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: isRowVisible 
            ? `0 ${25 + scrollProgress * 10}px ${60 + scrollProgress * 20}px rgba(0,0,0,${0.6 + scrollProgress * 0.2})` 
            : '0 10px 30px rgba(0,0,0,0.3)',
          willChange: 'transform, opacity, box-shadow'
        }}
      >
        <Box
          component="img"
          src={item.img}
          alt={`insight-${item.k}`}
          sx={{ 
            width: '100%', 
            height: { xs: 220, md: 280 }, 
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isRowVisible ? 'scale(1)' : 'scale(1.05)'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: isRowVisible 
              ? 'radial-gradient(600px 220px at 70% 20%, rgba(127,92,255,0.18) 0%, rgba(127,92,255,0) 60%)'
              : 'radial-gradient(600px 220px at 70% 20%, rgba(127,92,255,0.05) 0%, rgba(127,92,255,0) 60%)',
            pointerEvents: 'none',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </Box>
    </Box>
  );
};

// Single point with its own scroll-triggered left entry
const AnimatedPoint = ({ item, index }) => {
  const [ref, visible, scrollDirection, scrollProgress] = useScrollAnimation(0.1, '0px 0px -60px 0px');
  
  const getTransform = () => {
    if (!visible) {
      return scrollDirection === 'down' 
        ? 'translateX(-70px) translateY(15px) scale(0.95)' 
        : 'translateX(70px) translateY(-15px) scale(0.95)';
    }
    const progressOffset = scrollProgress * 15;
    return `translateX(${scrollDirection === 'down' ? progressOffset : -progressOffset}px) translateY(${scrollDirection === 'down' ? -progressOffset : progressOffset}px) scale(${1 + scrollProgress * 0.03})`;
  };

  return (
    <Box ref={ref} sx={{ mb: index !== 2 ? 4 : 0 }}>
      <Typography
        component="h3"
        sx={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize: { xs: '1.25rem', md: '1.4rem' },
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          transform: getTransform(),
          opacity: visible ? 1 : 0,
          transition: `all ${700 + index * 120}ms cubic-bezier(0.16, 1, 0.3, 1)`,
          willChange: 'transform, opacity'
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #7F5CFF 0%, #00D0FF 100%)',
            boxShadow: visible 
              ? '0 12px 32px rgba(127,92,255,0.6)' 
              : '0 6px 20px rgba(127,92,255,0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-8deg)',
            transition: `all ${800 + index * 120}ms cubic-bezier(0.34, 1.56, 0.64, 1) 100ms`,
            willChange: 'transform, box-shadow'
          }}
        >
          {item.k}
        </Box>
        {item.title}
      </Typography>
      <Typography
        component="p"
        sx={{
          color: 'rgba(255,255,255,0.9)',
          mt: 1.25,
          lineHeight: 1.8,
          letterSpacing: 0.2,
          fontSize: { xs: '1rem', md: '1.1rem' },
          transform: visible ? 'translateX(0) translateY(0)' : 'translateX(-50px) translateY(10px)',
          opacity: visible ? 1 : 0,
          transition: `all ${750 + index * 120}ms cubic-bezier(0.16, 1, 0.3, 1) 150ms`,
          willChange: 'transform, opacity'
        }}
      >
        {item.body}
      </Typography>
      {index !== 2 && (
        <Box 
          sx={{ 
            my: 3, 
            height: 2, 
            background: visible 
              ? 'linear-gradient(90deg, rgba(127,92,255,0.8), rgba(127,92,255,0.2), rgba(127,92,255,0.0))'
              : 'linear-gradient(90deg, rgba(127,92,255,0.3), rgba(127,92,255,0.0))',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: `all ${600 + index * 120}ms cubic-bezier(0.16, 1, 0.3, 1) 200ms`
          }} 
        />
      )}
    </Box>
  );
};

// Single image with its own scroll-triggered right entry
const AnimatedImage = ({ src, alt, height, delay = 0 }) => {
  const [ref, visible, scrollDirection, scrollProgress] = useScrollAnimation(0.1, '0px 0px -60px 0px');
  
  const getTransform = () => {
    if (!visible) {
      return scrollDirection === 'down' 
        ? 'translateX(70px) scale(0.95) rotate(3deg)' 
        : 'translateX(-70px) scale(0.95) rotate(-3deg)';
    }
    const progressOffset = scrollProgress * 20;
    return `translateX(${scrollDirection === 'down' ? -progressOffset : progressOffset}px) scale(${1 + scrollProgress * 0.05}) rotate(${scrollDirection === 'down' ? -progressOffset * 0.1 : progressOffset * 0.1}deg)`;
  };

  return (
    <Box
      ref={ref}
      sx={{
        borderRadius: '14px',
        overflow: 'hidden',
        transform: getTransform(),
        opacity: visible ? 1 : 0,
        transition: `all ${800 + delay}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        boxShadow: visible 
          ? `0 ${20 + scrollProgress * 10}px ${50 + scrollProgress * 15}px rgba(0,0,0,${0.6 + scrollProgress * 0.2})` 
          : '0 8px 25px rgba(0,0,0,0.3)',
        willChange: 'transform, opacity, box-shadow'
      }}
    >
      <Box 
        component="img" 
        src={src} 
        alt={alt} 
        sx={{ 
          width: '100%', 
          height: height, 
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: visible ? 'scale(1)' : 'scale(1.08)'
        }} 
      />
    </Box>
  );
};

const Home = () => {
  const [missionRef, isMissionVisible, missionScrollDirection, missionScrollProgress] = useScrollAnimation(0.1, '0px 0px -100px 0px');
  const [whatWeDoRef, isWhatWeDoVisible, whatWeDoScrollDirection, whatWeDoScrollProgress] = useScrollAnimation(0.1, '0px 0px -100px 0px');
  const [solutionsRef, isSolutionsVisible, solutionsScrollDirection, solutionsScrollProgress] = useScrollAnimation(0.1, '0px 0px -100px 0px');
  const [businessRef, isBusinessVisible, businessScrollDirection, businessScrollProgress] = useScrollAnimation(0.1, '0px 0px -100px 0px');
  const [insightsRef, isInsightsVisible, insightsScrollDirection, insightsScrollProgress] = useScrollAnimation(0.1, '0px 0px -100px 0px');

  return (
    <>
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        className="items-center"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: '2.5rem', md: '2.5rem' },
          alignItems: 'center'
        }}
      >
        {/* Visual wordmark on the left for desktop */}
        <Box className="flex flex-col" sx={{ order: { xs: 1, md: 1 }, mt: { md: -26, lg: -38 } }}>
                  <Box
          style={{ isolation: 'isolate' }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
            <Box
              component="img"
              src={wordmark}
              alt="SignaVox"
              className="select-none"
              style={{
                mixBlendMode: 'lighten',
                backgroundColor: 'transparent',
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                objectFit: 'contain'
              }}
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: { xs: 620, sm: 780, md: 1000, lg: 1500 },
                animation: 'heroSlideIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
                willChange: 'transform, opacity',
                '@keyframes heroSlideIn': {
                  '0%': { opacity: 0, transform: 'translateX(-60px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' }
                },
                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none'
                }
              }}
              draggable={false}
            />
          </Box>

          {/* Tagline/quotation under the image */}
          <Typography
            component="p"
            className="mt-6"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.6rem', md: '1.8rem', lg: '2rem' },
              fontWeight: 300,
              letterSpacing: 0.5,
              color: '#ffffff',
              textAlign: 'center',
              animation: 'quoteSlideIn 900ms cubic-bezier(0.22, 1, 0.36, 1) 120ms both',
              willChange: 'transform, opacity',
              '@keyframes quoteSlideIn': {
                '0%': { opacity: 0, transform: 'translateX(-40px)' },
                '100%': { opacity: 1, transform: 'translateX(0)' }
              },
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none'
              }
            }}
          >
            "Solution that speaks success"
          </Typography>
        </Box>

        {/* Right: Paragraph + CTA (on desktop), pushed lower to sit under quote/image */}
        <Box sx={{ order: { xs: 2, md: 2 }, mt: { md: 12, lg: 24, xl: 30 } }}>
          <Typography
            component="h2"
            sx={{
              color: '#ffffff',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: 0.2,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.4rem' },
              maxWidth: { md: '48ch', lg: '54ch' }
            }}
          >
            “Our extensive IT services and cutting-edge cybersecurity solutions empower your organisation to
            thrive in a constantly changing technological environment, helping you sustain a competitive
            advantage.”
          </Typography>

          <Box className="mt-8">
            <Button
              size="large"
              variant="text"
              endIcon={<Box component="img" src={signArrow} alt="arrow" sx={{ width: { xs: 18, md: 20 }, height: 'auto' }} />}
              sx={{
                color: '#ffffff',
                px: 0,
                fontWeight: 800,
                letterSpacing: 0.3,
                textTransform: 'none',
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                mt: 1,
                ':hover': { opacity: 0.9, backgroundColor: 'transparent', textDecoration: 'underline' }
              }}
            >
              More About Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>

    {/* Digital Economy Snapshot - ZigZag Cards */}
    

    {/* Our Mission Section */}
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 10
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: '#ffffff',
            fontWeight: 800,
            letterSpacing: 0.5,
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '5rem' },
            display: 'flex',
            alignItems: 'center',
            '& > span:first-of-type': {
              marginRight: '1rem'
            }
          }}
        >
          <span>Our</span>
          <span style={{ 
            color: '#7F5CFF', 
            display: 'inline-block',
            transform: 'rotate(90deg)',
            transformOrigin: 'center',
            margin: '0 -2px'
          }}>M</span>ission
          <Box 
            component="img" 
            src={targetImg} 
            alt="target icon"
            sx={{ 
              width: { xs: '50px', md: '60px' },
              height: 'auto',
              ml: 2,
              mt: 1,
              position: 'relative',
              top: '10px'
            }}
          />
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: '3rem', lg: '4rem' },
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Box
          ref={missionRef}
          sx={{
            transform: isMissionVisible 
              ? `translateX(${missionScrollDirection === 'down' ? missionScrollProgress * 10 : -missionScrollProgress * 10}px) translateY(${missionScrollDirection === 'down' ? -missionScrollProgress * 5 : missionScrollProgress * 5}px) scale(${1 + missionScrollProgress * 0.02})` 
              : `translateX(${missionScrollDirection === 'down' ? -80 : 80}px) translateY(${missionScrollDirection === 'down' ? 30 : -30}px) scale(0.95)`,
            opacity: isMissionVisible ? 1 : 0,
            transition: isMissionVisible ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            willChange: 'transform, opacity'
          }}
          className="rounded-2xl overflow-hidden shadow-xl shadow-purple-900/30 ring-1 ring-white/10"
        >
          <img
            src={missionImg}
            alt="Our Mission"
            className="w-full h-auto object-cover"
            style={{ minHeight: '300px' }}
          />
        </Box>

        <Box
          sx={{
            transform: isMissionVisible 
              ? `translateX(${missionScrollDirection === 'down' ? -missionScrollProgress * 15 : missionScrollProgress * 15}px) translateY(${missionScrollDirection === 'down' ? missionScrollProgress * 8 : -missionScrollProgress * 8}px)` 
              : `translateX(${missionScrollDirection === 'down' ? 80 : -80}px) translateY(${missionScrollDirection === 'down' ? 30 : -30}px)`,
            opacity: isMissionVisible ? 1 : 0,
            transition: isMissionVisible ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' : 'none',
            willChange: 'transform, opacity'
          }}
        >
          <Typography
            component="p"
            sx={{
              color: '#ffffff',
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: 0.2,
              fontSize: { xs: '1.05rem', md: '1.2rem', lg: '1.10rem' }
            }}
          >
            "We are a reliable provider of advanced IT services and Specialising in Web and Mobile Applications, SAP Integration, Fintech, Health Tech, Recruitment, and cybersecurity solutions. Our goal is to assist businesses in navigating and thriving within a fast-paced technological environment. We are committed to delivering high-quality services that empower our clients to remain competitive and secure. By embracing technological innovations, we also prioritise strong human connections, providing tailored support and guidance. We build enduring partnerships that blend innovation with a personal approach, ensuring our clients achieve sustained success in a constantly evolving tech landscape."
          </Typography>
        </Box>
      </Box>
    </Container>
    {/* What We Do Section */}
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: '2.5rem', lg: '3.5rem' },
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Box
          ref={whatWeDoRef}
          sx={{
            transform: isWhatWeDoVisible ? 'translateX(0) translateY(0) scale(1)' : 'translateX(-80px) translateY(30px) scale(0.95)',
            opacity: isWhatWeDoVisible ? 1 : 0,
            transition: isWhatWeDoVisible ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            willChange: 'transform, opacity'
          }}
          className="rounded-2xl overflow-hidden shadow-xl shadow-purple-900/30 ring-1 ring-white/10"
        >
          <img
            src={whatWeDoImg}
            alt="What We Do"
            className="w-full h-full object-cover"
            style={{ minHeight: '420px' }}
          />
        </Box>

        <Box
          sx={{
            transform: isWhatWeDoVisible ? 'translateX(0) translateY(0)' : 'translateX(80px) translateY(30px)',
            opacity: isWhatWeDoVisible ? 1 : 0,
            transition: isWhatWeDoVisible ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' : 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            height: '100%',
            minHeight: { xs: '420px', md: '460px' },
            willChange: 'transform, opacity'
          }}
        >
          <Typography
            component="h2"
            className="mb-6"
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: 0.5,
              fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
              lineHeight: 1.1,
              mb: { xs: 2.5, md: 3.5 }
            }}
          >
            What We Do
            <Box component="span" sx={{ color: '#7F5CFF' }}>..?</Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              color: '#ffffff',
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: 0.2,
              fontSize: { xs: '1.05rem', md: '1.2rem', lg: '1.15rem' },
              mb: 3
            }}
          >
            "At Signavox, we are dedicated to driving innovation and delivering cutting-edge software solutions that transform industries and enhance user experiences. As a forward thinking software company, we pride ourselves on our commitment to excellence, creativity, and customer satisfaction"
          </Typography>

          <Typography
            component="p"
            sx={{
              color: '#ffffff',
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: 0.2,
              fontSize: { xs: '1.05rem', md: '1.2rem', lg: '1.15rem' },
              mt: 1
            }}
          >
            "The company aims to deliver high-quality software products and services that meet the evolving needs of various industries"
          </Typography>
          <Box sx={{ flex: 1 }} />
        </Box>
      </Box>
    </Container>

    {/* Services Cards Section */}
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography component="h2" sx={{ color: '#ffffff', fontWeight: 800, letterSpacing: 0.5, fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' } }}>
          Explore Our Focus Areas
        </Typography>
        <Typography component="p" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1, fontSize: { xs: '1rem', md: '1.05rem' } }}>
          Hover on each card to learn more
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
          gap: { xs: '1.25rem', md: '1.75rem', lg: '2rem' }
        }}
      >
        {services.map((svc, idx) => {
          const [cardRef, isCardVisible, cardScrollDirection, cardScrollProgress] = useScrollAnimation(0.1, '0px 0px -50px 0px');
          
          const getCardTransform = () => {
            if (!isCardVisible) {
              return `translateY(${cardScrollDirection === 'down' ? 50 : -50}px) scale(0.95)`;
            }
            const progressOffset = cardScrollProgress * 20;
            return `translateY(${cardScrollDirection === 'down' ? -progressOffset : progressOffset}px) scale(${1 + cardScrollProgress * 0.02})`;
          };

          return (
            <Box
              key={idx}
              ref={cardRef}
              className="group rounded-2xl overflow-hidden relative"
              sx={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 100%)',
                boxShadow: isCardVisible 
                  ? `0 ${8 + cardScrollProgress * 5}px ${30 + cardScrollProgress * 10}px rgba(0,0,0,${0.35 + cardScrollProgress * 0.15})` 
                  : '0 8px 30px rgba(0,0,0,0.35)',
                border: 'none',
                backdropFilter: 'blur(6px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                transform: getCardTransform(),
                willChange: 'transform, box-shadow',
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundClip: 'padding-box',
                opacity: isCardVisible ? 1 : 0,
                ':hover': {
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                  '& .service-image': {
                    transform: 'scale(1.08)',
                    filter: 'brightness(0.4) saturate(1.2)'
                  },
                  '& .service-overlay': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  },
                  '& .service-content': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
            {/* Image area */}
            <Box sx={{ position: 'relative', height: { xs: 360, md: 430 }, overflow: 'hidden' }}>
              <Box
                component="img"
                className="service-image"
                src={svc.img}
                alt={svc.title}
                sx={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: 'scale(1.05)',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform, filter'
                }}
              />
              
              {/* Heading slides down from top on hover */}
              <Box
                className="service-overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  p: 2.5,
                  zIndex: 2,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.0) 100%)',
                  transform: 'translateY(-100%)',
                  opacity: 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform, opacity'
                }}
              >
                <Typography sx={{ 
                  color: '#fff', 
                  fontWeight: 800, 
                  fontSize: { xs: '1.15rem', md: '1.25rem' }, 
                  lineHeight: 1.2,
                  textAlign: 'center',
                  transform: 'translateY(10px)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}>
                  {svc.title}
                </Typography>
              </Box>

              {/* Content slides up from bottom on hover */}
              <Box
                className="service-content"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  zIndex: 2,
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.0) 100%)',
                  transform: 'translateY(100%)',
                  opacity: 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                  willChange: 'transform, opacity'
                }}
              >
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.95)', 
                  fontSize: { xs: '0.95rem', md: '1rem' }, 
                  lineHeight: 1.6,
                  textAlign: 'center',
                  transform: 'translateY(15px)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}>
                  {svc.text}
                </Typography>
              </Box>
            </Box>

            {/* Decorative gradient ring on hover */}
            <Box
              sx={{
                position: 'absolute', inset: 0,
                borderRadius: 'inherit',
                pointerEvents: 'none',
                boxShadow: `inset 0 0 0 0px ${svc.color}00`,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'box-shadow, transform',
                '.group:hover &': { 
                  boxShadow: `inset 0 0 0 3px ${svc.color}cc, 0 0 20px ${svc.color}40`,
                  transform: 'none'
                }
              }}
            />
          </Box>
          );
        })}
      </Box>
    </Container>

    {/* 360° Value Section - marquee showcase (moved below cards) */}
    <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 10, md: 14 } }}>
      {/* Headline + subcopy */}
      <Box
        sx={{
          textAlign: 'center',
          px: { xs: 2, md: 4 },
          mb: { xs: 4, md: 6 }
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: 0.5,
            lineHeight: 1,
            fontSize: { xs: '3.2rem', sm: '4rem', md: '6.5rem' }
          }}
        >
          360° value
        </Typography>
        <Typography
          component="p"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            mt: { xs: 1, md: 2 },
            fontSize: { xs: '1.05rem', md: '1.35rem' }
          }}
        >
          Every day, we embrace change and create value for all our stakeholders around the world.
        </Typography>
        <Button
          size="large"
          variant="text"
          sx={{
            color: '#ffffff',
            mt: { xs: 2.5, md: 3 },
            textTransform: 'none',
            fontWeight: 800,
            fontSize: { xs: '1.1rem', md: '1.4rem' },
            px: 0,
            ':hover': { opacity: 0.9, backgroundColor: 'transparent', textDecoration: 'underline' }
          }}
          endIcon={<Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 25, height: 25, borderRadius: '1px', background: '#7F5CFF' }}><ChevronRightRounded sx={{ fontSize: 30, color: '#fff' }} /></Box>}
        >
          See the Report
        </Button>
      </Box>

      {/* Marquee container */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 0,
          boxShadow: 'none',
          background: 'transparent',
          backdropFilter: 'none'
        }}
      >
        {/* Gradient watermark arrow overlay like screenshot */}
        <Box
          sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
            background: 'radial-gradient(800px 400px at 85% 60%, rgba(127,92,255,0.12) 0%, rgba(127,92,255,0.04) 40%, rgba(127,92,255,0) 70%)'
          }}
        />
        {/* Scrolling track */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            gap: { xs: '1rem', md: '1.5rem' },
            p: 0,
            animation: 'marqueeScroll 35s linear infinite',
            '@keyframes marqueeScroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            },
            // Duplicate content for seamless loop
            width: '200%',
            willChange: 'transform'
          }}
        >
          {[missionImg, whatWeDoImg, aiImg, digitalImg].concat([missionImg, whatWeDoImg, aiImg, digitalImg]).map((imgSrc, i) => (
            <Box 
              key={i} 
              sx={{ 
                flex: '0 0 auto', 
                width: { xs: '75%', sm: '55%', md: '35%' },
                transition: 'none'
              }}
            >
              <Box
                component="img"
                src={imgSrc}
                alt={`showcase-${i}`}
                sx={{
                  width: '100%', 
                  height: { xs: 220, md: 320 }, 
                  objectFit: 'cover',
                  borderRadius: 0,
                  boxShadow: 'none',
                  transition: 'none'
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>

    {/* Tailored Development & Automation Solutions (animated split section) */}
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        ref={solutionsRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: '2rem', lg: '3rem' },
          alignItems: 'center',
        }}
      >
        {/* Animated Illustration - enters from right, settles on left */}
        <Box
          sx={{
            order: { xs: 2, lg: 1 },
            transform: isSolutionsVisible ? 'translate(0, 0) scale(1) rotate(0deg)' : 'translate(200px, -150px) scale(0.9) rotate(-5deg)',
            opacity: isSolutionsVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: isSolutionsVisible ? 'drop-shadow(0 30px 80px rgba(0,0,0,0.6))' : 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
            willChange: 'transform, opacity, filter'
          }}
          className="rounded-2xl overflow-hidden"
        >
          <Box
            component="img"
            src={systemSolutionsImg}
            alt="Tailored Solutions"
            sx={{
              width: { xs: '100%', sm: 340, md: 380, lg: 450 },
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Box>

        {/* Animated Content - enters from left, settles on right */}
        <Box
          sx={{
            order: { xs: 1, lg: 2 },
            transform: isSolutionsVisible ? 'translate(0, 0) rotate(0deg)' : 'translate(-200px, 150px) rotate(5deg)',
            opacity: isSolutionsVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            willChange: 'transform, opacity'
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: '#ffffff',
              fontWeight: 900,
              letterSpacing: 0.5,
              lineHeight: 1.05,
              fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3.2rem', lg: '3.6rem' },
              mb: { xs: 1.5, md: 2 },
            }}
          >
            “Tailored Development & Automation Solutions.”
          </Typography>
          <Typography
            component="p"
            sx={{
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 400,
              letterSpacing: 0.2,
              lineHeight: 1.8,
              fontSize: { xs: '1.02rem', md: '1.15rem' },
              maxWidth: { lg: '54ch' }
            }}
          >
            Stay ahead with our customized development and automation services. We create bespoke
            software, automate workflows, and integrate advanced technologies to boost efficiency,
            reduce costs, and drive growth. Transform your operations with our expert, personalized
            approach.
          </Typography>

          {/* <Box sx={{ mt: { xs: 3, md: 4 } }}>
            <Button
              size="large"
              variant="text"
              sx={{
                color: '#ffffff',
                textTransform: 'none',
                fontWeight: 800,
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                px: 0,
                ':hover': { opacity: 0.9, backgroundColor: 'transparent', textDecoration: 'underline' }
              }}
            >
              Learn more
              <Box component="span" sx={{ display: 'inline-block', ml: 1.25, width: 18, height: 18, borderRadius: '4px', background: '#7F5CFF' }} />
            </Button>
          </Box> */}
        </Box>
      </Box>
    </Container>

    {/* Business Proficiency Section (mirrored, creative animation) */}
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        ref={businessRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: '2rem', lg: '3rem' },
          alignItems: 'center',
        }}
      >
        {/* Content on the left */}
        <Box
          sx={{
            order: { xs: 2, lg: 1 },
            transform: isBusinessVisible ? 'translate(0, 0) rotate(0deg) scale(1)' : 'translate(200px, 150px) rotate(3deg) scale(0.95)',
            opacity: isBusinessVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform, opacity'
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: 0.5,
              lineHeight: 1.1,
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '3.3rem', lg: '2.2rem' },
              mb: { xs: 1.5, md: 2 }
            }}
          >
            Enhance Your Business Through Our Advanced Technological Proficiency.
          </Typography>
          {/* <Typography
            component="p"
            sx={{
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 400,
              letterSpacing: 0.2,
              lineHeight: 1.8,
              fontSize: { xs: '1.02rem', md: '1.15rem' },
              maxWidth: { lg: '56ch' }
            }}
          >
            We deliver scalable, secure and modern solutions that accelerate growth and
            unlock new opportunities. From mobile to cloud, analytics to automation —
            we partner with you to build future-ready capabilities.
          </Typography> */}
        </Box>

        {/* Illustration on the right */}
        <Box
          sx={{
            order: { xs: 1, lg: 2 },
            transform: isBusinessVisible ? 'translate(0, 0) scale(1) rotate(0deg)' : 'translate(-200px, -150px) scale(0.9) rotate(-5deg)',
            opacity: isBusinessVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            filter: isBusinessVisible ? 'drop-shadow(0 30px 80px rgba(0,0,0,0.6))' : 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
            willChange: 'transform, opacity, filter'
          }}
          className="rounded-2xl overflow-hidden"
        >
          <Box
            component="img"
            src={businessImg}
            alt="Business Solutions"
            sx={{
              width: { xs: '100%', sm: 340, md: 400, lg: 500 },
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Box>
      </Box>
    </Container>
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        ref={insightsRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' },
          gap: { xs: '2.25rem', lg: '3rem' },
          alignItems: 'start'
        }}
      >
        {/* Left: Numbered copy list with staggered reveal (no outer card) */}
        <Box sx={{ p: 0 }}>
          {[
            { k: 1, title: 'Enhanced Digital Transformation:', body: 'Utilise our established methodologies to expedite your digital projects, minimising time-to-market and securing a competitive advantage.' },
            { k: 2, title: 'Improved Operational Efficiency:', body: 'Enhance your workflows with customised digital solutions that streamline operations and lead to substantial cost reductions' },
            { k: 3, title: 'Data-Driven Decision Making:', body: 'Leverage the potential of data to facilitate informed decision-making. Through the analysis of real-time information, organisations can enhance their strategies, increase operational efficiency, and foster growth.' }
          ].map((item, i) => (
            <AnimatedPoint key={item.k} item={item} index={i} />
          ))}
        </Box>

        {/* Right: Image mosaic with slide-in from right */}
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              inset: -20,
              pointerEvents: 'none',
              background: 'radial-gradient(500px 280px at 80% 30%, rgba(127,92,255,0.18) 0%, rgba(127,92,255,0) 60%)',
              filter: 'blur(10px)'
            }}
          />
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2.5 }}>
            <AnimatedImage src={arIllustrationImg} alt="AR Illustration" height={{ xs: 220, md: 300 }} />
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
              <AnimatedImage src={aiNuclearImg} alt="AI Nuclear" height={{ xs: 180, md: 220 }} delay={60} />
              <AnimatedImage src={businessHolographyImg} alt="Business Holography" height={{ xs: 180, md: 220 }} delay={90} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
    <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
      {/* <Box sx={{ textAlign: 'left', mb: { xs: 4, md: 6 } }}>
        <Typography component="h2" sx={{ color: '#ffffff', fontWeight: 900, letterSpacing: 0.5, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
          Digital Economy Growth
        </Typography>
      </Box> */}
      {[
        [
          { title: 'Digital Economy Growth', text: "India's digital economy is expected to grow fourfold, This expansion will increase its share of GDP from 8% to 20% by 2030" },
          { title: 'Internet Users', text: 'The number of internet users in India is projected to exceed 900 million by 2030, driven by increased digital connectivity and government initiatives' },
          { title: 'Sustainability Investments', text: 'Sustainability initiatives are projected to catalyse $150-250 billion of additional technology and operations spending by 2030' }
        ],
        [
          { title: 'Technology Sector Revenue', text: "The Indian technology industry's revenue, including hardware, is estimated to reach $254+ billion by FY2024, with exports poised to touch the $200 billion mark" },
          { title: 'Global Capability Centres', text: 'The number of GCCs in India is expected to exceed 2,500 by 2030, employing over 4.5 million people' },
          { title: 'Economic Position', text: "India is forecasted to become the world's 3rd-largest economy by 2030, surpassing Japan and Germany" }
        ]
      ].map((row, rIdx) => (
        <Box key={rIdx} sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: { xs: 3, md: 4.5 },
          rowGap: { xs: 4, md: 6 },
          mb: { xs: 4, md: 6 },
          mt: rIdx === 1 ? { xs: 4, md: 8 } : 0,
          alignItems: 'stretch'
        }}>
          {row.map((card, cIdx) => {
            const [ref, visible] = useScrollAnimation();
            const isZig = (rIdx % 2 === 0 && cIdx === 1) || (rIdx % 2 === 1 && cIdx !== 1);
            return (
              <Box
                key={cIdx}
                ref={ref}
                sx={{
                  position: 'relative',
                  top: { md: isZig ? (rIdx % 2 === 0 ? 32 : -32) : 0 },
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '22px',
                  padding: { xs: 3, md: 3.25 },
                  boxShadow: '0 14px 38px rgba(0,0,0,0.5)',
                  transform: visible ? 'translateY(0) scale(1)' : `translateY(${rIdx === 0 ? '-40px' : '40px'}) scale(0.95)`,
                  opacity: visible ? 1 : 0,
                  transition: `all ${600 + cIdx * 100}ms cubic-bezier(0.16, 1, 0.3, 1)`,
                  backdropFilter: 'blur(4px)',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(127,92,255,0.35) 0%, rgba(127,92,255,0.0) 70%)',
                    filter: 'blur(0.5px)'
                  },
                  ':hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 30px 70px rgba(0,0,0,0.7)',
                    '&:before': {
                      background: 'radial-gradient(circle, rgba(127,92,255,0.55) 0%, rgba(127,92,255,0.0) 75%)'
                    }
                  },
                  willChange: 'transform, box-shadow'
                }}
              >
                <Typography component="h3" sx={{ color: '#ffffff', fontWeight: 900, letterSpacing: 0.2, fontSize: { xs: '1.3rem', md: '1.4rem' }, mb: 1.25 }}>
                  {card.title}
                </Typography>
                <Typography component="p" sx={{ color: 'rgba(255,255,255,0.92)', fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.75 }}>
                  {card.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      ))}
    </Container>
    </>
  );
};

export default Home;


