import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const leftLinks = [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Location', href: '#' },
    { label: 'Signavox Career Ladder', href: '#' }
  ];

  const midLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Capabilities', href: '#' },
    { label: 'industries', href: '#' }
  ];

  return (
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
            gap: { xs: 3, md: 6 },
            width: '70%',
          }}
        >
          {/* Left links column */}
          <Box>
            {leftLinks.map((item, i) => (
              <Box key={item.label} sx={{ mb: i !== leftLinks.length - 1 ? 1.75 : 0 }}>
                <Typography
                  component="a"
                  href={item.href}
                  sx={{
                    display: 'inline-block',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: { xs: '1.05rem', md: '1.1rem' },
                    outline: 'none',
                    ':hover': { textDecoration: 'underline', opacity: 0.95 },
                    ':focus-visible': { textDecoration: 'underline', outline: 'none' }
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Middle links column */}
          <Box>
            {midLinks.map((item, i) => (
              <Box key={item.label} sx={{ mb: i !== midLinks.length - 1 ? 1.75 : 0 }}>
                <Typography
                  component="a"
                  href={item.href}
                  sx={{
                    display: 'inline-block',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: { xs: '1.05rem', md: '1.1rem' },
                    outline: 'none',
                    ':hover': { textDecoration: 'underline', opacity: 0.95 },
                    ':focus-visible': { textDecoration: 'underline', outline: 'none' }
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right social column */}
          <Box sx={{ mt: { xs: 2, md: 0 }, position: 'relative', zIndex: 10 }}>
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
              <Box component="a" href="#" sx={{ color: '#fff', outline: 'none', ':focus-visible': { outline: 'none' } }}>
                <InstagramIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff', outline: 'none', ':focus-visible': { outline: 'none' } }}>
                <TwitterIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff', outline: 'none', ':focus-visible': { outline: 'none' } }}>
                <FacebookIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff', outline: 'none', ':focus-visible': { outline: 'none' } }}>
                <YouTubeIcon />
              </Box>
              <Box component="a" href="#" sx={{ color: '#fff', outline: 'none', ':focus-visible': { outline: 'none' } }}>
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
  );
};

export default Footer;
