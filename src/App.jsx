import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CalorieCalculator from './pages/CalorieCalculator';
import FeedbackForm from './pages/FeedbackForm';
import ProgramApplicationForm from './pages/ProgramApplicationForm';
import TermsAndRefundPolicy from './pages/TermsAndRefundPolicy';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<CalorieCalculator />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/apply" element={<ProgramApplicationForm />} />
              <Route path="/terms-and-refund-policy" element={<TermsAndRefundPolicy />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
