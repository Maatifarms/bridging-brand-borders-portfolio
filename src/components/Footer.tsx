import React from 'react';
import { Button } from './ui/button';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Linkedin,
  ExternalLink,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Content Creation',
    'Tax Consulting',
    'EXIM Consulting',
    'Business Documentation',
    'Social Media Strategy'
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Shriyanshi</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Bridging brands, numbers & borders with expert content creation, 
              tax consulting, and export-import services.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-primary hover:bg-background/10 p-2"
                onClick={() => window.open('mailto:shriyanshi@maatifarms.com')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-primary hover:bg-background/10 p-2"
                onClick={() => window.open('tel:+919151814636')}
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-primary hover:bg-background/10 p-2"
                onClick={() => window.open('https://wa.me/919151814636', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-primary hover:bg-background/10 p-2"
                onClick={() => window.open('https://instagram.com/researcher_in_the_woods', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-background/80 hover:text-primary hover:bg-background/10 p-2"
                onClick={() => window.open('#', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-background/60 text-xs uppercase tracking-wide">Email</p>
                <a 
                  href="mailto:shriyanshi@maatifarms.com"
                  className="text-background/80 hover:text-primary transition-smooth text-sm"
                >
                  shriyanshi@maatifarms.com
                </a>
              </div>
              <div>
                <p className="text-background/60 text-xs uppercase tracking-wide">Phone</p>
                <a 
                  href="tel:+919151814636"
                  className="text-background/80 hover:text-primary transition-smooth text-sm"
                >
                  +91 91518 14636
                </a>
              </div>
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-background/20 text-background/80 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  onClick={() => window.open('https://maatifarms.com', '_blank')}
                >
                  Visit Maati Farms <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © {currentYear} Shriyanshi. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-background/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for global business growth</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;