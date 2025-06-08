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

const Navbar: React.FC<{ mode: 'light' | 'dark'; toggleTheme: () => void }> = ({ mode, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'About', href: '#about' },
    { text: 'Courses', href: '#courses' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Team', href: '#team' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component="a" 
            href={item.href}
            onClick={() => setDrawerOpen(false)}
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
          <img src="edufixvector.svg" alt="" 
          style={{ width: '1.5rem', height: '1.5rem',
            backgroundColor: 'red',
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
                href={item.href}
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