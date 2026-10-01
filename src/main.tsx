import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

// Guard against third-party browser extension injection errors (such as MetaMask in-page provider in iframes)
if (typeof window !== 'undefined') {
  const isExtensionError = (msg: string, source?: string): boolean => {
    const lowerMsg = (msg || '').toLowerCase();
    const lowerSrc = (source || '').toLowerCase();
    return (
      lowerMsg.includes('metamask') ||
      lowerMsg.includes('ethereum') ||
      lowerMsg.includes('web3') ||
      lowerSrc.includes('extension') ||
      lowerSrc.includes('metamask') ||
      lowerSrc.includes('inpage.js') ||
      lowerSrc.includes('contentscript')
    );
  };

  window.addEventListener(
    'unhandledrejection',
    (event) => {
      const reason = event.reason;
      const msg =
        typeof reason === 'string'
          ? reason
          : reason?.message || reason?.stack || '';
      if (isExtensionError(msg)) {
        event.preventDefault();
        event.stopImmediatePropagation?.();
      }
    },
    true
  );

  window.addEventListener(
    'error',
    (event) => {
      const msg = event.message || '';
      const source = event.filename || '';
      if (isExtensionError(msg, source)) {
        event.preventDefault();
        event.stopImmediatePropagation?.();
      }
    },
    true
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
