import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
  Rating,
} from "@mui/material";
import { ChevronLeft, ChevronRight, FormatQuote } from "@mui/icons-material";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    quote: "Edufix transformed my understanding of math. The teachers are incredibly supportive and the study material is comprehensive. I couldn't have achieved my JEE Main score without their guidance.",
    score: "98% JEE Main",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "David L.",
    quote: "The personalized learning plan was a game-changer. The faculty's dedication and the structured approach helped me secure a great rank in JEE Advanced. Thank you, Edufix!",
    score: "AIR 123 JEE Advanced",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Emily R.",
    quote: "I improved my grades and gained confidence in my abilities. The small batch size ensures individual attention, and the doubt-clearing sessions are extremely helpful.",
    score: "95% Boards",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const floatAnim = {
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  stop: { y: 0, transition: { duration: 0.2 } },
};

const TestimonialsCarousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        minHeight: '100vh',
        background: theme.palette.mode === 'light'
          ? `linear-gradient(135deg, #F8FAFF 0%, #E3F0FF 100%)`
          : `linear-gradient(135deg, #1A237E 0%, #0D133D 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Minimalistic bubbles background */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: { xs: 60, md: 100 },
              height: { xs: 60, md: 100 },
              borderRadius: '50%',
              opacity: 0.12,
              background: i % 2 === 0 ? theme.palette.primary.light : theme.palette.secondary.light,
              top: `${20 + i * 10}%`,
              left: `${10 + i * 13}%`,
              filter: 'blur(2px)',
            }}
          />
        ))}
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            color: theme.palette.text.primary,
            textShadow: '2px 2px 4px rgba(0,0,0,0.07)',
          }}
        >
          Testimonials
        </Typography>

        <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: { xs: -20, md: -40 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: theme.palette.background.paper,
              boxShadow: 2,
              '&:hover': {
                bgcolor: theme.palette.background.paper,
                boxShadow: 4,
              },
              zIndex: 2,
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -20, md: -40 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: theme.palette.background.paper,
              boxShadow: 2,
              '&:hover': {
                bgcolor: theme.palette.background.paper,
                boxShadow: 4,
              },
              zIndex: 2,
            }}
          >
            <ChevronRight />
          </IconButton>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <FloatingCard theme={theme}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -5 }}>
                  <Avatar
                    src={testimonials[index].photo}
                    alt={testimonials[index].name}
                    sx={{
                      width: 64,
                      height: 64,
                      border: `3px solid ${theme.palette.primary.main}`,
                      boxShadow: 2,
                      mb: 1.5,
                      background: theme.palette.background.paper,
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <FormatQuote
                    sx={{
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      opacity: 0.15,
                      mb: 1,
                    }}
                  />
                  <Rating
                    value={testimonials[index].rating}
                    readOnly
                    sx={{ mb: 1 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontStyle: 'italic',
                      mb: 2,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    "{testimonials[index].quote}"
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 0.5,
                    }}
                  >
                    {testimonials[index].name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.mode === 'light' ? theme.palette.secondary.dark : theme.palette.secondary.light,
                        fontWeight: 700,
                        letterSpacing: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        bgcolor: theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
                        boxShadow: 1,
                        fontSize: '0.95rem',
                      }}
                    >
                      {testimonials[index].score}
                    </Typography>
                  </Box>
                </Box>
              </FloatingCard>
            </motion.div>
          </AnimatePresence>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              gap: 1,
            }}
          >
            {testimonials.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: i === index ? 'primary.main' : 'action.disabled',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const FloatingCard: React.FC<{ children: React.ReactNode; theme: any }> = ({ children, theme }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = React.useState(false);
  React.useEffect(() => {
    if (!isHovered) controls.start("animate");
    else controls.start("stop");
  }, [isHovered, controls]);
  return (
    <motion.div
      variants={floatAnim}
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: 1, display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          borderRadius: 4,
          pt: 5,
          pb: 2,
          px: 2,
          minHeight: 320,
          maxWidth: 380,
          mx: 'auto',
          background: theme.palette.mode === 'light'
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(20,30,60,0.98)',
          boxShadow: '0 8px 32px 0 rgba(60,60,130,0.10)',
          position: 'relative',
          overflow: 'visible',
          transition: 'box-shadow 0.3s, transform 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '&:hover': {
            boxShadow: '0 16px 48px 0 rgba(60,60,130,0.18)',
            transform: 'translateY(-8px) scale(1.03)',
          },
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default TestimonialsCarousel; 