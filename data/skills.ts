export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages I write daily.",
    skills: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    description: "Crafting fast, accessible, and elegant interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Building reliable APIs and real-time services.",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  },
  {
    title: "AI / ML",
    description: "Applied machine learning and NLP systems.",
    skills: ["PyTorch", "Hugging Face", "Transformers", "FAISS", "NLP"],
  },
  {
    title: "Databases",
    description: "Storing, indexing, and querying data at scale.",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    description: "Shipping, scaling, and orchestrating systems.",
    skills: ["Docker", "Kafka", "RabbitMQ", "Git", "GitHub"],
  },
];
