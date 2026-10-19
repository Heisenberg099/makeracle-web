/**
 * PRACTICE, NOT FROM HANDBOOK.
 *
 * Material for the AI labs that the CBSE handbook does not provide:
 * the Turing Test rounds (round 1 is from the renders), the "AI around us"
 * day-explorer extras, the weather diary data (renders), Arjun's practice
 * inbox items, the password lab, and the desktop organiser. Handbook
 * examples are reused wherever one fits; those are marked `fromHandbook`.
 */

export const turingRounds = [
  {
    question: "What did you have for lunch?",
    a: "Rajma chawal from home. Too spicy, honestly!",
    b: "I do not eat lunch. I can tell you about popular lunch foods in India.",
    machine: "b" as const,
  },
  {
    question: "How do you feel when it rains?",
    a: "Rain is water falling from clouds. Many people enjoy rain.",
    b: "Happy, until my cycle chain got rusty last monsoon.",
    machine: "a" as const,
  },
  {
    question: "What is your earliest memory?",
    a: "Falling off the swing at my nani’s house. I still have the scar.",
    b: "I do not have memories. I can share facts about how memory works.",
    machine: "b" as const,
  },
  {
    question: "Tell me a joke about school.",
    a: "Why did the student eat homework? Because the teacher said it was a piece of cake.",
    b: "Our maths teacher laughed so hard at my answer that I knew it was wrong.",
    machine: "a" as const,
  },
];

/** The handbook's "AI in our daily lives" examples, arranged through one day (render layout). */
export const dayOfAI: {
  id: string;
  part: "Morning" | "On the way" | "At school" | "Evening" | "Night";
  name: string;
  /** From the handbook's daily-life section (shortened). */
  how: string;
  /** Practice copy. */
  learnsFrom: string;
  /** Practice copy. */
  responsible: string;
}[] = [
  { id: "lights", part: "Morning", name: "Smart home lights", how: "Smart lights change colour and brightness based on the time of day and your preferences.", learnsFrom: "When and how you usually switch lights on", responsible: "Smart devices collect data about your home. Ask who can see it." },
  { id: "portrait", part: "Morning", name: "Phone portrait mode", how: "AI finds the person in the photo and blurs the background, even when you didn’t notice it working.", learnsFrom: "Millions of example photos", responsible: "Edited photos aren’t always real; say when you change one." },
  { id: "cars", part: "On the way", name: "Smart cars & drones", how: "Self-driving cars and drones use AI to sense the road or sky around them and decide how to move.", learnsFrom: "Hours of recorded driving and flying", responsible: "A person must stay responsible for safety." },
  { id: "scan", part: "At school", name: "Scanning apps", how: "Optical Character Recognition (OCR) pulls text out of scanned pages, even handwriting, and finds the edges of a page.", learnsFrom: "Many examples of printed and handwritten letters", responsible: "Scanning someone else’s notes? Ask first, and credit them." },
  { id: "search", part: "At school", name: "Search engines", how: "AI reads your search words and finds the most relevant results.", learnsFrom: "Billions of searches and which results people found useful", responsible: "The top result isn’t always true. Check more than one source." },
  { id: "health", part: "Evening", name: "Healthcare", how: "AI helps doctors find and diagnose diseases and plan treatment.", learnsFrom: "Many medical images and patient records", responsible: "AI helps doctors; it doesn’t replace them." },
  { id: "shopping", part: "Evening", name: "Online shopping", how: "AI suggests products you may like and answers questions through chatbots.", learnsFrom: "What you and other people looked at and bought", responsible: "Suggestions are made to sell. Decide what you really need." },
  { id: "games", part: "Evening", name: "Video games", how: "In games like chess, the computer studies moves and chooses the best ones.", learnsFrom: "Lots of games played, won and lost", responsible: "Take breaks; games are designed to keep you playing." },
  { id: "bank", part: "Night", name: "Bank alerts", how: "AI keeps an eye on an account and emails an alert when a payment looks unusual.", learnsFrom: "Your normal spending pattern", responsible: "Never share an OTP, even with someone who says they are the bank." },
  { id: "security", part: "Night", name: "Security cameras", how: "AI spots unusual activity, recognises faces and objects like unattended bags, and sends alerts.", learnsFrom: "Video of normal and unusual scenes", responsible: "Cameras record people. Recordings must be kept safely." },
];

