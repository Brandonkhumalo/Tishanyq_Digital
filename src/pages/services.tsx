import ServiceCard from "@/components/sections/service-card";
import Pricing from "@/components/sections/pricing";
import { Bot, Cloud, TrendingUp, Puzzle, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Business Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error in your business operations.",
    image: "https://images.unsplash.com/photo-1573497620494-a2f1330f0cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    icon: <Bot className="w-8 h-8" />,
    details: [
      "Workflow automation",
      "Document processing", 
      "Task scheduling",
      "Integration with existing systems",
      "Custom automation solutions",
      "Performance monitoring and optimization"
    ],
    gradient: "from-[hsl(var(--primary-600))] to-[hsl(var(--secondary-600))]"
  },
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud for improved scalability, security, and cost-effectiveness.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    icon: <Cloud className="w-8 h-8" />,
    details: [
      "AWS, Azure, GCP migration",
      "Data security & compliance",
      "Performance optimization",
      "24/7 monitoring & support",
      "Hybrid cloud solutions",
      "Disaster recovery planning"
    ],
    gradient: "from-[hsl(var(--secondary-600))] to-[hsl(var(--primary-600))]"
  },
  {
    title: "Digital Consultancy",
    description: "Strategic guidance to help you navigate digital transformation and leverage technology for competitive advantage.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    icon: <TrendingUp className="w-8 h-8" />,
    details: [
      "Digital strategy development",
      "Technology assessment",
      "Process optimization", 
      "Change management",
      "ROI analysis and planning",
      "Digital roadmap creation"
    ],
    gradient: "from-[hsl(var(--accent-green))] to-emerald-600"
  },
  {
    title: "Software Integration",
    description: "Connect your existing systems and applications to work together seamlessly and share data efficiently.",
    image: "https://images.unsplash.com/photo-1573497701119-52dbe8832c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    icon: <Puzzle className="w-8 h-8" />,
    details: [
      "API development & integration",
      "Database synchronization",
      "Legacy system modernization",
      "Real-time data flow",
      "Third-party service integration",
      "Custom middleware development"
    ],
    gradient: "from-[hsl(var(--accent-orange))] to-yellow-600"
  },
  {
    title: "Training & Workshops",
    description: "Empower your team with comprehensive training programs on digital tools and technologies.",
    image: "https://images.unsplash.com/photo-1573497701175-00c200fd57f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    icon: <GraduationCap className="w-8 h-8" />,
    details: [
      "Custom training programs",
      "Digital literacy workshops",
      "Technical skills development",
      "Ongoing support & mentorship",
      "Certification programs",
      "Remote and on-site training options"
    ],
    gradient: "from-purple-600 to-indigo-600"
  }
];

const Services = () => {
  return (
    <div className="pt-16" data-testid="services-page">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services & Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions with transparent pricing tailored for African businesses
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section (Now includes the detailed packages) */}
      <Pricing />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise to drive your digital growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <ServiceCard
                  {...service}
                  testId={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--primary-600))] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Discovery</h3>
              <p className="text-gray-600">We analyze your current processes and identify opportunities for improvement.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--secondary-600))] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive digital transformation strategy tailored to your needs.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--accent-green))] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
              <p className="text-gray-600">We execute the solution with minimal disruption to your business operations.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[hsl(var(--accent-orange))] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Support</h3>
              <p className="text-gray-600">We provide ongoing support and training to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
