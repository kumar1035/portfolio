export type Achievement = {
  title: string;
  description: string;
  icon: "star" | "code" | "users" | "trophy" | "award";
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "5-Star HackerRank Badge",
    description: "Earned a 5-star rating on HackerRank for problem solving excellence.",
    icon: "star",
  },
  {
    title: "350+ LeetCode Problems Solved",
    description: "Consistently solving algorithmic challenges to sharpen DSA fundamentals.",
    icon: "code",
  },
  {
    title: "GSSoC Contributor 2025",
    description: "Contributed to open-source projects as part of GirlScript Summer of Code 2025.",
    icon: "users",
  },
  {
    title: "SCSE Frontend Challenge Winner",
    description: "Won the frontend development challenge hosted by SCSE NIT Jamshedpur.",
    icon: "trophy",
  },
  {
    title: "Event Management Head — SCSE",
    description: "Led event management operations for SCSE, NIT Jamshedpur's premier tech society.",
    icon: "award",
  },
];
