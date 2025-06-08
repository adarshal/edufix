import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 8,
        backgroundColor: theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Edufix Career Academy
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Empowering students to achieve their academic goals through personalized learning and expert guidance.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton
                color="primary"
                href="#"
                aria-label="Facebook"
                sx={{ '&:hover': { transform: 'translateY(-2px)' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="#"
                aria-label="Instagram"
                sx={{ '&:hover': { transform: 'translateY(-2px)' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="#"
                aria-label="LinkedIn"
                sx={{ '&:hover': { transform: 'translateY(-2px)' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#about" color="inherit" underline="hover">
                About
              </Link>
              <Link href="#courses" color="inherit" underline="hover">
                Courses
              </Link>
              <Link href="#testimonials" color="inherit" underline="hover">
                Testimonials
              </Link>
              <Link href="#team" color="inherit" underline="hover">
                Team
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Link href="tel:+919588261726" color="inherit" underline="hover">
                  +91 95882 61726
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Link href="mailto:abhishekdoyal2010@gmail.com" color="inherit" underline="hover">
                  abhishekdoyal2010@gmail.com
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Terms of Service
            </Link>
          </Box>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Edufix Career Academy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 