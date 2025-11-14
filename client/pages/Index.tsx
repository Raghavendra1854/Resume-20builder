import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Zap,
  BarChart3,
  QrCode,
  ChevronRight,
  Menu,
} from "lucide-react";
import { useState } from "react";

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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">AttendQR</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#footer"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Admin Login Button */}
            <div className="hidden md:block">
              <Link to="/admin">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Admin Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4 pt-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Home
                </Link>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#footer"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Contact
                </a>
                <Link to="/admin">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Admin Login
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  QR-Based
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {" "}
                    Attendance System
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
                  Modern, efficient, and secure attendance tracking with QR codes.
                  Perfect for schools, colleges, and enterprises.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/scan">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Scan QR
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg w-full sm:w-auto"
                  >
                    Admin Login
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Mobile Phone Mockup */}
                <div className="w-64 h-96 bg-black rounded-3xl shadow-2xl p-3 border-8 border-gray-900">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                    <div className="text-center">
                      <QrCode className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                      <p className="text-sm font-semibold text-gray-700">
                        Point camera at QR code
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Gradient Ball */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"></div>
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
              Everything you need to manage attendance efficiently and securely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Real-time Attendance */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-200 transition-all">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-time Attendance
              </h3>
              <p className="text-gray-600">
                Track attendance instantly with live updates and real-time
                synchronization across all devices.
              </p>
            </div>

            {/* Feature 2: QR Scanning */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-200 transition-all">
                <QrCode className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                QR Code Scanning
              </h3>
              <p className="text-gray-600">
                Generate unique QR codes for each student and scan them with
                any device camera in seconds.
              </p>
            </div>

            {/* Feature 3: Reports & Analytics */}
            <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-200 transition-all">
                <BarChart3 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reports & Analytics
              </h3>
              <p className="text-gray-600">
                Generate comprehensive attendance reports and analytics to track
                patterns and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-900">
                  AttendQR
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Modern QR-based attendance system for schools and enterprises.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/scan"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    Scan QR
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © 2024 AttendQR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
