import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const features = [
  'Hybrid (Offline + Online) Classes',
  'Personalised Mentorship',
  '3 Levels of Practice: Basic, Intermediate, Advanced',
  'Chapter-wise Micro Tests & Term-wise Major Tests',
  'Worksheets, Concept Maps & Formula Charts',
  'Regular PTMs & Performance Dashboards',
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
            Start early, build strong, and unlock your potential for JEE and beyond with Edufix.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default FoundationCoursePage; 