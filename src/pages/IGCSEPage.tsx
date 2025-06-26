import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle, Devices, SupportAgent, AutoGraph, Quiz, LibraryBooks, EventAvailable, Leaderboard } from '@mui/icons-material';

const features = [
  { icon: Devices, text: 'Cambridge Aligned Curriculum', color: '#1976d2', bg: 'linear-gradient(135deg, #e3f0ff 0%, #b6cfff 100%)' },
  { icon: SupportAgent, text: 'Core + Extended Subject Support', color: '#2e7d32', bg: 'linear-gradient(135deg, #e0ffe3 0%, #b2f7c1 100%)' },
  { icon: AutoGraph, text: 'Past Paper Solving & Exam Strategy Workshops', color: '#ed6c02', bg: 'linear-gradient(135deg, #fffbe3 0%, #ffe7b2 100%)' },
  { icon: Quiz, text: 'Coursework and Project Mentorship', color: '#9c27b0', bg: 'linear-gradient(135deg, #f3e3ff 0%, #e0b2ff 100%)' },
  { icon: LibraryBooks, text: 'Skill-Based Learning: Research, Speaking, Collaboration', color: '#0288d1', bg: 'linear-gradient(135deg, #e3f8ff 0%, #b2eaff 100%)' },
  { icon: EventAvailable, text: 'Detailed Student Progress Reports & Feedback Sessions', color: '#d32f2f', bg: 'linear-gradient(135deg, #ffe3e3 0%, #ffb2b2 100%)' },
];

const highlights = [
  'Dual Approach: Cambridge Standards + Concept Clarity',
  'Subject-Specific Faculty with Global Curriculum Experience',
  'Cambridge-Aligned Assessments + Progress Mapping',
  'Personalized Academic Planning',
  'Integrated Support for Projects & Speaking Exams',
  'Thought Lab for International Students',
];

const IGCSEPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, minHeight: '100vh', bgcolor: (theme) => theme.palette.background.default }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: (theme) => theme.palette.background.paper }}>
          <Typography variant="h3" fontWeight={700} gutterBottom color="primary.main" align="center">
            IGCSE Programme (Grades VIII–X)
          </Typography>
          <Typography variant="h5" fontWeight={500} gutterBottom align="center">
            Global Learning, Local Mentoring. Unlock your international academic excellence.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Edufix Career Academy offers a specialized IGCSE Programme tailored for Grades VIII to X, aligned with the Cambridge International Curriculum (CAIE). We prepare students to excel in IGCSE exams and develop global thinking, academic independence, and strong analytical skills for top universities worldwide.
          </Typography>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 1 }} color="secondary.main">
            Why Edufix for IGCSE?
          </Typography>
          <List>
            {highlights.map((item, idx) => (
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
            Experience the best of global education with Edufix IGCSE coaching.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default IGCSEPage; 