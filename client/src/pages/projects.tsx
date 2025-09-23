import { Calendar, ExternalLink, Globe, Server, Cloud, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "ZimBank Digital Transformation",
    category: "Current Project",
    status: "In Progress",
    description: "Complete digital overhaul of banking operations including core banking system migration to cloud infrastructure and automated loan processing workflows.",
    technologies: ["Cloud Migration", "Process Automation", "Security Implementation"],
    duration: "12 months",
    startDate: "January 2025",
    client: "Major Zimbabwean Bank",
    icon: <Cloud className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573497620494-a2f1330f0cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    gradient: "from-blue-600 to-cyan-600",
    highlights: [
      "60% reduction in processing time",
      "Enhanced security protocols",
      "Real-time transaction monitoring",
      "Automated compliance reporting"
    ]
  },
  {
    id: 2,
    title: "AgriTech Supply Chain Platform",
    category: "Current Project",
    status: "In Progress",
    description: "Development of an integrated platform connecting farmers, distributors, and retailers across Zimbabwe with real-time inventory tracking and automated ordering systems.",
    technologies: ["Software Integration", "Mobile Apps", "IoT Integration"],
    duration: "8 months",
    startDate: "March 2025",
    client: "Agricultural Cooperative",
    icon: <Server className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    gradient: "from-green-600 to-emerald-600",
    highlights: [
      "Multi-platform integration",
      "Real-time inventory tracking",
      "Automated order processing",
      "Mobile-first design"
    ]
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Completed Project",
    status: "Completed",
    description: "Comprehensive patient management system for a network of clinics including appointment scheduling, electronic health records, and billing automation.",
    technologies: ["Digital Consultancy", "Process Automation", "Training"],
    duration: "6 months",
    startDate: "June 2024",
    client: "Healthcare Network",
    icon: <Bot className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    gradient: "from-purple-600 to-indigo-600",
    highlights: [
      "40% reduction in administrative tasks",
      "Integrated billing system",
      "Electronic health records",
      "Staff training program completed"
    ]
  },
  {
    id: 4,
    title: "Retail Chain Automation",
    category: "Completed Project",
    status: "Completed",
    description: "Implementation of inventory management automation and point-of-sale integration across 15 retail locations with centralized reporting and analytics.",
    technologies: ["Business Process Automation", "Software Integration"],
    duration: "4 months",
    startDate: "February 2024",
    client: "Retail Chain",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573497701119-52dbe8832c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    gradient: "from-orange-600 to-red-600",
    highlights: [
      "15 locations integrated",
      "Real-time inventory sync",
      "Centralized reporting",
      "25% increase in efficiency"
    ]
  },
  {
    id: 5,
    title: "Manufacturing ERP Implementation",
    category: "Completed Project",
    status: "Completed",
    description: "Complete ERP system implementation for manufacturing company including production planning, quality control, and supply chain management modules.",
    technologies: ["Cloud Migration", "Process Automation", "Training"],
    duration: "10 months",
    startDate: "April 2023",
    client: "Manufacturing Company",
    icon: <Server className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    gradient: "from-gray-700 to-slate-600",
    highlights: [
      "Full ERP integration",
      "Production optimization",
      "Quality control automation",
      "30% cost reduction achieved"
    ]
  },
  {
    id: 6,
    title: "Educational Institution Portal",
    category: "Completed Project",
    status: "Completed",
    description: "Student information system with online learning management, grade tracking, and parent communication portal for a university with 5,000+ students.",
    technologies: ["Software Integration", "Digital Consultancy", "Training"],
    duration: "5 months",
    startDate: "September 2023",
    client: "University",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573497701175-00c200fd57f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    gradient: "from-teal-600 to-cyan-600",
    highlights: [
      "5,000+ students managed",
      "Online learning platform",
      "Parent communication portal",
      "Automated grade tracking"
    ]
  }
];

const Projects = () => {
  const currentProjects = projects.filter(project => project.category === "Current Project");
  const completedProjects = projects.filter(project => project.category === "Completed Project");

  return (
    <div className="pt-16" data-testid="projects-page">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses across Africa through innovative digital solutions and strategic implementations
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Current Projects</h2>
            <p className="text-lg text-gray-600">
              Active initiatives driving digital transformation across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                data-testid={`project-card-${project.id}`}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Completed Projects</h2>
            <p className="text-lg text-gray-600">
              Successful implementations that have transformed our clients' operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-all duration-300"
                data-testid={`project-card-${project.id}`}
              >
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                      ✓ {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{project.startDate} • {project.duration}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Results</h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our growing list of successful projects and transform your business operations with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold"
                data-testid="cta-discuss-project"
              >
                Discuss Your Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg"
                data-testid="cta-view-services"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;