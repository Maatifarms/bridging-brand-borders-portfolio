import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, FileText, Calculator, Globe } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      category: "Content Creation",
      icon: FileText,
      projects: [
        {
          title: "Brand Storytelling for Maati Farms",
          description: "Developed comprehensive brand narrative and content strategy for agricultural sustainability",
          tags: ["Brand Story", "Content Strategy", "Sustainability"],
          type: "Case Study"
        },
        {
          title: "LinkedIn Content Series",
          description: "Created engaging professional content series on entrepreneurship and business development",
          tags: ["LinkedIn", "Social Media", "B2B Content"],
          type: "Content Campaign"
        },
        {
          title: "Blog Writing Portfolio",
          description: "Technical and business blog articles covering finance, trade, and digital marketing",
          tags: ["Technical Writing", "Business Blogs", "SEO"],
          type: "Writing Samples"
        }
      ]
    },
    {
      category: "Tax & Finance Consulting",
      icon: Calculator,
      projects: [
        {
          title: "Startup GST Compliance Setup",
          description: "Successfully guided 15+ startups through GST registration and compliance frameworks",
          tags: ["GST", "Compliance", "Startup Advisory"],
          type: "Client Success"
        },
        {
          title: "ITR Filing & Documentation",
          description: "Streamlined tax filing processes for freelancers and small businesses",
          tags: ["ITR", "Tax Filing", "Documentation"],
          type: "Service Portfolio"
        },
        {
          title: "Business Setup Documentation",
          description: "Created comprehensive business registration and partnership deed frameworks",
          tags: ["Business Setup", "Legal Docs", "Partnership"],
          type: "Documentation"
        }
      ]
    },
    {
      category: "Export-Import Consulting",
      icon: Globe,
      projects: [
        {
          title: "DGFT Registration Services",
          description: "Facilitated IEC registration and DGFT compliance for export businesses",
          tags: ["DGFT", "IEC Registration", "Export Setup"],
          type: "Regulatory Support"
        },
        {
          title: "International Buyer Research",
          description: "Market research and buyer identification for agricultural product exports",
          tags: ["Market Research", "Buyer Sourcing", "Agriculture"],
          type: "Market Analysis"
        },
        {
          title: "EPC Registration Support",
          description: "End-to-end support for Export Promotion Council registrations across sectors",
          tags: ["EPC", "Export Support", "Trade Documentation"],
          type: "Registration Services"
        }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my work across content creation, tax consulting, and international trade
          </p>
        </div>

        <div className="space-y-12">
          {portfolioItems.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <Card key={projectIndex} className="hover-lift group">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                        </div>
                        <Badge variant="secondary" className="w-fit text-xs">
                          {project.type}
                        </Badge>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
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

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing detailed case studies or discussing a project?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Let's Discuss Your Project
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;