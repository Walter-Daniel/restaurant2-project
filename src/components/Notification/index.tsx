import { FC } from 'react'
import { Alert, AlertColor, Snackbar, Typography } from '@mui/material'

type Props = {
    open: boolean;
    msg: string;
    severity: AlertColor | undefined;
    handleClose: () => void;
}

export const NotificationComponent: FC<Props> = ({ open, msg, severity, handleClose }) => {
  return (
    <Snackbar  
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
    >
        <Alert onClose={handleClose} severity={severity}>
            <Typography>{msg}</Typography>
        </Alert>
    </Snackbar>
  )
}
