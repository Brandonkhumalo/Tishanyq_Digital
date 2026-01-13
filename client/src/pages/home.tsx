import Hero from "@/components/sections/hero";
import Values from "@/components/sections/values";
import { Laptop, Globe, Settings } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pricingPackages = [
  {
    category: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    packages: [
      { name: "Package 1", price: "$90" },
      { name: "Package 2", price: "$120" },
      { name: "Package 3", price: "$200" },
      { name: "Package 4", price: "$550" },
    ]
  },
  {
    category: "Web Application",
    icon: <Laptop className="w-6 h-6" />,
    packages: [
      { name: "Basic", price: "$550" },
      { name: "Small Business", price: "$814" },
      { name: "Medium Business", price: "$1220" },
      { name: "Enterprise", price: "$1800" },
    ]
  },
  {
    category: "Custom Software",
    icon: <Settings className="w-6 h-6" />,
    description: "Bespoke software solutions designed for your specific business needs."
  }
];

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Tishanyq Digital</h2>
            <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
              At Tishanyq Digital, we empower businesses to thrive in the modern economy by driving end-to-end digital transformation. We provide tailored strategies and innovative solutions that streamline operations, automate processes, enhance customer experiences, and unlock data-driven decision-making. From custom software development and cloud integration to digital marketing, cybersecurity, and staff training, we bridge the gap between business goals and cutting-edge technology. Our mission is to help organizations become more efficient, adaptable, and competitive in today’s fast-changing digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To bridge the digital divide by providing cutting-edge technology solutions that empower African businesses and individuals to thrive in the digital economy.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  A digitally transformed Africa where technology serves as the catalyst for sustainable economic growth, innovation, and inclusive prosperity.
                </p>
              </div>
              
              <div className="pt-4">
                <Link href="/about">
                  <Button className="primary-btn px-8 py-3 rounded-xl" data-testid="learn-more-about">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="African American professionals collaborating at table discussing business" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
              />
            </div>
          </div>

          <div className="mt-20">
            <Values />
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transparent pricing for our digital services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((item, idx) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <Card className={cn(
                  "h-full border-t-4 shadow-lg hover:shadow-xl transition-shadow bg-white",
                  idx < 2 ? "border-t-blue-600" : "border-t-primary"
                )}>
                  <CardHeader className="text-center pb-2">
                    <div className={cn(
                      "mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4",
                      idx < 2 ? "bg-blue-50 text-blue-600" : "bg-primary/10 text-primary"
                    )}>
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold uppercase tracking-wider">{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.packages ? (
                      <div className="space-y-4">
                        {item.packages.map((pkg) => (
                          <div key={pkg.name} className="flex flex-col items-center border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                            <span className="text-sm text-gray-500 font-medium">{pkg.name}</span>
                            <span className={cn(
                              "text-2xl font-bold",
                              idx < 2 ? "text-blue-600" : "text-primary"
                            )}>{pkg.price}</span>
                            <Link href="/services">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className={cn(
                                  "mt-2 text-xs",
                                  idx < 2 ? "border-blue-200 text-blue-600 hover:bg-blue-50" : ""
                                )}
                              >
                                CHOOSE PLAN
                              </Button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-6">{item.description}</p>
                        <Link href="/services">
                          <Button className="primary-btn w-full">CHOOSE PLAN</Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
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