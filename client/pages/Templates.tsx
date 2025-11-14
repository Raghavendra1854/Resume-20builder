import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Eye } from "lucide-react";
import { useState } from "react";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  bgGradient: string;
}

const templates: Template[] = [
  {
    id: "1",
    name: "Modern",
    description: "Clean and contemporary design with gradient header",
    category: "Professional",
    color: "from-purple-600 to-blue-600",
    bgGradient: "from-purple-50 to-blue-50",
  },
  {
    id: "2",
    name: "Classic",
    description: "Traditional format with timeless appeal",
    category: "Professional",
    color: "from-gray-700 to-gray-900",
    bgGradient: "from-gray-100 to-gray-200",
  },
  {
    id: "3",
    name: "Minimal",
    description: "Simple and elegant minimalist approach",
    category: "Clean",
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-white",
  },
  {
    id: "4",
    name: "Creative",
    description: "Modern layout with creative flair",
    category: "Creative",
    color: "from-pink-500 to-purple-600",
    bgGradient: "from-pink-50 to-purple-50",
  },
  {
    id: "5",
    name: "Executive",
    description: "Professional template for senior roles",
    category: "Professional",
    color: "from-indigo-600 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
  },
  {
    id: "6",
    name: "Tech",
    description: "Designed for tech professionals and developers",
    category: "Creative",
    color: "from-green-500 to-teal-600",
    bgGradient: "from-green-50 to-teal-50",
  },
  {
    id: "7",
    name: "Academic",
    description: "Perfect for academic and research backgrounds",
    category: "Professional",
    color: "from-blue-600 to-blue-800",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    id: "8",
    name: "Creative Plus",
    description: "Bold design for creative professionals",
    category: "Creative",
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    id: "9",
    name: "Simple",
    description: "No-frills, focus on content",
    category: "Clean",
    color: "from-gray-600 to-gray-700",
    bgGradient: "from-gray-50 to-white",
  },
  {
    id: "10",
    name: "Modern Plus",
    description: "Enhanced modern design with more features",
    category: "Professional",
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
  },
  {
    id: "11",
    name: "Compact",
    description: "Single-page template for concise resumes",
    category: "Clean",
    color: "from-slate-600 to-slate-800",
    bgGradient: "from-slate-100 to-slate-200",
  },
  {
    id: "12",
    name: "Designer",
    description: "Template for design and creative professionals",
    category: "Creative",
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  const categories = ["All", ...new Set(templates.map((t) => t.category))];

  const filteredTemplates = selectedCategory
    ? templates.filter((t) =>
        selectedCategory === "All" ? true : t.category === selectedCategory
      )
    : templates;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">ResumeAI</span>
            </div>

            <Link to="/builder">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                Create Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Template
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our professionally designed resume templates and customize
            to match your style
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  (!selectedCategory && category === "All") ||
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="flex-1 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Template Preview */}
                <div
                  className={`h-64 bg-gradient-to-br ${template.bgGradient} p-6 flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  {/* Simulated Resume Preview */}
                  <div className="w-full max-w-xs">
                    <div
                      className={`bg-gradient-to-r ${template.color} text-white p-4 rounded-lg mb-3`}
                    >
                      <h4 className="font-bold text-lg">John Doe</h4>
                      <p className="text-sm opacity-90">Senior Professional</p>
                    </div>

                    <div className="bg-white bg-opacity-90 rounded-lg p-4 space-y-2">
                      <p className="text-xs font-semibold text-gray-600">
                        EXPERIENCE
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        Tech Company
                      </p>
                      <p className="text-xs text-gray-600">2020 - Present</p>
                    </div>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setPreviewTemplate(template)}
                      className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                      Preview
                    </button>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {template.description}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setPreviewTemplate(template)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Preview
                    </button>
                    <Link to="/builder" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                        Use Template
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {previewTemplate.name} Template
              </h2>
              <button
                onClick={() => setPreviewTemplate(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div
                className={`bg-gradient-to-br ${previewTemplate.bgGradient} rounded-lg p-12 mb-6`}
              >
                <div
                  className={`bg-gradient-to-r ${previewTemplate.color} text-white p-8 rounded-lg mb-6`}
                >
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <p className="text-lg mt-2">Senior Professional</p>
                  <p className="text-sm mt-2">
                    john@example.com | (555) 123-4567 | San Francisco, CA
                  </p>
                </div>

                <div className="space-y-6 text-gray-900">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Summary</h3>
                    <p className="text-gray-700">
                      Experienced professional with 5+ years in the industry,
                      skilled in multiple technologies and methodologies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Experience</h3>
                    <div>
                      <p className="font-semibold">Senior Role - Tech Company</p>
                      <p className="text-gray-600">2020 - Present</p>
                      <p className="text-gray-700 mt-1">
                        Led development of key features and managed team.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Skills</h3>
                    <p className="text-gray-700">
                      React, TypeScript, Node.js, PostgreSQL, AWS, Docker
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <Link to="/builder" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                    Use This Template
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
