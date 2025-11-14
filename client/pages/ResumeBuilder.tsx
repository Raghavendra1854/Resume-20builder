import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Plus,
  Download,
  ChevronDown,
  X,
  Copy,
  ArrowLeft,
  File,
  Palette,
} from "lucide-react";

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    graduationDate: string;
  }>;
  skills: string[];
  projects: Array<{
    id: string;
    name: string;
    description: string;
    link: string;
  }>;
  certifications: Array<{
    id: string;
    name: string;
    issuer: string;
    date: string;
  }>;
  languages: Array<{
    id: string;
    language: string;
    proficiency: string;
  }>;
}

const templates = ["Modern", "Classic", "Creative", "Minimal"];

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState<string>("personalInfo");
  const [selectedTemplate, setSelectedTemplate] = useState("Modern");
  const [showTemplateMenu, setShowTemplateMenu] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      summary:
        "Experienced software engineer with 5+ years of expertise in full-stack development.",
    },
    experience: [
      {
        id: "1",
        company: "Tech Company",
        position: "Senior Software Engineer",
        startDate: "2020",
        endDate: "Present",
        description: "Led development of key features and mentored junior engineers.",
      },
    ],
    education: [
      {
        id: "1",
        school: "University of California",
        degree: "Bachelor of Science",
        field: "Computer Science",
        graduationDate: "2019",
      },
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    projects: [
      {
        id: "1",
        name: "Portfolio Website",
        description: "Personal portfolio built with React and Tailwind CSS",
        link: "https://example.com",
      },
    ],
    certifications: [
      {
        id: "1",
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2022",
      },
    ],
    languages: [
      { id: "1", language: "English", proficiency: "Fluent" },
      { id: "2", language: "Spanish", proficiency: "Conversational" },
    ],
  });

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [field]: value },
    });
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExp],
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const deleteExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, ""],
    });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = value;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  const deleteSkill = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  const handleExport = (format: "pdf" | "docx") => {
    alert(`Exporting resume as ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">ResumeAI</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowTemplateMenu(!showTemplateMenu)}
                  className="flex items-center gap-2"
                >
                  <Palette className="w-4 h-4" />
                  {selectedTemplate}
                  <ChevronDown className="w-4 h-4" />
                </Button>

                {showTemplateMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {templates.map((template) => (
                      <button
                        key={template}
                        onClick={() => {
                          setSelectedTemplate(template);
                          setShowTemplateMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          selectedTemplate === template
                            ? "bg-purple-50 text-purple-600 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {template}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="outline" onClick={() => handleExport("pdf")}>
                <Download className="w-4 h-4 mr-2" />
                PDF
              </Button>
              <Button
                variant="outline"
                onClick={() => handleExport("docx")}
              >
                <File className="w-4 h-4 mr-2" />
                DOCX
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                Save Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Sections */}
        <div className="w-full md:w-96 bg-white border-r border-gray-200 overflow-y-auto flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Resume Sections
            </h2>
            <div className="space-y-2">
              {[
                { id: "personalInfo", label: "Personal Information" },
                { id: "summary", label: "Professional Summary" },
                { id: "experience", label: "Experience" },
                { id: "education", label: "Education" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "certifications", label: "Certifications" },
                { id: "languages", label: "Languages" },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-purple-100 text-purple-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeSection === "personalInfo" && (
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.fullName}
                    onChange={(e) =>
                      updatePersonalInfo("fullName", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo("email", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.location}
                    onChange={(e) =>
                      updatePersonalInfo("location", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Summary
                  </label>
                  <textarea
                    value={resumeData.personalInfo.summary}
                    onChange={(e) =>
                      updatePersonalInfo("summary", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            )}

            {activeSection === "experience" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Experience</h3>
                  <Button
                    size="sm"
                    onClick={addExperience}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(exp.id, "company", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <button
                          onClick={() => deleteExperience(exp.id)}
                          className="text-red-600 hover:text-red-700 ml-2"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Position
                          </label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) =>
                              updateExperience(exp.id, "position", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Start Date
                            </label>
                            <input
                              type="text"
                              placeholder="2020"
                              value={exp.startDate}
                              onChange={(e) =>
                                updateExperience(
                                  exp.id,
                                  "startDate",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              End Date
                            </label>
                            <input
                              type="text"
                              placeholder="Present"
                              value={exp.endDate}
                              onChange={(e) =>
                                updateExperience(exp.id, "endDate", e.target.value)
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                          </label>
                          <textarea
                            value={exp.description}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "description",
                                e.target.value
                              )
                            }
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "skills" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Skills</h3>
                  <Button
                    size="sm"
                    onClick={addSkill}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
                <div className="space-y-3">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter skill"
                      />
                      <button
                        onClick={() => deleteSkill(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection !== "personalInfo" &&
              activeSection !== "experience" &&
              activeSection !== "skills" && (
                <div className="text-center py-8">
                  <p className="text-gray-600">
                    Section editor coming soon for {activeSection}
                  </p>
                </div>
              )}
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="hidden md:flex flex-1 bg-gray-50 p-8 overflow-y-auto">
          <div className="flex-1 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Template-based Preview */}
            {selectedTemplate === "Modern" && (
              <div className="p-12">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 -m-12 mb-8">
                  <h1 className="text-4xl font-bold">
                    {resumeData.personalInfo.fullName}
                  </h1>
                  <p className="text-purple-100 mt-2">
                    {resumeData.personalInfo.location} •{" "}
                    {resumeData.personalInfo.email} •{" "}
                    {resumeData.personalInfo.phone}
                  </p>
                </div>

                {/* Summary */}
                {resumeData.personalInfo.summary && (
                  <div className="mb-8">
                    <p className="text-gray-700">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>
                )}

                {/* Experience */}
                {resumeData.experience.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-600">
                      EXPERIENCE
                    </h2>
                    <div className="space-y-4">
                      {resumeData.experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-gray-900">
                                {exp.position}
                              </h3>
                              <p className="text-gray-600">{exp.company}</p>
                            </div>
                            <p className="text-sm text-gray-600">
                              {exp.startDate} - {exp.endDate}
                            </p>
                          </div>
                          {exp.description && (
                            <p className="text-gray-700 text-sm mt-2">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {resumeData.skills.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-600">
                      SKILLS
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, idx) => (
                        skill && (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {selectedTemplate === "Classic" && (
              <div className="p-12">
                <div className="border-b-4 border-gray-900 pb-6 mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {resumeData.personalInfo.fullName}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {resumeData.personalInfo.email} |{" "}
                    {resumeData.personalInfo.phone} |{" "}
                    {resumeData.personalInfo.location}
                  </p>
                </div>

                {resumeData.personalInfo.summary && (
                  <div className="mb-6">
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                      Summary
                    </h2>
                    <p className="text-gray-700 text-sm">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>
                )}

                {resumeData.experience.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Experience
                    </h2>
                    <div className="space-y-3">
                      {resumeData.experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between">
                            <h3 className="font-bold text-gray-900">
                              {exp.position}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {exp.startDate} - {exp.endDate}
                            </p>
                          </div>
                          <p className="text-gray-700 text-sm font-semibold">
                            {exp.company}
                          </p>
                          {exp.description && (
                            <p className="text-gray-700 text-sm mt-1">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {resumeData.skills.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">
                      Skills
                    </h2>
                    <p className="text-gray-700 text-sm">
                      {resumeData.skills.filter((s) => s).join(" • ")}
                    </p>
                  </div>
                )}
              </div>
            )}

            {["Minimal", "Creative"].includes(selectedTemplate) && (
              <div className="p-12">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {resumeData.personalInfo.fullName}
                  </h1>
                  <p className="text-purple-600 font-medium mt-1">
                    {resumeData.personalInfo.location}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {resumeData.personalInfo.email} •{" "}
                    {resumeData.personalInfo.phone}
                  </p>
                </div>

                {resumeData.personalInfo.summary && (
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-gray-700 text-sm">
                      {resumeData.personalInfo.summary}
                    </p>
                  </div>
                )}

                {resumeData.experience.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h2 className="font-bold text-gray-900 mb-3">Experience</h2>
                    <div className="space-y-2">
                      {resumeData.experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between">
                            <p className="font-semibold text-gray-900">
                              {exp.position}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {exp.startDate} - {exp.endDate}
                            </p>
                          </div>
                          <p className="text-gray-600 text-sm">{exp.company}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {resumeData.skills.length > 0 && (
                  <div>
                    <h2 className="font-bold text-gray-900 mb-2">Skills</h2>
                    <p className="text-gray-700 text-sm">
                      {resumeData.skills.filter((s) => s).join(", ")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
