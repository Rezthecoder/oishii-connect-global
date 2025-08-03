import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { 
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.56a2.75 2.75 0 01-5.5 0V2H6.16v5.56a4.83 4.83 0 01-3.77 4.25v1.6a6.41 6.41 0 004.77-2.08A6.41 6.41 0 0011.93 9.6a6.41 6.41 0 004.77 2.08V6.69z"/>
        </svg>
      ), 
      href: '#', 
      label: 'TikTok' 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">O</span>
              </div>
              <h3 className="text-2xl font-bold">{t('restaurantName')}</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Authentic Japanese cuisine with modern flair, bringing you the finest flavors in an elegant atmosphere.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70" />
                <span className="text-sm">123 Downtown Street, Tokyo, Japan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/70" />
                <span className="text-sm">+81 3-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <span className="text-sm">info@oishiiconnect.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6" />
              <h3 className="text-xl font-semibold">{t('hours')}</h3>
            </div>
            <div className="space-y-2 text-primary-foreground/80">
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p className="text-sm">11:30 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Saturday - Sunday</p>
                <p className="text-sm">5:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { key: 'about', id: 'about' },
                { key: 'menu', id: 'menu' },
                { key: 'gallery', id: 'gallery' },
                { key: 'staff', id: 'staff' },
                { key: 'contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-left"
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t('followUs')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <Button
              onClick={scrollToTop}
              variant="secondary"
              className="w-full mt-4"
            >
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2024 {t('restaurantName')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;