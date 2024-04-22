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

export const RecPaths = [
  {
    id: 1,
    // link: "/roadmap/offensive",
    img: "/rec-path-1.png",
    title: "Jr Penetration Tester",
    desc: "This learning path covers the core technical skills that will allow you to succeed as a junior penetration tester. Upon completing this path, you will have the practical skills necessary to perform security assessments against web applications and enterprise infrastructure.",
  },
  {
    id: 2,
    // link: "/roadmap/defensive",
    img: "/rec-path-2.png",
    title: "Linux Fundamentals",
    desc: "Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!",
  },
  {
    id: 3,
    // link: "/roadmap/defensive",
    img: "/rec-path-3.png",
    title: "Intro to Offensive Security",
    desc: "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
  },
];

export const learns = [
  {
    id: 1,
    img: "/rec-path-1.png",
    title: "Jr Penetration Tester",
    level: "fundamental",
    desc: "This learning path covers the core technical skills that will allow you to succeed as a junior penetration tester.",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 2,
    img: "/rec-path-2.png",
    title: "Linux Fundamentals",
    level: "fundamental",
    desc: "Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      {
        title: "Linux Structure",
        desc: "Many events led up to creating the first Linux kernel and, ultimately, the Linux operating system (OS), starting with the Unix operating system's release by Ken Thompson and Dennis Ritchie (whom both worked for AT&T at the time) in 1970. The Berkeley Software Distribution (BSD) was released in 1977, but since it contained the Unix code owned by AT&T, a resulting lawsuit limited the development of BSD. Richard Stallman started the GNU project in 1983. His goal was to create a free Unix-like operating system, and part of his work resulted in the GNU General Public License (GPL) being created. Projects by others over the years failed to result in a working, free kernel that would become widely adopted until the creation of the Linux kernel.",
      },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 3,
    img: "/rec-path-3.png",
    title: "Intro to Offensive Security",
    level: "fundamental",
    desc: "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 4,
    img: "/rec-path-1.png",
    title: "Sr Penetration Tester",
    level: "fundamental",
    desc: "This learning path covers the core technical skills that will allow you to succeed as a junior penetration tester.",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 5,
    img: "/rec-path-2.png",
    title: "Advanced Linux",
    level: "fundamental",
    desc: "Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 6,
    img: "/rec-path-3.png",
    title: "Advanced Offensive Security",
    level: "medium",
    desc: "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 7,
    img: "/rec-path-1.png",
    title: "Advanced Penetration Tester",
    level: "easy",
    desc: "This learning path covers the core technical skills that will allow you to succeed as a junior penetration tester.",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 8,
    img: "/rec-path-2.png",
    title: "Poweshell Fundamentals",
    level: "hard",
    desc: "Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      {
        title: "Linux Structure",
        desc: "Many events led up to creating the first Linux kernel and, ultimately, the Linux operating system (OS), starting with the Unix operating system's release by Ken Thompson and Dennis Ritchie (whom both worked for AT&T at the time) in 1970. The Berkeley Software Distribution (BSD) was released in 1977, but since it contained the Unix code owned by AT&T, a resulting lawsuit limited the development of BSD. Richard Stallman started the GNU project in 1983. His goal was to create a free Unix-like operating system, and part of his work resulted in the GNU General Public License (GPL) being created. Projects by others over the years failed to result in a working, free kernel that would become widely adopted until the creation of the Linux kernel.",
      },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
  {
    id: 9,
    img: "/rec-path-3.png",
    title: "Intro to Defensive Security",
    level: "hard",
    desc: "Hack your first website (legally in a safe environment) and experience an ethical hacker's job.",
    summary:
      "Linux is an indispensable tool and system in the field of cybersecurity. Many servers run on Linux and offer a wide range of possibilities for offensive security practitioners, network defenders, and systems administrators. This module covers the essentials for starting with the Linux operating system and terminal.\n\nIn this module, we will cover:\n\n- Linux Structure\n- Using the shell\n- Navigating the Linux operating system\n- Working with files and directories\n- Linux administration\n- Service management\n- Permissions management\n\nThis module is broken down into sections with accompanying hands-on exercises to practice each of the tactics and techniques we cover. The module ends with a practical hands-on skills assessment to gauge your understanding of the various topic areas.\nAs you work through the module, you will see example commands and command output for the various topics introduced. It is worth reproducing as many of these examples as possible to reinforce further the concepts introduced in each section. You can do this in the Pwnbox provided in the interactive sections or your own virtual machine.\nYou can start and stop the module at any time and pick up where you left off. There is no time limit or 'grading,' but you must complete all of the exercises and the skills assessment to receive the maximum number of cubes and have this module marked as complete in any paths you have chosen.\nThe module is classified as 'Fundamental.' It assumes that the user has little to no prior experience with the Linux operating system but is generally comfortable navigating a graphical operating system such as Windows.This module has no prerequisites but serves as the basis for many of the modules contained within the Academy. Completion and an in-depth understanding of this module are crucial for success as you progress through the Academy and Hack the Box platforms.",
    sections: [
      { title: "Linux Structure", desc: "Linux structure description" },
      { title: "History", desc: "History description" },
      { title: "Linux Distributions", desc: "Linux distributions description" },
      {
        title: "Introduction to Shell",
        desc: "Introduction to shell description",
      },
      { title: "Prompt Description", desc: "Prompt description" },
      { title: "Getting Help", desc: "Getting help description" },
      { title: "System Information", desc: "System information description" },
      { title: "Navigation", desc: "Navigation description" },
      {
        title: "Working with Files and Directories",
        desc: "Working with files and directories description",
      },
      { title: "Editing Files", desc: "Editing files description" },
      {
        title: "Find Files and Directories",
        desc: "Find files and directories description",
      },
      {
        title: "File Descriptors and Redirections",
        desc: "File descriptors and redirections description",
      },
      { title: "Filter Contents", desc: "Filter contents description" },
      { title: "Regular Expressions", desc: "Regular expressions description" },
      {
        title: "Permission Management",
        desc: "Permission management description",
      },
      { title: "User Management", desc: "User management description" },
      { title: "Package Management", desc: "Package management description" },
      {
        title: "Service and Process Management",
        desc: "Service and process management description",
      },
      { title: "Task Scheduling", desc: "Task scheduling description" },
      { title: "Network Services", desc: "Network services description" },
      {
        title: "Working with Web Services",
        desc: "Working with web services description",
      },
      { title: "Backup and Restore", desc: "Backup and restore description" },
      {
        title: "File System Management",
        desc: "File system management description",
      },
      { title: "Containerization", desc: "Containerization description" },
      {
        title: "Network Configuration",
        desc: "Network configuration description",
      },
      {
        title: "Remote Desktop Protocols in Linux",
        desc: "Remote desktop protocols in Linux description",
      },
      { title: "Linux Security", desc: "Linux security description" },
      { title: "Firewall Setup", desc: "Firewall setup description" },
      {
        title: "System Logs and Monitoring",
        desc: "System logs and monitoring description",
      },
      { title: "Solaris", desc: "Solaris description" },
      { title: "Shortcuts", desc: "Shortcuts description" },
    ],
  },
];
