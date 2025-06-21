'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <h3 className="footer__brand-title">
              Your Name
            </h3>
            <p className="footer__brand-description">
              Passionate full-stack developer creating innovative digital solutions. 
              Always learning, always building, always growing.
            </p>
            <div className="footer__social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer__link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__section-title">Get In Touch</h4>
            <div className="footer__contact">
              <p>📧 your.email@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 Your City, Country</p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="footer__contact-btn"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Your Name. All rights reserved. Made with ❤️ and ☕
          </p>
          
          <button
            onClick={scrollToTop}
            className="footer__scroll-top"
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="footer__decorative">
        <div className="footer__decorative-icon footer__decorative-icon--1">🚀</div>
        <div className="footer__decorative-icon footer__decorative-icon--2">💻</div>
        <div className="footer__decorative-icon footer__decorative-icon--3">⚡</div>
        <div className="footer__decorative-icon footer__decorative-icon--4">🎨</div>
      </div>
    </footer>
  );
}
