import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return [domRef, isVisible];
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
  const [rowRef, isRowVisible] = useScrollAnimation();

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
          transform: isRowVisible ? 'translateX(0)' : 'translateX(-60px)',
          opacity: isRowVisible ? 1 : 0,
          transition: `all ${650 + index * 120}ms cubic-bezier(0.22, 1, 0.36, 1)`
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
            gap: 1.25
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
              fontWeight: 900
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
            fontSize: { xs: '1.02rem', md: '1.1rem' }
          }}
        >
          {item.body}
        </Typography>
      </Box>

      {/* Image from right */}
      <Box
        sx={{
          order: { xs: 1, md: 2 },
          transform: isRowVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.98)',
          opacity: isRowVisible ? 1 : 0,
          transition: `all ${720 + index * 140}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 18px 46px rgba(0,0,0,0.5)'
        }}
      >
        <Box
          component="img"
          src={item.img}
          alt={`insight-${item.k}`}
          sx={{ width: '100%', height: { xs: 220, md: 280 }, objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(600px 220px at 70% 20%, rgba(127,92,255,0.18) 0%, rgba(127,92,255,0) 60%)',
            pointerEvents: 'none'
          }}
        />
      </Box>
    </Box>
  );
};

// Single point with its own scroll-triggered left entry
const AnimatedPoint = ({ item, index }) => {
  const [ref, visible] = useScrollAnimation();
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
          transform: visible ? 'translateX(0)' : 'translateX(-56px)',
          opacity: visible ? 1 : 0,
          transition: `all ${600 + index * 140}ms cubic-bezier(0.22, 1, 0.36, 1)`
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #7F5CFF 0%, #00D0FF 100%)',
            boxShadow: '0 8px 24px rgba(127,92,255,0.45)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900
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
          transform: visible ? 'translateX(0)' : 'translateX(-36px)',
          opacity: visible ? 1 : 0,
          transition: `all ${660 + index * 160}ms cubic-bezier(0.22, 1, 0.36, 1)`
        }}
      >
        {item.body}
      </Typography>
      {index !== 2 && (
        <Box sx={{ my: 3, height: 2, background: 'linear-gradient(90deg, rgba(127,92,255,0.5), rgba(127,92,255,0.0))' }} />
      )}
    </Box>
  );
};

// Single image with its own scroll-triggered right entry
const AnimatedImage = ({ src, alt, height, delay = 0 }) => {
  const [ref, visible] = useScrollAnimation();
  return (
    <Box
      ref={ref}
      sx={{
        borderRadius: '14px',
        overflow: 'hidden',
        transform: visible ? 'translateX(0) scale(1)' : 'translateX(56px) scale(0.98)',
        opacity: visible ? 1 : 0,
        transition: `all ${740 + delay}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
        boxShadow: '0 14px 36px rgba(0,0,0,0.5)'
      }}
    >
      <Box component="img" src={src} alt={alt} sx={{ width: '100%', height: height, objectFit: 'cover' }} />
    </Box>
  );
};

