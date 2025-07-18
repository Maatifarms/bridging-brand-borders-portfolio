import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  PenTool, 
  Calculator, 
  Globe, 
  FileText, 
  TrendingUp, 
  Shield,
  Users,
  DollarSign,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      category: "Content Creation",
      icon: PenTool,
      color: "text-blue-600",
      description: "Strategic content that drives engagement and builds brands",
      services: [
        { name: "Blog Writing & SEO Content", icon: FileText },
        { name: "Social Media Strategy", icon: TrendingUp },
        { name: "Brand Storytelling", icon: Users },
        { name: "LinkedIn Content Creation", icon: PenTool },
        { name: "Video Scripting", icon: FileText },
        { name: "Marketing Copy", icon: TrendingUp }
      ]
    },
    {
      category: "Tax & Finance Consulting",
      icon: Calculator,
      color: "text-green-600",
      description: "Comprehensive compliance and financial advisory services",
      services: [
        { name: "GST Registration & Returns", icon: Shield },
        { name: "ITR Filing & Tax Planning", icon: DollarSign },
        { name: "Business Documentation", icon: FileText },
        { name: "Partnership Deed & MOA", icon: Briefcase },
        { name: "Startup Compliance", icon: Users },
        { name: "Financial Consulting", icon: Calculator }
      ]
    },
    {
      category: "Export-Import Consulting",
      icon: Globe,
      color: "text-orange-600",
      description: "Navigate international trade with expert EXIM guidance",
      services: [
        { name: "IEC Registration & DGFT", icon: Globe },
        { name: "EPC Registration", icon: Shield },
        { name: "Buyer Sourcing & Research", icon: Users },
        { name: "Customs Documentation", icon: FileText },
        { name: "International Trade Strategy", icon: TrendingUp },
        { name: "Market Entry Consulting", icon: Briefcase }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across content creation, financial compliance, and international trade
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((serviceCategory, index) => {
            const IconComponent = serviceCategory.icon;
            return (
              <Card key={index} className="hover-lift group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth`}>
                    <IconComponent className={`h-8 w-8 ${serviceCategory.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{serviceCategory.category}</CardTitle>
                  <p className="text-muted-foreground text-sm">{serviceCategory.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {serviceCategory.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div key={serviceIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-smooth">
                        <ServiceIcon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{service.name}</span>
                      </div>
                    );
                  })}
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-smooth">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="gradient-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Let's discuss how I can help you with content strategy, compliance, or international expansion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="hover-scale">
                  Book a Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;