import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden" data-testid="hero-section">
      {/* Hero Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming the Future with{" "}
                <span className="text-[hsl(var(--accent-green))]">Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                Tishanyq Digital empowers African businesses and individuals through smart, efficient tech solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  className="accent-green-btn px-8 py-4 rounded-xl text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
                  data-testid="cta-get-started"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--primary-600))] px-8 py-4 rounded-xl text-lg"
                  data-testid="cta-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--accent-orange))]" data-testid="stat-projects">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--accent-green))]" data-testid="stat-clients">50+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white" data-testid="stat-experience">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573497619951-6c9477fb83b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="African American woman professional using MacBook in modern workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto transform rotate-3 hover:rotate-0 transition-transform duration-500" 
              data-testid="hero-image"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[hsl(var(--accent-green))] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Digital Innovation</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float-delayed">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[hsl(var(--accent-orange))] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📈</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Growth Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