/** Part A sorter: the handbook's exercise E items plus three more handbook examples. */
export const machinesToSort: { id: string; name: string; detail: string; tableRow?: number; answer?: "AI" | "Automation" }[] = [
  { id: "traffic", name: "Traffic light changing at fixed intervals", detail: "Changes every 60 seconds, rush hour or not.", tableRow: 0 },
  { id: "face", name: "Face recognition system", detail: "Unlocks for you, even with new glasses.", tableRow: 1 },
  { id: "washer", name: "Washing machine with preset timer", detail: "Runs the same 45-minute cycle every time.", tableRow: 2 },
  { id: "voice", name: "Voice assistant answering questions", detail: "Understands questions it has never heard before.", tableRow: 3 },
  // fromHandbook: SH p. 53 ("A microwave oven heats food for a set time") and SH pp. 51–52 examples
  { id: "microwave", name: "Microwave heating for a set time", detail: "Heats for exactly 2 minutes.", answer: "Automation" },
  { id: "bank", name: "Bank alert on an unusual payment", detail: "Learns your normal spending and spots odd ones.", answer: "AI" },
  { id: "portrait", name: "Phone camera portrait mode", detail: "Finds the person and blurs everything behind.", answer: "AI" },
];

/** Weather diary (renders). */
export const weatherDiary = [
  { day: "Mon", sky: "sunny", am: 22, pm: 30 },
  { day: "Tue", sky: "sunny", am: 21, pm: 29 },
  { day: "Wed", sky: "cloudy", am: 23, pm: 31 },
  { day: "Thu", sky: "cloudy", am: 20, pm: 27 },
  { day: "Fri", sky: "clouds + rain", am: 22, pm: 30 },
];

export const weatherSteps = [
  {
    id: "observe",
    label: "1 · Observe (what did you see?)",
    prompt: "Pick the observation the data really shows.",
    options: [
      { text: "Afternoons were warmer than mornings every day", ok: true, why: "Yes. Every red bar is taller than the grey bar next to it." },
      { text: "Wednesday was the coldest day", ok: false, why: "Look again: which day has the lowest bars?" },
      { text: "It rained every day", ok: false, why: "The diary says rain only on one day." },
    ],
  },
  {
    id: "conclude",
    label: "2 · Conclude (what does it mean?)",
    prompt: "Pick a fair conclusion. Remember the limits: only 5 days of data.",
    options: [
      { text: "Afternoons are usually warmer than mornings", ok: true, why: "Fair. “Usually” respects the limits of 5 days of data." },
      { text: "Afternoons will always be warmer, everywhere", ok: false, why: "Too big a claim from 5 days in one place. Remember the limits." },
      { text: "Clouds make mornings hot", ok: false, why: "Cloudy mornings were not hotter than sunny ones. Check the bars." },
    ],
  },
  {
    id: "decide",
    label: "3 · Decide (what will you do?)",
    prompt: "Tomorrow’s morning looks cloudy, like Friday. What will you do?",
    options: [
      { text: "Carry an umbrella just in case", ok: true, why: "A sensible decision from what you observed on Friday." },
      { text: "Ignore the sky completely", ok: false, why: "That ignores what the diary showed." },
      { text: "Stay home from school", ok: false, why: "That’s much more than the data asks for." },
    ],
  },
];

