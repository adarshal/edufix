import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import GoogleFormModal from "./GoogleFormModal";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const rocketFloat = {
  animate: {
    y: [0, -18, 0, 18, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formModalOpen, setFormModalOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, #E3F2FD 0%,rgb(65, 190, 184) 100%)'
            : 'linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              variants={rocketFloat}
              animate="animate"
              style={{ marginBottom: theme.spacing(4) }}
            >
              <FaRocket
                style={{
                  fontSize: isMobile ? '4rem' : '6rem',
                  color: theme.palette.primary.main,
                  filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
                }}
              />
            </motion.div>

            {/* Edufix Career Academy with colored words */}
            <MotionTypography
              variant="h3"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={heroVariants}
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                mb: 2,
                letterSpacing: 1,
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              {/* <Box component="span" sx={{ color: theme.palette.primary.main }}>Edufix</Box> */}
              <Box component="span" sx={{ color: theme.palette.secondary.contrastText }}>Edufix</Box>
              {/* <Box component="span" sx={{ color: theme.palette.secondary.contrastText }}>Career</Box>
              <Box component="span" sx={{ color: theme.palette.secondary.contrastText }}>Academy</Box> */}
            </MotionTypography>

            <MotionTypography
              variant="h1"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={heroVariants}
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
                background: theme.palette.mode === 'light'
                  ? 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)'
                  : 'linear-gradient(45deg, #90caf9 30%, #64b5f6 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Build Your Foundation. Ace JEE.
            </MotionTypography>

            <MotionTypography
              variant="h2"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={heroVariants}
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                mb: 6,
                color: theme.palette.text.secondary,
                maxWidth: '800px',
              }}
            >
              8–10<sup>th</sup> Foundation | JEE Main & Advanced | <br />
              IGCSE & A/As Level  | IBDP  
            </MotionTypography>

            <MotionBox
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '50px',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    animation: 'glossy 3s infinite',
                    '@keyframes glossy': {
                      '0%': {
                        left: '-100%',
                      },
                      '100%': {
                        left: '200%',
                      },
                    },
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setFormModalOpen(true)}
                  sx={{
                    py: 2.5,
                    px: 5,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    borderRadius: '50px',
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: '#fff',
                    background: theme.palette.mode === 'light'
                      ? 'linear-gradient(90deg, #ff9800 0%, #ff6d00 100%)'
                      : 'linear-gradient(90deg, #ff9800 0%, #b26500 100%)',
                    boxShadow: theme.palette.mode === 'light'
                      ? '0 4px 16px 0 rgba(255,152,0,0.18), 0 1.5px 0.5px 0 #fff inset'
                      : '0 4px 16px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #222 inset',
                    transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
                    '&:hover': {
                      transform: 'scale(1.07)',
                      boxShadow: theme.palette.mode === 'light'
                        ? '0 8px 32px 0 rgba(255,152,0,0.28), 0 2px 1px 0 #fff inset'
                        : '0 8px 32px 0 rgba(255,152,0,0.18), 0 2px 1px 0 #222 inset',
                      background: theme.palette.mode === 'light'
                        ? 'linear-gradient(90deg, #ff6d00 0%, #ff9800 100%)'
                        : 'linear-gradient(90deg, #b26500 0%, #ff9800 100%)',
                    },
                  }}
                >
                  Book Your Free Demo
                </Button>
              </Box>
            </MotionBox>
          </Box>
        </Container>

        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          {[...Array(3)].map((_, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                position: 'absolute',
                width: { xs: '150px', md: '250px' },
                height: { xs: '150px', md: '250px' },
                borderRadius: '50%',
                background: theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </Box>
      </Box>

      <GoogleFormModal 
        open={formModalOpen}
        onClose={() => setFormModalOpen(false)}
      />
    </>
  );
};

export default HeroSection; 