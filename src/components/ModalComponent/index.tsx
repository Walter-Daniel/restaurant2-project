import { FC, useState } from 'react';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
    children: React.ReactNode,
    title: string,
    btnName: string | JSX.Element,
    btnStyle: 'contained' | 'outlined' | 'text',
    isStyled?: object
 };

export const ModalComponent: FC<Props> = ({ children, title, btnStyle, btnName, isStyled }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        style={isStyled}
        variant={btnStyle} 
        onClick={handleOpen}
      >{btnName}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant='h5' sx={{ fontWeight:'600', textTransform:'uppercase' }}>{title}</Typography>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}