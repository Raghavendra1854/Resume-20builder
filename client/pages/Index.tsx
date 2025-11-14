import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Zap,
  Download,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Created my professional resume in just 15 minutes! The AI suggestions were incredibly helpful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    text: "Best resume builder I've used. The templates look amazing and are easy to customize.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Designer",
    text: "The drag-and-drop editor is so intuitive. I got multiple interview calls within a week!",
    rating: 5,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI Auto-Fill Resume",
    description: "Let our AI intelligently fill in your resume based on your information",
  },
  {
    icon: Download,
    title: "Download in PDF/Word",
    description: "Export your resume in multiple formats ready for job applications",
  },
  {
    icon: FileText,
    title: "20+ Templates",
    description: "Choose from professionally designed resume templates",
  },
  {
    icon: Zap,
    title: "Skill Suggestions",
    description: "Get AI-powered suggestions to improve your skills section",
  },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">ResumeAI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/templates"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Templates
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/ai-assistant"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                AI Assistant
              </Link>
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Features
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex gap-3">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Sign In
              </Button>
              <Link to="/builder">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                  Build Resume
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4 pt-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/templates"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  Templates
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to="/ai-assistant"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  AI Assistant
                </Link>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  Features
                </a>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" className="w-full border-gray-300">
                    Sign In
                  </Button>
                  <Link to="/builder" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                      Build Resume
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-white via-purple-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Create Your Professional Resume
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    in Minutes
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                  AI-powered resume builder that helps you create stunning,
                  ATS-friendly resumes that get noticed by recruiters.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/builder">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Build My Resume
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button
                    variant="outline"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-lg w-full sm:w-auto"
                  >
                    Explore Templates
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Resume Preview Card */}
                <div className="w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                    <h3 className="font-bold text-lg">John Doe</h3>
                    <p className="text-sm text-purple-100">
                      Senior Software Engineer
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        Contact
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        john@example.com | (555) 123-4567
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        Experience
                      </p>
                      <p className="text-sm text-gray-700 mt-1 font-semibold">
                        Tech Company
                      </p>
                      <p className="text-xs text-gray-500">2020 - Present</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        Skills
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        React, TypeScript, Node.js
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Gradient Ball */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a professional resume that stands out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-purple-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-blue-200 transition-all">
                    <IconComponent className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our users have to say about ResumeAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Join thousands of job seekers who've landed their dream jobs with
            ResumeAI
          </p>
          <Link to="/builder">
            <Button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Start Building Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-white">ResumeAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                The AI-powered resume builder that gets you hired.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/builder"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/templates"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2024 ResumeAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
