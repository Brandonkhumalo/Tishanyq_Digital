import Pricing from "@/components/sections/pricing";
import { TrendingUp, Puzzle, Bot } from "lucide-react";

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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Tishanyq?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with local market expertise to deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our tiered pricing model ensures you only pay for what you need. From entry-level websites to complex enterprise systems, we offer the best value in the Zimbabwean market.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center text-accent-green mb-6">
                <Puzzle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Scale with Your Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a startup looking for your first digital footprint or a large corporate needing custom software, our solutions are built to grow alongside your business.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center text-accent-orange mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Based in Harare, we understand the local business landscape. Our integrations (EcoCash, SMS, local domain registration) are tailored specifically for the Zimbabwean market.
              </p>
            </div>
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
