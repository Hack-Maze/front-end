import { CiPlay1 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";

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
        desc: "Move beyond mere problem-solving understand the practical significance of each challenge in the cybersecurity realm. Nitty-gritty delves deep, showing how your skills translate into tangible expertise.",
      },
      {
        id: 2,
        title: 'Upgrade from "How" to "Why".',
        desc: "Embrace a profound understanding. Nitty-gritty goes beyond surface-level comprehension, unlocking the deeper principles behind each challenge. Develop the ability to think like a pro and confidently tackle real-world scenarios.",
      },
      {
        id: 3,
        title: "Conquer Confusion.",
        desc: "Embrace a profound understanding. Nitty-gritty goes beyond surface-level comprehension, unlocking the deeper principles behind each challenge. Develop the ability to think like a pro and confidently tackle real-world scenarios.",
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
        desc: "Collaborative challenges offer the ultimate training ground. Share your expertise, learn from others, and dominate the cyber battlefield together.",
      },
      {
        id: 2,
        title: "Level Up, Inspire Up.",
        desc: "Join the collaborative revolution. Contribute your knowledge, learn from the best, and push the boundaries of cybersecurity innovation.",
      },
      {
        id: 3,
        title: "The Pen is Mightier.",
        desc: "Craft challenges, inspire others, and shape the future of cybersecurity. Your contribution becomes a stepping stone for countless learners, leaving a lasting impact.",
      },
    ],
  },
];
