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
  Button,
} from "@mui/material";
import { ChevronLeft, ChevronRight, FormatQuote } from "@mui/icons-material";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Chip from '@mui/material/Chip';

const testimonials = [
  {
    name: "Aditya Gokhale",
    quote: "All the teachers supported and guided me at every step of my journey. My doubts were always resolved, and the concepts were explained clearly and thoroughly. I would like to thank my teachers and my parents for choosing Edufix.",
    score: "JEE Mains 99.84%ile, JEE Advanced AIR 1284 (2025)",
    photo: "/Aditya_Gokhale.jpeg",
    rating: 5,
  },  
  {
    name: "Daksh",
    quote: "The tutors were not only highly knowledgeable in their subjects but also incredibly supportive throughout the entire process. Their guidance gave me the confidence to pursue my goals and achieve targets I once thought were out of reach.",
    score: "IBDP Year 1, One World International School Singapore",
    photo: "/Daksh.jpeg",
    rating: 5,
  },
  {
    name: "Sanyam Bhansali",
    quote: "With their expert guidance, I've consistently scored 7s in my subjects and topped my end-of-year exams. The teaching is concept-focused and incredibly effective—each topic is taught with clarity, supported by plenty of practice resources and help outside class whenever needed.",
    score: "Consistently scored 7s in IBDP, Oberoi International School OGC",
    photo: "/Sanyam_Bhansali.jpeg",
    rating: 5,
  },
  {
    name: "Aanya Jain",
    quote: "Sir's way of teaching is very interactive and informative in a way that ensures understanding on every students end. Sir also makes sure to focus on question solving a lot while the theory is also explained well.",
    score: "CBSE XII, R.N Podar School",
    photo: "/aanya_jain.jpeg",
    rating: 5,
  },
  {
    name: "Sriyansh Saraf",
    quote: "My experience was truly enriching! Every topic was explained with great clarity, making learning both fun and engaging. I now feel much more confident in my subjects, and my marks have improved significantly. I highly recommend it to anyone looking to strengthen their academic foundation!",
    score: "Podar International School, Powai, CBSE",
    photo: "/Shriyansh_saraf.jpeg",
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
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [index]);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const isLong = (text: string) => text.length > 180;

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

        <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto', overflowX: 'hidden' }}>
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
                      wordBreak: 'break-word',
                      whiteSpace: 'pre-line',
                      transition: 'all 0.2s',
                      overflowX: 'hidden',
                      display: 'block',
                      maxWidth: '100%',
                    }}
                  >
                    {isLong(testimonials[index].quote) && !expanded
                      ? testimonials[index].quote.slice(0, 180) + '...'
                      : testimonials[index].quote}
                  </Typography>
                  {isLong(testimonials[index].quote) && (
                    <Button
                      size="small"
                      onClick={() => setExpanded((prev) => !prev)}
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        borderRadius: 99,
                        textTransform: 'none',
                        color: theme.palette.primary.main,
                        background: theme.palette.mode === 'light'
                          ? 'rgba(255, 235, 205, 0.5)'
                          : 'rgba(255, 235, 205, 0.12)',
                        '&:hover': {
                          background: theme.palette.mode === 'light'
                            ? 'rgba(255, 235, 205, 0.8)'
                            : 'rgba(255, 235, 205, 0.22)',
                        },
                      }}
                    >
                      {expanded ? 'Show less' : 'Show more'}
                    </Button>
                  )}
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
                    <Box
                      sx={{
                        display: 'inline-block',
                        fontWeight: 700,
                        letterSpacing: 1,
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '1rem',
                        background: theme.palette.mode === 'light'
                          ? 'linear-gradient(90deg, #fffbe6 0%, #ffe0b2 100%)'
                          : 'linear-gradient(90deg, #333 0%, #222 100%)',
                        color: theme.palette.mode === 'light' ? '#ff9800' : '#fff',
                        boxShadow: theme.palette.mode === 'light'
                          ? '0 2px 8px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #fff inset'
                          : '0 2px 8px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #222 inset',
                        border: theme.palette.mode === 'light' ? '1.5px solid #ff9800' : '1.5px solid #fff',
                        transition: 'box-shadow 0.2s',
                        maxWidth: '90%',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        textAlign: 'center',
                        margin: '0 auto',
                      }}
                    >
                      {testimonials[index].score}
                    </Box>
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
          pt: 7,
          pb: 2,
          px: 2,
          minHeight: 320,
          maxWidth: 380,
          width: '100%',
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
          overflowX: 'hidden',
          wordBreak: 'break-word',
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default TestimonialsCarousel; 