import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Stack,
  Grid,
} from "@mui/material";
import { FaBookOpen, FaRocket, FaTrophy, FaGraduationCap, FaGlobe, FaUniversity } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    icon: FaBookOpen,
    title: "Foundation (8–10)",
    desc: "Build strong basics for future success.",
    color: "#1976d2",
  },
  {
    icon: FaRocket,
    title: "JEE Main",
    desc: "Crack JEE Main with expert guidance.",
    color: "#2e7d32",
  },
  {
    icon: FaTrophy,
    title: "JEE Advanced",
    desc: "Excel in JEE Advanced with our proven methods.",
    color: "#ed6c02",
  },
  {
    icon: FaGraduationCap,
    title: "IGCSE",
    desc: "Comprehensive preparation for IGCSE curriculum.",
    color: "#9c27b0",
  },
  {
    icon: FaGlobe,
    title: "IBDP",
    desc: "Expert guidance for International Baccalaureate.",
    color: "#0288d1",
  },
  {
    icon: FaUniversity,
    title: "A/AS Level",
    desc: "Specialized coaching for A/AS Level examinations.",
    color: "#d32f2f",
  },
];

const GlossyButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '99px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          animation: 'glossy 2s infinite',
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
      {children}
    </Box>
  );
};

const CoursesCarousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      id="courses"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)'
          : 'linear-gradient(180deg, #121212 0%, #1e1e1e 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            color: theme.palette.text.primary,
          }}
        >
          Our Courses
        </Typography>

        <Box sx={{ position: 'relative', maxWidth: '100%', mx: 'auto' }}>
          {isMobile ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseCard course={courses[currentIndex]} />
                </motion.div>
              </AnimatePresence>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
                {courses.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: index === currentIndex ? 'primary.main' : 'action.disabled',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'primary.main',
                      },
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                      bgcolor: 'background.paper',
                      boxShadow: 4,
                    },
                  }}
                >
                  <ChevronLeft />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 2,
                    '&:hover': {
                      bgcolor: 'background.paper',
                      boxShadow: 4,
                    },
                  }}
                >
                  <ChevronRight />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

const CourseCard: React.FC<{ course: typeof courses[0] }> = ({ course }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 300 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 4 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
            background: `${course.color}15`,
            position: 'relative',
            overflow: 'hidden',
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
          <course.icon
            style={{
              fontSize: '2rem',
              color: course.color,
            }}
          />
        </Box>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: theme.palette.text.primary,
          }}
        >
          {course.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
          }}
        >
          {course.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
        {/* <GlossyButton>
          <Button
            variant="contained"
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 99,
              fontWeight: 700,
              fontSize: '1rem',
              color: '#fff',
              background: theme.palette.mode === 'light'
                ? 'linear-gradient(90deg, #ff9800 0%, #ff6d00 100%)'
                : 'linear-gradient(90deg, #ff9800 0%, #b26500 100%)',
              boxShadow: theme.palette.mode === 'light'
                ? '0 4px 16px 0 rgba(255,152,0,0.18), 0 1.5px 0.5px 0 #fff inset'
                : '0 4px 16px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #222 inset',
              letterSpacing: 0.5,
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
            Learn More
          </Button>
        </GlossyButton> */}
      </CardActions>
    </Card>
  );
};

export default CoursesCarousel; 