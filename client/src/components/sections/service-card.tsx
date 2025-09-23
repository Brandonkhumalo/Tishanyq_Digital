import { useState } from "react";
import { ArrowRight, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  details: string[];
  gradient: string;
  testId?: string;
}

const ServiceCard = ({ title, description, image, icon, details, gradient, testId }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="service-card-hover group bg-white rounded-2xl shadow-lg overflow-hidden" data-testid={testId}>
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}/80 group-hover:${gradient}/60 transition-all duration-300`}></div>
        <div className="absolute bottom-4 left-4 text-white">
          {icon}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[hsl(var(--primary-600))] font-medium hover:text-[hsl(var(--primary-700))] p-0 h-auto"
          data-testid={`service-details-btn-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          {isExpanded ? (
            <ArrowUp className="ml-2 w-4 h-4" />
          ) : (
            <ArrowRight className="ml-2 w-4 h-4" />
          )}
        </Button>
        
        {/* Collapsible Details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-200" data-testid={`service-details-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <ul className="space-y-2 text-gray-700">
              {details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-4 h-4 text-[hsl(var(--accent-green))] mr-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
