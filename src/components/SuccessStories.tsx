import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Chip,
} from "@mui/material";
import { motion, useAnimation, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";

const successStories = [
  {
    name: "Rahul Sharma",
    achievement: "AIR 1 in JEE Advanced 2023",
    story: "Started with basic concepts and through dedicated practice and guidance from Edufix mentors, achieved the top rank in JEE Advanced. The personalized study plan and regular doubt-clearing sessions were crucial to my success.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    course: "JEE Advanced",
    year: "2023",
  },
  {
    name: "Priya Patel",
    achievement: "98% in CBSE Boards",
    story: "Joined Edufix for board exam preparation and found the structured approach extremely helpful. The teachers' dedication and comprehensive study material helped me achieve my dream score.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    course: "CBSE Boards",
    year: "2023",
  },
  {
    name: "Arjun Mehta",
    achievement: "AIR 15 in NEET",
    story: "The biology and chemistry classes at Edufix were exceptional. The teachers' expertise and the regular mock tests helped me build confidence and perform my best in the exam.",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    course: "NEET",
    year: "2023",
  },
];

const floatAnim = {
  animate: {
    y: [0, -16, 0, 16, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  stop: { y: 0, transition: { duration: 0.2 } },
};

const SuccessStories: React.FC = () => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <Box
      ref={containerRef}
      id="success-stories"
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
      {/* Animated particles background */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              borderRadius: '50%',
              background: i % 2 === 0 ? theme.palette.primary.light : theme.palette.secondary.light,
              opacity: 0.15,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ y, opacity }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              color: theme.palette.text.primary,
              textShadow: '2px 2px 4px rgba(0,0,0,0.07)',
            }}
          >
            Success Stories
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: theme.palette.text.secondary,
            }}
          >
            Real achievements from our students
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {successStories.map((story, index) => (
            <FloatingCard key={story.name} index={index} theme={theme}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -5 }}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar
                    src={story.photo}
                    alt={story.name}
                    sx={{
                      width: 64,
                      height: 64,
                      border: `3px solid ${theme.palette.primary.main}`,
                      boxShadow: 2,
                      mb: 1.5,
                      background: theme.palette.background.paper,
                    }}
                  />
                </motion.div>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Box
                      component="span"
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: 99,
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: '#fff',
                        background: theme.palette.mode === 'light'
                          ? 'linear-gradient(90deg, #ff9800 0%, #ff6d00 100%)'
                          : 'linear-gradient(90deg, #ff9800 0%, #b26500 100%)',
                        boxShadow: '0 4px 16px 0 rgba(255,152,0,0.18), 0 1.5px 0.5px 0 #fff inset',
                        letterSpacing: 0.5,
                        display: 'inline-block',
                        border: theme.palette.mode === 'light' ? 'none' : '1.5px solid #ff9800',
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      {story.course}
                    </Box>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Box
                      component="span"
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: 99,
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: theme.palette.mode === 'light' ? '#ff9800' : '#fff',
                        background: theme.palette.mode === 'light'
                          ? 'linear-gradient(90deg, #fffbe6 0%, #ffe0b2 100%)'
                          : 'linear-gradient(90deg, #333 0%, #222 100%)',
                        boxShadow: theme.palette.mode === 'light'
                          ? '0 2px 8px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #fff inset'
                          : '0 2px 8px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #222 inset',
                        letterSpacing: 0.5,
                        display: 'inline-block',
                        border: theme.palette.mode === 'light' ? '1.5px solid #ff9800' : '1.5px solid #fff',
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      {story.year}
                    </Box>
                  </motion.div>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2, textAlign: 'center' }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {story.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="success.main"
                  sx={{ mb: 1, fontWeight: 500 }}
                >
                  {story.achievement}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  "{story.story}"
                </Typography>
              </CardContent>
            </FloatingCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const FloatingCard: React.FC<{ children: React.ReactNode; index: number; theme: any }> = ({ children, index, theme }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = React.useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  React.useEffect(() => {
    if (!isHovered) {
      controls.start("animate");
      x.set(0);
      y.set(0);
    } else {
      controls.start("stop");
    }
  }, [isHovered, controls, x, y]);

  return (
    <motion.div
      variants={floatAnim}
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        zIndex: 1,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Card
          elevation={4}
          sx={{
            borderRadius: 4,
            pt: 5,
            pb: 2,
            px: 2,
            minHeight: 320,
            maxWidth: 340,
            mx: 'auto',
            background: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.98)' : 'rgba(0,0,0,0.98)',
            boxShadow: '0 8px 32px 0 rgba(60,60,130,0.10)',
            position: 'relative',
            overflow: 'visible',
            transition: 'box-shadow 0.3s, transform 0.3s',
            '&:hover': {
              boxShadow: '0 16px 48px 0 rgba(60,60,130,0.18)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 4,
              padding: '2px',
              background: 'linear-gradient(45deg, #ff9800, #ff6d00, #ff9800)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
            },
            '&:hover::before': {
              opacity: 1,
            },
          }}
        >
          {children}
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SuccessStories; 