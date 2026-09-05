const consentKey = 'blue-dot-privacy-choice';

export const readConsent = () => {
  try {
    return localStorage.getItem(consentKey);
  } catch {
    return null;
  }
};

export const saveConsent = value => {
  try {
    localStorage.setItem(consentKey, value);
  } catch {
    return false;
  }
  return true;
};

export function loadOptionalServices() {
  if (document.querySelector('[data-blue-dot-optional]')) return;

  const plausible = document.createElement('script');
  plausible.async = true;
  plausible.src = 'https://plausible.io/js/pa-vqJSCRMRM3oIZZwrosSFx.js';
  plausible.dataset.blueDotOptional = 'true';
  document.head.appendChild(plausible);

  window.clarity =
    window.clarity ||
    function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
  const clarity = document.createElement('script');
  clarity.async = true;
  clarity.src = 'https://www.clarity.ms/tag/wyjpq0d5cc';
  clarity.dataset.blueDotOptional = 'true';
  document.head.appendChild(clarity);

  const chat = document.createElement('script');
  chat.src = 'https://widgets.leadconnectorhq.com/loader.js';
  chat.dataset.resourcesUrl = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js';
  chat.dataset.widgetId = '6a14a7a99f66529db32f1ba2';
  chat.dataset.source = 'WEBSITE';
  chat.dataset.blueDotOptional = 'true';
  document.body.appendChild(chat);
}
