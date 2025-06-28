import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { FaRocket } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC<{ mode: 'light' | 'dark'; toggleTheme: () => void }> = ({ mode, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'About', href: '#about' },
    { text: 'Courses', href: '#courses' },    
    { text: 'Team', href: '#team' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Test Series', href: 'https://edufix.collegedoors.com/' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setDrawerOpen(false);
    } else {
      window.open(href, '_blank');
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem 
            component="button"
            key={item.text}
            onClick={() => handleNavClick(item.href)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="#"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'primary.main',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          <img src="logo_lat.svg" alt="" 
          style={{ width: '1.7rem', height: '1.5rem',
           }} /> Edufix

        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => handleNavClick(item.href)}
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 