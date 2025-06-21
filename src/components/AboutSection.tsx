import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import type { GridProps } from "@mui/material/Grid";
import {
  FaChalkboardTeacher,
  FaPencilRuler,
  FaRegLightbulb,
  FaUserGraduate,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const features = [
  {
    icon: FaChalkboardTeacher,
    title: "Interactive Classes",
    desc: "Engaging sessions with real-time doubt clearing.",
    color: "#1976d2",
  },
  {
    icon: FaUserGraduate,
    title: "Custom Study Plans",
    desc: "Personalized learning paths for every student.",
    color: "#2e7d32",
  },
  {
    icon: FaRegLightbulb,
    title: "Expert Faculty",
    desc: "Learn from experienced educators and IIT alumni.",
    color: "#ed6c02",
  },
  {
    icon: FaPencilRuler,
    title: "Test Series",
    desc: "Mock Tests Series with performance feedback.",
    color: "#ed6c02",
  },
];

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)"
            : "linear-gradient(180deg, #1e1e1e 0%, #121212 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Why EduFix Career Academy?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                color: theme.palette.text.secondary,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              At Edufix, we empower students with small-batch classes, expert
              faculty, and a focus on personalized learning. Our approach
              ensures every student gets the attention and resources they need
              to excel.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {features.map((feature) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={feature.title}
                sx={{ display: "flex" }}
              >
                <MotionPaper
                  variants={itemVariants}
                  elevation={2}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 2,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      background: `${feature.color}15`,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "50%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        animation: "glossy 3s infinite",
                        "@keyframes glossy": {
                          "0%": {
                            left: "-100%",
                          },
                          "100%": {
                            left: "200%",
                          },
                        },
                      },
                    }}
                  >
                    <feature.icon
                      style={{
                        fontSize: "2rem",
                        color: feature.color,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
