import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Button,
  Box,
  useTheme,
  Typography,
  Fade,
  Backdrop,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Close as CloseIcon } from "@mui/icons-material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface ScheduleModalProps {
  open: boolean;
  onClose: () => void;
  mode: 'demo' | 'question';
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ open, onClose, mode }) => {
  const theme = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
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
          {mode === 'demo' ? "Schedule a Demo" : "Ask a Question"}
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

      <DialogContent sx={{ p: 3 }}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {mode === 'demo' ? (
              <form
                onSubmit={handleSubmit((data) => {
                  window.open("https://calendar.google.com/calendar/u/0/r/eventedit", "_blank");
                })}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select Date & Time"
                    onChange={() => {}}
                    sx={{ width: '100%', mb: 3 }}
                  />
                </LocalizationProvider>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4],
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Confirm & Add to Calendar
                </Button>
              </form>
            ) : (
              <form
                onSubmit={handleSubmit((data) => {
                  // POST to /api/contact
                })}
              >
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  {...register("name", { required: true })}
                  error={!!errors.name}
                  helperText={errors.name ? "Name is required" : ""}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors.email ? "Valid email is required" : ""}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  margin="normal"
                  {...register("phone", { required: true })}
                  error={!!errors.phone}
                  helperText={errors.phone ? "Phone number is required" : ""}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  {...register("message", { required: true })}
                  error={!!errors.message}
                  helperText={errors.message ? "Message is required" : ""}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4],
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Submit
                </Button>
              </form>
            )}
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal; 