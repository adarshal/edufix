import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle, Devices, SupportAgent, AutoGraph, Quiz, LibraryBooks, EventAvailable, Leaderboard } from '@mui/icons-material';

const features = [
  {
    icon: Devices,
    text: 'Hybrid (Offline + Online) Classes',
    color: '#1976d2',
    bg: 'linear-gradient(135deg, #e3f0ff 0%, #b6cfff 100%)',
  },
  {
    icon: SupportAgent,
    text: 'Personalised Mentorship',
    color: '#2e7d32',
    bg: 'linear-gradient(135deg, #e0ffe3 0%, #b2f7c1 100%)',
  },
  {
    icon: AutoGraph,
    text: '3 Levels of Practice: Basic, Intermediate, Advanced',
    color: '#ed6c02',
    bg: 'linear-gradient(135deg, #fffbe3 0%, #ffe7b2 100%)',
  },
  {
    icon: Quiz,
    text: 'Chapter-wise Micro Tests & Term-wise Major Tests',
    color: '#9c27b0',
    bg: 'linear-gradient(135deg, #f3e3ff 0%, #e0b2ff 100%)',
  },
  {
    icon: LibraryBooks,
    text: 'Worksheets, Concept Maps & Formula Charts',
    color: '#0288d1',
    bg: 'linear-gradient(135deg, #e3f8ff 0%, #b2eaff 100%)',
  },
  {
    icon: EventAvailable,
    text: 'Regular PTMs & Performance Dashboards',
    color: '#d32f2f',
    bg: 'linear-gradient(135deg, #ffe3e3 0%, #ffb2b2 100%)',
  },
];

const pedagogy = [
  '3-Layered Teaching: Concept → Application → Competition',
  'Early Exposure to JEE-Level Thought Process',
  'Regular Foundation Tests with Performance Analytics',
  'Integrated Olympiad & NTSE Preparation',
  'Learning Lab: Practical + Visual Understanding',
  'Academic + Motivational Mentoring',
];

const FoundationCoursePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, minHeight: '100vh', bgcolor: (theme) => theme.palette.background.default }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: (theme) => theme.palette.background.paper }}>
          <Typography variant="h3" fontWeight={700} gutterBottom color="primary.main" align="center">
            Foundation Program (Classes VIII, IX & X)
          </Typography>
          <Typography variant="h5" fontWeight={500} gutterBottom align="center">
            Build strong concepts early. Secure your IIT dream with a solid start.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Edufix Career Academy offers a meticulously designed Foundation Program for Classes VIII, IX, and X, aimed at developing deep-rooted conceptual clarity and scientific thinking required for JEE Main & Advanced, Olympiads, NTSE, and future competitive exams. Our courses blend NCERT-based school syllabus with advanced problem-solving strategies, creating a bridge from school learning to competitive excellence.
          </Typography>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 1 }} color="secondary.main">
            Why Choose Edufix Foundation?
          </Typography>
          <List>
            {pedagogy.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }} color="secondary.main">
            Course Features
          </Typography>
          <Box component="ul" sx={{ pl: 0, listStyle: 'none', mb: 3 }}>
            {features.map((feature, idx) => (
              <Box
                key={idx}
                component="li"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2.5,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: feature.bg,
                    boxShadow: `0 4px 16px 0 ${feature.color}33`,
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'pulse 2.5s infinite',
                    '@keyframes pulse': {
                      '0%': { boxShadow: `0 0 0 0 ${feature.color}33` },
                      '70%': { boxShadow: `0 0 0 8px transparent` },
                      '100%': { boxShadow: `0 0 0 0 ${feature.color}33` },
                    },
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
                  <feature.icon style={{ fontSize: '1.7rem', color: feature.color, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }} />
                </Box>
                <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {feature.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            Start early, build strong, and unlock your potential for JEE and beyond with Edufix.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default FoundationCoursePage; 