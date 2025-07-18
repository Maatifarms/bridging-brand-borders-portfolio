import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Linkedin,
  MapPin,
  Send,
  Calendar
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = "Hi Shriyanshi, I'm interested in discussing your services.";
    const url = `https://wa.me/919151814636?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shriyanshi@maatifarms.com",
      action: "mailto:shriyanshi@maatifarms.com",
      type: "link" as const
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91518 14636",
      action: "tel:+919151814636",
      type: "link" as const
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Quick Chat",
      action: handleWhatsApp,
      type: "function" as const
    },
    {
      icon: MapPin,
      label: "Based in",
      value: "India",
      action: null,
      type: "text" as const
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      url: "https://www.linkedin.com/in/researcher-in-the-woods"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your content, ensure compliance, or expand globally? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 text-primary mr-2" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="content">Content Creation</option>
                    <option value="tax">Tax & Finance Consulting</option>
                    <option value="exim">Export-Import Consulting</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, timeline, and how I can help..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary text-primary-foreground hover-scale">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        {info.type === 'text' ? (
                          <p className="text-muted-foreground">{info.value}</p>
                        ) : (
                          <Button
                            variant="link"
                            className="p-0 h-auto text-muted-foreground hover:text-primary"
                            onClick={info.type === 'link' ? () => window.location.href = info.action as string : info.action as () => void}
                          >
                            {info.value}
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{social.label}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-muted-foreground hover:text-primary"
                          onClick={() => window.open(social.url, '_blank')}
                        >
                          {social.value}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white hover-scale"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quick WhatsApp Chat
              </Button>
              
              <Button variant="outline" className="w-full hover-scale">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;