const Home = () => {
  const [missionRef, isMissionVisible] = useScrollAnimation();
  const [whatWeDoRef, isWhatWeDoVisible] = useScrollAnimation();
  const [solutionsRef, isSolutionsVisible] = useScrollAnimation();
  const [businessRef, isBusinessVisible] = useScrollAnimation();
  const [insightsRef, isInsightsVisible] = useScrollAnimation();

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
        <Box className="flex flex-col" sx={{ order: { xs: 1, md: 1 }, mt: { md: -22, lg: -36 } }}>
                  <Box
          style={{ isolation: 'isolate' }}
          sx={{
            animation: 'slideInFromLeft 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@keyframes slideInFromLeft': {
              '0%': {
                opacity: 0,
                transform: 'translateX(-150px) scale(0.8)'
              },
              '30%': {
                opacity: 0.4,
                transform: 'translateX(-80px) scale(0.9)'
              },
              '60%': {
                opacity: 0.8,
                transform: 'translateX(5px) scale(1.02)'
              },
              '80%': {
                opacity: 0.95,
                transform: 'translateX(-2px) scale(0.99)'
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(0) scale(1)'
              }
            }
          }}
        >
            <img
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
                width: { xs: '700px', sm: '900px', md: '1100px', lg: '1800px' },
                height: { xs: '500px', sm: '650px', md: '800px', lg: '1000px' },
                maxWidth: 'none'
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
              animation: 'slideInFromLeft 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
              '@keyframes slideInFromLeft': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(-120px) scale(0.9)'
                },
                '40%': {
                  opacity: 0.5,
                  transform: 'translateX(-60px) scale(0.95)'
                },
                '70%': {
                  opacity: 0.9,
                  transform: 'translateX(3px) scale(1.01)'
                },
                '85%': {
                  opacity: 0.98,
                  transform: 'translateX(-1px) scale(0.995)'
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateX(0) scale(1)'
                }
              }
            }}
          >
            "Solution that speaks success"
          </Typography>
        </Box>

        {/* Right: Paragraph + CTA (on desktop), pushed lower to sit under quote/image */}
        <Box sx={{ order: { xs: 2, md: 2 }, mt: { md: 16, lg: 32, xl: 36 } }}>
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
            transform: isMissionVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isMissionVisible ? 1 : 0,
            transition: isMissionVisible ? 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
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
            transform: isMissionVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isMissionVisible ? 1 : 0,
            transition: isMissionVisible ? 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
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
            transform: isWhatWeDoVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isWhatWeDoVisible ? 1 : 0,
            transition: isWhatWeDoVisible ? 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
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
            transform: isWhatWeDoVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isWhatWeDoVisible ? 1 : 0,
            transition: isWhatWeDoVisible ? 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            height: '100%',
            minHeight: { xs: '420px', md: '460px' }
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
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: { xs: '1.25rem', md: '1.75rem', lg: '2rem' }
        }}
      >
        {services.map((svc, idx) => (
          <Box
            key={idx}
            className="group rounded-2xl overflow-hidden relative"
            sx={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 100%)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
              border: 'none',
              backdropFilter: 'blur(6px)',
              transition: 'transform 400ms ease, box-shadow 400ms ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-6px) scale(1.01)',
                boxShadow: '0 18px 44px rgba(0,0,0,0.45)'
              }
            }}
          >
            {/* Image area */}
            <Box sx={{ position: 'relative', height: { xs: 360, md: 430 }, overflow: 'hidden' }}>
              <Box
                component="img"
                src={svc.img}
                alt={svc.title}
                sx={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: 'scale(1.03)',
                  transition: 'opacity 350ms ease, transform 450ms ease',
                  '.group:hover &': { opacity: 0.3, transform: 'scale(1.06)' }
                }}
              />
              
              {/* Heading slides down from top on hover */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  p: 2.5,
                  zIndex: 2,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.0) 100%)',
                  transform: 'translateY(-100%)',
                  transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  '.group:hover &': { transform: 'translateY(0)' }
                }}
              >
                <Typography sx={{ 
                  color: '#fff', 
                  fontWeight: 800, 
                  fontSize: { xs: '1.15rem', md: '1.25rem' }, 
                  lineHeight: 1.2,
                  textAlign: 'center'
                }}>
                  {svc.title}
                </Typography>
              </Box>

              {/* Content slides up from bottom on hover */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  zIndex: 2,
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.0) 100%)',
                  transform: 'translateY(100%)',
                  transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  '.group:hover &': { transform: 'translateY(0)' }
                }}
              >
                <Typography sx={{ 
                  color: 'rgba(255,255,255,0.95)', 
                  fontSize: { xs: '0.95rem', md: '1rem' }, 
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}>
                  {svc.text}
                </Typography>
              </Box>
            </Box>

            {/* Decorative gradient ring on hover */}
            <Box
              sx={{
                position: 'absolute', inset: -2,
                borderRadius: '1.25rem',
                pointerEvents: 'none',
                boxShadow: `inset 0 0 0 0px ${svc.color}00`,
                transition: 'box-shadow 400ms ease',
                '.group:hover &': { boxShadow: `inset 0 0 0 2px ${svc.color}aa` }
              }}
            />
          </Box>
        ))}
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
        >
          See the Report
          <Box component="span" sx={{ display: 'inline-block', ml: 1.25, width: 20, height: 20, borderRadius: '4px', background: '#7F5CFF' }} />
        </Button>
      </Box>

      {/* Marquee container */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: { xs: '12px', md: '18px' },
          boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 100%)',
          backdropFilter: 'blur(6px)'
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
            gap: { xs: 2, md: 3 },
            p: { xs: 1.5, md: 2 },
            animation: 'marqueeScroll 26s linear infinite',
            '@keyframes marqueeScroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            },
            // Duplicate content for seamless loop
            width: '200%'
          }}
        >
          {[missionImg, whatWeDoImg, aiImg, digitalImg].concat([missionImg, whatWeDoImg, aiImg, digitalImg]).map((imgSrc, i) => (
            <Box key={i} sx={{ flex: '0 0 auto', width: { xs: '75%', sm: '55%', md: '35%' } }}>
              <Box
                component="img"
                src={imgSrc}
                alt={`showcase-${i}`}
                sx={{
                  width: '100%', height: { xs: 220, md: 320 }, objectFit: 'cover',
                  borderRadius: { xs: '10px', md: '14px' },
                  boxShadow: '0 8px 28px rgba(0,0,0,0.35)'
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
            transform: isSolutionsVisible ? 'translate(0, 0) scale(1) rotate(0deg)' : 'translate(180px, -120px) scale(0.96) rotate(-3deg)',
            opacity: isSolutionsVisible ? 1 : 0,
            transition: 'all 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
            filter: isSolutionsVisible ? 'drop-shadow(0 24px 60px rgba(0,0,0,0.45))' : 'none'
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
            transform: isSolutionsVisible ? 'translate(0, 0) rotate(0deg)' : 'translate(-180px, 120px) rotate(3deg)',
            opacity: isSolutionsVisible ? 1 : 0,
            transition: 'all 580ms cubic-bezier(0.2, 0.8, 0.2, 1) 60ms'
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
            transform: isBusinessVisible ? 'translate(0, 0) rotate(0deg) scale(1)' : 'translate(180px, 120px) rotate(2deg) scale(0.98)',
            opacity: isBusinessVisible ? 1 : 0,
            transition: 'all 560ms cubic-bezier(0.22, 1, 0.36, 1)'
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
            transform: isBusinessVisible ? 'translate(0, 0) scale(1) rotate(0deg)' : 'translate(-200px, -120px) scale(0.96) rotate(-4deg)',
            opacity: isBusinessVisible ? 1 : 0,
            transition: 'all 600ms cubic-bezier(0.2, 0.8, 0.2, 1) 60ms',
            filter: isBusinessVisible ? 'drop-shadow(0 24px 60px rgba(0,0,0,0.45))' : 'none'
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
          { title: 'Digital Economy Growth:', text: "India's digital economy is expected to grow fourfold, This expansion will increase its share of GDP from 8% to 20% by 2030" },
          { title: 'Internet Users:', text: 'The number of internet users in India is projected to exceed 900 million by 2030, driven by increased digital connectivity and government initiatives' },
          { title: 'Sustainability Investments:', text: 'Sustainability initiatives are projected to catalyse $150-250 billion of additional technology and operations spending by 2030' }
        ],
        [
          { title: 'Technology Sector Revenue:', text: "The Indian technology industry's revenue, including hardware, is estimated to reach $254+ billion by FY2024, with exports poised to touch the $200 billion mark" },
          { title: 'Global Capability Centres:', text: 'The number of GCCs in India is expected to exceed 2,500 by 2030, employing over 4.5 million people' },
          { title: 'Economic Position:', text: "India is forecasted to become the world's 3rd-largest economy by 2030, surpassing Japan and Germany" }
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
                  transform: visible ? 'translateY(0)' : `translateY(${rIdx === 0 ? '-24px' : '24px'})`,
                  opacity: visible ? 1 : 0,
                  transition: `all ${520 + cIdx * 120}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                  backdropFilter: 'blur(4px)',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: -60,
                    right: -60,
                    width: 160,
                    height: 160,
                    background: 'radial-gradient(circle, rgba(127,92,255,0.25) 0%, rgba(127,92,255,0.0) 60%)'
                  },
                  ':hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 24px 54px rgba(0,0,0,0.6)'
                  }
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
    {/* Footer-like section (as per screenshot) */}
    <Box
      sx={{
        mt: { xs: 6, md: 10 },
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 10 }
      }}
   >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 3, md: 6 }
          }}
        >
          {/* Left links column */}
          <Box>
            {['About', 'Contact', 'Careers', 'Location', 'SCL'].map((label, i) => (
              <Typography
                key={label}
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: { xs: '1.05rem', md: '1.1rem' },
                  mb: i !== 4 ? 1.75 : 0,
                  ':hover': { textDecoration: 'underline', opacity: 0.9 }
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>

          {/* Middle links column */}
          <Box>
            {['Privacy Policy', 'Terms of Use', 'Cookies', 'Capabilities', 'industries'].map((label, i) => (
              <Typography
                key={label}
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: { xs: '1.05rem', md: '1.1rem' },
                  mb: i !== 4 ? 1.75 : 0,
                  ':hover': { textDecoration: 'underline', opacity: 0.9 }
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>

          {/* Right social column */}
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            <Typography
              component="p"
              sx={{
                color: '#ffffff',
                fontWeight: 800,
                letterSpacing: 0.3,
                fontSize: { xs: '1.2rem', md: '1.3rem' },
                mb: 1.5
              }}
            >
              Follow us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box component="a" href="#" sx={{ color: '#fff' }}>
                <InstagramIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff' }}>
                <TwitterIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff' }}>
                <FacebookIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff' }}>
                <YouTubeIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff' }}>
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: { xs: 6, md: 8 },
            color: '#ffffff'
          }}
        >
          <Typography component="p" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
            © 2025 Signavox. All rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default Home;


