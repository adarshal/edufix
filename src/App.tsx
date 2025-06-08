import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FloatingButtons from './components/FloatingButtons'
import ScheduleModal from './components/ScheduleModal'
import AboutSection from './components/AboutSection'
import CoursesCarousel from './components/CoursesCarousel'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import TeamGrid from './components/TeamGrid'
import SuccessStories from './components/SuccessStories'
import MetricsSection from './components/MetricsSection'
import Footer from './components/Footer'
import './App.css'

function App(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'demo' | 'question'>('demo')
  const [mode, setMode] = useState<'light' | 'dark'>(() => 
    (localStorage.getItem("theme") as 'light' | 'dark') || "light"
  )

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: '"Montserrat", "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontFamily: '"Montserrat", sans-serif',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: '"Montserrat", sans-serif',
          },
        },
      },
    },
  })

  useEffect(() => {
    localStorage.setItem("theme", mode)
  }, [mode])

  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light")

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen">
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        <div className="pt-16">
          <HeroSection />
          <AboutSection />
          <CoursesCarousel />
          <MetricsSection />
          <TestimonialsCarousel />
          <SuccessStories />
          <TeamGrid />
          <Footer />
          <FloatingButtons 
            onDemoClick={() => {
              setModalMode('demo');
              setModalOpen(true);
            }}
            onQuestionClick={() => {
              setModalMode('question');
              setModalOpen(true);
            }}
          />
          <ScheduleModal 
            open={modalOpen} 
            onClose={() => setModalOpen(false)} 
            mode={modalMode}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App 