import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '../assets/workspace-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-primary">Shriyanshi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Bridging Brands, Numbers & Borders with{' '}
              <span className="text-primary">Content, Compliance & Trade</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Multi-disciplinary expert specializing in content creation, certified tax & finance advisory, 
              and export-import consulting at Maati Farms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover-scale shadow-medium"
              >
                Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-scale"
              >
                <Download className="mr-2 h-5 w-5" /> View Services
              </Button>
            </div>

            {/* Three Column Intro */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4 rounded-lg gradient-secondary hover-lift">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold text-lg">📝</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Content Creator</h3>
                <p className="text-sm text-muted-foreground">Blogs, Brand Strategy, Social Media</p>
              </div>

              <div className="text-center p-4 rounded-lg gradient-secondary hover-lift">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold text-lg">📊</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tax & Finance Expert</h3>
                <p className="text-sm text-muted-foreground">GST, ITR, Business Compliance</p>
              </div>

              <div className="text-center p-4 rounded-lg gradient-secondary hover-lift">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold text-lg">🌍</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">EXIM Consultant</h3>
                <p className="text-sm text-muted-foreground">DGFT, IEC, International Trade</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2 animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional workspace"
                className="w-full h-auto rounded-2xl shadow-medium hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default HeroSection;