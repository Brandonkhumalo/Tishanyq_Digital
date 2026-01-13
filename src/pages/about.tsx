import Values from "@/components/sections/values";
import { MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Tishanyq Digital</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Zimbabwe, we're passionate about digital empowerment across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  To bridge the digital divide by providing cutting-edge technology solutions that empower African businesses and individuals to thrive in the digital economy. We believe that technology should be accessible, efficient, and transformative for everyone.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-900">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  A digitally transformed Africa where technology serves as the catalyst for sustainable economic growth, innovation, and inclusive prosperity. We envision a future where every African business and individual has access to world-class digital solutions.
                </p>
              </div>
              
              <div className="pt-6">
                <div className="flex items-center space-x-3 text-[hsl(var(--primary-600))]">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg font-medium">Proudly Based in Zimbabwe</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497620166-aef748c8c792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="African American woman professional in blue shirt working at modern office" 
                className="rounded-2xl shadow-xl w-full h-auto" 
                data-testid="about-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Values />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded with a vision to transform Africa's digital landscape
            </p>
          </div>

          <div className="space-y-8 text-lg text-gray-600">
            <p>
              Tishanyq Digital was born from a simple yet powerful belief: that every African business deserves access to world-class technology solutions. Founded in Zimbabwe, our company emerged from the recognition that traditional approaches to business processes were holding back the incredible potential of African enterprises.
            </p>
            
            <p>
              Our founders, passionate about technology and committed to African development, saw an opportunity to bridge the gap between cutting-edge digital solutions and local business needs. They understood that successful digital transformation requires more than just technology—it requires understanding, cultural sensitivity, and a genuine commitment to empowerment.
            </p>
            
            <p>
              Today, we serve businesses across Africa, helping them streamline operations, embrace cloud technologies, and unlock new opportunities through digital innovation. Our team combines deep technical expertise with intimate knowledge of African business environments, ensuring that our solutions are not just technologically advanced, but also practical and sustainable.
            </p>
            
            <p>
              As we look to the future, our commitment remains unwavering: to be the trusted partner that helps African businesses and individuals harness the power of technology to achieve their dreams and drive continental progress.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Discovery</h3>
              <p className="text-gray-600">We analyze your current processes and identify opportunities for improvement.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive digital transformation strategy tailored to your needs.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Implementation</h3>
              <p className="text-gray-600">We execute the solution with minimal disruption to your business operations.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
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

export default About;
