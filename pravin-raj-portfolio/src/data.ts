import { Service, Skill, Project } from './types';

export const services: Service[] = [
  {
    id: 'ai-ml',
    title: 'AI & Deep Learning',
    description: 'Developing state-of-the-art deep learning architectures for classification, prediction, and pattern recognition. Experienced in custom training loops, model optimization, and neural pipelines.',
    iconName: 'Cpu',
    details: [
      'Model Training & Fine-Tuning',
      'TensorFlow, PyTorch & Keras Pipelines',
      'Hyperparameter Optimization',
      'Neural Network Custom Layers'
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Engineering intelligent medical image segmentation, target detection, and enhancement systems. Implementing advanced U-Net and Vision Transformer (ViT) frameworks.',
    iconName: 'Eye',
    details: [
      'Retinal Blood Vessel Segmentation',
      'Hyperspectral Colonoscopy Detection',
      'CLAHE and CV Image Enhancement',
      'Medical Image Feature Extraction'
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Transforming complex high-dimensional datasets into clean visual narratives. Building automated preprocessing pipelines, exploratory analysis tools, and trend forecasting modules.',
    iconName: 'Binary',
    details: [
      'Feature Engineering & Extraction',
      'Exploratory Data Analysis (EDA)',
      'Statistical Trend Forecasting',
      'NumPy, Pandas & Scikit-learn Pipelines'
    ]
  },
  {
    id: 'web-backend',
    title: 'Web & Backend Dashboards',
    description: 'Constructing robust, highly interactive web analytics portals, dashboards, and NLP services. Seamlessly bridging the gap between back-end machine learning models and clean user interfaces.',
    iconName: 'Layers',
    details: [
      'Next.js & React Frontend Portals',
      'Flask, Node.js & Express APIs',
      'Interactive Recharts Visualizations',
      'NLP Conversational Interfaces (NLTK)'
    ]
  }
];

export const skills: Skill[] = [
  // AI & ML
  { name: 'Python', category: 'ai_ml', level: 95, iconName: 'Code2' },
  { name: 'TensorFlow & PyTorch', category: 'ai_ml', level: 90, iconName: 'Brain' },
  { name: 'Computer Vision (U-Net, ViT)', category: 'ai_ml', level: 88, iconName: 'Eye' },
  { name: 'Data Science (NumPy, Pandas)', category: 'ai_ml', level: 92, iconName: 'Binary' },
  { name: 'Machine & Deep Learning', category: 'ai_ml', level: 90, iconName: 'Cpu' },
  
  // Web & Backend
  { name: 'React.js & Next.js', category: 'web_backend', level: 85, iconName: 'Layers' },
  { name: 'JavaScript & Node.js', category: 'web_backend', level: 85, iconName: 'Globe' },
  { name: 'Express.js & Flask', category: 'web_backend', level: 80, iconName: 'Server' },

  // DevOps & Tools
  { name: 'SQL & PostgreSQL', category: 'devops_tools', level: 85, iconName: 'Database' },
  { name: 'MongoDB', category: 'devops_tools', level: 80, iconName: 'Database' },
  { name: 'Git & GitHub Actions', category: 'devops_tools', level: 85, iconName: 'GitBranch' },
  { name: 'Linux & Docker', category: 'devops_tools', level: 82, iconName: 'Terminal' },

  // Spoken Languages
  { name: 'English', category: 'other', level: 95, iconName: 'Languages' },
  { name: 'Tamil', category: 'other', level: 100, iconName: 'Languages' },
  { name: 'Hindi & Telugu', category: 'other', level: 80, iconName: 'Languages' },
  { name: 'Malayalam & Kannada', category: 'other', level: 75, iconName: 'Languages' },
  { name: 'German', category: 'other', level: 50, iconName: 'Languages' }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'RGB-Enhanced Medical AI',
    subtitle: 'Endoscopy Image Optimization',
    description: 'Optimized white-light endoscopy images using RGB enhancement to improve deep learning feature clarity and prediction reliability. Achieved increased model confidence and reduced entropy.',
    tags: ['Python', 'PyTorch', 'NumPy', 'Matplotlib'],
    features: [
      'Enhanced deep learning feature clarity in white-light endoscopy images',
      'Achieved model confidence score of 0.829',
      'Reduced entropy to 0.669 for stable clinical predictions',
      'Optimized image clarity for reliable medical diagnostics'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Pravinraje0761',
    image: '/images/rgb_mecdial_enhancemnt.jpg'
  },
  {
    id: 'project-2',
    title: 'Hyperspectral Colonoscopy',
    subtitle: 'Multimodal AI Detection',
    description: 'Developed a multimodal AI imaging system combining hyperspectral and standard white-light inputs for improved polyp detection. Achieved higher diagnostic accuracy and reduced false positives.',
    tags: ['Python', 'Deep Learning', 'Image Processing', 'Medical AI'],
    features: [
      'Fused hyperspectral & white-light inputs for multi-source spectral integration',
      'Achieved high diagnostic accuracy on complex clinical polyps',
      'Significantly reduced false positives compared to standard models',
      'Supports early detection of potential cancerous polyps'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Pravinraje0761',
    image: '/images/hyperspectral_colonoscopy.png'
  },
  {
    id: 'project-3',
    title: 'Retinal Blood Vessel Segmentation',
    subtitle: 'U-Net Vascular Extraction',
    description: 'Implemented a deep learning–based segmentation model to accurately identify retinal blood vessels for early disease diagnosis. Enhanced fundus image clarity using CLAHE and trained a U-Net architecture.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'scikit-image'],
    features: [
      'Preprocessed raw retinal images using CLAHE for high clarity',
      'Trained a custom U-Net architecture for precise vascular segmentation',
      'Facilitated early disease diagnosis through blood vessel boundary extraction',
      'Achieved state-of-the-art segmentation accuracy on retinal datasets'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Pravinraje0761',
    image: '/images/retinal_blood_vessel.png'
  },
  {
    id: 'project-4',
    title: 'Microplastic Detection Dashboard',
    subtitle: 'Interactive Environmental Analytics',
    description: 'Built an interactive dashboard to visualize microplastic particle metrics including size, shape, count, polymer type, and concentration trends. Enabled automated visual analytics and data export features.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Recharts'],
    features: [
      'Visualized microplastic concentration, polymer type, size, and shape trends',
      'Enabled automated visual analytics and custom charts via Recharts',
      'Engineered responsive layouts with Next.js & TailwindCSS',
      'Built secure data export features for scientific analysis'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Pravinraje0761',
    image: '/images/micro_plastics_detection.png'
  },
  {
    id: 'project-5',
    title: 'AI Fuel Efficiency Dashboard',
    subtitle: 'Predictive Vehicle Analytics',
    description: 'Engineered a web dashboard integrating machine learning models to analyze fleet fuel usage and forecast long-term cost savings. Improved decision-making with real-time performance analytics.',
    tags: ['Python', 'Machine Learning', 'HTML/CSS', 'JavaScript'],
    features: [
      'Integrated predictive machine learning models for fuel forecasting',
      'Designed real-time fleet analytics for cost reduction metrics',
      'Constructed interactive performance charts and trend lines',
      'Supplied stakeholders with clean, actionable predictive insights'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Pravinraje0761',
    image: '/images/ai_fuel_efficiency_dashboard.png'
  },
  {
    id: 'project-6',
    title: 'AI NLP Chatbot',
    subtitle: 'Contextual Conversational Assistant',
    description: 'Designed an intelligent chatbot that interprets user intent and responds contextually. Implemented the backend using Flask and trained the model using TensorFlow & NLTK.',
    tags: ['Flask', 'TensorFlow', 'NLTK', 'NLP', 'Python'],
    features: [
      'Interpreted complex user intent with deep neural networks',
      'Utilized NLTK for text preprocessing and tokenization pipelines',
      'Engineered lightweight, low-latency Flask API endpoints',
      'Built contextual conversational flows for seamless user communication'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Pravinraje0761',
    image: '/images/nlp_chatbot.png'
  }
];
