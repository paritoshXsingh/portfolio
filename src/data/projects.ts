import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    slug: "collabspace",

    title: "CollabSpace",

    highlight: "Real-Time Collaboration",

    description:
      "A real-time collaborative document editing platform where users can create, edit, share, and collaborate on documents with permission-based access control.",

    thumbnail: "/projects/collabspace/thumbnail.png",

    github: "https://github.com/paritoshXsingh/collabspace",

    live: "https://collabspace-beta.vercel.app",

    featured: true,

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Redux Toolkit",
      "JWT",
      "React Quill",
    ],

    features: [
      "Real-Time Collaboration",
      "Socket.IO Synchronization",
      "Document Sharing",
      "Collaborator Permissions",
      "Live Active User Tracking",
      "Autosave",
      "Rich Text Editor",
      "Protected Routes",
      "Shared Documents Dashboard",
      "Owner Controls",
    ],

    challenges: [
      "Building real-time collaboration architecture",
      "Managing active user tracking",
      "Handling permission-based document access",
      "Maintaining synchronization consistency across multiple users",
    ],
    lessons: [
      "Implemented real-time communication using Socket.IO",
      "Managed concurrent users editing the same document",
      "Built permission-based document access control",
      "Improved understanding of WebSocket architecture",
    ],

    images: [
      "/projects/collabspace/1.png",
      "/projects/collabspace/2.png",
      "/projects/collabspace/3.png",
      "/projects/collabspace/4.png",
      "/projects/collabspace/5.png",
      "/projects/collabspace/6.png",
    ],
  },

  {
    id: 2,

    slug: "learnhub",

    title: "LearnHub LMS",

    highlight: "Learning Management System",

    description:
      "A full-stack Learning Management System where students can enroll in courses, track learning progress, and instructors can create and manage structured course content.",

    thumbnail: "/projects/learnhub/thumbnail.png",

    github: "https://github.com/paritoshXsingh/lms",

    live: "https://lms-mu-hazel.vercel.app",

    featured: true,

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Bootstrap",
      "Vercel",
      "Render",
    ],

    features: [
      "JWT Authentication",
      "Role-Based Access Control",
      "Student and Instructor Workflows",
      "Course Creation and Management",
      "Module and Lesson Management",
      "Stripe Payments",
      "Course Enrollment",
      "Learning Dashboard",
      "Video Lesson Player",
      "Profile Management",
    ],

    challenges: [
      "Implementing role-based authorization",
      "Integrating Stripe payment workflow",
      "Handling nested course-module-lesson architecture",
      "Deploying a full-stack application across multiple cloud services",
    ],
    lessons: [
      "Implemented role-based authorization",
      "Integrated Stripe payment workflows",
      "Designed nested course structures",
      "Managed production deployment across multiple services",
    ],

    images: [
      "/projects/learnhub/1.png",
      "/projects/learnhub/2.png",
      "/projects/learnhub/3.png",
      "/projects/learnhub/4.png",
      "/projects/learnhub/5.png",
    ],
  },

  {
    id: 3,

    slug: "devink",

    title: "DevInk",

    highlight: "Multi-Author Publishing",

    description:
      "A full-stack multi-author blogging platform inspired by Medium and Hashnode with publishing workflows, role-based dashboards, AI-assisted writing, and content moderation.",

    thumbnail: "/projects/devink/thumbnail.png",

    github: "https://github.com/paritoshXsingh/devink",

    live: "https://devink-xi.vercel.app",

    featured: true,

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "ImageKit",
      "Gemini API",
      "Tailwind CSS",
    ],

    features: [
      "Multi-Author Blogging",
      "JWT Authentication",
      "Draft and Publish Workflow",
      "Author Dashboard",
      "Admin Dashboard",
      "Comment Moderation",
      "Image Upload with ImageKit",
      "Category Filtering",
      "AI Content Generation",
      "Responsive Design",
    ],

    challenges: [
      "Converting a single-admin system into a multi-author platform",
      "Implementing ownership-based authorization",
      "Managing relationships between users, blogs, and comments",
      "Integrating image optimization and AI content generation",
    ],
    lessons: [
      "Designed multi-author ownership architecture",
      "Implemented admin moderation workflows",
      "Integrated ImageKit media management",
      "Worked with AI-assisted content generation",
    ],

    images: [
      "/projects/devink/1.png",
      "/projects/devink/2.png",
      "/projects/devink/3.png",
      "/projects/devink/4.png",
      "/projects/devink/5.png",
    ],
  },
];
