
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Eye, Upload, Plus, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const PortfolioEditor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    tags: [],
    images: [],
    videos: [],
    links: [],
    featured: false
  });

  const [newTag, setNewTag] = useState('');
  const [newLink, setNewLink] = useState({ type: 'external', url: '', label: '' });

  const handleSave = () => {
    // Save to localStorage for demo purposes
    const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    const newProject = {
      ...formData,
      id: Date.now(),
      slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
      createdAt: new Date().toISOString()
    };
    projects.push(newProject);
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    navigate('/portfolio');
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const addLink = () => {
    if (newLink.url && newLink.label) {
      setFormData(prev => ({
        ...prev,
        links: [...prev.links, newLink]
      }));
      setNewLink({ type: 'external', url: '', label: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/admin" className="mr-4">
              <ArrowLeft className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </Link>
            <h1 className="text-3xl font-light text-gray-900">New Portfolio Project</h1>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Save Project
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="Enter project subtitle"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter project description"
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.tags.map((tag, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {tag}
                    <button onClick={() => removeTag(index)} className="ml-2">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button onClick={addTag}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Images</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">Drag and drop images here or click to browse</p>
                  <input type="file" multiple accept="image/*" className="hidden" />
                </div>
              </div>
              <div>
                <Label>Video Links</Label>
                <Input placeholder="YouTube, Vimeo, or direct video URLs" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {formData.links.map((link, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">{link.label}</span>
                    <span className="text-sm text-gray-500">({link.type})</span>
                    <span className="flex-1 text-sm text-gray-600 truncate">{link.url}</span>
                  </div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    value={newLink.type}
                    onChange={(e) => setNewLink(prev => ({ ...prev, type: e.target.value }))}
                    className="border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="external">External Link</option>
                    <option value="github">GitHub</option>
                    <option value="video">Video</option>
                  </select>
                  <Input
                    value={newLink.label}
                    onChange={(e) => setNewLink(prev => ({ ...prev, label: e.target.value }))}
                    placeholder="Link label"
                  />
                  <div className="flex gap-2">
                    <Input
                      value={newLink.url}
                      onChange={(e) => setNewLink(prev => ({ ...prev, url: e.target.value }))}
                      placeholder="URL"
                    />
                    <Button onClick={addLink}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditor;
