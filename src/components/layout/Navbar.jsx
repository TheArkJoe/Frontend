import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { getAvailableLanguages } from '../../i18n';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const languages = getAvailableLanguages();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.achievements, href: '/#achievements' },
    { label: t.nav.journey, href: '/#journey' },
    { label: t.nav.programs, href: '/#programs' },
    { label: t.nav.apply, href: '/#programs' },
    { label: t.nav.faq, href: '/#faq' },
  ];

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('/#') && isHome) {
      const el = document.getElementById(href.slice(2));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontSize: '1.15rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: scrolled ? 'var(--color-text)' : '#fff',
            }}
          >
            THE ARK
          </span>
        </Link>

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
            style={{
              ...iconBtnStyle,
              textDecoration: 'none',
            }}
            className="desktop-only"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/201027909082"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...iconBtnStyle,
              textDecoration: 'none',
            }}
            className="desktop-only"
          >
            <MessageCircle size={18} />
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
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              style={iconBtnStyle}
              aria-label="Change language"
            >
              <Globe size={18} />
            </button>

            <AnimatePresence>
              {langDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    top: '44px',
                    right: 0,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    minWidth: '140px',
                    zIndex: 50,
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdown(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 16px',
                        fontSize: '14px',
                        textAlign: 'left',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'inherit',
                        background: lang === l.code ? 'var(--color-bg-tertiary)' : 'transparent',
                        color: 'var(--color-text)',
                        transition: 'background 0.15s',
                      }}
                    >
                      <span>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
