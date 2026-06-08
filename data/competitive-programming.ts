import { SOCIAL_LINKS } from "./links";

export type CPStat = {
  platform: string;
  handle: string;
  href: string;
  stats: { label: string; value: number; suffix?: string }[];
  accent: string;
};

export const CP_STATS: CPStat[] = [
  {
    platform: "LeetCode",
    handle: "anujkumar1035",
    href: SOCIAL_LINKS.leetcode,
    accent: "from-amber-400 to-orange-500",
    stats: [
      { label: "Problems Solved", value: 350, suffix: "+" },
      { label: "Contest Rating", value: 1550 },
      { label: "Global Ranking", value: 250000, suffix: "+" },
    ],
  },
  {
    platform: "Codeforces",
    handle: "anujkumar1035",
    href: "https://codeforces.com/profile/cloudmaster2k24",
    accent: "from-blue-400 to-indigo-500",
    stats: [
      { label: "Max Rating", value: 1100 },
      { label: "Problems Solved", value: 140, suffix: "+" },
      { label: "Contests", value: 25, suffix: "+" },
    ],
  },
  {
    platform: "HackerRank",
    handle: "anujkumar1035",
    href: "https://www.hackerrank.com/profile/kumar10305ak",
    accent: "from-emerald-400 to-green-500",
    stats: [
      { label: "Star Rating", value: 5 },
      { label: "Badges Earned", value: 12, suffix: "+" },
      { label: "Problems Solved", value: 180, suffix: "+" },
    ],
  },
  {
    platform: "GitHub",
    handle: "kumar1035",
    href: SOCIAL_LINKS.github,
    accent: "from-fuchsia-400 to-violet-500",
    stats: [
      { label: "Public Repos", value: 40, suffix: "+" },
      { label: "Contributions", value: 900, suffix: "+" },
      { label: "Stars Earned", value: 60, suffix: "+" },
    ],
  },
];
