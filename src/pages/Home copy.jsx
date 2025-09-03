import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import wordmark from '../assets/c1.png';
import missionImg from '../assets/mission.webp';
import targetImg from '../assets/target.webp';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
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

const Home = () => {
  const [leftRef, isLeftVisible] = useScrollAnimation();
  const [rightRef, isRightVisible] = useScrollAnimation();

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
        <Box className="flex flex-col" sx={{ order: { xs: 1, md: 1 }, mt: { md: -6, lg: -42 } }}>
          <Box className="w-full" style={{ isolation: 'isolate' }}>
            <img
              src={wordmark}
              alt="SignaVox"
              className="w-full h-auto object-contain select-none"
              style={{
                mixBlendMode: 'lighten',
                backgroundColor: 'transparent',
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))',
                width: '125%',
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
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 700,
              letterSpacing: 0.5,
              color: '#ffffff',
            }}
          >
            “Solution that speaks success”
          </Typography>
        </Box>

        {/* Right: Paragraph + CTA (on desktop), pushed lower to sit under quote/image */}
        <Box sx={{ order: { xs: 2, md: 2 }, mt: { md: 16, lg: 32, xl: 36 } }}>
          <Typography
            component="h2"
            sx={{
              color: '#ffffff',
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: 0.2,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' },
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
              endIcon={<ArrowOutwardIcon />}
              sx={{
                color: '#ffffff',
                px: 0,
                fontWeight: 800,
                letterSpacing: 0.3,
                textTransform: 'none',
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                ':hover': { opacity: 0.9, backgroundColor: 'transparent', textDecoration: 'underline' }
              }}
            >
              More About Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
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
          ref={leftRef}
          sx={{
            transform: isLeftVisible ? 'translateX(0)' : 'translateX(-100%)',
            opacity: isLeftVisible ? 1 : 0,
            transition: 'all 1.5s ease-out',
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
          ref={rightRef}
          sx={{
            transform: isRightVisible ? 'translateX(0)' : 'translateX(100%)',
            opacity: isRightVisible ? 1 : 0,
            transition: 'all 1.5s ease-out',
          }}
        >
          <Typography
            component="p"
            sx={{
              color: '#ffffff',
              fontWeight: 400,
              lineHeight: 1.8,
              letterSpacing: 0.2,
              fontSize: { xs: '1.05rem', md: '1.2rem', lg: '1rem' }
            }}
          >
            "We are a reliable provider of advanced IT services and Specialising in Web and Mobile Applications, SAP Integration, Fintech, Health Tech, Recruitment, and cybersecurity solutions. Our goal is to assist businesses in navigating and thriving within a fast-paced technological environment. We are committed to delivering high-quality services that empower our clients to remain competitive and secure. By embracing technological innovations, we also prioritise strong human connections, providing tailored support and guidance. We build enduring partnerships that blend innovation with a personal approach, ensuring our clients achieve sustained success in a constantly evolving tech landscape."
          </Typography>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Home;


