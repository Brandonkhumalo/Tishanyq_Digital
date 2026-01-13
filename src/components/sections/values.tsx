import { Lightbulb, Settings, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering creative solutions that push the boundaries of what's possible in African tech.",
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-600"
  },
  {
    icon: Settings,
    title: "Efficiency",
    description: "Streamlining processes to maximize productivity and minimize waste in every solution.",
    gradient: "from-blue-100 to-indigo-100",
    iconBg: "bg-blue-700"
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Ensuring our solutions are accessible and beneficial to all members of our communities.",
    gradient: "from-emerald-50 to-green-50",
    iconBg: "bg-emerald-600"
  },
  {
    icon: Rocket,
    title: "Empowerment",
    description: "Equipping individuals and businesses with tools to achieve their fullest potential.",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-primary"
  }
];

const Values = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
        <p className="text-lg text-gray-700">The principles that guide everything we do</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div 
              key={value.title}
              className={`value-card-hover group bg-gradient-to-br ${value.gradient} p-8 rounded-2xl text-center`}
              data-testid={`value-card-${value.title.toLowerCase()}`}
            >
              <div className={`w-16 h-16 ${value.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-800">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
