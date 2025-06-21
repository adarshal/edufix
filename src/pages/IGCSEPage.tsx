import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const features = [
  'Cambridge Aligned Curriculum',
  'Core + Extended Subject Support',
  'Past Paper Solving & Exam Strategy Workshops',
  'Coursework and Project Mentorship',
  'Skill-Based Learning: Research, Speaking, Collaboration',
  'Detailed Student Progress Reports & Feedback Sessions',
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
            Experience the best of global education with Edufix IGCSE coaching.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default IGCSEPage; 