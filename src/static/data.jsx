import { CiPlay1 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { GiSwordsEmblem } from "react-icons/gi";
import { SiHackaday } from "react-icons/si";

export const Rows = [
  {
    id: 1,
    icon: <CiPlay1 />,
    iconText: "How It Works",
    titleHighlight: "It’s ",
    title: "All About Time So,",
    desc: "Let’s go and improve your skills.",
    cards: [
      {
        id: 1,
        title: "Understanding Beyond Solving.",
        desc: "Move beyond problem-solving to grasp the practical significance of each cybersecurity challenge. Dive deep into the details, exploring how your skills translate into expertise.",
      },
      {
        id: 2,
        title: 'Upgrade from "How" to "Why".',
        desc: "Embrace a deeper understanding as Nitty-gritty takes you beyond surface-level comprehension. Unlock the principles behind each challenge and think like a cybersecurity pro.",
      },
      {
        id: 3,
        title: "Conquer Confusion.",
        desc: "Rise above confusion with Nitty-gritty's insights. Gain a profound understanding of cybersecurity principles and confidently tackle real-world scenarios.",
      },
    ],
  },
  {
    id: 2,
    icon: <FaQuestion />,
    iconText: "Are You Ready",
    titleHighlight: "Our ",
    title: " Mystery Challenges",
    desc: "Dive into the Unknown.",
    cards: [
      {
        id: 1,
        title: "Real-world Simulation.",
        desc: "Escape predictable exercises with mystery challenges that replicate real-world security incidents. Sharpen critical thinking and problem-solving skills in a thrilling, immersive experience.",
      },
      {
        id: 2,
        title: "Thrilling Unveiling.",
        desc: "Every click reveals a new layer of mystery. Can you uncover the hidden objective and emerge victorious? Test your analytical skills and deduction prowess like never before.",
      },
      {
        id: 3,
        title: "Cybersecurity Detective.",
        desc: "Analyze clues, piece together evidence, and crack the code in an ever-evolving puzzle. Each solved mystery grants valuable skills and boosts confidence.",
      },
    ],
  },
  {
    id: 3,
    icon: <HiUserGroup />,
    iconText: "You Aren’t Alone",
    titleHighlight: "Team ",
    title: "Collaborative Challenges",
    desc: "Strength in Unity.",
    cards: [
      {
        id: 1,
        title: "Build a Pack, not Lone Wolves.",
        desc: "Join forces in collaborative challenges, where teamwork is the key. Share your expertise, learn from others, and dominate the cyber battlefield together.",
      },
      {
        id: 2,
        title: "Level Up, Inspire Up.",
        desc: "Become part of the collaborative revolution. Contribute your knowledge, learn from the best, and push the boundaries of cybersecurity innovation.",
      },
      {
        id: 3,
        title: "The Pen is Mightier.",
        desc: "Craft challenges, inspire others, and shape the future of cybersecurity. Your contribution becomes a stepping stone for countless learners, leaving a lasting impact on the cyber landscape.",
      },
    ],
  },
];

export const Paths = [
  {
    id: 1,
    link: "/roadmap/offensive",
    icon: <SiHackaday size={60} color="#1aaf02fc" />,
    title: "Offensive Security",
    desc: "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
  },
  {
    id: 2,
    link: "/roadmap/defensive",
    icon: <GiSwordsEmblem size={60} color="#1aaf02fc" />,
    title: "Defensive Security",
    desc: "Learn how to defend against cyber threats by mastering defensive security techniques.",
  },
];
