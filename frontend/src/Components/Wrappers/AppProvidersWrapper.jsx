import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { DEFAULT_PAGE_TITLE } from '../../Context/constants';
import { NotificationProvider } from '../../Context/useNotificationContext';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '../../Context/useAuthContext';

const AppProvidersWrapper = ({ children }) => {
  const handleChangeTitle = () => {
    if (document.visibilityState === 'hidden') {
      document.title = 'Please come back';
    } else {
      document.title = DEFAULT_PAGE_TITLE;
    }
  };

  useEffect(() => {
    if (document) {
      const e = document.querySelector('#__next_splash');
      if (e?.hasChildNodes()) {
        document.querySelector('#splash-screen')?.classList.add('remove');
      }
      e?.addEventListener('DOMNodeInserted', () => {
        document.querySelector('#splash-screen')?.classList.add('remove');
      });
    }

    document.addEventListener('visibilitychange', handleChangeTitle);

    return () => {
      document.removeEventListener('visibilitychange', handleChangeTitle);
    };
  }, []);

  return (
    <AuthProvider>
      <HelmetProvider>
        <NotificationProvider>
          {children}
          <ToastContainer theme="colored" />
        </NotificationProvider>
      </HelmetProvider>
    </AuthProvider>
  );
};

export default AppProvidersWrapper;
