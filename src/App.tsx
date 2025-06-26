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
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import FoundationCoursePage from './pages/FoundationCoursePage'
import JEEPage from './pages/JEEPage'
import IGCSEPage from './pages/IGCSEPage'
import IBDPPage from './pages/IBDPPage'
import AlevelPage from './pages/AlevelPage'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar mode={mode} toggleTheme={toggleTheme} />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <CoursesCarousel />
                  <MetricsSection />
                  <TeamGrid />
                  <SuccessStories />
                  <TestimonialsCarousel />
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
                </>
              } />
              <Route path="/courses/foundation" element={<FoundationCoursePage />} />
              <Route path="/courses/jee" element={<JEEPage />} />
              <Route path="/courses/igcse" element={<IGCSEPage />} />
              <Route path="/courses/ibdp" element={<IBDPPage />} />
              <Route path="/courses/alevel" element={<AlevelPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App 