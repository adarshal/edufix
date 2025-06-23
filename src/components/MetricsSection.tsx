import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaStar, FaBook } from 'react-icons/fa';

const metrics = [
  {
    icon: FaUsers,
    value: 70,
    label: "Active Learners",
    suffix: "+",
    color: "#1976d2",
  },
  {
    icon: FaGraduationCap,
    value: 5,
    label: "Years of Academic Excellence",
    suffix: "+",
    color: "#2e7d32",
  },
  {
    icon: FaBook,
    value: 15,
    label: "Courses",
    suffix: "+",
    color: "#9c27b0",
  },
  {
    icon: FaStar,
    value: 6,
    label: "Workshops on Study Skills",
    suffix: "+",
    color: "#ed6c02",
  },
];

const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 700,
          background: `linear-gradient(45deg, ${metrics.find(m => m.value === value)?.color} 30%, ${metrics.find(m => m.value === value)?.color}90 90%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-flex',
          alignItems: 'baseline',
        }}
      >
        {isInView ? value : 0}
        {suffix && (
          <Typography
            component="span"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              ml: 0.5,
              fontWeight: 700,
            }}
          >
            {suffix}
          </Typography>
        )}
      </Typography>
    </motion.div>
  );
};

const MetricsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 1, md: 4 },
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'
          : 'linear-gradient(135deg, #1A237E 0%, #0D47A1 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
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
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
          gap: { xs: 2, md: 4 },
          px: { xs: 1, sm: 2 }
        }}>
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  borderRadius: 4,
                  background: theme.palette.mode === 'light'
                    ? 'rgba(255,255,255,0.9)'
                    : 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    background: `${metric.color}15`,
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
                        '0%': { left: '-100%' },
                        '100%': { left: '200%' },
                      },
                    },
                  }}
                >
                  <metric.icon
                    style={{
                      fontSize: '2rem',
                      color: metric.color,
                    }}
                  />
                </Box>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  {metric.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MetricsSection; 