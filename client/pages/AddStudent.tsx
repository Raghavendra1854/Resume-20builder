import { Link } from "react-router-dom";
import { QrCode, ArrowLeft } from "lucide-react";

export default function AddStudent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">AttendQR</span>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <QrCode className="w-10 h-10 text-blue-600" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Add Student
            </h1>

            <p className="text-gray-600 mb-8">
              This page will contain a form for adding new students with fields for name,
              roll number, class, and email, plus a QR code generation panel.
            </p>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-8">
              <p className="text-sm text-blue-900">
                💡 Ask me to build out the add student form with QR generation!
              </p>
            </div>

            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
