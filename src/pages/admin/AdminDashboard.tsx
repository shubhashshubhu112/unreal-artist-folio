
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, FileText, Briefcase, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Content Management</h1>
          <p className="text-xl text-gray-600">Manage your portfolio projects and blog posts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                Portfolio Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link 
                to="/admin/portfolio/new" 
                className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Project
              </Link>
              <Link 
                to="/admin/portfolio" 
                className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                Manage Projects
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-green-600" />
                Blog Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link 
                to="/admin/blog/new" 
                className="flex items-center justify-center w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Post
              </Link>
              <Link 
                to="/admin/blog" 
                className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                Manage Posts
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-6 h-6 mr-2 text-purple-600" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Site Settings
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
                Media Library
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
