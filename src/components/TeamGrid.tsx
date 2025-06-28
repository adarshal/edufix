import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const teamMembers = [
  {
    name: "Abhishek Doyal (Founder)",
    role: "Mathematics",
    experience: "Exp:12 years",
    qualification: "IIT Bombay",
    photo: "/abhishek_doyal_teacher.jpg",
  },
  {
    name: "Abhimanyu Pundeer (Co-founder)",
    role: "Physics",
    experience: "Exp:8 years",
    qualification: "IIT Bombay.",
    photo: "/Abhimanyu_Pundeer_teacher.jpg",
  },
  {
    name: "Vikas Doyal",
    role: "Chemistry",
    experience: "Exp:10 years",
    qualification: "IIT Bombay.",
    photo: "/vikas_dyal_teacher.jpg",
  },
  {
    name: "Varsha Suthar",
    role: "Biology",
    experience: "Exp:2 years",
    qualification: "MSc, JNVU.",
    photo: "/Varsha_suthar_teacher.jpg",
  },
  {
    name: "Ramesh Kumar",
    role: "Mathematics",
    experience: "Exp:2 years",
    qualification: "B.Tech IIT Guwahati, M.Tech IIT Bombay.",
    photo: "/Ramesh_kumar_teacher.jpg",
  },
  {
    name: "Himanshu Mishra",
    role: "Chemistry",
    experience: "Exp:7 years",
    qualification: "NIT Nagpur.",
    photo: "/himanshu_teacher.jpg",
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

const TeamGrid: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="team"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'light'
          ? `linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)`
          : `linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)`,
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
            mb: 2,
            textAlign: 'center',
            color: theme.palette.text.primary,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Our Expert Team
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }}
        >
          Meet the brilliant minds behind Edufix
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {teamMembers.map((member, index) => (
            <FloatingCard key={member.name} index={index} theme={theme}>
              <Box sx={{
                 display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -5
                 
                 }}>
                <Avatar
                  src={member.photo}
                  alt={member.name}
                  sx={{
                    width: 64,
                    height: 64,
                    border: `3px solid ${theme.palette.primary.main}`,
                    boxShadow: 2,
                    mb: 1.5,
                    background: theme.palette.background.paper,
                  }}
                />
                <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
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
                      boxShadow: theme.palette.mode === 'light'
                        ? '0 4px 16px 0 rgba(255,152,0,0.18), 0 1.5px 0.5px 0 #fff inset'
                        : '0 4px 16px 0 rgba(255,152,0,0.10), 0 1.5px 0.5px 0 #222 inset',
                      letterSpacing: 0.5,
                      display: 'inline-block',
                      border: theme.palette.mode === 'light' ? 'none' : '1.5px solid #ff9800',
                      transition: 'box-shadow 0.2s',
                    }}
                  >
                    {member.role}
                  </Box>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2, textAlign: 'center' }}>
                <Typography variant="h6" component="h3" 
                sx={{ fontWeight: 600, mb: 0.5, 
                  color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light
                 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.secondary} sx={{ mb: 2, display: 'block', whiteSpace: 'pre-line' }}>
                  {member.experience}
                  {"\n"}
                  {member.qualification}
                </Typography>
                {/* <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    justifyContent: 'center',
                  }}
                >
                  <IconButton
                    size="small"
                    color="primary"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="info"
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="success"
                    href={`mailto:${member.email}`}
                  >
                    <EmailIcon />
                  </IconButton>
                </Box> */}
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
      style={{ zIndex: 1, flex: '1 1 280px', maxWidth: 320, minWidth: 260, display: 'flex' }}
    >
      <Card
        elevation={4}
        sx={{
          borderRadius: 4,
          pt: 5,
          pb: 2,
          px: 2,
          minHeight: 280,
          width: '100%',
          background: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.98)' : 'rgba(0,0,0,0.98)',
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
      </Card>
    </motion.div>
  );
};

export default TeamGrid; 