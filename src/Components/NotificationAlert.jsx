import { Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function NotificationAlert() {
  return (
    <>
      <Notification icon={<IconCheck size="1.2rem" />} withBorder title="">
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </>
  );
}