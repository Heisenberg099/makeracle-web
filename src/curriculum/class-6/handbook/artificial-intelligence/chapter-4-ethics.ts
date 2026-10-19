import type { AIChapter } from "@/curriculum/class-6/handbook/types";

/** AI Chapter 4 — Ethics and Digital Responsibility. SH pp. 76–82, TH pp. 106–108. */
export const ai4: AIChapter = {
  number: 4,
  slug: "ethics-and-digital-responsibility",
  title: "Ethics and Digital Responsibility",
  learningFocus: ["Responsible use of technology", "Online safety", "Privacy", "Password safety", "Digital footprints"],
  ethicsTag: "Online behaviour",
  page: { sh: [76, 82], th: [106, 108] },
  sections: [
    {
      id: "ai4-intro",
      heading: "Digital responsibility",
      page: { sh: 76 },
      blocks: [
        {
          kind: "p",
          text: "Technology is everywhere around us. It helps us learn, communicate and explore the world. But think for a moment. When we cross a road, do we just run across? No, we look both ways. When we are in school, do we shout in the classroom? Of course not. We follow rules. In the same way, when we use the internet and digital devices, we must also behave responsibly. Being careful, respectful and honest while using technology is called Digital responsibility.",
        },
        {
          kind: "list",
          title: "Before we begin, let us consider a few important questions:",
          items: [
            "What does it mean to behave properly online?",
            "How can we stay safe on the internet?",
            "Why are passwords so important?",
            "What happens to the information we share online?",
          ],
        },
      ],
    },
    {
      id: "ai4-responsible-use",
      heading: "Responsible Use of Technology",
      page: { sh: 76 },
      blocks: [
        { kind: "p", text: "Technology is used in many aspects of our daily life, such as communication, education, entertainment, and financial transactions. Technology makes many things easier." },
        {
          kind: "list",
          title: "Examples:",
          items: [
            "Students can learn difficult subjects by watching educational videos.",
            "Families who live in different cities can talk and see each other through video calls.",
            "A cell phone makes it easy to contact the police or doctors in an emergency.",
          ],
        },
        {
          kind: "p",
          text: "We need to follow rules when we use technology, just like we do when we drive. The Internet can be useful, but it can also be dangerous if we are not careful. Being responsible with technology means thinking before you click, being careful about what you share, and being respectful to other people online. When we use technology in a wise and polite way, we become responsible Digital Citizens who know how to keep ourselves and others safe.",
        },
      ],
    },
    {
      id: "ai4-ethics",
      heading: "What is Ethics?",
      page: { sh: 76 },
      blocks: [
        {
          kind: "p",
          text: "Ethics means knowing what is right and wrong and choosing to do what is right. Think about your everyday life. If you find a lost pencil box in class, what should you do? Return it to the owner, right? If your friend is upset, do you laugh at him or try to help? Most of us try to help. These choices show ethical behaviour.",
        },
        {
          kind: "p",
          text: "Ethics refers to the principles that help us distinguish between right and wrong and guide us to make responsible choices. Ethical behaviour includes honesty, respect for others, and taking responsibility for one’s actions.",
        },
      ],
    },
    {
      id: "ai4-computer-ethics",
      heading: "Ethical Use of Technology",
      page: { sh: 77 },
      blocks: [
        {
          kind: "p",
          text: "Computer Ethics is the set of rules that we must follow while using computers for various purposes. These rules prohibit misusing or accessing information that belongs to others. The importance of understanding computer ethics has grown because of problems like cybercrimes, plagiarism, hacking, and password thefts. Computer ethics provides a secure computing environment.",
        },
      ],
    },
    {
      id: "ai4-arjun",
      heading: "Internet Safety: A Case Study — Meet Arjun and His Digital Disaster",
      page: { sh: 77 },
      blocks: [
        {
          kind: "p",
          text: "Arjun was a student in Class 6. He loved using the computer and believed he knew everything about it. One day, his teacher gave the class a project on Save Water. Arjun wanted to finish it quickly so he could play games. He searched on the Internet, found a good essay, copied it, changed a few words, and submitted it. “Done! Now I can play games,” he said happily.",
        },
        {
          kind: "example",
          title: "The Next Day",
          lines: [
            "Arjun received an email. It looked like it came from his favourite gaming website.",
            "The email said: ‘CONGRATULATIONS ARJUN! You have won a free game. Click here to claim it now.’",
            "Arjun became extremely excited. “A free game? That is amazing!” he said. Without thinking much, he clicked the link.",
            "Suddenly, an advertisement popped up on his screen: ‘WARNING! Your computer has a virus. Click here to scan your computer for free.’",
            "Arjun just wanted the message to disappear, so he clicked again.",
          ],
        },
        {
          kind: "example",
          title: "One Week Later…",
          lines: [
            "When Arjun turned on his computer, something was wrong. The computer was terribly slow.",
            "He opened his project folder. It was empty. All his files were gone. Even worse, strange messages had been posted from his social media account.",
            "Arjun realised that he had made some serious mistakes while using the Internet.",
          ],
        },
        {
          kind: "p",
          text: "Think About It: What mistakes did Arjun make? Let us find out what mistakes Arjun made and learn how to stay safe while using the Internet. Some of these problems occur because of certain unethical practices on the internet.",
        },
      ],
    },
    {
      id: "ai4-unethical",
      heading: "Unethical practices prevalent in society, related to internet",
      page: { sh: [78, 79] },
      blocks: [
        { kind: "terms", items: [{ term: "Plagiarism", text: "Plagiarism is the act of copying or making minor modifications to a sentence or paragraph without referring the original author." }] },
        {
          kind: "list",
          title: "Steps to prevent Plagiarism",
          items: [
            "Always get a formal approval from the original author",
            "Always acknowledge and give proper credit to the original author",
            "Use quotation marks when copying exact text",
            "Try to express ideas in your own words",
          ],
        },
        { kind: "terms", items: [{ term: "Hacking", text: "Hacking refers to the unauthorized access to computer systems or networks with the intention of stealing, modifying, or misusing data." }] },
        {
          kind: "list",
          title: "Steps to prevent Hacking",
          items: [
            "Install firewall, antivirus and scan your hard disk drives periodically.",
            "Never share your password and always keep a strong password that should contain numbers, special characters, small letters, capital letters, and keep changing it periodically.",
            "Do not click on any ads that claim to scan viruses on your computer.",
            "Hackers often look for an open Bluetooth signal to gain access to your computers, so avoid keeping Bluetooth on unnecessarily and be careful while using public Wi-Fi.",
          ],
        },
        {
          kind: "terms",
          items: [
            {
              term: "Phishing",
              text: "Phishing is an illegal attempt to obtain confidential information, such as usernames, passwords, bank details, and credit card details. This is done by sending fake emails, text messages or creating websites that look like they are from authentic companies. This type of attack is also known as spoofing.",
            },
          ],
        },
        {
          kind: "list",
          title: "Steps to prevent Phishing",
          items: [
            "Do not click on suspicious links or attachments in emails or messages.",
            "Check the sender’s email address carefully before replying.",
            "Be careful of messages asking for urgent personal or bank information.",
          ],
        },
        {
          kind: "terms",
          items: [
            {
              term: "Spamming",
              text: "Spamming is one of the most common methods of sending unwanted junk mail, or messages from unauthorized people. It involves the mass distribution of junk messages, advertisements, or inappropriate content to email accounts through social networking sites, commercial websites, or personal blogs.",
            },
          ],
        },
        {
          kind: "list",
          title: "Steps to prevent Spamming",
          items: [
            "Do not click on suspicious pop-up ads or links.",
            "Avoid sharing your email address on unknown websites.",
            "Use spam filters to block unwanted emails.",
            "Do not respond to or open emails from unknown senders.",
          ],
        },
        {
          kind: "terms",
          items: [
            {
              term: "Individual rights to privacy",
              text: "Individual right to privacy refers to the right that you are given to access your personal information and how it is used. Privacy is a concern that occurs when personal information is obtained, shared, or used without the approved person’s consent.",
            },
          ],
        },
        {
          kind: "list",
          title: "Steps to protect privacy",
          items: [
            "Limit posting pictures and unnecessary sharing of information on social media.",
            "Never give out any of your password and bank details.",
            "Beware that any important or personal information that you provide may be shared, so it is best to read the privacy policy before signing up for an app or service.",
          ],
        },
        { kind: "terms", items: [{ term: "Software Piracy", text: "Software Piracy is the unauthorized copying, sharing, modification, or use of software. Software piracy is illegal and a punishable offense." }] },
        {
          kind: "list",
          title: "Steps to stop software Piracy",
          items: ["Purchase your own licensed software copy.", "Do not make and distribute the copies of the software.", "Download software only from official companies."],
        },
        {
          kind: "terms",
          items: [
            {
              term: "Intellectual property rights",
              text: "Authors, inventors, and artists turn their ideas into a valuable creation called intellectual property. Under the law of intellectual property, the owner is given exclusive right over the use of his/her creation for a certain period of time. Intellectual property is a field of law that aims to protect the creator's hard work while avoiding misuse and illegal piracy.",
            },
          ],
        },
        {
          kind: "list",
          title: "Steps to protect Intellectual property rights",
          items: [
            "Keep business ideas and trade secrets confidential until secured.",
            "Apply for a trademark for your business name and logo.",
            "Copyright your work to prevent unauthorized use.",
            "Patent your inventions to take legal action if someone uses them without permission.",
          ],
        },
      ],
    },
    {
      id: "ai4-footprint",
      heading: "Digital Footprint",
      page: { sh: [79, 80] },
      blocks: [
        {
          kind: "p",
          text: "Have you ever walked on sand at the beach? When you walk, your footprints stay on the sand for some time. In the same way, when you use the internet, you leave digital footprints.",
        },
        {
          kind: "p",
          text: "Digital footprints contain all the records of your online activity, including your feedback on news stories, social media posts, and online shopping records. You create a digital trail each time you post something online, share content, or when a website collects your information by installing cookies on your computer. It may include your IP address, email details, and other sensitive information you are sharing online. Data shared about you by others may also be added to your digital record.",
        },
        { kind: "terms", items: [{ term: "Active digital footprints", text: "Active digital footprints consist of the data you leave when making intentional online choices." }] },
        {
          kind: "list",
          title: "Examples of active digital footprints",
          items: [
            "Finding any information or posting on the internet creates digital footprints",
            "Filling out online forms, for example, when you sign up to receive emails or texts",
            "Agreeing to install cookies on your computers when a browser requests them",
          ],
        },
        { kind: "terms", items: [{ term: "Passive digital footprints", text: "Passive digital footprints are those you leave behind unintentionally or unknowingly." }] },
        {
          kind: "list",
          title: "Examples of passive digital footprints",
          items: [
            "Web sites that install cookies on your device without your knowledge.",
            "Apps and websites using location data to identify where you are located.",
            "Social media news and companies use your likes, shares, and comments and deliver ads based on your interests.",
            "Sometimes it may feel like your phone is listening to you because you see ads about things you talked about. This usually happens because apps use your online activity and interests to show ads.",
          ],
        },
        {
          kind: "list",
          title: "Steps to protect your digital footprints",
          items: [
            "Before posting anything online, ask yourself if it is something you want everyone to see.",
            "Avoid giving out your full name, home address, phone number, or school to strangers online.",
            "Use social media privacy settings to decide who can view your posts.",
            "Remember, anything online can be permanent. Avoid posting content that could harm your reputation.",
            "Do not share photos, messages, or information about someone else without their consent.",
            "Share helpful, kind, or creative content to make your digital footprint a good one.",
          ],
        },
      ],
    },
    {
      id: "ai4-good-behaviour",
      heading: "Importance of Good Digital Behaviour",
      page: { sh: [80, 81] },
      blocks: [
        {
          kind: "list",
          title: "Good digital behaviour helps you stay safe and be respectful online",
          items: [
            "Never share any personal information with strangers through email or any chat window without your parent’s permission.",
            "Do not share your password with anyone except your parents. When using a public computer, make sure you log out of any accounts you have accessed before leaving the terminal.",
            "Do not post photos or videos online unless you have your parents' consent.",
            "Be careful when someone offers you gifts or money online. Be especially careful if someone asks to meet you or visit your home.",
            "If you receive any messages that make you feel uncomfortable, or see harmful or illegal content, tell your parents or guardians immediately. They can also contact the police if needed.",
            "Do not illegally download music, movies, or any software.",
            "Avoid using public Wi-Fi in places like airports, coffee shops, malls, or restaurants for sensitive activities such as checking email or bank accounts, as these networks may not be secure.",
          ],
        },
      ],
    },
  ],
  pointsToRemember: [
    "Think before you click, be careful about what you share, and be courteous to other people online.",
    "Never give out any personal information to any stranger through email or any chat window without your guardians’ permission.",
    "Do not post photos or videos online unless you have your parents' consent.",
    "Install antivirus and firewall software, scan devices weekly.",
    "Ethics are the values that do not cause any harm or damage to anyone.",
    "Share helpful, kind, or creative content to make your digital footprint a good one.",
  ],
  exercise: {
    page: { sh: [81, 82], th: [106, 108] },
    mcq: [
      { id: "ai4-mcq1", prompt: "Copying text from a website without credit is:", options: [{ key: "a", text: "Hacking" }, { key: "b", text: "Plagiarism" }, { key: "c", text: "Spamming" }, { key: "d", text: "Phishing" }], answer: "b" },
      { id: "ai4-mcq2", prompt: "You get a message: “Win a free phone! Share your password.” You should:", options: [{ key: "a", text: "Send it" }, { key: "b", text: "Inform your parents" }, { key: "c", text: "Post online" }, { key: "d", text: "Give fake information" }], answer: "b" },
      { id: "ai4-mcq3", prompt: "A pop-up says: Scan viruses, win $1000! Safest action:", options: [{ key: "a", text: "Click" }, { key: "b", text: "Ignore" }, { key: "c", text: "Ask someone else" }, { key: "d", text: "Download scanner" }], answer: "b" },
      { id: "ai4-mcq4", prompt: "Checking bank on public Wi-Fi. Best action:", options: [{ key: "a", text: "Check now" }, { key: "b", text: "Use secure network" }, { key: "c", text: "Ask someone else" }, { key: "d", text: "Install random app" }], answer: "b" },
      { id: "ai4-mcq5", prompt: "Posting helpful tips online while thinking about who sees them is:", options: [{ key: "a", text: "Active footprint" }, { key: "b", text: "Passive footprint" }, { key: "c", text: "Hacker footprint" }, { key: "d", text: "Phishing footprint" }], answer: "a" },
    ],
    fillBlanks: [
      { id: "ai4-fb1", text: "Responsible use of technology means thinking before you ____ online.", answer: "click" },
      { id: "ai4-fb2", text: "Never give out your ____ information to strangers online.", answer: "personal" },
      { id: "ai4-fb3", text: "Ethics in technology help prevent ____, plagiarism, and hacking.", answer: "cybercrimes" },
      { id: "ai4-fb4", text: "A phishing attempt is an illegal attempt to obtain ____ information.", answer: "confidential" },
      { id: "ai4-fb5", text: "Active digital footprints are created when you ____ online intentionally.", answer: "post" },
    ],
    shortAnswer: [
      { id: "ai4-sa1", prompt: "Define responsible digital citizenship and give one example from daily life.", answer: ["Responsible digital citizenship means using internet safely and respectfully.", "Example: Not sharing personal information online."] },
      { id: "ai4-sa2", prompt: "Name two ways to protect your privacy online and explain one.", answer: ["Use strong passwords", "Do not share personal info"] },
      { id: "ai4-sa3", prompt: "What is the difference between active and passive digital footprints?", answer: ["Active footprint: intentional activity", "Passive footprint: unintentional activity"] },
      { id: "ai4-sa4", prompt: "Why is it important to use strong passwords and change them periodically?", answer: ["Strong passwords prevent hacking and protect accounts."] },
      { id: "ai4-sa5", prompt: "Explain software piracy and one step to prevent it.", answer: ["Software piracy is illegal copying of software.", "Prevention: download from official websites."] },
    ],
    thinkApply: {
      questions: [
        { id: "ai4-ta1", prompt: "A student posts a picture of a school project online. Which type of digital footprint is this?", answer: ["Active digital footprint"] },
        { id: "ai4-ta2", prompt: "Your friend receives an email asking for their bank details. What should they do?", answer: ["Ignore and inform parents"] },
        { id: "ai4-ta3", prompt: "A social media app recommends content based on your likes. How is your data being used?", answer: ["Data used for recommendations"] },
        { id: "ai4-ta4", prompt: "You want to download a new game safely. What steps will you follow to avoid malware?", answer: ["Download from official website, scan with antivirus"] },
        { id: "ai4-ta5", prompt: "You see someone copying your school assignment without permission. Which ethical rule is being broken?", answer: ["The ethical rule being broken is honesty or respect to other’s work."] },
      ],
    },
    table: {
      title: "Identify the Term.",
      head: ["Description", "Identify the term"],
      rows: [
        { item: "The act of sending fake emails or messages with the intention of stealing personal information.", answer: "Phishing" },
        { item: "The act of copying someone else's work, text, or project without giving due credit.", answer: "Plagiarism" },
        { item: "The record of all your online activities, including posts, likes, and websites visited.", answer: "Digital footprint" },
        { item: "These are the rules and morals that should be followed while using computers and the internet to avoid causing harm.", answer: "Computer ethics" },
        { item: "A document that explains how a website or app collects, uses, and protects users’ personal data.", answer: "Privacy policy" },
      ],
    },
  },
  handbookNotes: [
    "SH p. 76 chapter title reads “Chapters 4”; shown as “Chapter 4”.",
    "SH p. 82 D2 reads “What should the do?”; shown as “What should they do?” (TH p. 106 reads “they”).",
    "TH p. 107 fill-in-the-blank answers are capitalised (Click, Personal, …); lower-cased here to fit the sentences.",
  ],
};
