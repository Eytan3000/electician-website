import { analytics } from './firebase';
import { logEvent, Analytics } from 'firebase/analytics';

export const trackEvent = async (eventName: string, eventParams?: Record<string, any>) => {
  const analyticsInstance = await analytics;
  if (analyticsInstance) {
    logEvent(analyticsInstance, eventName, eventParams);
  }
};

// Phone call tracking
export const trackPhoneCall = () => {
  trackEvent('phone_call_click', {
    call_location: 'navbar'
  });
};

export const trackPhoneCallFooter = () => {
  trackEvent('phone_call_click', {
    call_location: 'footer'
  });
};

// Email tracking
export const trackEmailClick = () => {
  trackEvent('email_click', {
    email_location: 'footer'
  });
};

// Language switch tracking
export const trackLanguageSwitch = (fromLanguage: string, toLanguage: string) => {
  trackEvent('language_switch', {
    from_language: fromLanguage,
    to_language: toLanguage
  });
};

// Navigation tracking
export const trackNavigationClick = (section: string) => {
  trackEvent('navigation_click', {
    section
  });
};

export const trackMenuToggle = (isOpen: boolean) => {
  trackEvent('menu_toggle', {
    action: isOpen ? 'open' : 'close'
  });
};

// Service card tracking
export const trackServiceView = (serviceId: string) => {
  trackEvent('service_view', {
    service_id: serviceId
  });
};

// Modal tracking
export const trackModalOpen = (modalType: string) => {
  trackEvent('modal_open', {
    modal_type: modalType
  });
};

// Page view tracking (optional - for SPA navigation)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};
