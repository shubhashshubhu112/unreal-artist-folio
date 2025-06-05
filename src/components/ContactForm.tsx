
import React, { useState } from 'react';
import { Send, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-lg border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-light text-gray-900">Quick Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-white/90 border-gray-200"
          />
          <Input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-white/90 border-gray-200"
          />
          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="bg-white/90 border-gray-200"
          />
          <Textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={3}
            className="bg-white/90 border-gray-200 resize-none"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
        
        <div className="pt-4 border-t border-gray-100 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            unreal.shubhu@gmail.com
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            +91 90765 33088
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
