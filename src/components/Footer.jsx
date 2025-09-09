import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
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
            gap: { xs: 3, md: 6 }
          }}
        >
          {/* Left links column */}
          <Box>
            {['About', 'Contact', 'Careers', 'Location', 'Signavox Career Ladder'].map((label, i) => (
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
  );
};

export default Footer;
