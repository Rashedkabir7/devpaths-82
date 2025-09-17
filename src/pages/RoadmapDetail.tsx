import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Bookmark, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Circle, CheckCircle, Users, Clock, BookOpen } from 'lucide-react';
import { PdfDownloadButton } from '@/components/PdfDownloadButton';
import { ResourceCard } from '@/components/ResourceCard';
import { getResourcesByTopic, platformLogos } from '@/data/resourcesDatabase';

const RoadmapDetail = () => {
  const { roadmapId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userProgress, setUserProgress] = useState(60);
  const [resourceFilter, setResourceFilter] = useState('all');

  const roadmapData = {
    'frontend': {
      title: 'Frontend Development Roadmap',
      description: 'A complete guide to becoming a Frontend Developer in 2024. Covers HTML, CSS, JavaScript, React, and more!',
      estimatedTime: '6-9 months',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 'html-css',
          title: 'HTML & CSS Fundamentals',
          description: 'Master the building blocks of the web: structuring content with HTML and styling with CSS.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 12
        },
        {
          id: 'javascript',
          title: 'JavaScript Essentials',
          description: 'Learn the fundamentals of JavaScript to add interactivity and dynamic behavior to your websites.',
          difficulty: 'Beginner',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'react',
          title: 'React: Building Modern UIs',
          description: 'Dive into React, the most popular JavaScript library for building user interfaces, and create reusable components.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 25
        },
        {
          id: 'state-management',
          title: 'State Management with Redux',
          description: 'Manage application state efficiently using Redux, a predictable state container for JavaScript apps.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'testing-react',
          title: 'Testing React Components',
          description: 'Ensure the reliability of your React applications by writing unit and integration tests with Jest and React Testing Library.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        },
        {
          id: 'nextjs',
          title: 'Next.js: Production-Ready Framework',
          description: 'Build fullstack React applications with Next.js, a framework for server-side rendering and static site generation.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'graphql',
          title: 'GraphQL: API Development',
          description: 'Learn GraphQL, a query language for your API, and build efficient and flexible data fetching layers.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'deployment',
          title: 'Deployment & DevOps',
          description: 'Deploy and maintain your frontend applications using modern DevOps practices and tools.',
          difficulty: 'Advanced',
          estimatedTime: '1-2 weeks',
          resources: 8
        }
      ],
      completionRate: '78%',
      learners: '850K',
      rating: 4.7,
      reviews: 9240,
      lastUpdated: 'January 2024',
      category: 'Web Development',
      skillsGained: [
        'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Next.js', 'GraphQL', 'Testing', 'Deployment'
      ],
      relatedRoadmaps: [
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '120 hours',
        exercisesDone: '25 of 50',
        quizScore: '85%'
      }
    },
    'backend': {
      title: 'Backend Development Roadmap',
      description: 'Your guide to becoming a Backend Developer in 2024. Covers Node.js, Python, Databases, and more!',
      estimatedTime: '9-12 months',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 'nodejs',
          title: 'Node.js & Express',
          description: 'Build server-side applications with Node.js and the Express framework.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 20
        },
        {
          id: 'python',
          title: 'Python & Django',
          description: 'Develop robust backend systems with Python and the Django web framework.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'databases',
          title: 'Databases & SQL',
          description: 'Master relational databases and SQL for efficient data storage and retrieval.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'nosql',
          title: 'NoSQL Databases',
          description: 'Explore NoSQL databases like MongoDB for flexible and scalable data storage solutions.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'api-design',
          title: 'API Design & REST',
          description: 'Design and implement RESTful APIs for seamless communication between frontend and backend systems.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'authentication',
          title: 'Authentication & Security',
          description: 'Secure your backend applications with robust authentication and authorization mechanisms.',
          difficulty: 'Advanced',
          estimatedTime: '2-3 weeks',
          resources: 14
        },
        {
          id: 'testing-backend',
          title: 'Testing Backend Systems',
          description: 'Write comprehensive unit and integration tests for your backend applications.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        },
        {
          id: 'deployment',
          title: 'Deployment & DevOps',
          description: 'Deploy and manage your backend applications using modern DevOps practices and tools.',
          difficulty: 'Advanced',
          estimatedTime: '1-2 weeks',
          resources: 8
        }
      ],
      completionRate: '65%',
      learners: '620K',
      rating: 4.6,
      reviews: 6890,
      lastUpdated: 'January 2024',
      category: 'Web Development',
      skillsGained: [
        'Node.js', 'Python', 'SQL', 'NoSQL', 'API Design', 'REST', 'Security', 'Testing', 'Deployment'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '150 hours',
        exercisesDone: '30 of 60',
        quizScore: '90%'
      }
    },
    'devops': {
      title: 'DevOps Roadmap',
      description: 'Your path to becoming a DevOps Engineer in 2024. Covers CI/CD, Automation, Cloud, and more!',
      estimatedTime: '12-18 months',
      difficulty: 'Advanced',
      topics: [
        {
          id: 'linux',
          title: 'Linux Fundamentals',
          description: 'Master the Linux command line and system administration basics.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'networking',
          title: 'Networking Basics',
          description: 'Understand networking concepts and protocols for building scalable infrastructure.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'cloud-computing',
          title: 'Cloud Computing Platforms',
          description: 'Learn cloud computing with AWS, Azure, and Google Cloud Platform.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 25
        },
        {
          id: 'cicd',
          title: 'CI/CD Pipelines',
          description: 'Implement Continuous Integration and Continuous Deployment pipelines with Jenkins and GitLab CI.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'automation',
          title: 'Automation Tools',
          description: 'Automate infrastructure management with Ansible, Terraform, and Chef.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'containerization',
          title: 'Containerization with Docker',
          description: 'Containerize applications with Docker for consistent deployment across environments.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'orchestration',
          title: 'Orchestration with Kubernetes',
          description: 'Orchestrate container deployments with Kubernetes for high availability and scalability.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 24
        },
        {
          id: 'monitoring',
          title: 'Monitoring & Logging',
          description: 'Monitor application performance and system health with Prometheus, Grafana, and ELK stack.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        }
      ],
      completionRate: '55%',
      learners: '480K',
      rating: 4.5,
      reviews: 5120,
      lastUpdated: 'January 2024',
      category: 'DevOps',
      skillsGained: [
        'Linux', 'Networking', 'Cloud Computing', 'CI/CD', 'Automation', 'Docker', 'Kubernetes', 'Monitoring', 'Logging'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '200 hours',
        exercisesDone: '40 of 80',
        quizScore: '75%'
      }
    },
    'fullstack': {
      title: 'Fullstack Development Roadmap',
      description: 'The ultimate guide to becoming a Fullstack Developer in 2024. Combines Frontend, Backend, and DevOps skills!',
      estimatedTime: '18-24 months',
      difficulty: 'Advanced',
      topics: [
        {
          id: 'frontend',
          title: 'Frontend Development',
          description: 'Master frontend technologies including HTML, CSS, JavaScript, and React.',
          difficulty: 'Intermediate',
          estimatedTime: '6-9 months',
          resources: 30
        },
        {
          id: 'backend',
          title: 'Backend Development',
          description: 'Build robust backend systems with Node.js, Python, and databases.',
          difficulty: 'Intermediate',
          estimatedTime: '9-12 months',
          resources: 35
        },
        {
          id: 'devops',
          title: 'DevOps Practices',
          description: 'Implement DevOps practices for continuous integration, deployment, and monitoring.',
          difficulty: 'Advanced',
          estimatedTime: '12-18 months',
          resources: 40
        },
        {
          id: 'databases',
          title: 'Database Management',
          description: 'Manage relational and NoSQL databases for efficient data storage and retrieval.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'api-design',
          title: 'API Design & Development',
          description: 'Design and develop RESTful and GraphQL APIs for seamless communication.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 18
        },
        {
          id: 'cloud-architecture',
          title: 'Cloud Architecture',
          description: 'Design scalable and resilient cloud architectures with AWS, Azure, and GCP.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 25
        },
        {
          id: 'security',
          title: 'Security Best Practices',
          description: 'Implement security best practices for protecting your applications and data.',
          difficulty: 'Advanced',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'testing',
          title: 'Testing & Quality Assurance',
          description: 'Ensure the quality of your applications with comprehensive testing strategies.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 12
        }
      ],
      completionRate: '45%',
      learners: '320K',
      rating: 4.4,
      reviews: 3850,
      lastUpdated: 'January 2024',
      category: 'Web Development',
      skillsGained: [
        'Frontend', 'Backend', 'DevOps', 'Databases', 'API Design', 'Cloud Architecture', 'Security', 'Testing'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '250 hours',
        exercisesDone: '50 of 100',
        quizScore: '80%'
      }
    },
    'mobile-development': {
      title: 'Mobile App Development Roadmap',
      description: 'Your guide to building iOS and Android applications in 2024. Covers React Native, Flutter, and native development!',
      estimatedTime: '8-10 months',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 'mobile-fundamentals',
          title: 'Mobile Development Fundamentals',
          description: 'Understand mobile app architecture, platform differences, and development principles.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 12
        },
        {
          id: 'react-native',
          title: 'React Native Development',
          description: 'Build cross-platform mobile apps using React Native and JavaScript.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 20
        },
        {
          id: 'flutter',
          title: 'Flutter Development',
          description: 'Create beautiful native apps with Flutter and Dart programming language.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 18
        },
        {
          id: 'native-ios',
          title: 'Native iOS Development',
          description: 'Build iOS apps using Swift and Xcode with native iOS frameworks.',
          difficulty: 'Advanced',
          estimatedTime: '6-8 weeks',
          resources: 22
        },
        {
          id: 'native-android',
          title: 'Native Android Development',
          description: 'Develop Android apps using Kotlin and Android Studio with native Android SDKs.',
          difficulty: 'Advanced',
          estimatedTime: '6-8 weeks',
          resources: 24
        },
        {
          id: 'mobile-ui-ux',
          title: 'Mobile UI/UX Design',
          description: 'Design intuitive and beautiful mobile interfaces following platform guidelines.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'app-store-deployment',
          title: 'App Store Deployment',
          description: 'Deploy and publish your mobile apps to App Store and Google Play Store.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        }
      ],
      completionRate: '68%',
      learners: '940K',
      rating: 4.7,
      reviews: 4250,
      lastUpdated: 'January 2024',
      category: 'Mobile Development',
      skillsGained: [
        'React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI/UX', 'App Store Deployment', 'Cross-platform Development'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'ui-ux-designer', title: 'UI/UX Designer Roadmap', difficulty: 'Intermediate' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '180 hours',
        exercisesDone: '35 of 70',
        quizScore: '82%'
      }
    },
    'data-scientist': {
      title: 'Data Science Roadmap',
      description: 'Your path to becoming a Data Scientist in 2024. Covers Python, Machine Learning, Statistics, and more!',
      estimatedTime: '9-12 months',
      difficulty: 'Advanced',
      topics: [
        {
          id: 'python-for-data-science',
          title: 'Python for Data Science',
          description: 'Master Python programming fundamentals and data science libraries.',
          difficulty: 'Beginner',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'statistics-fundamentals',
          title: 'Statistics & Probability',
          description: 'Learn statistical concepts essential for data analysis and machine learning.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 18
        },
        {
          id: 'data-manipulation',
          title: 'Data Manipulation with Pandas',
          description: 'Clean, transform, and analyze data using Pandas and NumPy.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 16
        },
        {
          id: 'data-visualization',
          title: 'Data Visualization',
          description: 'Create compelling visualizations using Matplotlib, Seaborn, and Plotly.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 14
        },
        {
          id: 'machine-learning',
          title: 'Machine Learning Algorithms',
          description: 'Implement and understand machine learning algorithms using Scikit-learn.',
          difficulty: 'Advanced',
          estimatedTime: '6-8 weeks',
          resources: 25
        },
        {
          id: 'deep-learning',
          title: 'Deep Learning with TensorFlow',
          description: 'Build neural networks and deep learning models for complex problems.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'sql-databases',
          title: 'SQL & Database Management',
          description: 'Query databases efficiently and manage large datasets.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 12
        },
        {
          id: 'big-data-tools',
          title: 'Big Data Tools',
          description: 'Work with big data using Apache Spark, Hadoop, and cloud platforms.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 15
        }
      ],
      completionRate: '58%',
      learners: '1.1M',
      rating: 4.8,
      reviews: 6180,
      lastUpdated: 'January 2024',
      category: 'Data Science',
      skillsGained: [
        'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'SQL', 'Statistics', 'Machine Learning', 'Data Visualization'
      ],
      relatedRoadmaps: [
        { id: 'ai-ml-engineer', title: 'AI/ML Engineer Roadmap', difficulty: 'Advanced' },
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'python-developer', title: 'Python Developer Roadmap', difficulty: 'Intermediate' }
      ],
      stats: {
        timeSpent: '220 hours',
        exercisesDone: '45 of 90',
        quizScore: '88%'
      }
    },
    'cybersecurity': {
      title: 'Cybersecurity Specialist Roadmap',
      description: 'Your guide to becoming a Cybersecurity Expert in 2024. Covers ethical hacking, security tools, and defense strategies!',
      estimatedTime: '8-10 months',
      difficulty: 'Advanced',
      topics: [
        {
          id: 'security-fundamentals',
          title: 'Cybersecurity Fundamentals',
          description: 'Learn core security concepts, threats, and defense principles.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'network-security',
          title: 'Network Security',
          description: 'Secure networks using firewalls, VPNs, and intrusion detection systems.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 20
        },
        {
          id: 'ethical-hacking',
          title: 'Ethical Hacking & Penetration Testing',
          description: 'Learn to think like an attacker to better defend systems.',
          difficulty: 'Advanced',
          estimatedTime: '6-8 weeks',
          resources: 25
        },
        {
          id: 'cryptography',
          title: 'Cryptography & PKI',
          description: 'Understand encryption, digital signatures, and public key infrastructure.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'incident-response',
          title: 'Incident Response & Forensics',
          description: 'Handle security incidents and perform digital forensics investigations.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 16
        },
        {
          id: 'security-tools',
          title: 'Security Tools & Technologies',
          description: 'Master industry-standard security tools like Wireshark, Metasploit, and Nmap.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 22
        },
        {
          id: 'compliance-governance',
          title: 'Compliance & Governance',
          description: 'Understand security frameworks, regulations, and compliance requirements.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 12
        }
      ],
      completionRate: '71%',
      learners: '520K',
      rating: 4.9,
      reviews: 3420,
      lastUpdated: 'January 2024',
      category: 'Cybersecurity',
      skillsGained: [
        'Network Security', 'Penetration Testing', 'Cryptography', 'Incident Response', 'Security Tools', 'Compliance', 'Ethical Hacking'
      ],
      relatedRoadmaps: [
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' },
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'cloud-architect', title: 'Cloud Architecture Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '190 hours',
        exercisesDone: '40 of 80',
        quizScore: '91%'
      }
    },
    'ai-ml-engineer': {
      title: 'AI/ML Engineer Roadmap',
      description: 'Your path to becoming an AI/ML Engineer in 2024. Covers Machine Learning, Deep Learning, and AI systems!',
      estimatedTime: '10-14 months',
      difficulty: 'Expert',
      topics: [
        {
          id: 'ml-fundamentals',
          title: 'Machine Learning Fundamentals',
          description: 'Master the mathematical foundations and core concepts of machine learning.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'python-ml-stack',
          title: 'Python ML Stack',
          description: 'Master Python libraries for machine learning: NumPy, Pandas, Scikit-learn.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'deep-learning-frameworks',
          title: 'Deep Learning Frameworks',
          description: 'Build neural networks using TensorFlow and PyTorch.',
          difficulty: 'Advanced',
          estimatedTime: '6-8 weeks',
          resources: 25
        },
        {
          id: 'computer-vision',
          title: 'Computer Vision',
          description: 'Process and analyze images using CNNs and computer vision techniques.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 20
        },
        {
          id: 'natural-language-processing',
          title: 'Natural Language Processing',
          description: 'Work with text data using NLP techniques and transformer models.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'mlops',
          title: 'MLOps & Model Deployment',
          description: 'Deploy and monitor machine learning models in production.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'ai-ethics',
          title: 'AI Ethics & Responsible AI',
          description: 'Understand bias, fairness, and ethical considerations in AI systems.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        },
        {
          id: 'advanced-ai',
          title: 'Advanced AI Topics',
          description: 'Explore cutting-edge AI research including GANs, reinforcement learning, and LLMs.',
          difficulty: 'Expert',
          estimatedTime: '6-8 weeks',
          resources: 28
        }
      ],
      completionRate: '54%',
      learners: '780K',
      rating: 4.8,
      reviews: 4920,
      lastUpdated: 'January 2024',
      category: 'AI & Machine Learning',
      skillsGained: [
        'Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'AI Ethics'
      ],
      relatedRoadmaps: [
        { id: 'data-scientist', title: 'Data Science Roadmap', difficulty: 'Advanced' },
        { id: 'python-developer', title: 'Python Developer Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '280 hours',
        exercisesDone: '60 of 120',
        quizScore: '86%'
      }
    },
    'ui-ux-designer': {
      title: 'UI/UX Designer Roadmap',
      description: 'Your guide to becoming a UI/UX Designer in 2024. Covers design principles, tools, and user research!',
      estimatedTime: '5-7 months',
      difficulty: 'Progressive',
      topics: [
        {
          id: 'design-fundamentals',
          title: 'Design Fundamentals',
          description: 'Learn color theory, typography, layout principles, and visual hierarchy.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'user-research',
          title: 'User Research & Analysis',
          description: 'Conduct user interviews, surveys, and analyze user behavior.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'wireframing-prototyping',
          title: 'Wireframing & Prototyping',
          description: 'Create wireframes and interactive prototypes using industry tools.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'design-tools',
          title: 'Design Tools Mastery',
          description: 'Master Figma, Adobe XD, Sketch, and other essential design tools.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'interaction-design',
          title: 'Interaction Design',
          description: 'Design smooth interactions, animations, and micro-interactions.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 14
        },
        {
          id: 'design-systems',
          title: 'Design Systems',
          description: 'Build scalable design systems and component libraries.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'usability-testing',
          title: 'Usability Testing',
          description: 'Plan and conduct usability tests to validate design decisions.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 12
        },
        {
          id: 'accessibility-design',
          title: 'Accessibility in Design',
          description: 'Design inclusive interfaces that work for users with disabilities.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        }
      ],
      completionRate: '81%',
      learners: '1.3M',
      rating: 4.7,
      reviews: 7650,
      lastUpdated: 'January 2024',
      category: 'Design',
      skillsGained: [
        'Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Usability Testing', 'Accessibility', 'Visual Design'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'mobile-development', title: 'Mobile Development Roadmap', difficulty: 'Intermediate' },
        { id: 'product-manager', title: 'Product Manager Roadmap', difficulty: 'Intermediate' }
      ],
      stats: {
        timeSpent: '140 hours',
        exercisesDone: '50 of 70',
        quizScore: '89%'
      }
    }
  };

  const roadmap = roadmapData[roadmapId as keyof typeof roadmapData] || roadmapData['frontend'];

  // Add PDF data preparation
  const preparePdfData = () => {
    return {
      title: roadmap.title,
      description: roadmap.description,
      topics: roadmap.topics.map(topic => ({
        id: topic.id,
        title: topic.title,
        description: topic.description,
        difficulty: topic.difficulty,
        estimatedTime: topic.estimatedTime,
        resources: getResourcesByTopic(topic.id).slice(0, 5).map(resource => ({
          title: resource.title,
          url: resource.url,
          type: resource.type
        }))
      }))
    };
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-secondary)]">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Roadmaps
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <PdfDownloadButton roadmapData={preparePdfData()} />
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Share className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-slate-400 hover:text-yellow-400"
              >
                {isBookmarked ? 
                  <Star className="w-4 h-4 fill-current text-yellow-400" /> : 
                  <Bookmark className="w-4 h-4" />
                }
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Roadmap Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{roadmap.title}</h1>
          <h2 className="text-xl text-slate-300 mb-4">{roadmap.description}</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Clock className="w-3 h-3 mr-1" />
              {roadmap.estimatedTime}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <BookOpen className="w-3 h-3 mr-1" />
              {roadmap.topics.reduce((acc, topic) => acc + topic.resources, 0)} resources
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Users className="w-3 h-3 mr-1" />
              {roadmap.learners} learners
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Star className="w-3 h-3 mr-1" />
              {roadmap.rating} ({roadmap.reviews} reviews)
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {roadmap.skillsGained.slice(0, 6).map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300">
                {skill}
              </Badge>
            ))}
            {roadmap.skillsGained.length > 6 && (
              <Badge variant="secondary" className="bg-slate-700/50 text-slate-300">
                +{roadmap.skillsGained.length - 6} more
              </Badge>
            )}
          </div>
        </div>

        {/* Enhanced Tabs with Resources */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Learning Path
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              All Resources
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Progress
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="space-y-6">
            {/* Roadmap Visualization */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Roadmap Overview</CardTitle>
                <CardDescription className="text-slate-400">
                  Follow this path to achieve your goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmap.topics.map((topic, index) => (
                    <div key={topic.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg text-blue-400">{index + 1}.</span>
                        <div>
                          <h3 className="text-white font-medium">{topic.title}</h3>
                          <p className="text-slate-400 text-sm">{topic.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        <Clock className="w-3 h-3 mr-1" />
                        {topic.estimatedTime}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Learning Resources</h2>
                <p className="text-slate-400 mb-6">Curated resources from top platforms and educators</p>
              </div>

              {/* Resource Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant={resourceFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('all')}
                  className="border-slate-600"
                >
                  All Resources
                </Button>
                <Button
                  variant={resourceFilter === 'free' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('free')}
                  className="border-slate-600"
                >
                  Free Only
                </Button>
                <Button
                  variant={resourceFilter === 'video' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('video')}
                  className="border-slate-600"
                >
                  Videos
                </Button>
                <Button
                  variant={resourceFilter === 'course' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('course')}
                  className="border-slate-600"
                >
                  Courses
                </Button>
                <Button
                  variant={resourceFilter === 'practice' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('practice')}
                  className="border-slate-600"
                >
                  Practice
                </Button>
              </div>

              {/* Platform Showcase */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Featured Platforms</CardTitle>
                  <CardDescription className="text-slate-400">
                    Learn from the best educational platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {Object.entries(platformLogos).slice(0, 12).map(([platform, emoji]) => (
                      <div key={platform} className="flex flex-col items-center p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors">
                        <span className="text-2xl mb-1">{emoji}</span>
                        <span className="text-xs text-slate-400 text-center">{platform}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Resources Grid */}
              <div className="grid gap-6">
                {roadmap.topics.map((topic) => {
                  const topicResources = getResourcesByTopic(topic.id);
                  const filteredResources = topicResources.filter(resource => {
                    if (resourceFilter === 'all') return true;
                    if (resourceFilter === 'free') return resource.free;
                    return resource.type === resourceFilter;
                  });

                  if (filteredResources.length === 0) return null;

                  return (
                    <div key={topic.id} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                        <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300">
                          {filteredResources.length} resources
                        </Badge>
                      </div>
                      <div className="grid gap-4">
                        {filteredResources.slice(0, 3).map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                        {filteredResources.length > 3 && (
                          <div className="text-center">
                            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                              View {filteredResources.length - 3} more resources
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Completion</span>
                      <span className="text-white">{userProgress}%</span>
                    </div>
                    <Progress value={userProgress} className="h-2" />
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Time Spent</span>
                      <span className="text-white">{roadmap.stats.timeSpent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Exercises Done</span>
                      <span className="text-white">{roadmap.stats.exercisesDone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Quiz Score</span>
                      <span className="text-white">{roadmap.stats.quizScore}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Community Discussion</CardTitle>
                <CardDescription className="text-slate-400">
                  Connect with other learners and share your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">User123</h4>
                      <p className="text-slate-400 text-sm">Just finished the HTML & CSS section. On to JavaScript!</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">DevStudent</h4>
                      <p className="text-slate-400 text-sm">Anyone have tips for mastering React hooks?</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">CodeNinja</h4>
                      <p className="text-slate-400 text-sm">I found this awesome resource for learning Next.js: [link]</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RoadmapDetail;
