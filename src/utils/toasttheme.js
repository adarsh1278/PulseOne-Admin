import toast from 'react-hot-toast';

// Simple theme for toast appearance (can be extended or moved to CSS)
const defaultStyle = {
  borderRadius: '8px',
  padding: '12px 14px',
  color: '#fff',
};

const themes = {
  success: {
    style: { ...defaultStyle, background: '#16a34a' },
  },
  error: {
    style: { ...defaultStyle, background: '#dc2626' },
  },
  info: {
    style: { ...defaultStyle, background: '#2563eb' },
  },
  loading: {
    style: { ...defaultStyle, background: '#374151' },
  },
};

// Loading overlay element id
const LOADING_OVERLAY_ID = 'global-loading-overlay';
let currentLoadingToastId = null;

function createOverlay() {
  if (document.getElementById(LOADING_OVERLAY_ID)) return;
  const overlay = document.createElement('div');
  overlay.id = LOADING_OVERLAY_ID;
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: '0',
    background: 'transparent',
    zIndex: '9999',
    cursor: 'wait',
    // prevent pointer events to underlying page
    pointerEvents: 'auto',
  });
  // ensure clicks on overlay do nothing
  overlay.addEventListener('click', (e) => e.stopPropagation());
  overlay.addEventListener('mousedown', (e) => e.stopPropagation());
  document.body.appendChild(overlay);
}

function removeOverlay() {
  const el = document.getElementById(LOADING_OVERLAY_ID);
  if (el) el.remove();
}

export function showLoading(message = 'Loading...') {
  // If an existing loading toast exists, update it
  if (currentLoadingToastId) {
    toast.loading(message, { id: currentLoadingToastId, ...themes.loading });
    return currentLoadingToastId;
  }
  createOverlay();
  currentLoadingToastId = toast.loading(message, { ...themes.loading });
  return currentLoadingToastId;
}

export function hideLoading(message) {
  if (!currentLoadingToastId) return;
  if (message) {
    toast.success(message, { ...themes.success });
  }
  toast.dismiss(currentLoadingToastId);
  currentLoadingToastId = null;
  removeOverlay();
}

export function showSuccess(message, opts = {}) {
  return toast.success(message, { ...themes.success, ...opts });
}

export function showError(message, opts = {}) {
  return toast.error(message, { ...themes.error, ...opts });
}

export function showInfo(message, opts = {}) {
  return toast(message, { ...themes.info, ...opts });
}

export default {
  showLoading,
  hideLoading,
  showSuccess,
  showError,
  showInfo,
};
