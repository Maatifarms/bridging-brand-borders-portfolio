import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Building, Target } from 'lucide-react';
const portraitImage = '/lovable-uploads/09524815-7e53-4b4d-ab1e-914df42e6643.png';

const AboutSection = () => {
  const credentials = [
    'Certified Tax Consultant',
    'DGFT Compliance Expert',
    'Content Strategy Specialist',
    'GST & ITR Expert',
    'Export-Import Documentation',
    'Social Media Strategist'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging the gap between creative content, financial compliance, and global trade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={portraitImage}
                alt="Shriyanshi - Professional Portrait"
                className="w-full h-auto rounded-2xl shadow-medium hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Multi-Disciplinary Expert at Maati Farms
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a versatile professional who bridges the worlds of creative content, financial compliance, 
                and international trade. At Maati Farms, I leverage my unique skill set to help businesses 
                grow through strategic content, ensure regulatory compliance, and expand into global markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines analytical precision with creative storytelling, making complex 
                business processes accessible and engaging for clients across industries.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover-lift">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Certified Expert</h4>
                  <p className="text-xs text-muted-foreground">Tax & Compliance</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-4 text-center">
                  <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Maati Farms</h4>
                  <p className="text-xs text-muted-foreground">Core Team Member</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-4 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Multi-Service</h4>
                  <p className="text-xs text-muted-foreground">Expert Portfolio</p>
                </CardContent>
              </Card>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Certifications & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential, index) => (
                  <Badge key={index} variant="secondary" className="hover-scale">
                    {credential}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Mission */}
            <Card className="gradient-secondary border-none">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  My Mission
                </h4>
                <p className="text-muted-foreground">
                  To empower businesses with compelling content strategies, ensure seamless regulatory 
                  compliance, and unlock global trade opportunities through expert guidance and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;