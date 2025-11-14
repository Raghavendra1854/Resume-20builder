import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Check, X, Zap, Star, Crown } from "lucide-react";
import { useState } from "react";

interface PlanFeature {
  name: string;
  free: boolean;
  pro: boolean;
  premium: boolean;
}

const planFeatures: PlanFeature[] = [
  { name: "Resume Templates", free: true, pro: true, premium: true },
  { name: "Resume Editor", free: true, pro: true, premium: true },
  { name: "Number of Resumes", free: false, pro: true, premium: true },
  { name: "PDF Export", free: false, pro: true, premium: true },
  { name: "DOCX Export", free: false, pro: true, premium: true },
  { name: "AI Content Suggestions", free: false, pro: true, premium: true },
  { name: "Cover Letter Builder", free: false, pro: false, premium: true },
  { name: "Resume Analytics", free: false, pro: false, premium: true },
  { name: "ATS Optimization", free: false, pro: false, premium: true },
  { name: "Priority Support", free: false, pro: false, premium: true },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const proPrice = billingPeriod === "monthly" ? 9.99 : 99.99;
  const premiumPrice = billingPeriod === "monthly" ? 19.99 : 199.99;

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
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose the perfect plan for your needs and start building your
            professional resume today
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors relative ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Yearly
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/forever</span>
              </div>

              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 mb-8"
              >
                Get Started
              </Button>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">1 Resume Template</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Basic Resume Editor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Limited Downloads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">PDF/DOCX Export</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">AI Suggestions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-purple-600 rounded-2xl p-8 transform scale-105 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600">For serious job seekers</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ${proPrice}
                </span>
                <span className="text-gray-600">
                  /{billingPeriod === "monthly" ? "month" : "year"}
                </span>
              </div>

              <Link to="/builder">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white mb-8">
                  Start Free Trial
                </Button>
              </Link>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">
                    Everything in Free, plus:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        20+ Professional Templates
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Unlimited Resumes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">PDF & DOCX Export</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        AI Content Suggestions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">
                        Cover Letter Builder
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
                  <Crown className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-gray-600">For maximum career growth</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ${premiumPrice}
                </span>
                <span className="text-gray-600">
                  /{billingPeriod === "monthly" ? "month" : "year"}
                </span>
              </div>

              <Link to="/builder">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white mb-8">
                  Start Free Trial
                </Button>
              </Link>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">
                    Everything in Pro, plus:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Cover Letter Builder
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Resume Analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">ATS Optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Priority Email Support
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Early Access to New Features
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Detailed Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">
                    Free
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-purple-600">
                    Pro
                  </th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {planFeatures.map((feature) => (
                  <tr
                    key={feature.name}
                    className="border-b border-gray-200 hover:bg-white"
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.free ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.pro ? (
                        <Check className="w-5 h-5 text-purple-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-blue-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Resume?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Start with our free plan and upgrade whenever you're ready
          </p>
          <Link to="/builder">
            <Button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Build Your Resume Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">ResumeAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                The AI-powered resume builder
              </p>
            </div>

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
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    About
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

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

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
