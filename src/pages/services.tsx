import Pricing from "@/components/sections/pricing";

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
