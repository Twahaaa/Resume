import { 
  GraduationCap, 
  Code, 
  Briefcase, 
  Download,
  Globe,
  Database,
  Brain,
  FileText,
  Zap,
  Layers,
  Server,
  Cpu,
  Image,
  GitBranch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Resume = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume_3-1-2.pdf';
    link.download = 'Aboobakkar_Twaha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to get icon for each technology
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('next.js') || techLower.includes('nextjs')) return <Globe className="w-4 h-4" />;
    if (techLower.includes('react')) return <Layers className="w-4 h-4" />;
    if (techLower.includes('typescript')) return <FileText className="w-4 h-4" />;
    if (techLower.includes('javascript')) return <Code className="w-4 h-4" />;
    if (techLower.includes('node.js') || techLower.includes('nodejs')) return <Server className="w-4 h-4" />;
    if (techLower.includes('python')) return <Cpu className="w-4 h-4" />;
    if (techLower.includes('postgresql') || techLower.includes('mongodb') || techLower.includes('cosmos') || techLower.includes('neondb')) return <Database className="w-4 h-4" />;
    if (techLower.includes('azure') || techLower.includes('openai')) return <Brain className="w-4 h-4" />;
    if (techLower.includes('clerk')) return <Zap className="w-4 h-4" />;
    if (techLower.includes('prisma')) return <Database className="w-4 h-4" />;
    if (techLower.includes('nextauth')) return <Zap className="w-4 h-4" />;
    if (techLower.includes('bert') || techLower.includes('random forest') || techLower.includes('pytorch') || techLower.includes('transformers')) return <Brain className="w-4 h-4" />;
    if (techLower.includes('pandas') || techLower.includes('numpy')) return <FileText className="w-4 h-4" />;
    if (techLower.includes('hsi') || techLower.includes('hyperspectral')) return <Image className="w-4 h-4" />;
    if (techLower.includes('github')) return <GitBranch className="w-4 h-4" />;
    
    return <Code className="w-4 h-4" />; // Default icon
  };

  const skills = [
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "TypeScript", level: 72 },
    { name: "Node.js", level: 78 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Python", level: 80 },
    { name: "Machine Learning (BERT, Random Forest)", level: 75 },
    { name: "Data Structures & Algorithms (DSA)", level: 85 },
    { name: "PostgreSQL / MongoDB", level: 80 },
    { name: "Next.js", level: 80 },
  ];
  

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "AJ Institute of Engineering and Technology Mangalore ",
      year: "2020 - 2024",
      description: "Graduated with honors, focusing on web development and software engineering.",
    },
  ];

  const projects = [
    {
      title: "JOURNY - AI-Powered Journaling App",
      description:
        "A personal journaling platform that analyzes daily reflections using AI to provide mood insights and emotional growth tracking.",
      technologies: [
        "Next.js",
        "React",
        "Azure OpenAI",
        "Clerk.js",
        "Cosmos DB",
      ],
      github: "https://github.com/Twahaaa/JOURNY",
    },
    {
      title: "ProjectStack - Student Project Platform",
      description:
        "A web platform for college students to upload, explore, and showcase projects with secure authentication and filtering by tech stack.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL (NeonDB)",
        "Prisma",
        "NextAuth",
      ],
      github: "https://github.com/Ajiet-DevNation/project_stack",
    },
    {
      title:
        "Multiclass Diagnosis Classification (Oral Pathology & Microbiology)",
      description:
        "A multimodal ML model combining structured biopsy data and unstructured text using Random Forest and BERT to predict oral disease classes.",
      technologies: ["Python", "BERT", "Random Forest", "Pandas", "NumPy"],
      github: null,
    },
    {
      title: "Wavelength-Aware DSFormer for HSI Classification",
      description:
        "An enhanced DSFormer architecture with wavelength token pyramids and adaptive sparse attention for improved hyperspectral image classification.",
      technologies: ["PyTorch", "Transformers", "Python", "HSI Datasets"],
      github: "https://github.com/Twahaaa/DSFormer-modified",
    },
  ];
  


  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 mt-5">Resume</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A comprehensive overview of my professional journey
          </p>
          <Button 
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 hover-lift"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
        </div>

        {/* Education */}
        <section className="mb-16 fade-in-up delay-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-minty rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-lg text-primary mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.year}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16 fade-in-up delay-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-mochi rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          
          <div className="glass-card rounded-3xl p-8 hover-lift">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-3 bg-meringue"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16 fade-in-up delay-400">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-toffee rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-minty/50 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
