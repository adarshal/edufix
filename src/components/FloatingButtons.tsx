import React, { useState } from "react";
import { Fab, Tooltip, useTheme, Box } from "@mui/material";
import { Chat as ChatIcon, CalendarMonth, WhatsApp, Assignment } from "@mui/icons-material";
import { motion } from "framer-motion";
import GoogleFormModal from "./GoogleFormModal";

interface FloatingButtonsProps {
  onDemoClick: () => void;
  onQuestionClick: () => void;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onDemoClick, onQuestionClick }) => {
  const theme = useTheme();
  const [formModalOpen, setFormModalOpen] = useState(false);

  const buttonStyle = {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    boxShadow: theme.shadows[8],
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: theme.shadows[12],
    },
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Tooltip title="Join Our Test Series" placement="left">
            <Fab
              color="primary"
              onClick={() => window.open("https://edufix.collegedoors.com/", "_blank")}
              sx={{
                ...buttonStyle,
                background: `linear-gradient(135deg,rgb(36, 93, 184) 0%, #4285F4 100%)`,
              }}
            >
              <Assignment />
            </Fab>
          </Tooltip>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Tooltip title="Schedule a Demo" placement="left">
            <Fab
              color="primary"
              onClick={() => setFormModalOpen(true)}
              sx={{
                ...buttonStyle,
                background: `linear-gradient(135deg, #4285F4 0%, #34A853 100%)`,
              }}
            >
              <CalendarMonth />
            </Fab>
          </Tooltip>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Tooltip title="Book a Demo" placement="left">
            <Fab
              color="primary"
              onClick={onDemoClick}
              sx={buttonStyle}
            >
              <CalendarMonth />
            </Fab>
          </Tooltip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Tooltip title="Ask a Question" placement="left">
            <Fab
              color="primary"
              onClick={onQuestionClick}
              sx={buttonStyle}
            >
              <ChatIcon />
            </Fab>
          </Tooltip>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Tooltip title="Chat on WhatsApp" placement="left">
            <Fab
              color="success"
              onClick={() => window.open("https://wa.me/9588261726", "_blank")}
              sx={{
                ...buttonStyle,
                background: `linear-gradient(135deg, #25D366 0%, #128C7E 100%)`,
              }}
            >
              <WhatsApp />
            </Fab>
          </Tooltip>
        </motion.div>
      </Box>

      <GoogleFormModal 
        open={formModalOpen}
        onClose={() => setFormModalOpen(false)}
      />
    </>
  );
};

export default FloatingButtons; 