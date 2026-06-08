export type ProjectCategory = "ALL" | "WEB" | "AI/ML" | "JAVA" | "PYTHON";

export type Project = {
  slug: string;
  title: string;
  categories: Exclude<ProjectCategory, "ALL">[];
  techStack: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
};

export const PROJECT_FILTERS: ProjectCategory[] = ["ALL", "WEB", "AI/ML", "JAVA", "PYTHON"];

export const PROJECTS: Project[] = [
  {
    slug: "codesync-ai",
    title: "CodeSync AI",
    categories: ["WEB", "AI/ML"],
    techStack: ["Next.js", "TypeScript", "Socket.IO", "Docker", "PostgreSQL", "Redis", "Kafka"],
    description:
      "A real-time collaborative AI-powered code editor supporting multi-user collaboration, live code execution, operational transforms, and AI-assisted debugging, refactoring, and code generation.",
    githubUrl: "https://github.com/kumar1035/codesync-ai",
    liveUrl: "https://codesync2.netlify.app/",
    previewImage: "/images/projects/codesync-ai.png",
  },
  {
    slug: "zerocode",
    title: "ZeroCode",
    categories: ["WEB", "AI/ML"],
    techStack: ["React", "Next.js", "Tailwind CSS", "Clerk", "PostgreSQL", "Gemini API"],
    description:
      "An AI-powered website generator that converts natural language prompts into deployable frontend websites using LLM-based prompt engineering.",
    githubUrl: "https://github.com/kumar1035/ZeroCode2",
    liveUrl: "https://zerocode2.netlify.app/",
    previewImage: "/images/projects/zerocode.png",
  },
  {
    slug: "semantic-search-ir",
    title: "Semantic Search & Information Retrieval System",
    categories: ["AI/ML"],
    techStack: ["Python", "Transformers", "FAISS", "NLP", "PyTorch"],
    description:
      "A semantic search engine using SBERT embeddings and FAISS indexing for high-speed document retrieval with transformer-based semantic understanding.",
    githubUrl: "https://github.com/kumar1035/REPLACE_ME",
    liveUrl: "https://huggingface.co/spaces/JackSparrow89/Semantic_File",
    previewImage: "/images/projects/semantic-search-ir.jpeg",
  },
  {
    slug: "irctc-train-booking",
    title: "IRCTC Train Booking System",
    categories: ["JAVA"],
    techStack: ["Java", "Gradle", "JSON", "BCrypt", "Jackson"],
    description:
      "A train reservation system supporting authentication, booking, cancellation, real-time seat allocation, and JSON-based persistence architecture.",
    githubUrl: "https://github.com/kumar1035/REPLACE_ME",
    liveUrl: "https://REPLACE_ME.vercel.app",
    previewImage: "/images/projects/irctc-train-booking.png",
  },
  {
    slug: "microservices-task-management",
    title: "Microservices Task Management System",
    categories: ["WEB"],
    techStack: ["Node.js", "Express.js", "MongoDB", "RabbitMQ", "Docker"],
    description:
      "A scalable microservices-based task management platform using RabbitMQ for asynchronous communication and Docker for deployment.",
    githubUrl: "https://github.com/kumar1035/Microservices",
    liveUrl: "https://REPLACE_ME.vercel.app",

    previewImage: "/images/projects/microservice.png",
  },
  {
    slug: "securepass",
    title: "SecurePass",
    categories: ["WEB", "PYTHON"],
    techStack: ["Python", "Flask", "React", "Vite", "secrets module"],
    description:
      "A full-stack password generator and strength analyzer powered by Python's cryptographically secure `secrets` module — featuring entropy scoring, pattern detection, history tracking, and bulk export.",
    githubUrl: "https://github.com/kumar1035/SecurePass",
    liveUrl: "https://secure-pass-ochre.vercel.app",
    previewImage: "/images/projects/securepass.png",
  },
  {
    slug: "weatheriq",
    title: "WeatherIQ",
    categories: ["PYTHON"],
    techStack: ["Python", "Desktop GUI", "Weather API", "IP Geolocation"],
    description:
      "A feature-rich desktop weather application with live API data, automatic location detection, animated hourly and 5-day forecasts, unit switching, and a clean dark-themed interface.",
    githubUrl: "https://github.com/kumar1035/WeatherIQ",
    liveUrl: "https://weather-iq.vercel.app",
    previewImage: "/images/projects/weatheriq.png",
  },
  {
    slug: "grey-voice-assistant",
    title: "Grey — AI Voice Assistant",
    categories: ["WEB", "AI/ML"],
    techStack: ["React", "Vite", "Tailwind CSS", "Web Speech API", "LLM Integration"],
    description:
      "A browser-based AI voice assistant that listens, thinks, and replies aloud using native Web Speech APIs and an LLM, with persistent per-user conversation history and a state-reactive animated orb interface.",
    githubUrl: "https://github.com/kumar1035/OIBSIP",
    liveUrl: "https://oibsip-inky.vercel.app",
    previewImage: "/images/projects/grey-voice-assistant.png",
  },
  {
    slug: "doclab",
    title: "Messagelab",
    categories: ["WEB"],
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker", "Nginx"],
    description:
      "A containerized full-stack messaging platform with a dynamic React frontend, a Node/Express REST API, relational PostgreSQL storage with SQL joins, and Docker Compose + Nginx for production deployment.",
    githubUrl: "https://github.com/kumar1035/doclab",
    liveUrl: "https://REPLACE_ME.vercel.app",
    previewImage: "/images/projects/doclab.png",
  },
  {
    slug: "opensky",
    title: "OpenSky",
    categories: ["WEB"],
    techStack: ["React", "JavaScript", "Weather API", "CSS", "Glassmorphism"],
    description:
      "A modern, responsive weather forecasting app delivering real-time conditions, extended forecasts, and location-based search through a glassmorphic interface with smooth animations and adaptive light/dark themes.",
    githubUrl: "https://github.com/kumar1035/OpenSky",
    liveUrl: "https://openskyx.netlify.app",
    previewImage: "/images/projects/opensky.png",
  },
  {
    slug: "soundwave",
    title: "SoundWave",
    categories: ["WEB"],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Simplex Noise"],
    description:
      "An animated, music-themed web experience built with Next.js and Framer Motion — focused on fluid motion design, generative visuals, and an immersive, premium UI/UX.",
    githubUrl: "https://github.com/kumar1035/SoundWave",
    liveUrl: "https://sound-wave-nine.vercel.app",
    previewImage: "/images/projects/soundwave.png",
  },
  {
    slug: "screenpulse",
    title: "ScreenPulse",
    categories: ["WEB"],
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "Socket.IO", "WebRTC"],
    description:
      "A peer-to-peer screen sharing platform built with WebRTC and Socket.IO — instant room creation, secure low-latency streaming, and zero downloads or sign-ups, with no screen data ever stored on servers.",
    githubUrl: "https://github.com/kumar1035/ScreenPulse",
    liveUrl: "https://screen-pulse.vercel.app",
    previewImage: "/images/projects/screenpulse.png",
  },
  {
    slug: "3d-particle-system",
    title: "3D Particle System — Hand Gesture Control",
    categories: ["WEB", "AI/ML"],
    techStack: ["JavaScript", "Three.js", "Computer Vision", "Hand Tracking", "Glassmorphism"],
    description:
      "A real-time 3D particle system controlled entirely through hand gestures — pinch to expand, height to recolor, finger count to switch templates — with a glassmorphic, auto-hiding UI across 8 generative templates.",
    githubUrl: "https://github.com/kumar1035/3Dparticle",
    liveUrl: "https://3dparticle-pro.vercel.app",
    previewImage: "/images/projects/3dparticle.png",
  },
  {
    slug: "skeleton-pose-detection",
    title: "Skeleton — Real-Time Pose Detection",
    categories: ["WEB", "AI/ML"],
    techStack: ["p5.js", "ml5.js", "PoseNet", "WebRTC", "JavaScript"],
    description:
      "A real-time human pose detection web app using PoseNet and p5.js — it captures a live webcam feed, identifies 17 body keypoints with AI, and renders a live skeleton overlay entirely client-side.",
    githubUrl: "https://github.com/kumar1035/Skeleton",
    liveUrl: "https://skeleton-one-green.vercel.app",
    previewImage: "/images/projects/skeleton.png",
  },
  {
    slug: "ochi-website",
    title: "Ochi Website",
    categories: ["WEB"],
    techStack: ["React", "Framer Motion", "GSAP", "Locomotive Scroll"],
    description:
      "An animation-focused website showcase built with React, Framer Motion, GSAP, and Locomotive Scroll — demonstrating fluid, scroll-driven motion design and premium UI/UX craftsmanship.",
    githubUrl: "https://github.com/kumar1035/Ochi-website",
    liveUrl: "https://ochi-website-self.vercel.app",
    previewImage: "/images/projects/ochi-website.png",
  },
];
