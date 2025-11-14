import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ArrowLeft,
  Sparkles,
  Copy,
  Download,
  Loader,
} from "lucide-react";

interface GeneratedContent {
  summary: string;
  skills: string[];
  experience: Array<{
    title: string;
    bullets: string[];
  }>;
}

export default function AIAssistant() {
  const [inputText, setInputText] = useState("");
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!inputText.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockContent: GeneratedContent = {
        summary:
          "Results-driven professional with strong expertise in technology and project management. Known for delivering innovative solutions and leading cross-functional teams. Passionate about continuous learning and staying updated with industry trends. Proven track record of improving efficiency and driving business growth.",
        skills: [
          "Project Management",
          "Team Leadership",
          "Problem Solving",
          "Strategic Planning",
          "Data Analysis",
          "Communication",
          "Agile Methodologies",
          "Risk Management",
          "Stakeholder Management",
          "Process Improvement",
        ],
        experience: [
          {
            title: "Key Achievements & Responsibilities",
            bullets: [
              "Led cross-functional teams to deliver projects on time and within budget",
              "Implemented process improvements resulting in 30% efficiency gains",
              "Mentored junior team members and fostered professional development",
              "Managed stakeholder relationships and ensured customer satisfaction",
              "Developed and executed strategic plans aligned with business objectives",
            ],
          },
          {
            title: "Technical Competencies",
            bullets: [
              "Proficient in project management tools and methodologies",
              "Strong analytical and problem-solving abilities",
              "Experience with data-driven decision making",
              "Excellent communication and presentation skills",
              "Ability to work in fast-paced, dynamic environments",
            ],
          },
        ],
      };

      setGeneratedContent(mockContent);
      setIsLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

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
                Go to Builder
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Left Panel */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">AI Features</h2>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  🎯 Smart Content Generation
                </h3>
                <p className="text-gray-600">
                  Our AI analyzes your input and generates professional content optimized for ATS systems.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  💡 Skill Extraction
                </h3>
                <p className="text-gray-600">
                  Automatically identifies and extracts key skills from your bio or job description.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ✨ Professional Tone
                </h3>
                <p className="text-gray-600">
                  All content is written in professional language that impresses recruiters.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  📊 ATS Optimized
                </h3>
                <p className="text-gray-600">
                  Generated content is optimized to pass Applicant Tracking Systems.
                </p>
              </div>

              <div className="pt-4 border-t border-purple-200">
                <p className="text-xs text-gray-600">
                  💡 <strong>Tip:</strong> Paste your bio, job description, or previous resume content for best results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Main Content */}
        <div className="lg:col-span-2">
          {!generatedContent ? (
            // Input Section
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                AI Resume Assistant
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Let our AI help you create compelling resume content in seconds
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Paste Your Bio or Job Description
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your professional bio, job description, or previous resume content here. The more detail you provide, the better the AI-generated content will be.

Example:
I am a software engineer with 5 years of experience building web applications using React and Node.js. I've led a team of 3 developers and delivered multiple projects on time..."
                    className="w-full h-64 px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!inputText.trim() || isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 disabled:opacity-50 text-white px-6 py-4 text-lg rounded-lg font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Resume Content
                    </>
                  )}
                </Button>

                {isLoading && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Loader className="w-8 h-8 text-purple-600 animate-spin" />
                    </div>
                    <p className="text-purple-900 font-medium">
                      Our AI is crafting your resume content...
                    </p>
                    <p className="text-purple-700 text-sm mt-2">
                      This usually takes a few seconds
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Generated Content Section
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Your Generated Content
                </h2>
                <button
                  onClick={() => {
                    setGeneratedContent(null);
                    setInputText("");
                  }}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {/* Professional Summary */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Professional Summary
                    </h3>
                    <button
                      onClick={() => copyToClipboard(generatedContent.summary, "summary")}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {copied === "summary" ? (
                        <span className="text-green-600 text-sm font-medium">
                          Copied!
                        </span>
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {generatedContent.summary}
                  </p>
                </div>

                {/* Skills */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Suggested Skills
                    </h3>
                    <button
                      onClick={() =>
                        copyToClipboard(generatedContent.skills.join(", "), "skills")
                      }
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {copied === "skills" ? (
                        <span className="text-green-600 text-sm font-medium">
                          Copied!
                        </span>
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Bullets */}
                {generatedContent.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <button
                        onClick={() =>
                          copyToClipboard(exp.bullets.join("\n"), `exp-${idx}`)
                        }
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {copied === `exp-${idx}` ? (
                          <span className="text-green-600 text-sm font-medium">
                            Copied!
                          </span>
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex gap-3 text-gray-700"
                        >
                          <span className="text-purple-600 font-bold mt-1">
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setGeneratedContent(null);
                      setInputText("");
                    }}
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Generate Again
                  </Button>
                  <Link to="/builder" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                      <Download className="w-5 h-5 mr-2" />
                      Use in Resume Builder
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20 px-4 sm:px-6 lg:px-8 py-12">
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
