import type { CTChapter } from "@/curriculum/class-6/handbook/types";
import { figureOptions, textOptions } from "./_option-helpers";

/** CT Chapter 5 — Prime Time. SH pp. 25–29, TH pp. 46–56. */
export const ch05: CTChapter = {
  number: 5,
  slug: "prime-time",
  title: "Prime Time",
  page: { sh: [25, 29], th: [46, 56] },
  activity: {
    title: "Activity Time",
    subtitle: "Factors, Multiples, HCF and LCM",
    intro:
      "Imagine using numbers and their relationships to create beautiful artworks. In this activity, we will take a circle with 12 equally spaced points. By connecting these points using a fixed rule, we will create beautiful shapes such as regular polygons and stars.",
    helpsWith: ["Factors and multiples of a number"],
    plan: [
      {
        activity: "Launch",
        minutes: 5,
        description: "Teacher demonstrates the activity.",
        link: "https://youtu.be/L_PqVp8Ro2g?si=XRF5cFMvsXzSMYIA&t=382",
      },
      {
        activity: "Trial by Students",
        minutes: 15,
        description: "Students try out the activity with each other.",
        link: "https://docs.google.com/document/d/1TGjoEGiumTgstdyNznQy8pUJ10izCgaAJg1hGtMwTRY/edit?usp=sharing",
      },
      { activity: "Discussions and Explorations", minutes: 15, description: "Attempting the worksheets and the discussion based on the activity." },
    ],
    components: [
      {
        strand: "Algorithmic Thinking",
        text: "Students follow a rule: starting from a number on a circle with 12 equally spaced points, add a step number (say n) and keep doing it until you reach back to the starting point. This becomes the algorithm for every circle.",
      },
      {
        strand: "Pattern Recognition",
        text: "Once different shapes have been formed for different step numbers, students recognise the shapes and look for a pattern between the shape formed, the step numbers and the points on the circle.",
      },
      {
        strand: "Generalisation",
        text: "After recognising the pattern, students generalise the shapes formed for any circle with m equidistant points and n step numbers.",
      },
    ],
    rule: [
      "Starting from 2, add 2 to it and connect it with the next number, i.e. 4.",
      "Add 2 to 4, then connect it to the next.",
      "Keep adding 2 until you reach the starting point.",
    ],
    steps: [
      {
        id: "ct5-act-1",
        prompt: "How many steps did it take to reach the starting point? What shape do you get?",
        figure: {
          id: "ct5-act-1-fig",
          page: { sh: 25, th: 47 },
          alt: "Three circles with points 1–12. The first joins 2 to 4, the second continues to 6, the third completes a regular hexagon through 2, 4, 6, 8, 10, 12.",
        },
        options: textOptions("Three", "Four", "Five", "Six"),
        answer: ["d"],
        strands: ["Algorithmic Thinking"],
        teacherNote: [
          "The 6 steps formed equal chords on the circle, giving a regular hexagon. Adding 2 to the last point again just retraces the steps already taken.",
        ],
      },
      {
        id: "ct5-act-2",
        prompt: "Now starting from 3, add 3 to it and join to the next point. Keep adding 3 until you reach the starting point. How many steps did you take to reach the starting point?",
        options: textOptions("Two", "Three", "Four", "Five"),
        answer: ["c"],
        teacherNote: [
          "Starting from 3 and adding 3 at every step: 3 → 6 → 9 → 12 → 3. After 4 steps, we return to 3.",
          "Shape: since the 4 steps formed equal chords on the circle, we get a square.",
          "Note: if we add 3 to 3 again, we will just retrace the steps already made.",
        ],
      },
      {
        id: "ct5-act-3",
        prompt: "Repeat the same process by (a) starting from 4 and adding 4, (b) starting from 5 and adding 5, (c) starting from 6 and adding 6, until you reach the starting point. What shapes do you get? Record your answers in the table below.",
        table: {
          head: ["Number added", "No. of steps till the starting point", "Shape formed"],
          rows: [
            ["2", "6", "Hexagon"],
            ["3", "4", "Square"],
            ["4", "", ""],
            ["5", "", ""],
            ["6", "", ""],
          ],
        },
        teacherNote: [
          "When the starting point is 5, adding 5 gives 10. Adding 5 to 10 gives 15, which is not on the circle, but since the numbers lie on a circle we keep going around: 15 goes to 3 (12 + 3 = 15). Adding 5 to 3 gives 8. The sequence is 5 → 10 → 3 → 8 → 1 → 6 → 11 → 4 → 9 → 2 → 7 → 12 → 5. After 12 steps, we reach 5 again.",
        ],
      },
      {
        id: "ct5-act-4",
        prompt: "Do you notice any patterns in the numbers we are adding, the number of points on the circle, and the shape being formed in the circle? Why did you get polygons on adding 2, 3 and 4, while a star on adding 5? Is there any relationship between these numbers and 12, the number of points on the circle?",
        strands: ["Algorithmic Thinking", "Pattern Recognition"],
        teacherNote: [
          "The numbers 2, 3 and 4 are factors of 12, while 5 is not. 2, 3 and 4 take 6, 4 and 3 steps respectively to reach the starting point.",
          "Starting from 5, we keep going until we reach a number that is a common multiple of both 5 and 12. So 5 takes 12 steps, adding to 60, a common multiple of 5 and 12, and in the process covers all points, giving a 12-pointed star.",
        ],
      },
    ],
    explorations: [
      {
        id: "ct5-exp-1",
        prompt: "What shapes will you get when you add 7, 8, 9, 10 and 11 until you reach the starting point? Try to find out the relationship between the numbers and the number of points on a circle.",
        strands: ["Algorithmic Thinking", "Pattern Recognition", "Generalisation"],
        teacherNote: [
          "7, 8, 9, 10 and 11 will have the same shape as 5, 4, 3, 2 and 1 respectively. On the circle, these numbers are reflections of each other.",
          "Marking the lines in order in different colours for 2 and then for 10 shows the hexagons obtained are reflections of each other: from 2 the first string goes to 4, then 6; from 10, adding 10 gives 20, which goes to 8 (12 + 8), then 18 goes to 6.",
          "Generalisation: if there are m points on a circle and we know the shape formed by step number n, then m − n will also give the same shape.",
        ],
      },
      {
        id: "ct5-exp-2",
        prompt: "Two circles, one with 16 points and the other with 20 points, are given. Which of the two will give a square when added to which number?",
        figure: {
          id: "ct5-exp-2-fig",
          page: { sh: 27, th: 50 },
          alt: "Two circles: one with 16 numbered points, one with 20 numbered points.",
        },
        options: textOptions(
          "The 16-point circle, on adding 4",
          "The 16-point circle, on adding 12",
          "The 20-point circle, on adding 5",
          "The 20-point circle, on adding 15",
        ),
        answer: ["a", "b", "c", "d"],
        strands: ["Pattern Recognition", "Decomposition"],
        teacherNote: [
          "All 4 options are correct.",
          "For the 16-point circle, a square needs 4 steps: 16 ÷ 4 = 4, so adding 4 gives a square. Also, 16 − 4 = 12 gives a square. The 20-point circle works the same way.",
        ],
      },
    ],
    teacherExtension:
      "For further exploration on the teachers’ part: try the same exercise with a 20-point circle and different step numbers. See what happens when step numbers are not proper factors but have a common factor with the number of points on the circle.",
    page: { sh: [25, 27], th: [46, 51] },
  },
  questions: [
    {
      id: "ct5-q1",
      chapter: 5,
      number: 1,
      prompt: "Find the ODD one out.",
      options: figureOptions("ct5-q1", { sh: 28, th: 52 }, [
        "White blocks 2 and 5, black block 10",
        "White blocks 3 and 5, black block 8",
        "White blocks 7 and 4, black block 28",
        "White blocks 8 and 3, black block 24",
      ]),
      answer: ["b"],
      solution: {
        steps: [
          "In each term, the numbers in white blocks are multiplied to give their product, which is written in the black shaded block.",
          "The only option which does not follow this logic is option b. Thus, option b is the correct answer.",
        ],
      },
      page: { sh: 28, th: 52 },
    },
    {
      id: "ct5-q2",
      chapter: 5,
      number: 2,
      prompt: "If \"X\" is a number formed by the addition of two or more DIFFERENT single-digit prime numbers, which of the following options CANNOT be a value of the number \"X\"?",
      options: textOptions("8", "10", "11", "15"),
      answer: ["c"],
      solution: {
        steps: [
          "The single-digit prime numbers are 2, 3, 5 and 7. X must be formed by adding two or more different primes from this list.",
          "Option a: 8 = 3 + 5. Option b: 10 = 3 + 7.",
          "Option c: 11 cannot be the sum of any two or more single-digit primes: 3 + 7 gives 10 (1 less) and 5 + 7 gives 12 (1 more).",
          "Option d: 15 = 3 + 5 + 7. Hence, the correct answer is option c.",
        ],
      },
      page: { sh: 28, th: 52 },
    },
    {
      id: "ct5-q3",
      chapter: 5,
      number: 3,
      prompt: "The sum of three consecutive natural numbers is equal to Y. Which of the following numbers will Y always be divisible by?",
      options: textOptions("3", "2", "4", "Cannot be determined"),
      answer: ["a"],
      solution: {
        steps: [
          "The result must hold true for any set of three consecutive natural numbers. Check examples: 1 + 2 + 3 = 6 (divisible by 3 and 2, not 4); 2 + 3 + 4 = 9 (by 3, not 2 or 4); 6 + 7 + 8 = 21 (by 3, not 2 or 4).",
          "Divisibility by 2 and 4 is not consistent, but divisibility by 3 appears every time.",
          "Among any three consecutive numbers, one is always a multiple of 3. The other two are 1 more and 1 less than it, and together they also add up to a multiple of 3.",
          "Therefore, the sum is always divisible by 3. Option a is the correct answer.",
        ],
      },
      page: { sh: 28, th: 52 },
    },
    {
      id: "ct5-q4",
      chapter: 5,
      number: 4,
      prompt: "A two-digit number is 1 more than a multiple of 3. How many different possible values can it have?",
      options: textOptions("29", "30", "31", "32"),
      answer: ["b"],
      solution: {
        steps: [
          "A two-digit number that is one more than a multiple of 3 can be shown as 3x + 1.",
          "The largest two-digit multiple of 3 is 99; adding 1 gives 100, which is 3-digit. So the maximum value of 3x + 1 is 97: 3x = 96, x = 32.",
          "Least value: x = 1 gives 4 and x = 2 gives 7, both single digits, so x cannot be 1 or 2.",
          "x can be anywhere from 3 to 32. 1 to 32 gives 32 values; excluding two values gives 32 − 2 = 30.",
          "Hence, the correct answer is option b.",
        ],
      },
      page: { sh: 28, th: [52, 53] },
    },
    {
      id: "ct5-q5",
      chapter: 5,
      number: 5,
      prompt: "The product of a number 'PQ' and 7 is 'RSQ', where P, Q, R, and S are distinct digits. Which of the following CANNOT be the possible value of 'RSQ'?",
      details: ["PQ × 7 = RSQ"],
      options: textOptions("210", "315", "420", "105"),
      answer: ["d"],
      solution: {
        steps: [
          "When you multiply the number by 7, the last digit of the product is the same as the last digit of the original number (both end with Q).",
          "210 ends with 0, so Q = 0; the original number is 30. Digits 3, 0, 2, 1 are all different. Possible.",
          "315 ends with 5, so Q = 5; the original number is 45. Digits 4, 5, 3, 1 are all different. Possible.",
          "420 ends with 0, so Q = 0; the original number is 60. Digits 6, 0, 4, 2 are all different. Possible.",
          "105 ends with 5, so Q = 5; the original number is 15. The original tens digit (P) and the product’s hundreds digit (R) would both be 1, which breaks the condition.",
          "105 cannot be the product. Hence, the correct answer is option d.",
        ],
      },
      page: { sh: 28, th: 53 },
    },
    {
      id: "ct5-q6",
      chapter: 5,
      number: 6,
      prompt: "Nausheen thinks of 5 consecutive numbers. 3 of these numbers are prime and 3 of these are even numbers. What is the sum of these numbers?",
      options: textOptions("10", "15", "20", "Cannot be determined"),
      answer: ["c"],
      solution: {
        steps: [
          "Three prime numbers and three even numbers make 6 numbers, but Nausheen thinks of only 5. So one number must be both even and prime.",
          "The only even prime number is 2, so the sequence must include 2.",
          "In any 5 consecutive numbers, there can be 3 even numbers only if the sequence starts with an even number. So the set starts with 2.",
          "The numbers are 2, 3, 4, 5, 6. Even: 2, 4, 6. Prime: 2, 3, 5.",
          "Sum = 2 + 3 + 4 + 5 + 6 = 20. Hence, the correct answer is option c.",
        ],
      },
      page: { sh: 28, th: [53, 54] },
    },
    {
      id: "ct5-q7",
      chapter: 5,
      number: 7,
      prompt: "In a certain language, if 3 is coded as ‘free’, 5 is coded as ‘dive’, 10 is coded as ‘hen’, then what could be the possible code for the PRIME FACTOR of 169, in the same language?",
      options: textOptions("heighten", "throwing", "routine", "titan"),
      answer: ["c"],
      solution: {
        steps: [
          "Observe the codes: 3 → free, 5 → dive, 10 → hen.",
          "Each code word rhymes with the number name: three – free, five – dive, ten – hen. So the code is a word that rhymes with the number.",
          "169 = 13 × 13, so the prime factor is 13, named thirteen.",
          "Among the options, the word that rhymes with thirteen is routine. Hence, the correct answer is option c.",
        ],
      },
      page: { sh: 28, th: 54 },
    },
    {
      id: "ct5-q8",
      chapter: 5,
      number: 8,
      prompt: "If \"X\" is a number formed by the multiplication of 2 single-digit prime numbers, which of the following options is ALWAYS TRUE about the number \"X\"?",
      options: textOptions(
        "The number \"X\" cannot be even",
        "The number \"X\" is a 2-digit number",
        "The number \"X\" is a multiple of 4",
        "The number \"X\" is less than 50",
      ),
      answer: ["d"],
      solution: {
        steps: [
          "Option a: 2 × 3 = 6 is even, so a is not always true.",
          "Option b: 2 × 3 = 6 is a single-digit number, so b is not always true.",
          "Option c: 3 × 5 = 15 is not a multiple of 4, so c is not always true.",
          "Option d: multiplying the two largest single-digit primes, 5 and 7, gives 35, which is less than 50. So d is always true.",
          "Thus, the correct answer is option d.",
        ],
      },
      page: { sh: 28, th: 54 },
    },
    {
      id: "ct5-q9",
      chapter: 5,
      number: 9,
      prompt: "In the letter grid below, the spelling of which prime number is immediately followed by the spelling of its succeeding number in the number series?",
      details: ["ONEFIIVESIXTWOTHREENINETENELEVNTWELVEONEFOURSIXSEVEN"],
      options: textOptions("3", "5", "11", "2"),
      answer: ["d"],
      solution: {
        steps: [
          "Step 1: Identify the prime numbers in the grid: TWO, THREE and SEVEN.",
          "Step 2: Among them, find the number that is immediately followed by its succeeding number.",
          "Only TWO is immediately followed by the spelling of its succeeding number (THREE).",
          "Hence, option d is the correct answer.",
        ],
      },
      page: { sh: 28, th: 55 },
    },
    {
      id: "ct5-q10",
      chapter: 5,
      number: 10,
      prompt: "Alex, Jim, and Sam were born on prime-numbered dates in the same month and year. Sam was born on a Friday, and the month started on a Sunday. On which day of the week was Alex born?",
      details: ["The difference between the dates of Alex’s and Jim’s birthdays is 20", "Jim was born 10 days after Sam"],
      options: textOptions("Thursday", "Wednesday", "Tuesday", "Saturday"),
      answer: ["c"],
      solution: {
        steps: [
          "The prime-numbered dates in a month are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 (and 31, if applicable).",
          "The month started on a Sunday, so the first Friday is 5 days later: the 6th. Fridays are 6, 13, 20, 27. Only 13 is prime, so Sam was born on the 13th.",
          "Jim was born 10 days after Sam: 13 + 10 = 23rd.",
          "Alex’s and Jim’s dates differ by 20: 23 − 20 = 3rd. All these dates are prime.",
          "Since the month started on Sunday, the 2nd is a Monday and the 3rd a Tuesday. Alex was born on a Tuesday. Option c is the correct answer.",
        ],
      },
      page: { sh: 29, th: 55 },
    },
  ],
  thinkingSpot: {
    id: "ct5-ts",
    chapter: 5,
    prompt: "The image given below contains ONLY white and grey squares. You can change the colour of a square by clicking on it. What is the minimum number of squares that must be clicked to make the number of grey and white squares equal?",
    details: [
      "If you click a white square, the colour of that square and all squares that share a common corner (but do not share a common side) with it will change",
      "If you click a grey square, its colour and the colour of the squares that share a common side with it will change",
    ],
    figure: {
      id: "ct5-ts-fig",
      page: { sh: 29, th: 56 },
      alt: "A 4 × 4 grid with 5 grey squares: row 1 column 4; row 2 column 1; row 3 columns 3 and 4; row 4 column 2. The other 11 squares are white.",
    },
    options: textOptions("1", "2", "3", "4"),
    answer: ["a"],
    solution: {
      steps: [
        "The grid has 16 squares: 11 white and 5 grey. To balance, we need 8 of each, so we must increase grey squares by 3.",
        "Clicking a white square changes it and the squares sharing only a corner with it.",
        "To change exactly 3 white squares to grey, find a white square that shares a corner with two other white squares and one grey square. Such a square exists (row 2, column 2).",
        "Clicking that one white square gives 8 grey and 8 white squares. Hence, the correct answer is option a.",
      ],
    },
    page: { sh: 29, th: 56 },
  },
};
