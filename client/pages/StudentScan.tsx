import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QrCode, ArrowLeft, CheckCircle, AlertCircle, X } from "lucide-react";

type NotificationType = "success" | "error" | null;

export default function StudentScan() {
  const [notification, setNotification] = useState<NotificationType>(null);
  const [scannedData, setScannedData] = useState<string>("");
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      // Randomly succeed or fail for demo
      const shouldSucceed = Math.random() > 0.3;
      if (shouldSucceed) {
        setScannedData("STU001 - John Doe");
        setNotification("success");
      } else {
        setNotification("error");
      }
      setIsScanning(false);
    }, 2000);
  };

  const closeNotification = () => {
    setNotification(null);
    setScannedData("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between h-16">
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
        <div className="w-full max-w-lg">
          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Mark Attendance
              </h1>
              <p className="text-gray-600">
                Scan your QR code to mark attendance
              </p>
            </div>

            {/* Camera Preview Box */}
            <div className="relative mb-8">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-dashed border-blue-300 flex items-center justify-center overflow-hidden">
                {isScanning ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin">
                      <QrCode className="w-16 h-16 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">Scanning...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <QrCode className="w-16 h-16 text-blue-300" />
                    <p className="text-gray-500 text-center text-sm">
                      Position QR code within frame
                    </p>
                  </div>
                )}

                {/* Scanning Frame Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-blue-400 rounded-lg opacity-50"></div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-900">
                  📱 <strong>Tip:</strong> Hold your phone steady and ensure
                  good lighting for faster scanning.
                </p>
              </div>
            </div>

            {/* Scan Button */}
            <Button
              onClick={handleScan}
              disabled={isScanning}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {isScanning ? "Scanning..." : "Start Scan"}
            </Button>

            {/* Alternative Text */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Having trouble? Check your camera permissions or try again.
            </p>
          </div>
        </div>
      </main>

      {/* Success Notification */}
      {notification === "success" && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-sm w-full animate-in fade-in zoom-in">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <button
                onClick={closeNotification}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Attendance Marked!
            </h2>
            <p className="text-gray-600 mb-6">{scannedData}</p>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-6">
              <p className="text-sm text-green-900">
                ✓ Your attendance has been recorded successfully.
              </p>
            </div>

            <Button
              onClick={closeNotification}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Done
            </Button>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {notification === "error" && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-sm w-full animate-in fade-in zoom-in">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <button
                onClick={closeNotification}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Scan Failed
            </h2>
            <p className="text-gray-600 mb-6">
              Unable to read QR code. Please try again.
            </p>

            <div className="bg-red-50 p-4 rounded-xl border border-red-200 mb-6">
              <p className="text-sm text-red-900">
                ✗ Make sure the QR code is clearly visible and well-lit.
              </p>
            </div>

            <Button
              onClick={closeNotification}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Try Again
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
