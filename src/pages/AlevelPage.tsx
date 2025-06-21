import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const features = [
  'CAIE-Aligned Notes + Worksheets',
  'Weekly Tests & Full-Length Mock Papers',
  'Paper Marking as per Cambridge Rubrics',
  'One-on-One IA/Essay/Project Support',
  'Flexible Offline + Online Learning Options',
  'Real-Time Teacher Feedback and Personal Doubt Clearance',
];

const highlights = [
  'CAIE-Aligned Teaching with Examiner Mindset',
  'Experienced Faculty with Cambridge & Global Curriculum Background',
  'Topic-Wise Past Paper Drills + Paper Solving Strategy',
  'Advanced Numerical & Writing Skill Building',
  'Personalized Study Plans + Performance Tracking',
  'Global Prep Support: SAT, UCAS, and College Ready Add-ons',
];

const AlevelPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, minHeight: '100vh', bgcolor: (theme) => theme.palette.background.default }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, bgcolor: (theme) => theme.palette.background.paper }}>
          <Typography variant="h3" fontWeight={700} gutterBottom color="primary.main" align="center">
            Cambridge A Level / AS Level Coaching (Grades XI & XII)
          </Typography>
          <Typography variant="h5" fontWeight={500} gutterBottom align="center">
            Ace A Levels. Excel Globally. Prepare for the World's Best Universities.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Edufix Career Academy offers premium coaching for Cambridge A Level & AS Level students, aligning with the Cambridge International (CAIE) curriculum. Our specialized programs are tailored to build strong subject mastery, critical thinking, and academic confidence—ideal for students targeting Ivy League, Oxbridge, and top global universities.
          </Typography>
          <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 1 }} color="secondary.main">
            Why Edufix for A/AS Level?
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
            Excel in A Levels with Edufix's expert guidance and global academic orientation.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AlevelPage; 