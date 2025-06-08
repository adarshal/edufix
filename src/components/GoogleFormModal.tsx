import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  Typography,
  Fade,
  Backdrop,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { FaSpinner } from "react-icons/fa";

interface GoogleFormModalProps {
  open: boolean;
  onClose: () => void;
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Fade}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
        sx: {
          background: theme.palette.mode === 'light'
            ? 'rgba(200, 220, 255, 0.55)'
            : 'rgba(10, 20, 40, 0.75)',
          backdropFilter: 'blur(6px)',
        },
      }}
      scroll="body"
      sx={{ alignItems: 'flex-start', justifyContent: 'flex-start', minHeight: '100vh' }}
      PaperProps={{
        sx: {
          mt: 0,
          maxHeight: 'calc(100vh - 32px)',
          borderRadius: 4,
          background: theme.palette.mode === 'light'
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(20,30,60,0.98)',
          boxShadow: '0 8px 32px 0 rgba(60,60,130,0.18)',
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle sx={{ 
        m: 0, 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'
          : 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
      }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Application Form
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: theme.palette.grey[500],
            '&:hover': {
              color: theme.palette.grey[700],
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ 
        p: 0, 
        position: 'relative',
        height: 'calc(100vh - 160px)',
        overflow: 'hidden'
      }}>
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: theme.palette.mode === 'light'
                ? 'rgba(255,255,255,0.9)'
                : 'rgba(20,30,60,0.9)',
              zIndex: 1,
            }}
          >
            <FaSpinner className="animate-spin" size={40} color={theme.palette.primary.main} />
          </Box>
        )}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-hn30822Ftqnbishs1F9dNBxmM9Uhc8T0F7ivihvVO0QdDQ/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          onLoad={handleIframeLoad}
          style={{
            border: 'none',
            borderRadius: '0 0 16px 16px',
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GoogleFormModal; 