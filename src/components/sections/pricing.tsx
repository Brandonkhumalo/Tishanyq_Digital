import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pricingData = [
  {
    category: "Web Development",
    description: "Professional website design and development services.",
    packages: [
      { name: "Entry Level", price: "90", features: ["4 pages", "Mobile Friendly Interface", "Home Page", "About Page", "Contact Page", "Search Engine Optimization", "Social Integration"] },
      { name: "Gold Package", price: "120", badge: "Best Seller", features: ["6 pages", "Mobile Friendly Interface", "Home Page", "Products Page", "Services Page", "About Page", "Contact Page", "Search Engine Optimization", "Social Integration"] },
      { name: "Silver Package", price: "200", features: ["10 pages", "Mobile Friendly Interface", "Home Page", "Products Page", "Portfolio Page", "Services Page", "About Page", "Contact Page", "Search Engine Optimization", "Social Integration"] },
      { name: "Platinum Package", price: "550", features: ["Unlimited pages", "Mobile Friendly Interface", "30 Pages", "Home Page", "Products Page", "Portfolio Page", "Services Page", "About Page", "Contact Page", "Gallery Page", "Search Engine Optimization", "Social Integration"] }
    ]
  },
  {
    category: "Web Applications",
    description: "SME E-commerce and specialized business applications.",
    packages: [
      { name: "Entry Level", price: "550", maintenance: "55", features: ["upto 20 pages", "Mobile Friendly Interface", "Payments", "Emails", "SMS", "Database", "Security", "Search Engine Optimization", "Social Integration"] },
      { name: "Gold Package", price: "814", badge: "Best Choice", maintenance: "122", features: ["upto 50 pages", "Mobile Friendly Interface", "Payments", "Emails", "SMS", "Database", "Security", "Search Engine Optimization", "Social Integration"] },
      { name: "Silver Package", price: "1220", features: ["upto 150 pages", "Mobile Friendly Interface", "Payments", "Emails", "SMS", "Database", "Security", "Search Engine Optimization", "Social Integration"] },
      { name: "Platinum Package", price: "1800", features: ["Unlimited pages", "Mobile Friendly Interface", "Payments", "Emails", "SMS", "Database", "Security", "Search Engine Optimization", "Social Integration"] }
    ],
    setupFees: [
      { name: "Emails", price: "50" },
      { name: "SMS", price: "50" },
      { name: "Payments", price: "110" },
      { name: "WhatsApp", price: "170" },
      { name: "Analytics", price: "120" },
      { name: "API", price: "80", detail: "per api" }
    ]
  },
  {
    category: "Custom Softwares",
    description: "Bespoke software solutions tailored to your unique needs.",
    packages: [
      { name: "Enterprise", price: "Contact Us", features: ["Custom Workflow Design", "Scalable Infrastructure", "Legacy Integration", "Dedicated Project Manager", "24/7 Priority Support", "Continuous Maintenance"] }
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for businesses of all sizes
          </p>
        </div>

        {pricingData.map((section, sectionIdx) => (
          <div key={section.category} className="mb-24 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{section.category}</h3>
                <p className="text-lg text-gray-600">{section.description}</p>
              </div>
              {section.setupFees && (
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    Once-off Setup Fees
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1">
                    {section.setupFees.map((fee) => (
                      <div key={fee.name} className="flex justify-between text-xs text-gray-600">
                        <span>{fee.name}:</span>
                        <span className="font-bold ml-2">${fee.price}{fee.detail && <span className="text-[10px] font-normal italic">/{fee.detail}</span>}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${section.packages.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2 max-w-4xl mx-auto'} gap-8`}>
              {section.packages.map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full flex flex-col relative ${pkg.badge ? 'border-primary ring-1 ring-primary' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                    {pkg.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-full">
                          {pkg.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-8 pt-10">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</CardTitle>
                      <div className="flex items-center justify-center">
                        {pkg.price !== "Contact Us" && <span className="text-2xl font-bold text-gray-900 self-start mt-1">$</span>}
                        <span className="text-5xl font-black text-gray-900 tracking-tight">
                          {pkg.price}
                        </span>
                        {pkg.price !== "Contact Us" && (
                          <div className="flex flex-col items-start ml-2 text-left">
                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">once off</span>
                          </div>
                        )}
                      </div>
                      {pkg.maintenance && (
                        <p className="mt-2 text-sm text-primary font-medium">
                          + ${pkg.maintenance} monthly maintenance
                        </p>
                      )}
                    </CardHeader>
                    
                    <CardContent className="flex-grow pt-0 px-6">
                      <div className="h-px w-full bg-gray-100 mb-6" />
                      <ul className="space-y-3">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-sm text-gray-600">
                            <Check className="w-4 h-4 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter className="pb-8 px-6">
                      <Button 
                        className={`w-full h-12 text-base font-bold transition-all ${pkg.badge ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-900'}`}
                      >
                        Order Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
