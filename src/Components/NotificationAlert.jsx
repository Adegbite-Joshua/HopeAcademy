import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({notificationIcon, showNotification, notificationBody, notificationTitle}) {
  return (
    <Alert className={showNotification?'block':'none'} severity={notificationIcon}>
        <AlertTitle>{notificationTitle}</AlertTitle>
        {notificationBody}
    </Alert>
  );
}
