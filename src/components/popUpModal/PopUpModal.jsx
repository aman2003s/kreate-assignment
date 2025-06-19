import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function PopUpModal({open, userData , handleClose}) {
  return (
      <BootstrapDialog
        onClose={()=>handleClose(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         {userData.name}'s details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>handleClose(false)}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
            X
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Address: {userData?.address?.suite}, {userData?.address?.street}, {userData?.address?.city}, {userData?.address?.zipcode}
          </Typography>  <Typography gutterBottom>
            Company: {userData?.company?.name}
          </Typography>
          <Typography gutterBottom>
            Geo coordinates: {userData?.address?.geo?.lat}, {userData?.address?.geo?.lng}
          </Typography>
        
        </DialogContent>
      </BootstrapDialog>
  );
}
