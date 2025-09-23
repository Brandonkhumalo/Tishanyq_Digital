import Hero from "@/components/sections/hero";
import Values from "@/components/sections/values";
import ServiceCard from "@/components/sections/service-card";
import { Bot, Cloud, TrendingUp, Puzzle, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
      "Integration with existing systems"
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
      "24/7 monitoring & support"
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
      "Change management"
    ],
    gradient: "from-[hsl(var(--accent-green))] to-emerald-600"
  }
];

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Tishanyq Digital</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Based in Zimbabwe, we're passionate about digital empowerment across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To bridge the digital divide by providing cutting-edge technology solutions that empower African businesses and individuals to thrive in the digital economy.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  A digitally transformed Africa where technology serves as the catalyst for sustainable economic growth, innovation, and inclusive prosperity.
                </p>
              </div>
              
              <div className="pt-6">
                <Link href="/about">
                  <Button className="primary-btn px-6 py-3 rounded-xl" data-testid="learn-more-about">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="African American professionals collaborating at table discussing business" 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
          </div>

          <Values />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions tailored for African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                testId={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="primary-btn px-8 py-4 rounded-xl text-lg" data-testid="view-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real transformations we've delivered for businesses across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Banking Digital Transformation</h3>
                <p className="text-blue-100 text-sm">Complete core banking system migration with 60% reduction in processing time</p>
              </div>
              <div className="text-sm text-blue-100">In Progress • 12 months</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AgriTech Supply Chain</h3>
                <p className="text-green-100 text-sm">Integrated platform connecting farmers with real-time inventory tracking</p>
              </div>
              <div className="text-sm text-green-100">In Progress • 8 months</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthcare Management</h3>
                <p className="text-purple-100 text-sm">Patient management system with 40% reduction in administrative tasks</p>
              </div>
              <div className="text-sm text-purple-100">✓ Completed • 6 months</div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button className="secondary-btn px-8 py-4 rounded-xl text-lg" data-testid="view-all-projects">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you leverage technology for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="accent-green-btn px-8 py-4 rounded-xl text-lg" data-testid="cta-contact">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="px-8 py-4 rounded-xl text-lg" data-testid="cta-services">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
