import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const features = [
  'IB-Syllabus Aligned Lessons (SL + HL)',
  'IA, EE, TOK Full Guidance',
  'Weekly Revision Sheets + Past Papers',
  'Examiner-Style Evaluation & Feedback',
  'Flexible Timings (Offline & Online Support)',
  'College Prep + Academic Portfolio Support',
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
          <List>
            {features.map((item, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
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