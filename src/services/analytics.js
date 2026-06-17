import ReactGA from 'react-ga4';

export function initGA() {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
}

export function trackPageView(path) {
  ReactGA.send({ hitType: 'pageview', page: path });
}
