import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toastify.css';

export const Toastify: React.FC = () => {
  return <ToastContainer />;
};

type NotificationType = 'success' | 'error' | 'info' | 'warn';

export const showNotification = (
  notification: string,
  notification_type: string,
  notification_position?: string,
) => {
  const toastFunction = toast[notification_type as NotificationType];
  if (toastFunction && typeof toastFunction === 'function') {
    toastFunction(notification, {
      position: (notification_position ?? 'top-right') as ToastPosition,
    });
  } else {
    toast.error('Email not sent!', {
      position: (notification_position ?? 'top-right') as ToastPosition,
    });
  }

  return null;
};
