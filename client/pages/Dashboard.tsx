import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  LogOut,
  Plus,
  Edit,
  Download,
  Trash2,
  Settings,
  User,
  Copy,
  Eye,
} from "lucide-react";
import { useState } from "react";

interface Resume {
  id: string;
  name: string;
  template: string;
  lastEdited: string;
  createdAt: string;
}

export default function Dashboard() {
  const [resumes, setResumes] = useState<Resume[]>([
    {
      id: "1",
      name: "Software Engineer Resume",
      template: "Modern",
      lastEdited: "2 hours ago",
      createdAt: "5 days ago",
    },
    {
      id: "2",
      name: "Product Manager Resume",
      template: "Classic",
      lastEdited: "1 day ago",
      createdAt: "2 weeks ago",
    },
    {
      id: "3",
      name: "Design Portfolio",
      template: "Creative",
      lastEdited: "3 days ago",
      createdAt: "3 weeks ago",
    },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("resumes");

  const deleteResume = (id: string) => {
    setResumes(resumes.filter((r) => r.id !== id));
  };

  const duplicateResume = (resume: Resume) => {
    const newResume = {
      ...resume,
      id: Date.now().toString(),
      name: `${resume.name} (Copy)`,
    };
    setResumes([...resumes, newResume]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="sticky top-0 h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">ResumeAI</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {[
            { id: "resumes", label: "My Resumes", icon: FileText },
            { id: "templates", label: "Templates", icon: FileText },
            { id: "profile", label: "Profile", icon: User },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4">
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${!sidebarOpen && "justify-center"}`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="font-medium">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeSection === "resumes" && "My Resumes"}
              {activeSection === "templates" && "Templates"}
              {activeSection === "profile" && "Profile"}
              {activeSection === "settings" && "Settings"}
            </h1>

            {activeSection === "resumes" && (
              <Link to="/builder">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Create New Resume
                </Button>
              </Link>
            )}
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {activeSection === "resumes" && (
            <div>
              {resumes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resumes.map((resume) => (
                    <div
                      key={resume.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                    >
                      {/* Preview */}
                      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {resume.template}
                          </p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {resume.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Edited {resume.lastEdited}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-2 mb-4">
                          <Link to="/builder" className="flex-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full border-gray-300"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-300"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* More Actions */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => duplicateResume(resume)}
                            className="flex-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                          >
                            <Copy className="w-4 h-4" />
                            Duplicate
                          </button>
                          <button
                            onClick={() => deleteResume(resume.id)}
                            className="flex-1 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No resumes yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create your first resume to get started
                  </p>
                  <Link to="/builder">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                      <Plus className="w-5 h-5 mr-2" />
                      Create New Resume
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeSection === "templates" && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Templates Section
              </h3>
              <p className="text-gray-600 mb-6">
                Browse and select from our collection of professional templates
              </p>
              <Link to="/templates">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                  View All Templates
                </Button>
              </Link>
            </div>
          )}

          {activeSection === "profile" && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Profile Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        John Doe
                      </h3>
                      <p className="text-gray-600">john@example.com</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                      Save Changes
                    </Button>
                    <Button variant="outline" className="border-gray-300">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "settings" && (
            <div className="max-w-2xl space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Account Settings
                </h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Email Notifications
                      </p>
                      <p className="text-sm text-gray-600">
                        Receive updates about your resumes
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 rounded cursor-pointer"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-gray-600">
                        Add an extra layer of security
                      </p>
                    </div>
                    <Button variant="outline" className="border-gray-300">
                      Enable
                    </Button>
                  </div>

                  <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Change Password
                      </p>
                      <p className="text-sm text-gray-600">
                        Update your password regularly
                      </p>
                    </div>
                    <Button variant="outline" className="border-gray-300">
                      Change
                    </Button>
                  </div>

                  <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-red-600">
                        Delete Account
                      </p>
                      <p className="text-sm text-gray-600">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
