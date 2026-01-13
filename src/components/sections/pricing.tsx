import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    category: "Web Development",
    packages: [
      { name: "Package 1", price: "90" },
      { name: "Package 2", price: "120" },
      { name: "Package 3", price: "200" },
      { name: "Package 4", price: "550" }
    ]
  },
  {
    category: "Web Application",
    packages: [
      { name: "Basic", price: "550" },
      { name: "Small business", price: "814" },
      { name: "Medium business", price: "1220" },
      { name: "Enterprise", price: "1800" }
    ]
  },
  {
    category: "Mobile Development",
    packages: [
      { name: "Consultation", price: "Contact Us" }
    ]
  },
  {
    category: "Custom Softwares",
    packages: [
      { name: "Consultation", price: "Contact Us" }
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Affordable digital solutions for every business size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-2 hover:border-primary transition-colors">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-xl font-bold text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <div className="space-y-4">
                    {category.packages.map((pkg) => (
                      <div key={pkg.name} className="flex justify-between items-center border-b pb-2 last:border-0">
                        <span className="text-sm font-medium text-gray-600">{pkg.name}</span>
                        <span className="text-lg font-bold text-primary">
                          {pkg.price === "Contact Us" ? pkg.price : `$${pkg.price}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
