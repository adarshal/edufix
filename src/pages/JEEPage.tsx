import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const features = [
  'Dual-Syllabus Coverage (CBSE + JEE Main & Adv)',
  'Micro-Batches for Personalized Learning',
  'Topic-wise PYQs & NTA Pattern Worksheets',
  '6 Part Tests + 4 Full JEE Mock Tests',
  'Personal Mentors, Performance Tracking, Doubt Cells',
  'Special Test Series: Mixed Topic, Speed Booster, Concept Reviver',
  'Formula Sheets, Flash Cards, and Quick Revision Capsules',
];

const highlights = [
  'Concept-First Pedagogy: Foundation → Core → Advanced',
  'Personalized Mentorship & Micro-Batch Size',
  'Daily Practice Problems (DPPs) + Smart Worksheets',
  'Strategic Testing: Part Tests, Major Tests, Full Mocks',
  'Error Analysis + Reattempt Strategy',
  'Mental Conditioning + Motivation Series',
];

const JEEPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, minHeight: '100vh', bgcolor: (theme) => theme.palette.background.default }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: (theme) => theme.palette.background.paper }}>
          <Typography variant="h3" fontWeight={700} gutterBottom color="primary.main" align="center">
            JEE Main & Advanced Coaching
          </Typography>
          <Typography variant="h5" fontWeight={500} gutterBottom align="center">
            Master the Concepts. Crack the Code. Secure Your IIT Dream.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Edufix Career Academy offers result-oriented and concept-focused coaching for JEE Main & Advanced. Our program integrates conceptual learning, strategic problem-solving, and competitive exam temperament, with extensive training in Physics, Chemistry, and Mathematics following the latest NTA and IIT-JEE patterns.
          </Typography>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 1 }} color="secondary.main">
            Why Edufix for JEE?
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
            Prepare smart, not just hard. Join Edufix and unlock your IIT potential.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default JEEPage; 