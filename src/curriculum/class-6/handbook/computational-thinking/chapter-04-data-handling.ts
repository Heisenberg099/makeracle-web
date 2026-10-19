import type { CTChapter } from "@/curriculum/class-6/handbook/types";
import { figureOptions, textOptions } from "./_option-helpers";

/** CT Chapter 4 — Data Handling and Presentation. SH pp. 20–24, TH pp. 37–45. */
export const ch04: CTChapter = {
  number: 4,
  slug: "data-handling",
  title: "Data Handling and Presentation",
  page: { sh: [20, 24], th: [37, 45] },
  questions: [
    {
      id: "ct4-q1",
      chapter: 4,
      number: 1,
      prompt: "What will come in place of \"?\"",
      figure: {
        id: "ct4-q1-fig",
        page: { sh: 20, th: 37 },
        alt: "Four panels. Each shows block towers of different heights with a letter on top, an arrow, and a figure of the same letters nested inside one another by size. Panel 1: B, C, A, D → D outermost. Panel 2: Q, P, O, R → Q outermost. Panel 3: F, C, E, D → C outermost. Panel 4: V, T, U, S → ?",
      },
      options: figureOptions("ct4-q1", { sh: 20, th: 37 }, [
        "Nested letters: V outermost, then S, then T",
        "Nested letters: U outermost, then V, then S",
        "Nested letters: U outermost, then S, then T",
        "Nested letters: U outermost, then V, then S, then T",
      ]),
      answer: ["d"],
      solution: {
        steps: [
          "Each group of blocks has letters on top. When the blocks are taken in descending order of height, the letters follow the same order of size after the arrow.",
          "On the right side of the arrow, the letter on the tallest block becomes the biggest, outermost letter, and the remaining letters follow the same order inward.",
          "In the 4th term, arranging the blocks in descending order gives U-V-S-T. So the figure must show U outermost, V inside it, then S, and finally T further inside, which matches option d.",
          "Therefore, option d is the correct answer.",
        ],
      },
      page: { sh: 20, th: 37 },
    },
    {
      id: "ct4-q2",
      chapter: 4,
      number: 2,
      prompt: "What will come in place of \"?\"",
      figure: {
        id: "ct4-q2-fig",
        page: { sh: 20, th: 37 },
        alt: "A box listing words with lines: One → 3 vertical lines; Three → 5 vertical lines; Four → 4 vertical lines; Seven → ?",
      },
      options: figureOptions("ct4-q2", { sh: 20, th: 37 }, [
        "7 vertical lines",
        "4 vertical lines",
        "5 vertical lines",
        "6 vertical lines",
      ]),
      answer: ["c"],
      solution: {
        steps: [
          "In each pair, the number of lines on the right is equal to the number of letters in the word on the left. For example, “ONE” has 3 letters, so it is represented by 3 lines.",
          "Following the same logic, “SEVEN” has 5 letters, so it should be represented by 5 lines.",
          "Option c shows 5 lines. Therefore, option c is the correct answer.",
        ],
      },
      page: { sh: 20, th: [37, 38] },
    },
    {
      id: "ct4-q3",
      chapter: 4,
      number: 3,
      prompt: "Sales of 4 milk stores are given below, in the form of a pictograph. If each symbol in the pictograph represents ‘x’ litres, where x is a whole number and the sales made by any store is less than 100 litres, what is the MAXIMUM possible quantity of milk sold (in litres) by all the stores in total?",
      figure: {
        id: "ct4-q3-fig",
        page: { sh: 20, th: 38 },
        alt: "Pictograph of milk bottles, one bottle = x litres. Store A: 3 bottles. Store B: 4 and a half bottles. Store C: 6 bottles. Store D: 3 and a half bottles.",
      },
      options: textOptions("255 L", "272 L", "306 L", "283 L"),
      answer: ["b"],
      solution: {
        steps: [
          "From the pictograph: A = 3x, B = 4.5x, C = 6x, D = 3.5x.",
          "As the sales of any store are less than 100 litres, and the highest sales is 6x (Store C), 6x must be less than 100.",
          "The highest multiple of 6 that is less than 100 is 96 (x is a whole number, so 6x is too). The maximum value of x is 96/6 = 16.",
          "Maximum total = 3x + 4.5x + 6x + 3.5x = 17x = 17 × 16 = 272 litres. Option b is the correct answer.",
        ],
      },
      page: { sh: 20, th: 38 },
    },
    {
      id: "ct4-q4",
      chapter: 4,
      number: 4,
      prompt: "The weights (in kg) of five friends, A, B, C, D, and E, are represented in the graph below (not necessarily in the same order). What is the difference between the weights of B and C?",
      details: [
        "E is lighter than C",
        "Both B and D are lighter than E, and the difference between the weights of B and E is the same as the difference between the weights of D and E",
        "The difference between the weights of A and any other friend is 10 kg or less",
      ],
      figure: {
        id: "ct4-q4-fig",
        page: { sh: 21, th: 38 },
        alt: "Bar graph of five unlabelled bars, in order: 35, 15, 25, 15, 20 kg.",
      },
      options: textOptions("10 kg", "5 kg", "20 kg", "15 kg"),
      answer: ["c"],
      solution: {
        steps: [
          "From the bar graph, the five weights are 15, 15, 20, 25, 35.",
          "B and D are lighter than E, and B–E equals D–E, so B and D have the same weight. Only 15 kg is repeated, so B and D are 15 kg.",
          "The difference between A and any other friend is 10 kg or less. A can be 20, 25 or 35 kg. 35 − 20 = 15 kg, more than 10, so A cannot be 35 or 20. A must be 25 kg.",
          "E is lighter than C, so C = 35 kg and E = 20 kg.",
          "The difference between B and C is 35 − 15 = 20 kg. Option c is the correct answer.",
        ],
      },
      page: { sh: 21, th: [38, 39] },
    },
    {
      id: "ct4-q5",
      chapter: 4,
      number: 5,
      prompt: "The bar graph shows the number of marbles collected by Monica, Rachel, Ross, Chandler, and Joey. How many marbles did Chandler collect?",
      details: [
        "Rachel has collected more marbles than Joey and less than that of Chandler",
        "Monica has collected as much as Rachel and Ross collected together",
      ],
      figure: {
        id: "ct4-q5-fig",
        page: { sh: 21, th: 39 },
        alt: "Bar graph of five unlabelled bars, in order: 18, 12, 30, 14, 20 marbles.",
      },
      options: textOptions("18", "14", "20", "Cannot be determined"),
      answer: ["c"],
      solution: {
        steps: [
          "From the graph, the counts are 18, 12, 30, 14, 20.",
          "Monica collected as much as Rachel and Ross together. The only pair adding up to another number is 18 + 12 = 30. So, Monica has 30, and Ross and Rachel have 18 and 12.",
          "Rachel has more than Joey and less than Chandler. Among the remaining numbers 14 and 20, this is only possible if Rachel = 18 (14 < 18 < 20).",
          "So, Joey = 14 and Chandler = 20. Option c is the correct answer.",
        ],
      },
      page: { sh: 21, th: [39, 40] },
    },
    {
      id: "ct4-q6",
      chapter: 4,
      number: 6,
      prompt: "The pictograph represents students’ fruit preferences. Let X denote the number of students who like Watermelon and Y denote those who like Muskmelon. Which fruit has a number of students equal to the difference between X and Y?",
      details: [
        "X is half the total number of students who like Strawberry and Banana",
        "Y equals the total number of students who like Pear and Mango",
      ],
      figure: {
        id: "ct4-q6-fig",
        page: { sh: 22, th: 40 },
        alt: "Pictograph, one face symbol = 2 students. Strawberry: 6 symbols. Watermelon: X. Muskmelon: Y. Banana: 4 symbols. Pear: 4 and a half symbols. Mango: 6 and a half symbols.",
      },
      options: textOptions("Strawberry", "Banana", "Pear", "Mango"),
      answer: ["a"],
      solution: {
        steps: [
          "Each symbol represents 2 students.",
          "Step 1: Strawberry: 6 × 2 = 12. Banana: 4 × 2 = 8. Pear: 4 × 2 + 1 = 9. Mango: 6 × 2 + 1 = 13.",
          "Step 2: X (Watermelon) = (Strawberry + Banana) ÷ 2 = (12 + 8) ÷ 2 = 10.",
          "Step 3: Y (Muskmelon) = Pear + Mango = 9 + 13 = 22.",
          "Step 4: Y − X = 22 − 10 = 12.",
          "Step 5: 12 students like Strawberry. Hence, option a is the correct answer.",
        ],
      },
      page: { sh: 22, th: [40, 41] },
    },
    {
      id: "ct4-q7",
      chapter: 4,
      number: 7,
      prompt: "A pictograph with some missing data is shown below. Extra symbols need to be added (but none can be removed or shifted) to complete the pictograph, such that the conditions below hold. What is the MINIMUM number of symbols that must be added to satisfy all the above conditions?",
      details: [
        "The number of students increases by 300 for every gap of 4 years",
        "The number of students in each year is a multiple of 100",
      ],
      figure: {
        id: "ct4-q7-fig",
        page: { sh: 22, th: 41 },
        alt: "Pictograph, one person symbol = 100 students. 1996: 4 symbols. 1998: 5 and a half. 2000: 4 and a half. 2002: 6. 2004: 7.",
      },
      options: textOptions("8.5", "8", "9", "7.5"),
      answer: ["c"],
      solution: {
        steps: [
          "Given: 1996 = 400, 1998 = 550, 2000 = 450, 2002 = 600, 2004 = 700. Each 4-year gap must be +300, every number a multiple of 100, and only addition is allowed.",
          "1996 is already a multiple of 100, so no symbol is needed.",
          "1996 to 2000 must rise by 300, so 2000 needs 700 students: add 250.",
          "1998 has 550 and must be a multiple of 100: add 50, making 600.",
          "1998 to 2002 must rise by 300, so 2002 needs 900: add 300.",
          "2000 to 2004 must rise by 300, so 2004 needs 1000: add 300.",
          "Students to add: 50 + 250 + 300 + 300 = 900. Since 1 symbol = 100 students, 9 symbols. Option c is the correct answer.",
        ],
      },
      page: { sh: 22, th: [41, 42] },
    },
    {
      id: "ct4-q8",
      chapter: 4,
      number: 8,
      prompt: "What will come in place of \"?\"",
      figure: {
        id: "ct4-q8-fig",
        page: { sh: 22, th: 42 },
        alt: "Four rows of six tiles with a ball on one tile, an arrow, and a resulting row of black tiles and tiles with bottles. Ball on tile 1 → tiles 1–3 black, bottles on 4–6. Ball on tile 4 → bottles on 1, 2, tiles 3–5 black, bottle on 6. Ball on tile 6 → bottles on 1–4, tiles 5–6 black. Ball on tile 3 → ?",
      },
      options: figureOptions("ct4-q8", { sh: 22, th: 42 }, [
        "Bottle, black, black, bottle, bottle, bottle",
        "Bottle, bottle, bottle, black, black, black",
        "Bottle, bottle, black, black, bottle, bottle",
        "Bottle, black, black, black, bottle, bottle",
      ]),
      answer: ["d"],
      solution: {
        steps: [
          "The tile with the ball and its immediate neighbours (left and right) turn black, and every other tile gets a bottle.",
          "In the question term, the ball is on the 3rd tile, so tiles 2, 3 and 4 must be black and the rest must have bottles.",
          "The diagram matching this pattern is option d.",
        ],
      },
      page: { sh: 22, th: 42 },
    },
    {
      id: "ct4-q9",
      chapter: 4,
      number: 9,
      prompt: "The bar graph shows the quiz scores of six students A, B, C, D, E, and F. The students are grouped as follows. How many students belong to exactly two of these groups?",
      details: [
        "Group 1: Students whose scores are composite numbers",
        "Group 2: Students whose score forms a perfect square when added to any other student’s score",
        "Group 3: Students whose score is greater than the average score of all six students",
      ],
      figure: {
        id: "ct4-q9-fig",
        page: { sh: 23, th: 43 },
        alt: "Bar graph of quiz scores: A 9, B 7, C 12, D 14, E 10, F 16.",
      },
      options: textOptions("2", "3", "4", "5"),
      answer: ["b"],
      solution: {
        steps: [
          "From the bar graph, the scores are A 9, B 7, C 12, D 14, E 10, F 16.",
          "Group 1 (composite numbers): 9, 10, 12, 14, 16, so A, C, D, E and F.",
          "Group 2 (forms a perfect square with another score): 9 + 7 = 16 and 9 + 16 = 25, so A, B and F.",
          "Group 3 (above the average): average = 68 ÷ 6 ≈ 11.33, so 12, 14, 16: C, D and F.",
          "Membership: A in groups 1 and 2; B in group 2 only; C in 1 and 3; D in 1 and 3; E in 1 only; F in all three.",
          "A, C and D belong to exactly two groups. Hence, 3 students. Option b is the correct answer.",
        ],
      },
      page: { sh: 23, th: 43 },
    },
    {
      id: "ct4-q10",
      chapter: 4,
      number: 10,
      prompt: "Raj saved some amount of money every month from January to June. What was the actual amount saved in June?",
      details: [
        "He saved a total of Rs. 30,000 in the first three months and Rs. 30,000 again in the last three months as well",
        "He did not save any money in February",
        "The maximum total saved in any two consecutive months is Rs. 40,000",
        "While drawing the chart, Raj arranged the savings in increasing order without matching them with the month names written below",
      ],
      figure: {
        id: "ct4-q10-fig",
        page: { sh: 23, th: 44 },
        alt: "Bar chart with bars in increasing order labelled January to June: 0, 3000, 8000, 9000, 18000, 22000.",
      },
      options: textOptions("Rs. 22000", "Rs. 9000", "Rs. 3000", "Cannot be determined"),
      answer: ["d"],
      solution: {
        steps: [
          "January + February + March = 30,000 and April + May + June = 30,000.",
          "February saved nothing, so January + March = 30,000. The only two amounts adding to 30,000 are 8000 and 22,000.",
          "The highest two-month total is 40,000. The only amounts adding to 40,000 are 18,000 and 22,000. Since 22,000 is in the first quarter, its adjacent month must have 18,000. January cannot have 22,000 because February’s savings are 0.",
          "So Raj saved 22,000 in March and 18,000 in April, and January = 8000.",
          "June can be either Rs. 3000 or Rs. 9000. Therefore, option d is correct.",
        ],
      },
      page: { sh: 23, th: 44 },
    },
  ],
  thinkingSpot: {
    id: "ct4-ts",
    chapter: 4,
    prompt: "The circles in the grid below can only contain numbers from 1 to 6. What is the difference between A and B?",
    details: [
      "Every pair of connected circles contains consecutive numbers",
      "No two circles belonging to the same row or column can have the same number",
      "A number can be placed in more than one circle",
    ],
    figure: {
      id: "ct4-ts-fig",
      page: { sh: 24, th: 45 },
      alt: "A 3 × 3 dotted grid of circles with connecting lines. Top right: 4. Middle row: empty circle — 3, and A below the 4 (4 joined to 3 and to A). Bottom row: B joined to an empty circle, which is joined to the middle-left empty circle.",
    },
    options: textOptions("1", "2", "3", "4"),
    answer: ["a"],
    solution: {
      steps: [
        "Connected circles must have consecutive numbers, and no row or column can repeat a number.",
        "A can be 3 or 5, as it is connected to 4. As 3 is already in the same row, A is 5.",
        "The empty circle connected to 3 can have 2 or 4.",
        "If it has 2, its next connected circle must have 3 or 1, but then the grid cannot be completed in any case.",
        "So it must be 4. Filling the rest gives A = 5 and B = 6, and the difference between A and B is 1. Option a is the correct answer.",
      ],
    },
    page: { sh: 24, th: 45 },
  },
};
