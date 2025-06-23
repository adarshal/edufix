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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const successStories = [
  {
    name: "Aditya Gokhale",
    achievement: "JEE Advanced AIR 1284 (2025)",
    story: "I joined Edufix Career Academy for my JEE preparation. All the teachers supported and guided me at every step of my journey. My doubts were always resolved, and the concepts were explained clearly and thoroughly. I would like to thank my teachers and my parents for choosing Edufix.",
    photo: "/Aditya_Gokhale.jpeg",
    course: "JEE Main & Advanced",
    year: "2025",
  },
  {
    name: "Harshil Agarwal",
    achievement: "JEE Advanced 2224 (99.8%ile), IIT Bombay, ESADE",
    story: "Studying Mathematics and Chemistry at Edufix played a pivotal role in my JEE preparation journey. Abhishek sir's and Vikas sir's deep subject knowledge and proper guidance helped me strengthen my fundamentals and develop the problem-solving mindset needed to crack JEE. I'll always be grateful for the clarity, discipline and confidence the learning environment at Edufix instilled in me.",
    photo: "/Harshil_Agarwal.jpeg",
    course: "JEE Main & Advanced",
    year: "2022",
  },
  {
    name: "Murtuza Shaikh",
    achievement: "JEE Mains 99.1%ile, IIIT Gwalior",
    story: "I joined Edufix Career Academy for Mathematics coaching for JEE 2023. The personalized guidance by Abhishek Sir helped me focus on weak areas, build strong problem-solving skills, and improve through mock test analysis. Grateful for the support and experience at Edufix!",
    photo: "/murtuza_shaikh.jpeg",
    course: "JEE Main & Advanced",
    year: "2023",
  },
  {
    name: "Shlok Mulye",
    achievement: "IIT Kharagpur, Masters at UIUC",
    story: "I had studied with Edufix for my JEE preparation from 2018-20. I was always a little scared to give the JEE examination but this training gave me the confidence to attempt all kinds of problems in a conceptual way. They helped me navigate through various problems and strengthened my problem solving skills. Abhishek Sir approached teaching in a very calm manner and was very approachable and has played a huge role in where I am now.",
    photo: "/Shlok_Mulye.jpeg",
    course: "JEE Main & Advanced",
    year: "2020",
  },
  {
    name: "Sneharghya Ghosh",
    achievement: "IIT Bombay, IIM Lucknow",
    story: "After my JEE 2017 attempt, I decided to take a drop year, but I was filled with uncertainty and low confidence. Abhishek Sir was instrumental in motivating me to persevere and tackle even the toughest mathematics problems, encouraging me to spend hours understanding each concept instead of giving up. His guidance helped me rebuild my mathematical foundation from scratch and instilled a sense of consistency and discipline in my preparation from day one. Thanks to Abhishek Sir's support and teaching, I was able to crack JEE 2018 and secure admission to IIT Bombay with a strong score in mathematics.",
    photo: "/Sneharghya_ghosh.jpeg",
    course: "JEE Main & Advanced",
    year: "2018",
  },
  {
    name: "Kushal Trivedi",
    achievement: "IIIT Gwalior, JEE Mains 98.98%ile (99% in Maths)",
    story: "I joined Abhishek sir's classes for Maths (/Edufix) in 2022 (12th) for JEE Mains and Advanced. His guidance helped me to deepen and sharpen my understanding about Maths along with intensive practice, paper solving and doubt clearance as well. His personal attention to us added to the good experience as well.",
    photo: "/Kushal_Trivedi.jpeg",
    course: "JEE Main & Advanced",
    year: "2023",
  },
  {
    name: "Daksh",
    achievement: "IBDP Year 1, OWIS Singapore",
    story: "Edufix Career Academy has played a significant role in shaping my academic journey. The tutors were not only highly knowledgeable in their subjects but also incredibly supportive throughout the entire process. Their guidance gave me the confidence to pursue my goals and achieve targets I once thought were out of reach.",
    photo: "/Daksh.jpeg",
    course: "IBDP",
    year: "2026",
  },
  {
    name: "Sanyam Bhansali",
    achievement: "7s in IBDP, Oberoi International School OGC",
    story: "As an 11th grader going into 12th grade at Oberoi International School (OGC), pursuing the IB Diploma Programme, Edufix has played a major role in my academic success. With their expert guidance, I've consistently scored 7s in my subjects and topped my end-of-year exams. The teaching is concept-focused and incredibly effective—each topic is taught with clarity, supported by plenty of practice resources and help outside class whenever needed. My understanding has deepened, and my confidence has grown thanks to Edufix.",
    photo: "/Sanyam_Bhansali.jpeg",
    course: "IBDP",
    year: "2025",
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

  // Only one card can be flipped at a time
  const [flippedCardIndex, setFlippedCardIndex] = React.useState<number | null>(null);

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
            rowGap: { xs: 6, md: 8 }, // Increase row gap
          }}
        >
          {successStories.map((story, index) => (
            <FlippableCard
              key={story.name}
              story={story}
              theme={theme}
              flipped={flippedCardIndex === index}
              onFlip={() => setFlippedCardIndex(index)}
              onUnflip={() => setFlippedCardIndex(null)}
              index={index}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const FlippableCard: React.FC<{
  story: typeof successStories[0];
  theme: any;
  flipped: boolean;
  onFlip: () => void;
  onUnflip: () => void;
  index: number;
}> = ({ story, theme, flipped, onFlip, onUnflip }) => {
  const [expanded, setExpanded] = React.useState(false);
  const isLong = story.story.length > 150;
  const displayText = expanded ? story.story : (isLong ? story.story.slice(0, 150) + '...' : story.story);

  // Overlay for expanded testimonial
  const handleCloseOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setExpanded(false);
    }
  };

  return (
    <>
      <Box sx={{ perspective: 1200, zIndex: expanded ? 1301 : 'auto', position: expanded ? 'relative' : 'static' }}>
        <motion.div
          style={{
            position: 'relative',
            width: expanded ? 420 : 340,
            height: expanded ? 420 : 340,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s cubic-bezier(0.4,0.2,0.2,1), width 0.3s, height 0.3s',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            zIndex: expanded ? 1302 : 1,
          }}
        >
          {/* Front Side */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              zIndex: 2,
            }}
          >
            <FloatingCard index={0} theme={theme}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -5 }}>
                <motion.div whileHover={{ scale: 1.1 }}>
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
                <Box sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
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
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
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
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mt: 2, borderRadius: 99, fontWeight: 600 }}
                  onClick={flipped ? undefined : onFlip}
                  disabled={flipped}
                >
                  See what they say about Edufix
                </Button>
              </CardContent>
            </FloatingCard>
          </Box>
          {/* Back Side */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FloatingCard index={0} theme={theme}>
              <CardContent sx={{ flexGrow: 1, p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {story.name}'s Testimonial
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: 2 }}>
                  "{displayText}"
                </Typography>
                {isLong && (
                  <Button size="small" onClick={() => setExpanded(e => !e)} sx={{ mb: 1, borderRadius: 99 }}>
                    {expanded ? 'See less' : 'See more'}
                  </Button>
                )}
                <Button onClick={onUnflip} color="primary" variant="contained" sx={{ borderRadius: 99 }}>
                  Back
                </Button>
              </CardContent>
            </FloatingCard>
          </Box>
        </motion.div>
      </Box>
      {/* Overlay for expanded testimonial */}
      {expanded && (
        <Box
          onClick={handleCloseOverlay}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.45)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{ width: 700, maxWidth: '98vw', zIndex: 2001 }}
          >
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch', p: 0, minHeight: 260, maxHeight: { xs: '90vh', sm: 420 } }}>
              <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                bgcolor: 'background.paper',
                p: 3,
                minWidth: { xs: '100%', sm: 220 },
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                borderTopRightRadius: { xs: 8, sm: 0 },
                borderBottomRightRadius: { xs: 8, sm: 0 },
                borderBottomLeftRadius: { xs: 0, sm: 8 },
                borderTopLeftRadius: { xs: 8, sm: 8 },
              }}>
                <Avatar
                  src={story.photo}
                  alt={story.name}
                  sx={{ width: 80, height: 80, mb: 2, border: `3px solid ${theme.palette.primary.main}` }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>{story.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 1 }}>{story.course} | {story.year}</Typography>
              </Box>
              <CardContent sx={{
                flex: 1,
                p: { xs: 2, sm: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minWidth: 0,
                gap: { xs: 1, sm: 2 },
                overflowY: 'auto',
                maxHeight: { xs: '50vh', sm: 'none' },
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: { xs: 1, sm: 2 }, textAlign: 'left' }}>{story.name}'s Testimonial</Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.7, mb: { xs: 1, sm: 2 }, textAlign: 'left' }}>
                  "{story.story}"
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                  <Button onClick={() => setExpanded(false)} color="primary" variant="contained" sx={{ borderRadius: 99, mt: 1, minWidth: 100 }}>
                    Close
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      )}
    </>
  );
};

const FloatingCard: React.FC<{ children: React.ReactNode; index: number; theme: any }> = ({ children, index, theme }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = React.useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-1, 1], [3, -3]);
  const rotateY = useTransform(x, [-1, 1], [-3, 3]);

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
      style={{
        zIndex: 1,
        perspective: 1000,
        transformStyle: "preserve-3d",
        pointerEvents: 'none',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transition: "transform 0.1s ease-out",
          pointerEvents: 'auto',
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
            overflowX: 'hidden',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {children}
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SuccessStories; 