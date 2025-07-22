import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, FileText, Calculator, Globe, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      category: "Content Creation & Brand Strategy",
      icon: FileText,
      description: "Comprehensive content solutions for brands and businesses",
      projects: [
        {
          title: "Maati Farms Brand Storytelling",
          description: "Developed complete brand narrative, content strategy, and messaging framework for sustainable agriculture. Created 50+ pieces of content including blogs, social posts, and marketing materials.",
          tags: ["Brand Strategy", "Content Marketing", "Sustainability", "Agriculture"],
          type: "Brand Development",
          metrics: "50+ content pieces, 200% engagement increase",
          duration: "6 months"
        },
        {
          title: "LinkedIn Thought Leadership Series",
          description: "Designed and executed professional content series on entrepreneurship, business development, and industry insights. Built personal brand presence across LinkedIn.",
          tags: ["LinkedIn", "Thought Leadership", "B2B Content", "Personal Branding"],
          type: "Content Campaign",
          metrics: "1000+ followers gained, 85% engagement rate",
          duration: "Ongoing"
        },
        {
          title: "Technical Blog Portfolio",
          description: "Created comprehensive technical and business blog articles covering finance, international trade, compliance, and digital marketing strategies for various clients.",
          tags: ["Technical Writing", "SEO Content", "Finance", "Trade"],
          type: "Writing Portfolio",
          metrics: "25+ published articles, Top 10 Google rankings",
          duration: "2 years"
        },
        {
          title: "Social Media Strategy & Management",
          description: "Developed and implemented social media strategies for startups and SMEs, focusing on authentic engagement and business growth through strategic content.",
          tags: ["Social Media", "Strategy", "SME Growth", "Engagement"],
          type: "Strategy & Management",
          metrics: "300% follower growth, 150% engagement boost",
          duration: "12 months"
        }
      ]
    },
    {
      category: "Tax & Finance Consulting",
      icon: Calculator,
      description: "Certified expertise in compliance, taxation, and business documentation",
      projects: [
        {
          title: "Startup GST Compliance Framework",
          description: "Successfully guided 25+ startups through GST registration, compliance setup, and ongoing tax management. Developed standardized processes for efficient compliance.",
          tags: ["GST Registration", "Tax Compliance", "Startup Advisory", "Process Development"],
          type: "Client Advisory",
          metrics: "25+ startups guided, 100% compliance success rate",
          duration: "18 months"
        },
        {
          title: "ITR Filing & Tax Optimization",
          description: "Streamlined tax filing processes for 50+ freelancers and small businesses. Implemented tax optimization strategies resulting in significant savings.",
          tags: ["ITR Filing", "Tax Optimization", "Small Business", "Freelancer Support"],
          type: "Tax Services",
          metrics: "50+ clients served, 30% average tax savings",
          duration: "2 years"
        },
        {
          title: "Business Registration & Documentation",
          description: "Created comprehensive business setup documentation including partnership deeds, MOAs, and regulatory compliance frameworks for new businesses.",
          tags: ["Business Setup", "Legal Documentation", "Partnership Deeds", "MOA"],
          type: "Documentation Services",
          metrics: "40+ businesses registered, Zero compliance issues",
          duration: "Ongoing"
        },
        {
          title: "Financial Consulting for MSMEs",
          description: "Provided financial advisory services to MSMEs including cash flow management, financial planning, and compliance guidance for sustainable business growth.",
          tags: ["MSME Advisory", "Financial Planning", "Cash Flow", "Growth Strategy"],
          type: "Financial Advisory",
          metrics: "15+ MSMEs supported, 40% revenue growth average",
          duration: "2 years"
        }
      ]
    },
    {
      category: "Export-Import (EXIM) Consulting",
      icon: Globe,
      description: "Specialized expertise in international trade and export business development",
      projects: [
        {
          title: "DGFT Registration & IEC Services",
          description: "Facilitated complete DGFT registration and IEC (Import Export Code) processing for 30+ export businesses. Ensured 100% compliance with regulatory requirements.",
          tags: ["DGFT Registration", "IEC Processing", "Export Compliance", "Regulatory Affairs"],
          type: "Regulatory Services",
          metrics: "30+ successful registrations, 2-week average processing",
          duration: "18 months"
        },
        {
          title: "International Buyer Research & Sourcing",
          description: "Conducted comprehensive market research and buyer identification for agricultural and manufacturing exports. Connected Indian exporters with verified international buyers.",
          tags: ["Market Research", "Buyer Sourcing", "Export Development", "Agriculture"],
          type: "Market Development",
          metrics: "50+ buyer connections, $2M+ trade facilitated",
          duration: "2 years"
        },
        {
          title: "EPC Registration & Support",
          description: "Provided end-to-end support for Export Promotion Council registrations across multiple sectors including agriculture, textiles, and manufacturing.",
          tags: ["EPC Registration", "Export Promotion", "Multi-sector", "Trade Support"],
          type: "Registration Services",
          metrics: "20+ EPC registrations, 100% approval rate",
          duration: "12 months"
        },
        {
          title: "Export Documentation & Compliance",
          description: "Developed comprehensive export documentation frameworks and ensured compliance with international trade regulations for smooth export operations.",
          tags: ["Export Documentation", "Trade Compliance", "International Standards", "Process Optimization"],
          type: "Documentation & Compliance",
          metrics: "Zero documentation rejections, 95% faster processing",
          duration: "Ongoing"
        }
      ]
    }
  ];

  const achievements = [
    { icon: Users, number: "100+", label: "Clients Served" },
    { icon: TrendingUp, number: "200%", label: "Average Growth" },
    { icon: Award, number: "5+", label: "Certifications" },
    { icon: CheckCircle, number: "99%", label: "Success Rate" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my comprehensive work across content creation, tax consulting, and international trade. 
            Each project demonstrates measurable results and professional excellence.
          </p>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Categories */}
        <div className="space-y-16">
          {portfolioItems.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <Card key={projectIndex} className="hover-lift group border-0 shadow-soft">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100" />
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs font-medium">
                            {project.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {project.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Metrics */}
                        <div className="p-3 bg-muted/50 rounded-md">
                          <p className="text-sm font-medium text-foreground mb-1">Key Results:</p>
                          <p className="text-sm text-muted-foreground">{project.metrics}</p>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 bg-card rounded-lg shadow-soft">
          <h4 className="text-xl font-semibold text-foreground mb-4">
            Ready to Start Your Project?
          </h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need content creation, tax consulting, or export-import guidance, 
            I'm here to help you achieve measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Start a Conversation
              <ExternalLink className="h-4 w-4" />
            </a>
            <a 
              href="https://wa.me/919151814636?text=Hi%20Shriyanshi,%20I'd%20like%20to%20discuss%20a%20project" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors font-medium"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;