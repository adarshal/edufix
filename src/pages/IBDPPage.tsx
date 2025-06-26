import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle, Devices, SupportAgent, AutoGraph, Quiz, LibraryBooks, EventAvailable, Leaderboard } from '@mui/icons-material';

const features = [
  { icon: Devices, text: 'IB-Syllabus Aligned Lessons (SL + HL)', color: '#1976d2', bg: 'linear-gradient(135deg, #e3f0ff 0%, #b6cfff 100%)' },
  { icon: SupportAgent, text: 'IA, EE, TOK Full Guidance', color: '#2e7d32', bg: 'linear-gradient(135deg, #e0ffe3 0%, #b2f7c1 100%)' },
  { icon: AutoGraph, text: 'Weekly Revision Sheets + Past Papers', color: '#ed6c02', bg: 'linear-gradient(135deg, #fffbe3 0%, #ffe7b2 100%)' },
  { icon: Quiz, text: 'Examiner-Style Evaluation & Feedback', color: '#9c27b0', bg: 'linear-gradient(135deg, #f3e3ff 0%, #e0b2ff 100%)' },
  { icon: LibraryBooks, text: 'Flexible Timings (Offline & Online Support)', color: '#0288d1', bg: 'linear-gradient(135deg, #e3f8ff 0%, #b2eaff 100%)' },
  { icon: EventAvailable, text: 'College Prep + Academic Portfolio Support', color: '#d32f2f', bg: 'linear-gradient(135deg, #ffe3e3 0%, #ffb2b2 100%)' },
];

const highlights = [
  'Subject-Wise Experts with IB Examiner Experience',
  'Personalized IA & EE Mentorship',
  'Core Skills Development: TOK, EE, CAS',
  'Past Paper Practice with Real-Time Evaluation',
  'Small Batches & Individual Doubt Sessions',
  'Academic Planning + Mental Wellness Support',
];

const IBDPPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, minHeight: '100vh', bgcolor: (theme) => theme.palette.background.default }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: (theme) => theme.palette.background.paper }}>
          <Typography variant="h3" fontWeight={700} gutterBottom color="primary.main" align="center">
            IBDP Coaching (Grades XI & XII)
          </Typography>
          <Typography variant="h5" fontWeight={500} gutterBottom align="center">
            Think Deep. Learn Global. Succeed Anywhere.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Edufix Career Academy offers specialized academic mentoring for the International Baccalaureate Diploma Programme (IBDP), empowering students to thrive in one of the world's most rigorous and respected educational frameworks. We support students in mastering SL & HL subject requirements, managing core components (TOK, EE, CAS), and preparing for internal assessments and final exams.
          </Typography>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 1 }} color="secondary.main">
            Why Edufix for IBDP?
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
            Achieve your IB goals with Edufix's expert guidance and holistic support.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default IBDPPage; 