/** Arjun's inbox. The first two are from the handbook case study (SH p. 77); the others are practice. */
export const inbox: { id: string; from: string; sender: string; subject: string; body: string; answer: "safe" | "phishing" | "spam"; why: string; fromHandbook?: boolean }[] = [
  { id: "game", from: "Game Zone Rewards", sender: "rewards@gamezone-prizes.win", subject: "CONGRATULATIONS ARJUN! You won a free game", body: "You have won a free game. Click here to claim it now.", answer: "phishing", why: "A prize you never entered for, an odd address and “click now” are phishing signs.", fromHandbook: true },
  { id: "virus", from: "Pop-up", sender: "pop-up advertisement", subject: "WARNING! Your computer has a virus", body: "Click here to scan your computer for free.", answer: "spam", why: "The handbook says: do not click on any ads that claim to scan viruses on your computer.", fromHandbook: true },
  { id: "teacher", from: "Ms. Kapoor · Class teacher", sender: "kapoor@school.example", subject: "Save Water project · due Friday", body: "Please write the project in your own words and list where you found your facts.", answer: "safe", why: "It is from your teacher’s school address, asks nothing secret, and the advice matches the handbook on plagiarism." },
  { id: "bank", from: "Bank Helpdesk", sender: "support@bank-helpdesk-verify.net", subject: "URGENT: share your OTP to avoid account block", body: "Your account will be blocked today. Reply with the OTP we just sent.", answer: "phishing", why: "Banks never ask for an OTP. Urgent requests for personal or bank information are phishing." },
];

export const inboxChoices = [
  { id: "safe", label: "Safe to open" },
  { id: "phishing", label: "Phishing · report it" },
  { id: "spam", label: "Spam · delete" },
] as const;

/** Password checks, from the handbook's "steps to prevent hacking" (SH p. 78); length 10 is the render's. */
export const passwordChecks: { id: string; label: string; test: (p: string) => boolean }[] = [
  { id: "len", label: "At least 10 characters", test: (p) => p.length >= 10 },
  { id: "lower", label: "Small letters", test: (p) => /[a-z]/.test(p) },
  { id: "upper", label: "Capital letters", test: (p) => /[A-Z]/.test(p) },
  { id: "num", label: "Numbers", test: (p) => /\d/.test(p) },
  { id: "special", label: "Special characters like # or @", test: (p) => /[^A-Za-z0-9]/.test(p) },
];

/** Active or passive? Items from the handbook's footprint examples (SH pp. 79–80). */
export const footprintItems: { text: string; answer: "Active" | "Passive" }[] = [
  { text: "Posting a photo of your school project online", answer: "Active" },
  { text: "A website installs cookies without telling you", answer: "Passive" },
  { text: "Filling an online form to get a newsletter", answer: "Active" },
  { text: "An app using your location to show nearby ads", answer: "Passive" },
];

/** Desktop organiser (practice): the handbook's "50 images on the desktop" example, shrunk to 8 files. */
export const desktopFiles = [
  { name: "IMG_2041.jpg", folder: "Science project" },
  { name: "volcano-diagram.png", folder: "Science project" },
  { name: "fractions-worksheet.pdf", folder: "Maths" },
  { name: "IMG_2042.jpg", folder: "Family photos" },
  { name: "diwali-2025.jpg", folder: "Family photos" },
  { name: "plant-growth-week3.jpg", folder: "Science project" },
  { name: "times-tables.png", folder: "Maths" },
  { name: "birthday-cake.jpg", folder: "Family photos" },
];
export const desktopFolders = ["Science project", "Maths", "Family photos"];

/** Data around you (practice): what data each everyday activity in the handbook's list collects. */
export const dataAround = [
  { activity: "Recording attendance", data: "Names and present or absent, every day" },
  { activity: "Sending messages", data: "Text, time sent, who it went to" },
  { activity: "Checking weather", data: "Temperatures and rain from satellites and weather stations" },
  { activity: "Watching videos online", data: "What you watched and for how long" },
  { activity: "Using a fitness app", data: "Steps counted each day" },
];
