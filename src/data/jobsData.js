// src/data/jobsData.js

import { Info } from "lucide-react";

export const jobsData = [
  // --- Technical JOBS ---
  {
    id: 1,
    category: "Technical",
    title: "Mobile Application Developer",
    postedDate: "26 Nov, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-Site",
    Info: "We’re seeking a motivated Mobile Application Developer with Android, iOS, or cross-platform experience; fresh graduates eager to learn are welcome.",
    desc: "We are looking for a passionate and motivated Mobile Application Developer to join our team. The ideal candidate should have experience (academic, internship, or professional) in designing and developing mobile applications for Android, iOS, or cross-platform frameworks. Fresh graduates with strong programming skills and a willingness to learn are encouraged to apply.",
    requirements: [
      "	Bachelors degree in Computer Science, IT, Engineering, or related field.",
      "	04 years of experience in mobile app development (internships and academic projects also considered).",
      "	Proficiency in at least one mobile development language/framework: Android (Java/Kotlin), iOS (Swift/Objective-C), or Cross-platform (Flutter, React Native).",
      "	Familiarity with REST APIs, third-party libraries, and integration.",
      "	Basic knowledge of version control tools (e.g., Git).",
      "	Strong problem-solving skills and eagerness to learn."
    ],
    tools: ["Android Studio", "React Native", "Firebase"]
  },

  {
    id: 2,
    category: "Technical",
    title: "Backend Developer",
    postedDate: "12 Oct, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-Site",
    Info: "We’re seeking a high-energy Backend Developer Intern/Junior Engineer to build scalable APIs, databases, and intelligent solutions across diverse platforms.",
    desc: "We are looking for a passionate and high-energy Backend Developer Intern or Junior Engineer to join our agile development team. You will be building robust APIs, working on database design, and helping power intelligent, scalable software solutions across multiple domains from OTT platforms to AI-powered systems.",
    requirements: [
      "	Develop, test, and maintain RESTful APIs and backend logic",
      "	Work with databases (SQL/NoSQL, MongoDB) for efficient data storage and retrieval",
      "	Integrate third-party APIs, payment gateways, and other external services",
      "	Optimize backend performance, caching, and data security",
      "	Collaborate with frontend developers, product managers, and designers",
      "	Support international and domestic projects simultaneously",
      "	Contribute to system architecture discussions and feature planning",
      "	Document your code and assist in creating clean, modular codebases"
    ],
    tools: ["Java", "Spring Boot", "Node.js", "Docker"]
  },

  {
    id: 3,
    category: "Technical",
    title: "Full Stack Developer",
    postedDate: "19 Oct, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-Site",
    Info: "We’re hiring a motivated Full Stack Engineer to design, develop, and maintain scalable frontend and backend web applications on-site.",
    desc: "We are looking for a skilled and motivated Full Stack Engineer to join our on-site development team on a full-time basis. In this role, you will be responsible for designing, developing, and maintaining scalable web applications across both frontend and backend systems.",
    requirements: [
      "Bachelor’s degree in Computer Science, Engineering, or related field",
      "2–5 years of experience as a Full Stack Developer / Engineer",
      "Strong proficiency in JavaScript / TypeScript",
      "Experience with modern frontend frameworks such as React, Next.js, or Angular",
      "Experience with backend technologies such as Node.js, Express, Java (Spring Boot), or Python (Django/FastAPI)",
      "Solid understanding of REST APIs and system architecture",
      "Experience working with databases (SQL and NoSQL)",
      "Familiarity with Git-based version control",
      "Strong problem-solving and debugging skills",
      "Ability to work on-site in a collaborative environment"
    ],
    tools: ["React", "MySQL", "JWT", "Git", "Postman"]
  },


  // --- NON-TECHNICAL JOBS ---
  {
    id: 4,
    category: "Non-Technical",
    title: "HR Manager",
    postedDate: "30 Oct, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "We’re seeking an experienced HR Manager to lead recruitment, operations, compliance, and employee engagement in a fast-paced tech-driven organization.",
    desc: "We are looking for an experienced HR Manager to manage end-to-end human resource operations at MatchBest Group. The role requires hands-on expertise in recruitment, HR operations, employee engagement, performance management, and compliance within a fast-paced, technology-driven organization. You will work closely with leadership to build strong, scalable teams and efficient HR processes.",
    requirements: [
      "	MBA / Master’s degree in Human Resources or a related field",
      "	2+ years of experience in HR operations and recruitment",
      "	Strong understanding of hiring life cycles and HR processes",
      "	Excellent communication and stakeholder management skills",
      "	Ability to work in a fast-paced environment",
      "	Familiarity with HRMS tools and documentation"
    ],
    tools: ["Zoho People", "LinkedIn Recruiter", "MS Office", "Google Workspace"]
  },

  {
    id: 5, 
    category: "Non-Technical",
    title: "Recruiter",
    postedDate: "18 Nov, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site",
    Info: "We’re looking for a proactive Recruiter to source, screen, and hire top technical and non-technical talent end-to-end.",
    desc: "We are seeking a proactive and detail-oriented Recruiter to join our HR team. The ideal candidate will have experience in sourcing, screening, and interviewing candidates for various technical and non-technical roles. You will play a key role in building strong teams by identifying top talent and ensuring a smooth recruitment process from start to finish.",
    requirements: [
      "Manage end-to-end US IT recruitment across various roles (Developers, Engineers, Cloud, DevOps, etc.)",
      "Source candidates via job boards Monster, Naukri, Dice, LinkedIn, and internal databases",
      "Screen and qualify candidates based on client requirements and technical fit",
      "Coordinate interviews with candidates and client hiring teams",
      "Build strong pipelines for recurring roles and manage relationships with consultants",
      "Track and manage candidate records and recruitment workflow in ATS",
      "Ensure timely closures and consistent follow-up throughout the hiring cycle"
    ],
    tools: ["Zoho People", "LinkedIn Recruiter", "Microsoft Teams", "Google Workspace"]
  },

  {
    id: 6, 
    category: "Non-Technical",
    title: "Content Creator",
    postedDate: "24 Nov, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site",
    Info: "We’re hiring a creative Content Creator to plan, produce, and execute high-quality content across websites, social media, and marketing channels.",
    desc: "We are looking for a creative, detail-oriented, and proactive Content Creator to join our team on a full-time, on-site basis. In this role, you will be responsible for planning, creating, and executing high-quality content across digital platforms including websites, blogs, social media, and marketing campaigns.",
    requirements: [
      "Bachelor’s degree in Marketing, Communications, Journalism, or a related field",
      "1–3 years of experience in content creation, copywriting, or digital marketing",
      "Strong written and verbal communication skills",
      "Ability to write for different formats and platforms (web, social, email)",
      "Basic understanding of SEO, keywords, and content optimization",
      "Creative mindset with attention to detail",
      "Ability to work on-site in a fast-paced environment",
      "Strong time management and collaboration skills"
    ],
    tools: ["Microsoft Word", "Canva", "Meta Business Suite"]
  },


  // --- INTERNSHIPS ---
  {
    id: 7, 
    category: "Internships",
    title: "Content Creator Intern",
    postedDate: "09 Nov, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "Join MatchBest Group as a Content Creator Intern to ideate, write, and execute AI-assisted content for global AI, SaaS, and healthcare platforms.",
    desc: "Join MatchBest Group as a Content Creator Intern to support fast-growing AI, SaaS, and healthcare platforms. This role focuses on content ideation, copywriting, AI-assisted creation, and social media execution. You will work closely with marketing, leadership, and AI teams to build strong digital narratives across global markets.",
    requirements: [
      "	Strong interest in content creation, storytelling, and social media",
      "	Good written and verbal English communication skills",
      "	Basic understanding of digital marketing and SEO",
      "	Comfortable using tools like Canva and social media platforms",
      "	Creative, adaptable, and eager to learn"
    ],
    tools: ["Canva", "Meta Business Suite", "Microsoft Office"]
  },

  {
    id: 8, 
    category: "Internships",
    title: "Full Stack Engineer Intern",
    postedDate: "18 Nov, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "Join as a Full Stack Engineer Intern to build frontend, backend, dashboards, and APIs for AI and digital platforms under mentorship.",
    desc: "As a Full Stack Engineer Intern, you’ll work on both frontend and backend development for AI-driven, OTT, and digital platforms. Your role includes building responsive web applications, creating dashboards, and developing or integrating APIs. You’ll collaborate with experienced engineers, learn best practices, and gain hands-on exposure to real-world projects—all under structured **mentorship and guidance",
    requirements: [
      "		Pursuing or completed B.Tech / BCA / MCA or equivalent",
      "	Knowledge of JavaScript, HTML, CSS, basic backend concepts",
      "	Quick learner, problem-solver, self-driven, and proactive"
    ],
    tools: ["React", "MySQL", "JWT", "Git", "Postman"]
  },

  {
    id: 9, 
    category: "Internships",
    title: "AI-ML Intern",
    postedDate: "02 Dec, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "Collaborate with the AI team to train, optimize, and deploy text, image, and video generative AI models for real-world applications.",
    desc: "In this role, you will collaborate closely with the AI team to build practical generative AI solutions. Your responsibilities include preparing and refining training data, training and fine-tuning generative models for text, image, and video use cases, and optimizing model performance for accuracy, speed, and scalability. You will also help deploy these models into real-world applications, ensuring they integrate smoothly with products, perform reliably in production, and meet business and user requirements.",
    requirements: [
      "		B.Tech / M.Tech in CS, AI/ML, Data Science, or related",
      "		Familiarity with Python, PyTorch, GPU computing, Linux",
      "		Strong learning mindset and problem-solving skills"
    ],
    tools: ["Python", "PyTorch", "GPU computing", "Linux"]
  },

  {
    id: 10, 
    category: "Internships",
    title: "Graphic Design Intern",
    postedDate: "16 Dec, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "We’re seeking a Graphic Design Intern to create visuals, reels, and short videos for MatchBest Group’s AI, healthcare, and SaaS platforms.",
    desc: "We are looking for a Graphic Design Intern with a strong visual sense to create design assets, reels, and short-form videos for MatchBest Group’s AI, healthcare, and SaaS platforms. This role is ideal for someone passionate about visual storytelling, trends, and design execution.",
    requirements: [
      "	Hands-on experience with Canva, CapCut, VN, Adobe Suite, Mojo",
      "	Strong understanding of visual composition, color, typography, and trends",
      "	Ability to create attention-grabbing short-form videos",
      "	Creative mindset with fast execution capability"
    ],
    tools: ["Canva", "Adobe Photoshop", "CapCut", "Mojo"]
  },

  {
    id: 11, 
    category: "Internships",
    title: "Business Dev Executive Intern",
    postedDate: "23 Dec, 2025",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "Support lead generation and sales for IT services by engaging international clients and coordinating with technical teams to close deals.",
    desc: "As a Business Development Executive Intern, you will support revenue growth for IT services and solutions by actively working on lead generation, client outreach, and relationship management. You’ll engage directly with international clients through calls, emails, and virtual meetings, understanding their requirements and presenting suitable solutions. The role involves coordinating closely with technical and delivery teams to prepare proposals, follow up on leads, and help close deals. You’ll track activities using tools like Zoho CRM, manage data in Google Sheets, and participate in client discussions via Zoom, building strong business and communication skills in a real-world sales environment.",
    requirements: [
      "	Bachelors degree in any field ",
      "	Excellent English communication skills",
      "	Target-driven, confident, and proactive"
    ],
    tools: ["Zoho CRM", "Google Sheets", "Zoom"]
  },

  {
    id: 12, 
    category: "Internships",
    title: "UI/UX Designer Intern",
    postedDate: "7 Jan, 2026",
    expiryDate: "",
    type: "Full-Time",
    location: "On-site (Sector 49, Gurugram)",
    Info: "Assist in designing UI/UX flows, wireframes, and mockups for global web and mobile projects using Figma and related design tools.",
    desc: "As a UI/UX Designer Intern, you will support the design team in creating intuitive and visually engaging user experiences for web and mobile applications used across global projects. Your work will include designing user flows, wireframes, and high-fidelity mockups that translate product requirements into clean, user-friendly interfaces. You’ll collaborate with developers, product managers, and stakeholders, applying principles of responsive design, typography, and color theory. Using tools like Figma, Adobe XD, Sketch, and InVision, you’ll iterate quickly on designs while bringing a creative, energetic, and adaptable mindset to fast-paced projects.",
    requirements: [
      "	Required Skills & Qualifications",
      " Proficiency in Figma, Adobe XD, or similar tools",
      "	Understanding of responsive design, typography, and color theory",
      "	Creative, agile mindset with high energy"
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
];