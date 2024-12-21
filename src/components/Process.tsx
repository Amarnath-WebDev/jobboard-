import { useState } from 'react';
import { 
  ClipboardCheck, Search, FileText, 
  Handshake, Building2, Users, 
  MessageSquare, Briefcase 
} from 'lucide-react';

const processes = {
  employers: [
    {
      icon: ClipboardCheck,
      title: 'Post a Job',
      description: 'Create detailed job listings in minutes'
    },
    {
      icon: Users,
      title: 'Review Applications',
      description: 'Access a curated pool of qualified candidates'
    },
    {
      icon: MessageSquare,
      title: 'Connect',
      description: 'Schedule interviews with top matches'
    },
    {
      icon: Handshake,
      title: 'Hire',
      description: 'Find your perfect candidate'
    }
  ],
  jobSeekers: [
    {
      icon: Search,
      title: 'Search',
      description: 'Browse thousands of relevant opportunities'
    },
    {
      icon: FileText,
      title: 'Apply',
      description: 'Quick apply with your profile'
    },
    {
      icon: Building2,
      title: 'Interview',
      description: 'Connect with hiring managers'
    },
    {
      icon: Briefcase,
      title: 'Get Hired',
      description: 'Start your new career journey'
    }
  ]
};

export function Process() {
  const [activeTab, setActiveTab] = useState<'employers' | 'jobSeekers'>('employers');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200">
            <button
              className={`px-6 py-3 rounded-l-lg ${
                activeTab === 'employers'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600'
              }`}
              onClick={() => setActiveTab('employers')}
            >
              For Employers
            </button>
            <button
              className={`px-6 py-3 rounded-r-lg ${
                activeTab === 'jobSeekers'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600'
              }`}
              onClick={() => setActiveTab('jobSeekers')}
            >
              For Job Seekers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes[activeTab].map((step, index) => (
            <div key={index} className="relative">
              {index < processes[activeTab].length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200" />
              )}
              <div className="bg-accent p-6 rounded-lg relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}