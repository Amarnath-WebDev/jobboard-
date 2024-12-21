import { 
  Search, Building2, Users, Shield, 
  Clock, Award 
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Matching',
    description: 'AI-powered job matching for perfect fit candidates'
  },
  {
    icon: Building2,
    title: 'Top Companies',
    description: 'Access leading companies across all industries'
  },
  {
    icon: Users,
    title: 'Talent Network',
    description: 'Connect with millions of qualified professionals'
  },
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'All candidates and companies are verified'
  },
  {
    icon: Clock,
    title: 'Quick Apply',
    description: 'One-click application process for efficiency'
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'High standards ensure the best matches'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}