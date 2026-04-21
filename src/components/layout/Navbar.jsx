import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Menu, X, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const youtubeChannelLink = 'https://youtube.com/@joeejoeyy?si=D8rxRXdY0U4r8GY2';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.achievements, href: '/#achievements' },
    { label: t.nav.journey, href: '/#journey' },
    //{ label: t.nav.programs, href: '/#programs' },
    //{ label: t.nav.apply, href: '/#programs' },
    { label: t.nav.faq, href: '/#faq' },
    { label: t.nav.feedback, href: '/feedback' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('/#') && isHome) {
      const el = document.getElementById(href.slice(2));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const iconBtnStyle = {
    padding: '8px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: scrolled ? 'var(--color-text-secondary)' : 'rgba(255,255,255,0.7)',
    transition: 'opacity 0.2s',
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? theme === 'dark'
            ? 'rgba(10, 10, 12, 0.92)'
            : 'rgba(250, 250, 249, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
      }}
    >
      <div
        className="navbar-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontSize: '1.15rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: scrolled ? 'var(--color-text)' : '#fff',
            }}
          >
            JOE
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: 500,
                transition: 'color 0.2s',
                color: scrolled
                  ? 'var(--color-text-secondary)'
                  : 'rgba(255,255,255,0.8)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {/* Social icons */}
          <a
            href="https://www.instagram.com/joee_joeyy?igsh=M2E0YXZ4dDVzY3Bv"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtnStyle, textDecoration: 'none' }}
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/201027909082"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtnStyle, textDecoration: 'none' }}
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={youtubeChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconBtnStyle, textDecoration: 'none' }}
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={iconBtnStyle}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            style={{
              ...iconBtnStyle,
              gap: '6px',
              paddingInline: '10px',
            }}
            aria-label="Switch language"
            title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe size={16} />
            <span style={{ fontSize: '12px', fontWeight: 700 }}>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              ...iconBtnStyle,
              color: scrolled ? 'var(--color-text)' : '#fff',
            }}
            className="mobile-only"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
            style={{
              overflow: 'hidden',
              background: theme === 'dark' ? 'rgba(10,10,12,0.98)' : 'rgba(250,250,249,0.98)',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <div
              className="mobile-menu-inner"
              style={{
                padding: '16px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    transition: 'background 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
